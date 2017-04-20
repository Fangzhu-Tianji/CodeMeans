define("common/layer.login.js", ["lib/trimPath.js", "common/tools.js"], function (require) {
    require("lib/trimPath.js");
    require("common/tools.js");
    function render() {
        var html = '';
        html += '<div class="layer-login-form"><div class="login-box"><div class="form"><form id="loginForm"><input type="hidden" name="uLoginType" value="1" />';
        html += '<div class="item item-fore1"><label for="uName" class="login-label name-label"></label><input id="uName" type="text" class="itxt" name="uName" tabindex="1" autocomplete="off" value="" placeholder="邮箱/已验证手机" /><span class="lable-tips"></span><span class="clear-btn" style="display: none;"></span></div>';
        html += '<div id="entry" class="item item-fore2"><label class="login-label pwd-label" for="uPassword"></label><input type="password" id="uPassword" name="uPassword" class="itxt itxt-error" tabindex="2" autocomplete="off" placeholder="密码" /><span class="lable-tips"></span><span class="clear-btn" style="display: none;"></span></div>';
        html += '<div class="item item-fore3"><div class="safe"><span><input id="autoLogin" name="chkRememberMe" type="checkbox" class="jdcheckbox" tabindex="3" /><label for="autoLogin">自动登录</label></span><span class="forget-pw-safe"><a href="'+T.site.passport+'ForgetPwd.html" class="" target="_blank">忘记密码?</a></span></div></div>';
        html += '<div class="item item-fore5"><div class="login-btn"><input type="submit" class="btn-img btn-entry" id="loginsubmit" tabindex="6" value="登&nbsp;&nbsp;&nbsp;&nbsp;录" /></div></div>';
        html += '<div class="coagent"><h5>您可以通过以下方式直接登录：</h5><ul class="clearfix"><li><a href="javascript:void(0)">QQ</a><span class="line">|</span></li><li><a href="javascript:void(0)">微信</a></li></ul></div>';
        html += '</form></div></div></div>';
        return html;
    }
    var login = {       
        open: function (options) {
            var template = render();
            layer.open({
                type: 1,
                title: '您尚未登录',
                area: ['400px', '410px'],
                shade: [0.8, '#393D49'],
                content: template,
                success: function (layero, index) {
                    seajs.use(["p/login.submit.js"], function (a) {
                        a({
                            loginForm: $("#loginForm"),
                            dialog: !0,
                            stag:"div",
                            callback: function () { (options && options.success && $.isFunction(options.success)) ? options.success(index) : location.reload(); }
                        });
                    });
                }
            });

        }         
    };
    return login;
});