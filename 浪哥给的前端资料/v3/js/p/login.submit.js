define("p/login.submit.js", ["lib/jquery.validate.min.js", "common/tools.js"], function (require) {
    require("lib/jquery.validate.min.js");
    require('common/tools.js');
    var e = {
        jumpurl: T.url.getQueryValue("jump") || T.site.web,               
        merge: function () {
            var e, b = [].slice.call(arguments), d = b.length, c = function (a) { return "[object Object]" === Object.prototype.toString.call(a);};
            for (; d--;)
                e = e || b[d],
                c(b[d]) || b.splice(d, 1);
            return b.length ? $.extend.apply(null, [!0, {}].concat(b)) : e
        },
        options: {
            loginBtn: $("#loginsubmit"),
            loginForm: $("#loginForm"),
            dialog: !1,
            stag:"li",
            callback: function () { location.reload(); }
        },
        init: function (options) {
            var a = this;
            a.setting = a.merge(a.options, options || {});
            jQuery.validator.addMethod("username", function (value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$|^1[3,5,8]{1}[0-9]{1}[0-9]{8}$/.test(value);
            }, "请输入邮箱或手机号");
            a.setting.loginForm.validate({
                errorPlacement: function (error, element) {
                    $(element).closest(a.setting.stag).addClass("item-error").find(".td-tips").html(error);
                },
                success: function (label, element) {
                    $(element).closest(a.setting.stag).removeClass("item-error");
                },
                rules: {
                    uName: {
                        required: true,
                        username: true
                    },
                    uPassword: {
                        required: true,
                        minlength: 6
                    }
                },
                messages: {
                    uName: {
                        required: "请输入您的邮箱或手机",
                        username: "邮箱或手机格式不正确"
                    },
                    uPassword: {
                        required: "请输入您的密码",
                        minlength: "密码必须大于6位"
                    }
                },
                submitHandler: function (form) {
                    var sparam = $(form).serializeObject();
                    a.setting.loginBtn.attr("disabled", true).addClass("disabled").val("\u6b63\u5728\u767b\u5f55\u002e\u002e\u002e");
                    T.ajax("userlogin/login", {
                        type: "POST",
                        data: sparam,
                        success: function (data) {
                            if (sparam.chkRememberMe) {
                                T.cookie("__sid", data.Sid, 7);
                                T.cookie("__uname", data.UserName, 7);
                            } else {
                                T.cookie("__sid", data.Sid);
                                T.cookie("__uname", data.UserName);
                            }
                            if (a.setting.dialog) {
                                a.setting.callback();
                            }else{
                                layer.msg("登录成功", { icon: 1, shade: [0.8, '#393D49'] });
                                if (T.tool.in_array(T.url.getFileName(a.jumpurl), ["login.html"])) {
                                    location.href = T.site.web;
                                } else {
                                    location.href = unescape(a.jumpurl);
                                }
                            }
                        },
                        error: function (e) {
                            if (a.setting.dialog) {
                                layer && layer.alert(e.errmsg, { icon: 2 });
                            }
                            a.setting.loginBtn.val("\u767b\u5f55").removeAttr("disabled").removeClass("disabled");
                        }
                    });
                }
            });
        }
    };
    function f(a) {
        e.init(a)
    }
    return f
});