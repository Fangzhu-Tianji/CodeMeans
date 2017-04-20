define("p/register.js", ["layer", "lib/jquery.validate.min.js", "lib/jquery.autocomplete.js", "common/tools.js"], function (require, exports, modules) {
    require("layer");
    require("lib/jquery.validate.min.js");
    require("lib/jquery.autocomplete.js");
    require('common/tools.js');
    jQuery.validator.addMethod("username", function(value, element) {
      return this.optional(element) || T.RE.mobile_email.test(value);
    }, "请输入邮箱或手机号");
    var theAccount=document.getElementById("UserName"),SMSCodeBox=$("#mobileCodeDiv");
/* 
	* delayTime 
	* delayFlag 标记发送手机验证时间处在120s内,120s内只能发送一次
	* phoneVal 记录输入的手机号码
	* isPhoneReg 是否为手机号码注册
	* isSubmit 是否为提交状态
	* regNameok 该用户名是否可注册
	* agreeProtocol 是否同意注册协议
	* passed 是否通过注册条件
	* oldMobile 记录上一次输入的手机号码
*/
	var delayTime = 120,delayFlag = true,phoneVal="",isPhoneReg=false,isSubmit=false,regNameok=false,agreeProtocol=true,passed=false,oldMobile,
	validateRules = {    
		isNull: function(str) {
			return (str == "" || typeof str != "string");
		},
		isMobile: function(str) {
			return new RegExp("^0?(13|15|18|14|17)[0-9]{9}$").test(str);
		},
		isCode: function(str) {
			return new RegExp("^[A-Za-z0-9]{4}").test(str);
		}
    };
    $("#UserName").on("blur",function(){
        var mobile = this.value;
        if (mobile.match(T.RE.mobile_email) != null) {
            if(mobile.match(T.RE.mobile)){
				if(oldMobile!=mobile){
					$("#sendMobileCode").removeClass("disabled");
				}
				SMSCodeBox.show(),isPhoneReg=true,oldMobile=mobile,phoneVal=mobile;
			}else{
				SMSCodeBox.hide(),isPhoneReg=false;
			}
        }else{
            SMSCodeBox.hide(),isPhoneReg=false;
        }
    });
    var phoneBackBool = true;
    T.Mailfix({inputs: [theAccount]});
    T.FORM().placeholder(theAccount, "请填写手机或邮箱");
   //发送手机验证码
    $('#sendMobileCode').on('click', function () {
		sendMobileCode();
    });
	//点击图片更新验证码
   $("#validateimg").bind("click",function(e){
	   e.preventDefault();
       updateVCode();
   });
    // 用户注册
    $('#regForm').validate({
        errorPlacement: function (error, element) {
            // 报错的位置
            $(element).closest("li").find(".td-tips").html(error);
        },
        rules: {
            UserName: {
                required: true,
                username: true,
				remote:{
					url:T.site.api+'UserLogin/CheckUserName',
					type:"GET",
					xhrFields: { withCredentials: true },
					callback:function(response){
						regNameok=response.data;						
						if(!regNameok){
							$("#sendMobileCode").addClass("disabled");
						}
					}
				}
            },
			MCode:{
				required: function(){return isPhoneReg;},
				mobile:true
			},
            Password: {
                required: true,
                minlength: 6
            },
            rePassword: {
                required: true,
                equalTo: "#Password"
            },
			Code:{
				required: true,
			    rangelength:[4,4]				
			},
			agree:{required: true}
        },
        messages: {
            UserName: {
                required: "请输入手机或者邮箱",
                username: "您输入的手机或者邮箱格式不正确"
               // ,remote: "此手机号码已存在!"
            },
            Password: {
                required: "请输入密码",
                minlength: "请输入位，可含字母、数字、符号"
            },
            rePassword: {
                required: "请再次输入密码",
                equalTo: "两次密码输入不一致"
            },
			Code:{
				required:"请输入验证码",
				rangelength:"验证码格式错误"
			},
			MCode:{
				required:"请输入短信验证码",
				remote:"短信验证码错误"
			},
			agree:{required: "你必须同意保税网使用协议"}
        },
        submitHandler: function (form) {
            var sparam=$(form).serializeObject();
            T.ajax("UserLogin/Regist",{
                type:"POST",
                data:sparam,
                success:function(data){
                   layer.msg("注册成功",{icon:1,shade: [0.8, '#393D49']});
					 T.ajax("userlogin/login",{
						type:"POST",
						data:{uName:sparam.UserName,uPassword:sparam.Password},
						success: function (data) {
								T.cookie("__sid", data.Sid);
								T.cookie("__uname", data.UserName);
								location.href = T.site.web;							
						}
					 });
                }
            });
        }
    });
/*	
layer.open({
    type: 2,
	title:"注册协议",
	area:["600px","480px"],
    content: T.site.base+"about/protocol.html",
    success: function(layero, index){}
});
*/
    function countDown() {
        delayTime--;
        $("#sendMobileCode").attr("disabled", "disabled").addClass("disabled");
        $("#dyMobileButton").html(delayTime + '秒后重新获取');
        if (delayTime == 1) {
            delayTime = 120;
            $("#dyMobileButton").html("获取短信验证码");
            $("#sendMobileCode").removeClass().addClass("code").removeAttr("disabled");
            delayFlag = true;
        } else {
            delayFlag = false;
            setTimeout(countDown, 1000);
        }
    }
	//更新图片验证码
    function updateVCode(){
        $("#validateimg").attr("src",T.site.api+"UserLogin/GetCheckCode?r="+Math.random());
    }
	//验证码单独流程检查
	function authCodeBlur(callback){
		var authCode = $("#CheckCode").val(),$vError  = $('#Code-error');
        if ($vError.length <= 0) {
            var labelEle = $('<label id="UserName-error" class="error" for="UserName"></label>').hide();
            $vError=labelEle.appendTo($("#vcodeError"));
			labelEle=null;
        }
		if (validateRules.isNull(authCode)) {
			$vError.html("请输入验证码").show();
			return;
		}
		if (!validateRules.isCode(authCode)) {
			$vError.html("验证码不正确或验证码已过期").show();
			return;
		}
		callback({CodeKey:phoneVal,CodeValue:authCode,Type:0});
	}

	// 主流程发送手机验证码
	function sendMobileCode(){
		if ($("#sendMobileCode").attr("disabled") || delayFlag == false) {
			return;
		}
		var $uError=$('#UserName-error');
        if ($uError.length <= 0) {
            var labelEle = $('<label id="UserName-error" class="error" for="UserName"></label>').hide();
            $uError=labelEle.appendTo($("#phoneerror"));
			labelEle=null;
        }
		if(!regNameok){
			$uError.html("用户名已经存在").show();
			return;
		}
		if (validateRules.isNull(phoneVal)) {
			$uError.html("请输入手机号码").show();
			return;
		}
		if (!validateRules.isMobile(phoneVal)) {
			$uError.html("手机号码格式有误，请输入正确的手机号").show();			
			return;
		}
		authCodeBlur(function(validResult){
			$("#sendMobileCode").attr("disabled", "disabled");
			T.ajax("UserLogin/CreateSms",{
				type:"POST",
				data:validResult,
				success: function (data) {
					layer.msg("验证码发送成功",{icon:1});
					$("#dyMobileButton").text("119秒后重新获取");
					setTimeout(countDown, 1000);
				},
				error:function(e){
				     $("#sendMobileCode").removeAttr("disabled");
					 updateVCode();
				}
			}); 
		});
	}
});
