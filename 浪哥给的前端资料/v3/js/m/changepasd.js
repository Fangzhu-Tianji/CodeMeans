define(function(require, exports, modules){

	require('public/m-public');
	require('plugins/jquery.validate.js')($);
    P.mlogin.run.getcustomer(P.mlogin.run.getcart);
	// 事件监听 + 初始化接口
	var mhomeslider = require('public/m-home-slider.js');
	mhomeslider.run(12);

	$('#form').validate({
		errorPlacement: function(error, element) {
        	// 报错的位置
        	$(element).closest("li").find(".td-tip").html(error);
        },
        rules: {
            oldpass:{
            	required:true
            },
            newpass:{
            	required:true,
            	rangelength:[6,16]
            },
            renewpass:{
            	required:true,
            	rangelength:[6,16],
            	equalTo: "#newpass"
            }
            
        },
        messages: {
            oldpass:{
            	required:"密码不能为空"
            },
            newpass:{
            	required:"密码不能为空",
            	rangelength:"请输入{0}-{1}位，可含字母、数字、符号"
            },
            renewpass:{
            	required:"密码不能为空",
            	rangelength:"请输入{0}-{1}位，可含字母、数字、符号",
            	equalTo:"密码输入不一致"
            }
        },
        submitHandler: function(form) {
        	var param = T.formToJSON(form);
			 T.ajax("User/UpdatePwd",{
				type:"POST",
				data:sparam,
				success: function (data) {
				  layer.msg("支付密码更新成功",{icon:1});
				  form.reset();
				}
			 });
        }
	});

});
