define("common/shoppingcart.js", ["lib/trimPath.js", "common/tools.js", "lib/jquery.defscroll.js"], function (require) {
    require("lib/trimPath.js");
    require("common/tools.js");
    require("lib/jquery.defscroll.js");
    var config = {
        serviceqq: [{
            qq: "3029300632",
            name: "小颜"
        }, {
            qq: "3353130884",
            name: "李伟"
        }]
    }
    var e = {
        el: null,
        setting:{
            hasMbar: !1,
            isInit:!1,
            el: $("#headCartBox"),
            barEl: $("#mui-bar-plugin2")
        },
        init: function (a) {
            var b = this;
            this.el = $("#headCartBox");
            var c = $.extend(b.setting, a);
            b.FN_Refresh(c);
            if (c.hasMbar && c.isInit) {
                b.FN_BindEvents();
            }
        },
        TPL_List: {
            sigle: '<div class="hasgoods"><ul id="mcart-sigle">{for list in cartList}{for product in list.productList}<li><div class="p-img fl"><a href="${T.site.item}${product.pid}.html" title="${product.pname}" target="_blank"><img src="${T.site.img}${product.imgPath}" alt=""/></a></div><div class="p-name fl"><a href="${T.site.item}${product.pid}.html" target="_blank" class="goodsnm">${product.pname}</a><span class="desc"></span></div><div class="p-detail fr ar"><span class="unitcost">￥<em>${product.totalPrice}</em></span><span class="amount">x<em>${product.pnum}</em></span></div></li>{/for}{/for}</ul></div><footer><span class="subtotal">小计：<span class="coins">￥<em>${totalPrice.toFixed(2)}</em></span></span><a href="${T.site.cart}" class="account">去购物车结算</a></footer>',
            mbarTemp: '<h2><i class="i-close close-plugins"></i><span>购物车</span></h2>{if cartList.length>0}<div class="listbox">{for list in cartList}{for product in list.productList}<div class="item"><div class="itemcnt"><div class="ichks fl"></div><div class="igood fl"><a href="${T.site.item}${product.pid}.html" title="${product.pname}"><img src="${T.site.img}${product.imgPath}"/></a></div><div class="itotalfee f1"><div class="ititle"><a href="${T.site.item}${product.pid}.html" title="${product.pname}">${product.pname}</a></div><div class="ibars"><div class="iamount fl"><span class="quantity f1">x<b>${product.pnum}</b></span><span class="price f2">${product.totalPrice.toFixed(2)}</span></div><div class="idel fr"><a href="javascritp:;" class="i-btn i-del" data-cid="${product.cid}">删除</a></div></div></div></div></div>{/for}{/for}</div><div class="handle"><div class="count"><span class="count-l fl">总共<b class="totalnum">${productCount}</b>件</span><span class="count-r fr">¥<b class="totalfee">${totalPrice.toFixed(2)}</b></span></div><div class="acount"><a href="${T.site.cart}index.html" class="ui-btn acount-btn">去购物车结算</a></div></div>{else}<div class="nothing"><p><i class="logo"></i></p><p><span>购物车还没有任何商品！<a href="${T.site.web}">去购物</a></span></p></div>{/if}'
        },
        TPL_NoGoods: '<div class="nogoods">哎，什么都没有，快去挑选商品吧！</div>',
        FN_Refresh: function (c) {
            var a = this;
            T.ajax("Cart/getCartList", {
                apiUrl: T.site.cartApi,
                type: "GET",
                data: {},
                success: function (data) {
                    var tempstr = data.productCount > 0 ? a.TPL_List.sigle.process(data) : a.TPL_NoGoods;
                    var bartempstr = a.TPL_List.mbarTemp.process(data);
                    $("#nav-shopcarts .cartsNum").text(data.productCount);                   
                    c.el.html(tempstr);
                    if (c.hasMbar){ 
                        c.barEl.html(bartempstr);
                        $("#i-cartNums").text(data.productCount);
                    }
                }
            });
        },
        FN_BindEvents: function () {
            var b = this;
            b.runToTop();
            b.openslider();
            $('#m-mui-bar').css({
                opacity: '0',
                right: '-270px'
            }).stop().animate({
                right: '-235px',
                opacity: '1'
            }, 1000).show();
            /* 删除订单  */
            $("#mui-bar-plugin2").undelegate(".i-del", "click").delegate(".i-del", "click", function (e) {
                e.preventDefault();
                var self = $(this), cid = self.attr("data-cid"),sending=!0;
                    T.ajax("Cart/clearOrderCart", {
                        apiUrl: T.site.cartApi,
                        type: "POST",
                        data: { cartIDs: [cid], statusFlag: 0 },
                        success: function (data) {
                            b.FN_Refresh(b.setting);
                        }
                    });
            });
        },
        runToTop: function () {
            $("body").on('click', '#returntop', function () {
                $('html,body').animate({ scrollTop: '0px' }, 500);
            });
        },
        openslider: function () {
            var slimscroll = function () {
                var H = $(window).height() - 82;
                $('#m-mui-bar .plugin2').find('.listbox').height(H).slimscroll({
                    "height": H + "px",
                    "color": "#eee",
                    "opacity": "0.3",
                    "borderRadius": "0",
                    "start": "top",
                    "size": "3px",
                    "alwaysVisible": true,
                    "railVisible": false,
                    "railsize": "7px",
                    "raildistance": "0px",
                    "railColor": "#666",
                    "railOpacity": "0.6",
                    "distance": "2px"
                });
            };
            $(window).resize(function () {
                if ($('#m-mui-bar .plugin2').is(":visible")) {
                    slimscroll();
                }
            });
            // 登录
            $('#sildeloginForm').validate({
                errorPlacement: function (error, element) {
                    // 报错的位置
                    $(element).closest("li").find(".ui-tips").html(error).show();
                },
                success: function (label) {
                    label.parent().hide()
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
                        required: "输入您的邮箱或手机号",
                        username: "邮箱或手机号格式不正确"
                    },
                    uPassword: {
                        required: "请输入密码",
                        minlength: "密码必须大于6位"
                    }
                },
                submitHandler: function (form) {
                    var sparam = $(form).serializeObject();
                    T.ajax("userlogin/login", {
                        type: "POST",
                        data: sparam,
                        success: function (data) {
                            layer.msg("登录成功", { icon: 1 });
                            T.cookie("__sid", data.Sid);
                            T.cookie("__uname", data.UserName);
                            window.location.reload();
                        }
                    });
                }
            });
            /* 反馈 */
            $('#feedbackForm').validate({
                errorPlacement: function (error, element) {
                    // 报错的位置
                    // $(element).closest("li").find(".ui-tips").html(error).show();
                },
                success: function (label) {
                    label.parent().hide()
                },
                rules: {
                    TypeID: {
                        required: true
                    },
                    Email: {
                        required: true,
                        email: true
                    },
                    Content: {
                        required: true,
                        rangelength: [1, 250]
                    }
                },
                messages: {
                    TypeID: {
                        required: ""
                    },
                    Email: {
                        required: "",
                        email: "请输入您常用的电子邮箱"
                    },
                    Content: {
                        required: "",
                        rangelength: "字符限制在1到250之间"
                    }
                },
                submitHandler: function (form) {
                    var sparam = $(form).serializeObject();
                    sparam.TypeName = "sss";
                    T.ajax("Feedback/AddFeedback", {
                        type: "POST",
                        data: sparam,
                        success: function (data) {
                            layer.msg("反馈成功", { icon: 1, shade: [0.8, '#393D49'] });
                            form.reset();
                        }
                    });
                }
            });



            $('#m-mui-bar').off('click').on('click', '.open-plugins', function () {
                var tabindex = $(this).attr("tab-index");
                if ($('#m-mui-bar').find('.mui-mbar-plugin').eq(tabindex).is(":visible")) {
                    $('#m-mui-bar').stop().animate({
                        right: '-235px'
                    }, 300, function () {
                        $('#m-mui-bar').find('.mui-mbar-plugin').hide();
                    });
                } else {
                    $('#m-mui-bar').find('.mui-mbar-plugin').eq(tabindex).show().siblings().hide();
                    $('#m-mui-bar').stop().animate({
                        right: '-1px'
                    }, 300, function () {
                        // 显示 对应内容区
                        $('#m-mui-bar').on('click', '.close-plugins', function () {
                            $('#m-mui-bar').stop().animate({
                                right: '-235px'
                            }, 300, function () {
                                $('#m-mui-bar').find('.mui-mbar-plugin').hide();
                            });
                        });
                    });

                    // 登录
                    if (tabindex == 0) {
                        document.getElementById('sildeloginForm').reset();
                    }
                    else if (tabindex == 1) {
                        slimscroll();
                    } else if (tabindex == 3) { // 客服
                        var serviceqq = config.serviceqq;
                        var scriptsrc = "http://webpresence.qq.com/getonline?Type=1&";
                        for (var i = 0; i < serviceqq.length; i++) {
                            scriptsrc += serviceqq[i].qq + ":";
                        }
                        var head = document.getElementsByTagName('head')[0];
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.onreadystatechange = function () {
                            if (this.readyState == 'complete') {

                            }
                        }
                        script.onload = function () {
                            var html = "";
                            for (var i = 0; i < serviceqq.length; i++) {
                                if (online[i] == 0) {
                                    html += "<li class='offline'>";
                                } else {
                                    html += "<li class='online'>";
                                }
                                html += "<a target='_blank' href='" + "http://wpa.qq.com/msgrd?v=3&amp;uin=" + serviceqq[i].qq + "&amp;site=ccdfs.com&amp;menu=yes'>" + "<i></i><span>" + serviceqq[i].name + "</span></a></li>";
                            }

                            $('#qqlist').html(html);
                        }
                        script.src = scriptsrc;
                        head.appendChild(script);
                    } else if (tabindex == 5) { // 反馈建议
                        document.getElementById('feedbackForm').reset();
                    }
                }

            });
            $(document).on('click', function (e) {
                var e = e || window.event, tar = e.target, $muibar = $(tar).closest('#m-mui-bar');
                if ($muibar && $muibar.length==0) {
                    $('#m-mui-bar').stop().animate({
                        right: '-235px'
                    }, 300, function () {
                        $('#m-mui-bar').find('.mui-mbar-plugin').hide();
                    });
                }
            });
        }

    };
    function f(a) {
        e.init(a)
    }
    window.Head_Cart_Tpl_List = e.TPL_List.sigle;
    return f
});