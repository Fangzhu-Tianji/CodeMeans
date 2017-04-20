define("c/payment.js", ["common/shoppingcart.js", "lib/trimPath.js", "common/tools.js"], function (require, exports, modules) {
    require("lib/trimPath.js");
    require("common/tools.js");
    var g = require("common/shoppingcart.js");
    g();
    var orderID = T.url.getQueryValue("o"), payEndTime, satrTime, remainTime;
	$("#viewOrderDetail").attr("href", T.site.member + "orderDetail.html?oid=" + orderID);
 
	T.ajax("Order/GetOrderPayment", {
	    apiUrl: T.site.cartApi,
	    type: "GET",
	    loginJump:true,
	    data: { orderCode: orderID },
	    success: function (data) {
	        var orderObj = {
	            "Address": data.Address,
	            "OrderCode": data.OrderCode,
	            "ReceiveMobile": data.ReceiveMobile,
	            "ReceiveName": data.ReceiveName,
	            "styleTotalPrice": data.TotalPrice,
	            "mustTotalPrice": data.TotalPrice,
	            "TotalPrice": data.TotalPrice
	        };
	        $.each(orderObj, function (index,item) {
	            $("#" + index).text(item);
	        });
	        $("#confirmPayBtn").attr("href", T.site.pay + "?o=" + data.OrderCode);
	        payEndTime = data.DataStamp * 1000;
	        satrTime = new Date().getTime();
	        remainTime = payEndTime - satrTime;
	       var f = parseInt(remainTime / 1e3);
	        try {
	            if ($("#surplus-time div").attr("secondcount", f),f && f > 0) {
	                var p = 86400
                      , q = 3600;
	                var r = parseInt(f / p)
                      , s = parseInt(f % p / q)
                      , t = parseInt(f % q / 60)
                      , u = parseInt(f % 60 / 1);
	                $("[secondcount]").html("<i></i>\u5269\u4f59" + r + "\u5929" + s + "\u65f6" + t + "\u5206" + u + ".<span>9</span>\u79d2")
	            }
	            seajs.use(["lib/CountDown.js"], function (a) {
	                var b;
	                var c = $("#surplus-time");
	                a.initCurrentPage("secondcount", function (a, d, e, f) {
	                    this.innerHTML = "<i></i>\u5269\u4f59" + a + "\u5929" + d + "\u65f6" + e + "\u5206" + f + ".<span>9</span>\u79d2",
                        window.clearInterval(b),
                        b = window.setInterval(function () {
                            var a = c.find("span");
                            var b = window.parseInt(a.html());
                            b--,
                            a.html(b)
                        }, 100)
	                })
	            })
	        } catch (s) {
	            console && console.info("CountDown error:" + s.name)
	        }
	    }
	});
	$("#confirmPayBtn").bind("click", function (e) {
	    if (this.getAttribute("disabled")) {
	        e.preventDefault();
	    }
	});
	$("#payBalance").delegate("li", "click", function (e) {
	    var $that = $(this), $payval = $("#payStyle"), $paytip = $("#payBy"), theval = $that.attr("data-val"), thename = $that.attr("data-name");
	    $that.addClass("item-select").siblings().removeClass("item-select");
	    $paytip.text(thename);
	    $payval.val(theval);
	    if (theval == 3) {
	        $("#paypasswordPanel").show();
	        $("#haspaypw").show();
	    } else {
	        $("#paypasswordPanel").hide();
	        $("#haspaypw").hide();
	    }
	});
})
/*
    var waitPayMsg = '<div class="ta2"><section class="cnt">'
        + '<p class="title">请您在新打开的页面上完成付款</p>'
        + '<p class="subtitle">请在 <em class="countdown" id="popcountdown"><em class="minute">30</em>分</em></em> 内完成付款，否则订单将自动关闭</p>'
        + '<div class="tips">付款完成前请不要关闭此窗口<br/>完成付款后请根据您的情况点击下面的按钮</div>'
        + '<div class="ui-btns"><a href="' + T.site.member + 'orders.html" class="pay">已完成付款</a><a href="' + T.site.base + 'about/pay-method.html" class="">查看帮助</a></div>'
        + '</section>'
        + '<footer class="ft">没办法支付完成？<a href="' + T.site.member + 'orders.html">支付失败，重新支付</a></footer></div>';
*/
/*
a={"actId":81765,"remainTime":423003167,"startedFlag":1}
        var f = parseInt(a.remainTime / 1e3);
        if (1 == startedFlag){
            try {
                if ($("#surplus-time div").attr("secondcount", f),
                f && f > 0) {
                    var p = 86400
                      , q = 3600;
                    var r = parseInt(f / p)
                      , s = parseInt(f % p / q)
                      , t = parseInt(f % q / 60)
                      , u = parseInt(f % 60 / 1);
                    $("[secondcount]").html("<i></i>\u5269\u4f59" + r + "\u5929" + s + "\u65f6" + t + "\u5206" + u + ".<span>9</span>\u79d2")
                }
                seajs.use(["APP_ROOT/js/CountDown.js"], function(a) {
                    var b;
                    var c = $("#surplus-time");
                    a.initCurrentPage("secondcount", function(a, d, e, f) {
                        this.innerHTML = "<i></i>\u5269\u4f59" + a + "\u5929" + d + "\u65f6" + e + "\u5206" + f + ".<span>9</span>\u79d2",
                        window.clearInterval(b),
                        b = window.setInterval(function() {
                            var a = c.find("span");
                            var b = window.parseInt(a.html());
                            b--,
                            a.html(b)
                        }, 100)
                    })
                })
            } catch (s) {
                console && console.info("CountDown error:" + s.name)
            }
        }
define("APP_ROOT/js/CountDown", function() {
    CountDown = {};
    var c = 86400,
        d = 3600;
    return CountDown.render = function(a) {
        if (a.remainTime <= 0) return a.initActEnd ? a.initActEnd() : void(a.innerHTML = "该活动已结束");
        var b = parseInt(a.remainTime / c),
            e = parseInt(a.remainTime % c / d),
            f = parseInt(a.remainTime % d / 60),
            g = parseInt(a.remainTime % 60 / 1);
        if (a.renderFn) a.renderFn(b, e, f, g);
        else {
            if (a.remainTime <= 0) return a.initActEnd ? a.initActEnd() : void(a.innerHTML = "该活动已结束");
            a.innerHTML = "剩余" + b + "天" + e + "时" + f + "分" + g + "秒"
        }
    }, CountDown.initCurrentPage = function(a, b, d) {
        var e = $("[" + a + "]");
        window.countDownJqDom || (window.countDownJqDom = new Array), window.countDownJqDom.push(e), e.each(function(e, f) {
            return c && (f.renderFn = b, f.initActEnd = d), "undefined" == typeof f.remainTime ? void(f.remainTime = window.parseInt($(f).attr(a))) : void 0
        })
    }, window.COUNT_DOWN_INTERVAL = window.setInterval(function() {
        window.countDownJqDom && $.each(window.countDownJqDom, function(a, b) {
            b.each(function(a, b) {
                b.remainTime--, CountDown.render(b)
            })
        })
    }, 1e3), CountDown
});
*/