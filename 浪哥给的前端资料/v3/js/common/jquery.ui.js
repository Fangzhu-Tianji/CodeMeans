"undefined" == typeof $.ui && ($.ui = {}),
function (a, b) {
    function c(a) {//判断是否为对象
        return "[object Object]" === Object.prototype.toString.call(a)
    }
    function d(a) {//对特殊属性值(true,false,null,json string)进行转换
        try {
            a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : +a + "" === a ? +a : /(?:\{[\s\S]*\}|\[[\s\S]*\])$/.test(a) ? JSON.parse(a) : a
        } catch (c) {
            a = b
        }
        return a
    }
    function e(a) {//收集DOM元素的data-属性组合成一个Object对象
        var g, h, c = {}, e = a && a.attributes, f = e && e.length;
        for (; f--;)
            h = e[f],
            g = h.name,
            "data-" === g.substring(0, 5) && (g = g.substring(5),
            h = d(h.value),
            h === b || (c[g] = h));
        return c
    }
    function f() {//将两个或更多对象的内容合并到第一个对象。
        var e, b = [].slice.call(arguments), d = b.length;
        for (; d--;)
            e = e || b[d],
            c(b[d]) || b.splice(d, 1);
        return b.length ? a.extend.apply(null, [!0, {}].concat(b)) : e
    }
    a.ui.guid = 0;
    function g(b, c) {
        /* d
         * @param c {HTMLElement}
         * @param g {Object}
        */
        function d(c, g) { // $.fn[fnname](HTMLElement,{})
            var h = this;
            h.el = a(c);
            h.options = f(d.options, e(c), g);
            return h.name = b.toLowerCase(),
            a.ui.guid++,
            h.guid = a.ui.guid,
            h.options.hasCssLink && h.options.cssLinkVersion && h.options.baseVersion && "undefined" != typeof seajs ? seajs.use(("https:" == document.location.protocol ? "//" : "http://") + "misc.360buyimg.com/jdf/" + h.options.baseVersion + "/ui/" + b + "/" + h.options.cssLinkVersion + "/" + b + ".css", function () {
                h.init()
            }) : h.init(),
            /isdebug=(-\d)*-0/.test(location.search) && window.pageConfig && (window.pageConfig.uiLog ? window.pageConfig.uiLog.push(h) : window.pageConfig.uiLog = [h],
            console.log(h)),
            h
        }
        var g = ["options"];
        for (var h = 0; h < g.length; h++) {
            var i = g[h];
            c[i] && (d[i] = c[i]),
            delete c[i]
        }
        for (var h in c)
            d.prototype[h] = c[h];
        return d
    }
    a.ui.fn = function (b) {
        var b = b.toLowerCase();
        a.fn[b] = function (c) {
            var d;
            return a.each(this, function (e, f) {
                d = new a.ui[b](f, c)
            }),
            d
        }
    }
    ,
    a.ui.define = function (b, c) {
        a.ui[b] = g(b, c),
        a.ui.fn(b)
    }
}(jQuery)