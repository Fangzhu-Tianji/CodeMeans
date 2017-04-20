define(function(require, exports, modules){
    window.$ = require("jquery");
    require('plugins/jquery.validate.min');
    require('public/tools-dev');
    // 事件监听 + 初始化接口
    var init = function(){
        var adjustHeight = function(){
            var marginTop = $(window).height() - 750,
                marginTop = marginTop/2  > 40 ? marginTop/2 : 40;
            $('.main').css({
                'marginTop':marginTop
            });
            if($(window).height() > 700){
                $('#footer').css({
                    position:'fixed',
                    bottom: '0px'
                })
            }else{
                $('#footer').css({
                    position:'relative',
                    marginTop:'10px'
                })
            }
        }
        $(window).resize(function(){
            adjustHeight();
        });
        adjustHeight();
    }   
	$("#validateimg").bind("click",function(){
		this.src=T.site.api+"UserLogin/GetCheckCode?r="+Math.random();
	});
    // 登录验证
    $('.loginbox form').validate({
        errorPlacement: function(error, element) {
            // 报错的位置
            $(element).closest("li").find(".td-tips").html(error);
        },
        rules: {
            userno:{
                required:true,
                pattern: /^1[3|4|5|6|7|8|9]\d{9}$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ //"1[3|4|5|6|7|8|9]\\d{9}"
            },
            CheckCode:{
                required:true,
				pattern:/^[A-Za-z0-9]{4}/,
				remote:{
					url:T.site.api+'UserLogin/CheckCheckCode',
					type:"POST",
					xhrFields: { withCredentials: true }
				}
            },
            phonecode:{
                required:true
            },
            newpass:{
                required:true,
                minlength: 6
            },
            renewpass: {
                required: true,
                equalTo: $(this).find('input[name=newpass]')
            }
        },
        messages: {
            userno:{
                required:"输入您注册保税网的邮箱或手机号",
                pattern:"输入您注册保税网的邮箱或手机号"
            },
            CheckCode:{
                required:"请输入验证码",
				pattern:"验证码格式错误"
            },
            phonecode:{
                required:"请输入短信验证码"
            },
            newpass:{
                required:"请输入密码",
                minlength: "密码太短"
            },
            renewpass: {
                required: "请再次输入密码",
                equalTo: "前后密码不一致"
            }
        },
        submitHandler: function(form) {
            var sparam = $(form).serializeObject(),jumpurl=T.url.getQueryValue("jump") || T.site.web;
             T.ajax("userlogin/login",{
                type:"POST",
                data:sparam,
                success: function (data) {
                    layer.msg("登录成功",{icon:1});					
                }
             });
        }
    });
    
    var countdown = function(){
        var num = parseInt($('.countdown').text());
        $('.countdown').text(--num);
        if(num == 0){
            clearInterval(timer);
            window.location.href = "login.php";
        }
    }
    //var timer = setInterval(countdown,1000);
    
    init();
    
})
