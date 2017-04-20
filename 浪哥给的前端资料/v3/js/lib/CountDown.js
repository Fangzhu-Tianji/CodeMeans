define("lib/CountDown", function () {
    CountDown = {};
    var c = 86400,
        d = 3600;
    return CountDown.render = function (a) {
        if (a.remainTime <= 0) return a.initActEnd ? a.initActEnd() : void (a.innerHTML = "订单支付时间已结束", $("#confirmPayBtn").attr("disabled",true).addClass("disabled"));
        var b = parseInt(a.remainTime / c),
            e = parseInt(a.remainTime % c / d),
            f = parseInt(a.remainTime % d / 60),
            g = parseInt(a.remainTime % 60 / 1);
        if (a.renderFn) a.renderFn(b, e, f, g);
        else {
            if (a.remainTime <= 0) return a.initActEnd ? a.initActEnd() : void (a.innerHTML = "订单支付时间已结束", $("#confirmPayBtn").attr("disabled", true).addClass("disabled"));
            a.innerHTML = "剩余" + b + "天" + e + "时" + f + "分" + g + "秒"
        }
    }, CountDown.initCurrentPage = function (a, b, d) {
        var e = $("[" + a + "]");
        window.countDownJqDom || (window.countDownJqDom = new Array), window.countDownJqDom.push(e), e.each(function (e, f) {
            return c && (f.renderFn = b, f.initActEnd = d), "undefined" == typeof f.remainTime ? void (f.remainTime = window.parseInt($(f).attr(a))) : void 0
        })
    }, window.COUNT_DOWN_INTERVAL = window.setInterval(function () {
        window.countDownJqDom && $.each(window.countDownJqDom, function (a, b) {
            b.each(function (a, b) {
                b.remainTime--, CountDown.render(b)
            })
        })
    }, 1e3), CountDown
});