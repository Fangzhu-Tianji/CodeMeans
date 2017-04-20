function search(a) {//构造并跳转搜索链接
    // window.location.href =
}
var $o = function (a) {
    var b = $("#key");
    if (!(b.length < 1)) {
        var c = {};
        c.replace = function(a, b) {
            return a.replace(/#{(.*?)}/g, function() {
                var a = arguments[1];
                return "undefined" != typeof b[a] ? b[a] : arguments[0]
            })
        },
        String.prototype.isEmpty = function () {
            return 0 == this.length
        },
        c.textSelect = function (a, b, c) {
            if ("string" == typeof a && (a = document.getElementById(a)),
            a) {
                var d = 1 * b
                  , e = 1 * c
                  , f = a.value.length;
                if (f)
                    if (d || (d = 0),
                    e || (e = f),
                    d > f && (d = f),
                    0 > d && (d = f + d),
                    0 > e && (e = f + e),
                    a.createTextRange) {
                        var g = a.createTextRange();
                        g.moveStart("character", -f),
                        g.moveEnd("character", -f),
                        g.moveStart("character", d),
                        g.moveEnd("character", e),
                        g.select()
                    } else
                        a.setSelectionRange(d, e),
                        a.focus()
            }
        }
        ,
        c.getSelectText = function (a) {
            return document.selection ? document.selection.createRange().text : a ? a.value.substring(a.selectionStart, a.selectionEnd) : ""
        }
        ;
        var u = $("#shelper");
        var d = '<a style="color:#005AA0" onclick="$o.del(event)">\u5220\u9664</a>';//删除
        var e = "\u641c\u7d22\u5386\u53f2", f = "\u7ea6#{amount}\u4e2a\u5546\u54c1", g = 'history="1"', h = 'style="color:#005AA0"';
        var v = null != navigator.userAgent.toLowerCase().match(/chrome/);
        var t = "#FFF";
        function x() {
            this.length = 0, this.index = -1, this.iLastModified = 0, this.lastKeyword = !1, this.keep_keyword = "", this.pvid = q, this.enable_remind = !0, this.IME = !1
        }
        x.prototype.init = function () {
            this.length = 0, this.index = -1, search.additinal = ""
        },
        x.prototype.hideTip = function () {//清空并隐藏搜索结果
            this.init(), this.lastKeyword = !1;
            var a = c.getSelectText(b[0]);
            this.keep_keyword && a && this.keep_keyword + a == b.val() && b.val(this.keep_keyword), u.html("").hide()
        },
        x.prototype.clickItem = function (a) {//点击搜索结果跳转连接
            var c = a.getAttribute("cid"), d = "&suggest=" + a.getAttribute("suggest-pos");
            search.cid = null != c && "" != c ? c : null;
            var e = a.getAttribute("cLevel");
            search.cLevel = null != e && "" != e ? e : null;
            var f = a.getAttribute("title");
            null == f || $.trim(f).isEmpty() || b.val(f), null !== a.getAttribute("pm_type") && (d += "&prom_type=0"), null !== a.getAttribute("gp") && (d += "&gp=1"), null !== a.getAttribute("act") && (d += a.getAttribute("act")), search.additinal = d, search("key")
        }, x.prototype.mouseenter = function (a) {
            var a = $(a);
           // a.attr("history") && a.find(".search-count").html(d), a.hasClass("J_shop_box") ? a.find(".name").css("text-decoration", "underline") : a.css("background", s);
            var b = a.attr("id").split("_"), c = parseInt(b[1], 10);
            if (c != this.index) {
                if (this.index > -1) {
             //       var f = $("#d_" + this.index);
                 //   f.css("background", t), f.attr("history") && f.find(".search-count").html(e), f.hasClass("J_shop_box") && f.find(".name").css("text-decoration", "none")
                }
                this.index = c
            }
        }, x.prototype.mouseleave = function (a) {
        //    a.css("background", t), a.attr("history") && a.find(".search-count").html(e)
        },
        x.prototype.selectItemNode = function (a) {
            var c = this;
            var f = $("#d_" + c.index + ":visible");
            f.css("background-color", t), f.attr("history") && f.find(".search-count").html(e), f.hasClass("J_shop_box") && f.find(".name").css("text-decoration", "none"), -1 == c.index && -1 == a && (a = 0), c.index = (c.length + c.index + a) % c.length;
            var g = $("#d_" + c.index), h = "&suggest=" + g.attr("suggest-pos");
            if (g.length > 0) {
                g.attr("history") && g.find(".search-count").html(d), g.hasClass("J_shop_box") ? g.find(".name").css("text-decoration", "underline") : g.css("background-color", s);
                var i = g.attr("title");
                null == i || $.trim(i).isEmpty() || b.val(i);
                var j = g.attr("cid");
                search.cid = null != j && "" != j ? j : null;
                var k = g.attr("cLevel");
                search.cLevel = null != k && "" != k ? k : null, "undefined" != typeof g.attr("pm_type") && (h += "&prom_type=0"), "undefined" != typeof g.attr("gp") && (h += "&gp=1"), "undefined" != typeof g.attr("act") && (h += g.attr("act")), search.additinal = h
            }
        },
        x.prototype.input = function () {
            var a = this;
            a.timeoutId && clearTimeout(a.timeoutId), a.timeoutId = setTimeout(function () {
                var d = $.trim(b.val());
                if (d === a.lastKeyword || !d)
                    return !1;
                a.lastKeyword = d;
                /*
                var e = c.replace(r, { keyword: encodeURIComponent(d), time: (new Date).getTime() });                
                $.ajax({url: e, dataType: "jsonp", scriptCharset: "utf-8", jsonp: "callback", cache: !0, success: function (b) {
                        return function (c) {
                            a.iLastModified > b || (a.iLastModified = b, c && a.onloadItems(c))
                        }
                    }((new Date).getTime())
                })
                */
                var c = [{ "key": "手机", "qre": 2704, "wor": "153" }, { "acc": 19, "acq": "买3免1", "acu": "&icon=1213", "key": "手表", "qre": 313165, "wor": "32888" }];
                a.iLastModified > b || (a.iLastModified = b, c && a.onloadItems(c))
            }, 150)
        },
        x.prototype.keydown_up = function(c) {
            var d = this;
            var e = c || a.event;
            0 == b.length && (b = $("#key")), 0 == u.length && (u = $("tie"));
            var f = e.keyCode;
            switch (f) {
                case 38://向上方向键
                    d.selectItemNode(-1);
                    break;
                case 40://向下方向键
                    d.selectItemNode(1);
                    break;
                case 27://Esc键
                    d.hideTip();
                    break;
                case 37:
                    break;
                case 39:
                    break;
                default://{8:"BackSpace",27:"Escape",37:"Left",38:"Up",39:"Right",40:"Down",46:"Delete",229:"有中文输入法时"}
                    d.IME = 229 == f, 8 == f || 46 == f ? d.disableRemind() : d.enable_remind = !0, $.browser.mozilla || d.input()
            }
        },
         x.prototype.bind_input = function() {
            $.browser.mozilla ? (b.bind("keydown", function(a) {
                y.keydown_up(a)
            }), b.bind("input", function(a) {
                y.input(a)
            })) : b.bind("keydown", function(a) {
                y.keydown_up(a)
            }), b.focus(function() {
                setTimeout(function() {
                    y.input()
                }, 10)
            }), u.parent().bind("mouseenter", function() {
                y.e_position = !0, y.timeoutId && clearTimeout(y.timeoutId)
            }).bind("mouseleave", function() {
                y.e_position = !1, y.timeoutId = setTimeout(function() {
                    y.hideTip()
                }, 500)
            }), $(document).click(function() {
                y.e_position || y.hideTip()
            })
         },
        x.prototype.onloadItems = function (d) {//渲染搜索数据
            if (0 == d.length)
                return void this.hideTip();
            var q = this;
            q.init();
            var t = sCategoriesHtml = "";
            var v = 0 , x = 0 , y = $.trim(b.val()) , z = y.toUpperCase();
            for (var A = 0, B = d.length; B > A; A++) {
                var C = d[A];
                if (C && C.key && (C.key != y || 0 == x)) {
                    t = '<li id="d_3" suggest-pos="3.def.0" title="手机支架" onclick="$o.clickItem(this)"><div class="search-item">手机<strong>支架</strong></div><div class="search-count">约1137313个商品</div></li>';
                }
            }
            "" != t ? (t += '<li class="close" onclick="$o.hideTip()">\u5173\u95ed</li>',u.html(t).show(),u.find('[id^="d_"]').bind("mouseleave", function () {
                q.mouseleave($(this))
            }).bind("mouseenter", function () {
                q.mouseenter($(this))
            })) : u.html("").hide()
        }, x.prototype.disableRemind = function () {
            search.additinal = "&suggest=1.rem.1", this.enable_remind = !1
        }
    }
    var y = new x;
    return y.bind_input(), y
}(window);