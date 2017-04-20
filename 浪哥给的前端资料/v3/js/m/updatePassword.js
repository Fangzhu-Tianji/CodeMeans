define("m/updatePassword.js", ["common/shoppingcart.js", "lib/jquery.validate.min.js", "common/tools.js", "common/m-home-slider.js"], function (require, exports, modules) {
    // 事件监听 + 初始化接口
    require('common/m-home-slider.js');
    require("lib/jquery.validate.min.js");
    var g = require("common/shoppingcart.js");
    g();
	$('#form').validate({
		errorPlacement: function(error, element) {
        	// 报错的位置
        	$(element).closest("li").find(".td-tip").html(error);
        },
        rules: {
            OldPwd:{
            	required:true,
				rangelength:[6,16]
            	/*remote:{
            		url: "dev/json/checkpass.json",     //后台处理程序
				    type: "post",               //数据发送方式  
				    data: {},
				    dataFilter:function(data){
				    	var json = $.parseJSON(data);
				    	return json.result ? "success" : false;
				    }
            	}*/
            },
            NewPwd:{
            	required:true,
            	rangelength:[6,16]
            },
            reNewPwd:{
            	required:true,
            	rangelength:[6,16],
            	equalTo: "#NewPwd"
            }
            
        },
        messages: {
            OldPwd: {
            	required:"密码不能为空",
            	remote:"输入密码错误"
            },
            NewPwd:{
            	required:"密码不能为空",
            	rangelength:"请输入{0}-{1}位，可含字母、数字、符号"
            },
            reNewPwd:{
            	required:"密码不能为空",
            	rangelength:"请输入{0}-{1}位，可含字母、数字、符号",
            	equalTo:"密码输入不一致"
            }
        },
        submitHandler: function(form) {
            var sparam = $(form).serializeObject();
			 T.ajax("User/UpdatePwd",{
				type:"POST",
				data:sparam,
				success: function (data) {
				  layer.msg("密码更新成功",{icon:1});
				  form.reset();
				}
			 });
        }
	});
})
