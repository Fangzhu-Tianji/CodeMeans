define("m/baseinfo.js", ["layer", "lib/jquery.validate.min.js", "lib/bootstrap-datetimepicker.min.js", "common/m-home-slider.js", "common/tools.js"], function (require, exports, modules) {
    require('lib/jquery.validate.min.js');
    require('lib/bootstrap-datetimepicker.min.js');
    require('common/m-home-slider.js');
    require('common/tools.js');
    // 时间控件
    $('.date').datetimepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        endDate: new Date(),
        autoclose: true,
        minView: 2　
    });
	
	 T.ajax("User/GetUserByID",{
		data:{},
		success: function (data) {
           $('#form').autofill(data);
		}
	 });
    
    // 表单验证
    $('#form').validate({
        errorPlacement: function(error, element) {
            // 报错的位置
            $(element).closest("li").find(".td-tip").html(error);
        },
        rules: {
            Mobile: {
                required: true,
                mobile: true
            },
            NickName: {
                required: true
            },
            SureName: {
                required: true
            },
            Birthday: {
                required: true,
                date: false
            }
        },
        messages: {
            Mobile: {
                required: "手机号码不能为空",
                mobile: "请输入正确的手机号码"
            },
            NickName: {
                required: "请填写昵称"
            },
            SureName: {
                required: "请填写真实姓名"
            },
            Birthday: {
                required: "请输入的你的出生年月"
            }
        },
        submitHandler: function(form) {
            var sparam = $(form).serializeObject();
			 T.ajax("User/EditUser",{
				type:"POST",
				data:sparam,
				success: function (data) {
				  layer.msg("基本信息更新成功",{icon:1});
				}
			 });
        }
    });

});
