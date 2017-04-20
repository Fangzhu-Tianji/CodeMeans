var BSHARE_SHOST_NAME = "http://static.bshare.cn",
    BSHARE_BUTTON_HOST = "http://bshare.optimix.asia",
    BSHARE_WEB_HOST = "http://www.bshare.cn";
(function (e, g) {
    if (!e.bShareUtil || !e.bShareControl) {
        var l = g.documentElement,
            d = navigator;
        e.BUZZ = {};
        e.bShareControl = {
            count: 0,
            viewed: !1,
            bShareLoad: !1,
            clicked: !1
        };
        var h = e.bShareUtil = {
            requestedScripts: [],
            encode: encodeURIComponent,
            isIe6: /msie|MSIE 6/.test(d.userAgent),
            isIe7: /MSIE 7/.test(d.userAgent),
            isIe8: /MSIE 8/.test(d.userAgent),
            isIe9: /MSIE 9/.test(d.userAgent),
            isIe: /Microsoft Internet Explorer/.test(d.appName),
            isSt: g.compatMode == "CSS1Compat",
            isQk: function () {
                return h.isIe6 || h.isIe && !h.isSt
            },
            eleInViewport: function (a) {
                if (a.getBoundingClientRect) return a = a.getBoundingClientRect(), a.top >= 0 && a.left >= 0 && a.bottom <= (e.innerHeight || l.clientHeight) && a.right <= (e.innerWidth || l.clientWidth);
                for (var b = a.offsetTop, c = a.offsetLeft, f = a.offsetWidth, k = a.offsetHeight; a.offsetParent;) a = a.offsetParent, b += a.offsetTop, c += a.offsetLeft;
                return b >= e.pageYOffset && c >= e.pageXOffset && b + k <= e.pageYOffset + e.innerHeight && c + f <= e.pageXOffset + e.innerWidth
            },
            getElemById: function (a) {
                return g.getElementById(a)
            },
            createElement: function (a, b, c, f, k) {
                a = g.createElement(a);
                if (b) a.id = b;
                if (c) a.className = c;
                if (f) a.style.cssText = f;
                if (k) a.innerHTML = k;
                return a
            },
            formatParam: function (a, b) {
                return typeof a == "number" ? +b : typeof a == "boolean" ? /^true$/i.test(b) : b
            },
            isUndefined: function (a) {
                return typeof a == "undefined"
            },
            arrayContains: function (a, b, c) {
                for (var f = a.length; f--;)
                    if (!h.isUndefined(b) && a[f] === b || !h.isUndefined(c) && c.test(a[f])) return !0;
                return !1
            },
            loadScript: function (a, b) {
                var c = h.requestedScripts;
                if (!h.arrayContains(c, a)) / (bsMore | bshareS887) (Org) ? \.js /.test(a) && c.push(a), b = b || function () { }, c = h.createElement("script"), c.src = a, c.type = "text/javascript", c.charset = "utf-8", c.onload = b, c.onreadystatechange = function () {
                    /complete|loaded/.test(this.readyState) && b()
                }, g.getElementsByTagName("head")[0].appendChild(c)
            },
            loadStyle: function (a) {
                var b = h.createElement("style");
                b.type = "text/css";
                b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(g.createTextNode(a));
                g.getElementsByTagName("head")[0].appendChild(b)
            },
            getOffset: function (a) {
                for (var b = {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    h: a.offsetHeight,
                    w: a.offsetWidth
                }; a = a.offsetParent; b.x += a.offsetLeft, b.y += a.offsetTop);
                return b
            },
            getElem: function (a, b, c, f) {
                for (var a = a.getElementsByTagName(b), b = [], k = 0, d = 0, e = a.length; k < e; k++) {
                    var g = a[k];
                    if (!c || g.className.indexOf(c) != -1) b.push(g), typeof f == "function" && f(g, d++)
                }
                return b
            },
            getText: function (a) {
                return h.isIe ? a.innerText : a.textContent
            },
            insertAfter: function (a, b) {
                var c = b.parentNode;
                c.lastChild === b ? c.appendChild(a) : c.insertBefore(a, b.nextSibling)
            },
            getWH: function () {
                return {
                    h: (h.isSt ? l : g.body).clientHeight,
                    w: (h.isSt ? l : g.body).clientWidth
                }
            },
            stopProp: function (a) {
                a = a || e.event || {};
                a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
            },
            getScript: function (a) {
                for (var b = g.getElementsByTagName("script"), c = [], f = 0, k = b.length; f < k; f++) {
                    var d = b[f].src;
                    d && d.search(a) >= 0 && /bshare.(cn|com|me)|static.(local|dev)/i.test(d) && c.push(b[f])
                }
                return c
            },
            parseOptions: function (a, b) {
                var c = {};
                if (a = /\?(.*)|#(.*)/.exec(a))
                    for (var a = a[0].slice(1).replace("+", " "), f = a.split(/[&;]/g), k = 0, d = f.length; k < d; k++) {
                        var e = f[k].split("="),
                            g = decodeURIComponent(e[0]),
                            h = b ? e[1] : null;
                        if (!b) try {
                            h = decodeURIComponent(e[1])
                        } catch (l) { }
                        c[g] = h
                    }
                return c
            },
            submitForm: function (a, b, c, f) {
                var f = f || "post",
                    k = h.createElement("form");
                g.body.appendChild(k);
                k.method = f;
                k.target = c;
                k.setAttribute("accept-charset", "utf-8");
                k.action = a;
                for (var d in b)
                    if (typeof b[d] != "function") a = h.createElement("input"), a.type = "hidden", a.name = d, a.value = b[d], k.appendChild(a);
                if (h.isIe) g.charset = "utf-8";
                k.submit();
                g.body.removeChild(k)
            },
            replaceParam: function (a, b, c) {
                return b ? c.replace(a, h.encode(b)) : c.replace(a, "")
            },
            ready: function (a) {
                if (g.addEventListener) g.addEventListener("DOMContentLoaded", function () {
                    g.removeEventListener("DOMContentLoaded", arguments.callee, !1);
                    a.call()
                }, !1), e.addEventListener("load", a, !1);
                else if (g.attachEvent) {
                    g.attachEvent("onreadystatechange", function () {
                        g.readyState == "complete" && (g.detachEvent("onreadystatechange", arguments.callee), a.call())
                    });
                    e.attachEvent("onload", a);
                    var b = !1;
                    try {
                        b = e.frameElement === null
                    } catch (c) { }
                    l.doScroll && b && function () {
                        try {
                            l.doScroll("left")
                        } catch (b) {
                            setTimeout(arguments.callee, 10);
                            return
                        }
                        a.call()
                    }()
                } else e.onload = a
            },
            createBuzzObject: function (a, b) {
                if (e[a]) return e[a];
                b.namespace = a;
                var c = e[a] = {
                    shost: e.BSHARE_SHOST_NAME,
                    bhost: e.BSHARE_BUTTON_HOST,
                    whost: e.BSHARE_WEB_HOST,
                    defaultConfig: b,
                    params: {
                        type: 0,
                        publisherUuid: "",
                        url: "",
                        title: document.title,
                        summary: "",
                        content: "",
                        pic: "http://imgs.ccdfs.cc/n7/2015/12/010402/20151202141936yepk0.jpg",
                        pics: "",
                        video: "",
                        vTag: "",
                        vUid: "",
                        vEmail: "",
                        product: "",
                        price: "0",
                        brand: "",
                        tag: "",
                        category: "",
                        template: "1",
                        popcss: "",
                        apvuid: "",
                        apts: "",
                        apsign: ""
                    },
                    isReady: !1,
                    completed: !1,
                    curb: 0,
                    preb: -1,
                    entries: [],
                    counters: [],
                    viewInfo: null
                };
                c.config = {};
                c.elems = {
                    powerBy: '<div id="bsPower" style="float:right;text-align:right;overflow:hidden;height:100%;"><a class="bsSiteLink" style="font-size:10px;vertical-align:text-bottom;line-height:24px;cursor:pointer;" href="' + c.whost + '" target="_blank"><span style="font-size:10px;vertical-align:text-bottom;"><span style="color:#f60;">b</span>Share</span></a></div>'
                };
                for (var f in c.defaultConfig) c.config[f] = c.defaultConfig[f];
                c.imageBasePath = c.shost + "/frame/images/";
                c.jsBasePath = c.shost + "/b/";
                c.addEntry = function (a) {
                    if (typeof c.counters == "number") c.counters = [];
                    c.entries.push(a);
                    c.counters.push(0)
                };
                return e[a]
            },
            parseBuzzOptions: function (a, b, c, f, k) {
                var i;
                i = (a = h.getScript(b)[a]) ? h.parseOptions(a.src) : {}, a = i;
                k && (a = k(a));
                for (var d in a)
                    if (!h.isUndefined(a[d]) && !(a[d] === null || typeof c[d] == "number" && a[d] === "")) h.isUndefined(c[d]) ? h.isUndefined(f[d]) || (f[d] = h.formatParam(f[d], a[d])) : c[d] = h.formatParam(c[d], a[d])
            }
        }
    }
})(window, document);
(function (e, g, l) {
    var d = g.bShareUtil,
        h = g.bShareControl;
    if (!(h.count > 0)) {
        var a = d.createBuzzObject(e, {
            lang: "zh",
            height: 0,
            width: 0,
            image: "",
            bgc: "none",
            fgc: "#333",
            poptxtc: "#666",
            popbgc: "#f2f2f2",
            sn: !1,
            logo: !0,
            style: 1,
            fs: 0,
            inline: !1,
            beta: !1,
            popjs: "",
            popHCol: 2,
            pop: 0,
            mdiv: 0,
            poph: "auto",
            bps: "",
            bps2: "",
            showShareCount: !0,
            icon: !0,
            text: null,
            promote: !1
        }),
            b = a.config,
            c = a.params;
        a.boxConfig = {
            position: 0,
            boxHeight: 408,
            boxWidth: 548,
            closeTop: 8,
            closeRight: 20,
            hasTop: !0,
            hasFrame: !0,
            hasMore: !0
        };
        a.boxConfigEC = {
            position: 0,
            boxHeight: 404,
            boxWidth: 650,
            closeTop: 10,
            closeRight: 16,
            hasFrame: !0
        };
        a.boxConfigWX = {
            id: "bsWXBox",
            position: 0,
            boxHeight: 245,
            boxWidth: 220,
            closeTop: 8,
            closeRight: 20,
            hasTop: !0
        };
        a.customization = {};
        a.loadOptions = function () {
            d.parseBuzzOptions(0, /button(Lite)?(Org)?\.js|bshare_load/, b, c, function (b) {
                if (!d.isUndefined(g.bShareOpt))
                    for (var c in g.bShareOpt) b[c] = g.bShareOpt[c];
                if (!d.arrayContains(a.langs, b.lang)) b.lang = "zh";
                if (b.h && b.w && b.img) b.height = b.h, b.width = b.w, b.image = b.img;
                b.bgc = b.bgcolor || void 0;
                b.fgc = b.textcolor || void 0;
                b.logo = !(b.logo && /^false$/i.test(b.logo));
                b.popHCol = b.pophcol || void 0;
                if (b.style) b.style = /^(-1|0|1|2|3|4|5|10|11|999)$/.test(b.style) ? +b.style : void 0;
                if (b.bp) b.style && b.style == 2 ? b.bps2 = b.bp.split(",") : b.bps = b.bp.split(",");
                b.showShareCount = b.style && /3|4|5/.test(b.style) ? !1 : !(b.ssc && /^false$/i.test(b.ssc.toString()));
                b.type = g.BSHARE_BUTTON_TYPE || b.type;
                b.publisherUuid = b.uuid || void 0;
                return b
            });
            for (var f in a.defaultConfig) a.defaultConfig[f] !== b[f] && (a.customization[f] = b[f]);
            if (c.type != 15) c.popcss = "";
            if (g.location.href.indexOf(a.whost + "/moreStyles") < 0) b.promote = !1
        };
        a.writeButton = function () {
            var c = "",
                e = {
                    0: 0,
                    1: [110, 85],
                    10: [90, 51],
                    11: [82, 82]
                },
                g = {
                    0: 16,
                    1: 24,
                    10: 21,
                    11: 49
                },
                h = a.imageBasePath,
                i = b.style,
                m = b.image,
                o = b.showShareCount,
                n = b.width,
                p = b.height;
            /^(3|4|5)$/.test(i) || (c = '<div class="bsPromo bsPromo1"></div>');
            i > 1 && i < 6 ? a.writeBshareDiv(c) : i == -1 ? (d.getElem(l, "div", "bshare-custom", function (b) {
                if (!b.childNodes[0].className || b.childNodes[0].className.indexOf("bsPromo") < 0) {
                    var c = d.createElement("div", "", "bsPromo bsPromo" + (a.isLite ? 2 : 1));
                    b.insertBefore(c, b.childNodes[0])
                }
            }), (b.beta || b.popjs) && a.writeBshareDiv('<div class="buzzButton">' + b.text + "</div>", "")) : i >= 0 && (i != 999 && (m = h + "logo_square_s.gif", i != 0 && (m = h + "button_custom" + i + "-" + (b.lang == "en" ? "en" : "zh"), o && (m += "-c"), i == 10 && (n = /Blue|Red|Green|Grey|Orange/.test(b.bgc) ? b.bgc : "Orange", m += "-" + n), m += ".gif"), n = e[i][o ? 0 : 1], p = g[i]), c += '<div class="buzzButton bsStyle' + i + '" style="height:' + p + "px;color:" + b.fgc + ";", i == 0 ? (c += b.icon ? "background:transparent url(" + m + ") no-repeat;" : "", c += 'float:left"><div style="padding:0 4px 0 ' + (b.icon ? "21px" : "0") + ";" + (a.isLite ? "height:16px;" : "") + '"><span class="bshareText" style="line-height:18px;float:left;">' + (b.text === null ? "分享" : b.text) + "</span></div></div>", o && (c += '<div style="background:transparent url(' + h + 'counter_box.gif) no-repeat;float:left;width:40px;height:16px;text-align:center;font-weight:bold;">&nbsp;<span style="position:relative;line-height:16px;" class="shareCount"></span></div>')) : (c += ";background:transparent url(" + m + ") no-repeat;text-align:center;width:" + n + 'px;">', o && i != 999 && (c += '<span style="font-weight:bold;position:relative;line-height:' + (i == 10 ? "22" : "25") + 'px;" class="shareCount"></span>'), c += "</div>"), c += '<div style="clear:both;"></div>', a.writeBshareDiv(c, "font-size:12px;height:" + p + "px;width:" + n + "px;"))
        };
        a.more = function () {
            return typeof a.moreDiv == "function" ? (a.moreDiv(), !0) : !1
        };
        a.load = function (f) {
            if (!f) {
                if (b.mdiv < 0) return;
                var e = 0,
                    q = setInterval(function () {
                        a.more() || e >= 30 ? clearInterval(q) : ++e
                    }, 100);
                return !1
            }
            c.target = f || "";
            a.click();
            a.disappear();
            a.prepare();
            if (!a.loadPlus || !a.loadPlus()) {
                var j;
                if (f == "bsharesync") j = [a.whost, "/bsyncShare?site=", f].join(""), a.updateCounter(), a.shareStats(f), d.submitForm(j, c, "_blank");
                else if (f == "email") j = [a.bhost, "/bshareEmail"].join(""), a.shareStats(f), d.submitForm(j, c, "_blank");
                else if (f == "clipboard") d.copy2Clipboard(), a.shareStats(f);
                else if (f == "favorite") d.add2Bookmark(), a.shareStats(f);
                else if (f == "printer") d.add2Printer(), a.shareStats(f);
                else if (f == "weixin") {
                    j = a.bhost + "/barCode?site=weixin";
                    for (var i in c) !/content|target/.test(i) && typeof c[i] != "function" && (j += "&" + i + "=" + d.encode(c[i]));
                    l.getElementById("bsWXBox") || a.createBox(a.boxConfigWX);
                    a.getFrame(a.boxConfigWX).innerHTML = '<img style="width:178px;height:178px;margin:21px;display:inline-block;" src="' + j + '" />';
                    a.display(!1, a.boxConfigWX)
                } else {
                    if (h.bShareLoad)
                        for (i in j = a.bhost + "/bshare_redirect?site=" + f, c) !/content|target/.test(i) && typeof c[i] != "function" && (j += "&" + i + "=" + d.encode(c[i]));
                    else (j = g.BS_PURL_MAP[f]) || alert(a.iL8n.loadFailed), f == "gmw" ? j = d.replaceParam("${URL}", c.url.replace("http://", ""), j) : c.url && (j = d.replaceParam("${URL}", c.url, j)), j = d.replaceParam("${TITLE}", c.title, j), j = d.replaceParam("${CONTENT}", c.summary, j), j = d.replaceParam("${IMG}", c.pic, j), j = d.replaceParam("${VIDEO}", c.video, j);
                    g.open(j, "", "height=600,width=800,top=100,left=100,screenX=100,screenY=100,scrollbars=yes,resizable=yes")
                }
            }
        };
        a.show = function () {
            a.load()
        };
        a.onLoad = function () {
            d.getElem(l, "a", "bshareDiv", function (b, c) {
                d.getElem(b, "div", "buzzButton", function (b) {
                    b.onclick = function (b) {
                        return function (c) {
                            a.more(c, b);
                            return !1
                        }
                    }(c)
                })
            });
            var c = b.showShareCount;
            if (b.style == 0) {
                var e = d.getElem(l, "div", "buzzButton")[0].offsetWidth;
                c && (e += 41);
                d.getElem(l, "a", "bshareDiv", function (a) {
                    a.style.width = e + "px"
                })
            }
            var h = a.entries.length;
            if (c && h > 0) {
                for (var c = "", j = 0; j < h; j++) {
                    var i = a.entries[j];
                    if (typeof i.url == "string") {
                        if (d.isIe && c.length + i.url.length > 2E3) break;
                        c != "" && (c += "|");
                        c += i.url
                    }
                }
                c != "" && (c += "|");
                c += g.location.href;
                a.count(c)
            }
        };
        a.renderButton = function () {
            d.loadStyle("a.bshareDiv,#bsPanel,#bsMorePanel,#bshareF{border:none;background:none;padding:0;margin:0;font:12px Helvetica,Calibri,Tahoma,Arial,宋体,sans-serif;line-height:14px;}#bsPanel div,#bsMorePanel div,#bshareF div{display:block;}.bsRlogo .bsPopupAwd,.bsRlogoSel .bsPopupAwd,.bsLogo .bsPopupAwd,.bsLogoSel .bsPopupAwd{line-height:16px !important;}a.bshareDiv div,#bsFloatTab div{*display:inline;zoom:1;display:inline-block;}a.bshareDiv img,a.bshareDiv div,a.bshareDiv span,a.bshareDiv a,#bshareF table,#bshareF tr,#bshareF td{text-decoration:none;background:none;margin:0;padding:0;border:none;line-height:1.2}a.bshareDiv span{display:inline;float:none;}div.buzzButton{cursor:pointer;font-weight:bold;}.buzzButton .shareCount a{color:#333}.bsStyle1 .shareCount a{color:#fff}span.bshareText{white-space:nowrap;}span.bshareText:hover{text-decoration:underline;}a.bshareDiv .bsPromo,div.bshare-custom .bsPromo{display:none;position:absolute;z-index:100;}a.bshareDiv .bsPromo.bsPromo1,div.bshare-custom .bsPromo.bsPromo1{width:51px;height:18px;top:-18px;left:0;line-height:16px;font-size:12px !important;font-weight:normal !important;color:#fff;text-align:center;background:url(" + a.imageBasePath + "bshare_box_sprite2.gif) no-repeat 0 -606px;}div.bshare-custom .bsPromo.bsPromo2{background:url(" + a.imageBasePath + "bshare_promo_sprite.gif) no-repeat;cursor:pointer;}");
            a.writeButton();
            c.type == 15 && a.filterECPlats()
        };
        a.loadButtonStyle = function () {
            if (c.type != 15) {
                var f, e = b.style;
                if (b.beta) f = a.jsBasePath + "styles/bshareS888.js?v=20150716";
                else if (b.popjs) f = b.popjs;
                else if (b.style != -1 && (f = a.jsBasePath + "styles/bshareS" + (e > 1 && e < 6 ? e : 1) + ".js?v=20150716", b.pop == -1 && (e <= 1 || e >= 6))) f = "";
                f && d.loadScript(f)
            }
        };
        a.international = function (c) {
            b.lang == "zh" ? c() : d.loadScript(a.jsBasePath + "langs/bs-lang-" + b.lang + ".js?v=20150716", c)
        };
        a.start = function () {
            d.loadEngine && (d.loadEngine(e), a.loadOptions(), a.international(function () {
                if (!a.completed) {
                    if (d.isUndefined(b.text) || b.text === null) b.text = b.style == 0 ? a.iL8n.shareTextShort : a.iL8n.shareText;
                    c.type != 1 && a.renderButton();
                    d.createShareBox(e);
                    if (c.type == 15) a.boxConfig = a.boxConfigEC;
                    a.createBox();
                    b.mdiv >= 0 && c.type != 15 && d.loadScript(a.jsBasePath + "components/bsMore.js?v=20150716");
                    if (c.type == 1) return a.load(), !1;
                    a.loadButtonStyle();
                    a.onLoad();
                    a.prepare(0);
                    setTimeout(function () {
                        h.viewed || a.view();
                        setTimeout(function () {
                            h.bShareLoad || d.loadScript(a.jsBasePath + "components/bsPlatforms.js?v=20150716")
                        }, 3E3)
                    }, 3E3);
                    a.completed = !0
                }
            }))
        };
        a.init = function () {
            if (!a.isReady) a.isReady = !0, d.loadScript(a.jsBasePath + "engines/bs-engine.js?v=20150716", a.start)
        };
        d.loadScript(a.jsBasePath + "components/bsStatic.js?v=20150716")
    }
})("bShare", window, document);
(function (e, g, l) {
    if (!(g.bShareControl.count > 0)) {
        g.bShareControl.count += 1;
        var d = g.bShareUtil,
            e = g[e],
            h = e.config;
        e.isLite = !0;
        e.customization.type = "lite";
        e.writeBshareDiv = function (a, b) {
            d.getElem(l, "a", "bshareDiv", function (c) {
                if (a) c.innerHTML = a;
                else if (c.innerHTML.length < 24) c.innerHTML = "";
                c.onclick = function () {
                    return !1
                };
                c.style.cssText = (h.inline ? "" : "display:block;") + "text-decoration:none;padding:0;margin:0;" + b || ""
            })
        };
        d.ready(e.init)
    }
})("bShare", window, document);
(function () {
    var e = window.bShare;
    if (!e) e = window.bShare = {};
    e.pnMap = {
        115: ["115收藏夹", 0],
        "139mail": ["139邮箱", 2],
        "9dian": ["豆瓣9点", 6],
        baiducang: ["百度搜藏", 7],
        baiduhi: ["百度空间", 8],
        bgoogle: ["Google书签", 10],
        bsharesync: ["一键通", 16],
        caimi: ["财迷", 17],
        cfol: ["中金微博", 18],
        chouti: ["抽屉", 20],
        clipboard: ["复制网址", 21],
        cyolbbs: ["中青论坛", 22],
        cyzone: ["创业吧", 23],
        delicious: ["美味书签", 24],
        dig24: ["递客网", 25],
        digg: ["Digg", 26],
        diglog: ["奇客发现", 27],
        diigo: ["Diigo", 29],
        douban: ["豆瓣网", 30],
        dream: ["梦幻人生", 31],
        duitang: ["堆糖", 32],
        eastdaymb: ["东方微博", 33],
        email: ["电子邮件", 34],
        evernote: ["Evernote", 35],
        facebook: ["Facebook", 36],
        fanfou: ["饭否", 37],
        favorite: ["收藏夹", 38],
        feixin: ["飞信", 39],
        friendfeed: ["FriendFeed", 40],
        fwisp: ["Fwisp", 42],
        ganniu: ["赶牛微博", 43],
        gmail: ["Gmail", 44],
        gmw: ["光明网", 45],
        gtranslate: ["谷歌翻译", 46],
        hemidemi: ["黑米书签", 47],
        hexunmb: ["和讯微博", 48],
        huaban: ["花瓣", 49],
        ifengkb: ["凤凰快博", 50],
        ifengmb: ["凤凰微博", 51],
        ifensi: ["粉丝网", 52],
        instapaper: ["Instapaper", 53],
        itieba: ["i贴吧", 54],
        joinwish: ["好愿网", 55],
        kaixin001: ["开心网", 56],
        laodao: ["唠叨网", 57],
        leihou: ["雷猴", 58],
        leshou: ["乐收", 59],
        linkedin: ["LinkedIn", 60],
        livespace: ["MS Livespace", 61],
        mala: ["麻辣微博", 63],
        masar: ["玛撒网", 65],
        meilishuo: ["美丽说", 66],
        miliao: ["米聊", 67],
        mister_wong: ["Mister Wong", 68],
        mogujie: ["蘑菇街", 69],
        moptk: ["猫扑推客", 70],
        msn: ["MSN", 71],
        myshare: ["MyShare", 72],
        myspace: ["MySpace", 73],
        neteasemb: ["网易微博", 74],
        netvibes: ["Netvibes", 75],
        peoplemb: ["人民微博", 76],
        pinterest: ["Pinterest", 79],
        poco: ["Poco网", 81],
        printer: ["打印", 82],
        printf: ["Print Friendly", 83],
        qqmb: ["腾讯微博", 84],
        qqshuqian: ["QQ书签", 85],
        qqxiaoyou: ["朋友网", 86],
        qzone: ["QQ空间", 87],
        readitlater: ["ReadItLater", 88],
        reddit: ["Reddit", 89],
        redmb: ["红微博", 90],
        renjian: ["人间网", 91],
        renmaiku: ["人脉库", 92],
        renren: ["人人网", 93],
        shouji: ["手机", 95],
        sinaminiblog: ["新浪微博", 96],
        sinaqing: ["新浪Qing", 97],
        sinavivi: ["新浪Vivi", 98],
        sohubai: ["搜狐白社会", 99],
        sohuminiblog: ["搜狐微博", 100],
        southmb: ["南方微博", 101],
        stumbleupon: ["StumbleUpon", 102],
        szone: ["守株网", 103],
        taojianghu: ["淘江湖", 104],
        tianya: ["天涯", 105],
        tongxue: ["同学微博", 106],
        tuita: ["推他", 107],
        tumblr: ["Tumblr", 108],
        twitter: ["Twitter", 109],
        ushi: ["优士网", 110],
        waakee: ["挖客", 112],
        wealink: ["若邻网", 113],
        woshao: ["我烧网", 115],
        xianguo: ["鲜果网", 116],
        xiaomeisns: ["校媒采通", 117],
        xinminmb: ["新民微博", 118],
        xyweibo: ["微博校园", 119],
        yaolanmb: ["摇篮微博", 120],
        yijee: ["易集网", 121],
        youdao: ["有道书签", 122],
        zjol: ["浙江微博", 124],
        xinhuamb: ["新华微博"],
        szmb: ["深圳微博"],
        changshamb: ["微长沙"],
        hefeimb: ["合肥微博"],
        wansha: ["玩啥e族"],
        "189share": ["手机快传"],
        diandian: ["点点网"],
        tianji: ["天际网"],
        jipin: ["开心集品"],
        chezhumb: ["车主微博"],
        gplus: ["Google+"],
        yidongweibo: ["移动微博"],
        youdaonote: ["有道笔记"],
        jschina: ["微江苏"],
        mingdao: ["明道"],
        jxcn: ["江西微博"],
        qileke: ["奇乐收藏"],
        sohukan: ["搜狐随身看"],
        maikunote: ["麦库记事"],
        lezhimark: ["乐知书签"],
        "189mail": ["189邮箱"],
        wo: ["WO+分享"],
        gmweibo: ["光明微博"],
        jianweibo: ["吉安微博"],
        qingbiji: ["轻笔记"],
        duankou: ["端口网"],
        qqim: ["QQ好友"],
        kdweibo: ["云之家"],
        xueqiu: ["雪球"],
        weixin: ["微信"]
    };
    e.iL8n = {
        promoteHot: "热",
        promoteNew: "新",
        promoteRec: "推荐",
        rtnTxt: "选择其他平台 >>",
        shareText: "分享到",
        shareTextShort: "分享",
        shareTextPromote: "分享有礼",
        morePlats: "更多平台...",
        morePlatsShort: "更多...",
        whatsThis: "这是什么工具？",
        promote: "分享有礼",
        promoteShort: "奖",
        searchHint: "输入平台关键字查询",
        closeHint: "30分钟内不再出现此分享框",
        loadFailed: "网络太慢无法加载，请稍后再试。",
        loadFailed2: "很抱歉，无法连接服务器。请稍后重试！",
        notSupport: "不支持！",
        copySuccess: "复制成功！您可以粘贴到QQ/MSN上分享给您的好友！",
        copyTip: "请按Ctrl+C复制，然后您可以粘贴到QQ/MSN上分享给您的好友！",
        bookmarkTip: "按了OK以后，请按Ctrl+D（Macs用Command+D）。",
        confirmClose: "关闭后，该分享按钮30分钟将不再出现，您也无法使用分享功能，确定吗？"
    }
})();
(function () {
    function C() {
        var g = ".bshare-custom{font-size:13px;line-height:16px !important;}.bshare-custom.icon-medium{font-size:14px;line-height:20px !important;}.bshare-custom.icon-medium-plus,.bshare-custom.icon-large{font-size:16px;line-height:26px !important;}.bshare-custom.icon-large{line-height:44px !important;}.bshare-custom a{padding-left:19px;height:16px;_height:18px;text-decoration:none;display:none;zoom:1;vertical-align:middle;cursor:pointer;color:#333;margin-right:3px;-moz-opacity:1;-khtml-opacity:1;opacity:1;}.bshare-custom a:hover{text-decoration:underline;-moz-opacity:0.75;-khtml-opacity:0.75;opacity:0.75;}.bshare-custom.icon-medium a{padding-left:27px;height:24px;}.bshare-custom.icon-medium-plus a{padding-left:35px;height:32px;}.bshare-custom.icon-large a{padding-left:53px;height:50px;}.bshare-custom .bshare-more{padding-left:0 !important;color:#333 !important;" + c + ".bshare-custom #bshare-shareto{color:#333;text-decoration:none;font-weight:bold;margin-right:8px;" + c;
        for (b in d.pnMap) a = d.topMap[b], g += ".bshare-custom .bshare-" + b + '{background:url("' + p + (a ? l : b) + q + '")' + (a ? " no-repeat 0 " + a * D + "px;" + c : m) + ".bshare-custom.icon-medium .bshare-" + b + '{background:url("' + r + (a ? l : b) + '.gif")' + (a ? " no-repeat 0 " + a * E + "px;" + c : m) + ".bshare-custom.icon-medium-plus .bshare-" + b + '{background:url("' + s + (a ? l : b) + '.gif")' + (a ? " no-repeat 0 " + a * F + "px;" + c : m) + ".bshare-custom.icon-large .bshare-" + b + '{background:url("' + t + (a ? l : b) + '.gif")' + (a ? " no-repeat 0 " + a * G + "px;" + c : m);
        g += '.bshare-custom #bshare-more-icon,.bshare-custom .bshare-more-icon{background:url("' + p + "more" + q + '") no-repeat;padding-left:19px !important;}.bshare-custom.icon-medium #bshare-more-icon,.bshare-custom.icon-medium .bshare-more-icon{background:url("' + r + 'more.gif") no-repeat;padding-left:27px !important;}.bshare-custom.icon-medium-plus #bshare-more-icon,.bshare-custom.icon-medium-plus .bshare-more-icon{background:url("' + s + 'more.gif") no-repeat;padding-left:35px !important;}.bshare-custom.icon-large #bshare-more-icon,.bshare-custom.icon-large .bshare-more-icon{background:url("' + t + 'more.gif") no-repeat;padding-left:53px !important;}';
        for (b in y) e = H + y[b], g += ".bshare-custom .bshare-more." + e + "{background:url(" + p + e + q + ") no-repeat;}.bshare-custom.icon-medium a.bshare-more." + e + "{background:url(" + r + e + ".gif) no-repeat;}.bshare-custom.icon-medium-plus a.bshare-more." + e + "{background:url(" + s + e + ".gif) no-repeat;}.bshare-custom.icon-large a.bshare-more." + e + "{background:url(" + t + e + ".gif) no-repeat;}";
        g += ".bshare-custom .bshare-share-count{width:41px;background:transparent url(" + h + "counter_box_18.gif) no-repeat;height:18px;line-height:18px !important;color:#333;text-align:center;font:bold 11px Arial,宋体,sans-serif;zoom:1;_padding-top:2px;" + c + ".bshare-custom.icon-medium .bshare-share-count{width:45px;padding:0 0 0 2px;vertical-align:bottom;background:transparent url(" + h + "counter_box_24.gif) no-repeat;height:24px;color:#444;line-height:24px !important;text-align:center;font:bold 12px Arial,宋体,sans-serif;zoom:1;_padding-top:5px;" + c + ".bshare-custom.icon-medium-plus .bshare-share-count{width:60px !important;padding:0 0 0 3px;vertical-align:bottom;background:transparent url(" + h + "counter_box_32.gif) no-repeat;height:32px;line-height:32px !important;text-align:center;color:#444;font:normal 18px Arial,宋体,sans-serif;zoom:1;_padding-top:6px;" + c + ".bshare-custom.icon-large .bshare-share-count{width:94px !important;padding:0 0 0 5px;vertical-align:bottom;background:transparent url(" + h + "counter_box_50.gif) no-repeat;height:50px;line-height:50px !important;text-align:center;color:#444;font:normal 22px Arial,宋体,sans-serif;zoom:1;_padding-top:12px;" + c;
        j.loadStyle(g);
        if (!d.anchorsBinded) {
            d.anchorsBinded = !0;
            var u, v, z, k, g = function (a) {
                if (!a) a = w.event;
                if (u = a.target || a.srcElement) {
                    v = u.className.split(" ");
                    z = u.buttonIndex;
                    for (f = 0; f < v.length; f++)
                        if (i = v[f], /^bshare-/.test(i)) {
                            k = i.slice(7);
                            break
                        }
                    if (k) {
                        if (k == "more") {
                            if (n.pop == -2) return !1;
                            d.more(a);
                            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                            return !1
                        }
                        d.share(a, k, z)
                    }
                    k = null;
                    return !1
                }
            },
                B = j.getElem(A, "div", "bshare-custom"),
                x, o;
            for (f = 0; f < B.length; f++) {
                x = B[f].getElementsByTagName("a");
                for (i = 0; i < x.length; i++) o = x[i], o.buttonIndex = f, A.addEventListener ? o.addEventListener("click", g, !1) : o.attachEvent("onclick", g)
            }
        }
    }
    var w = window,
        j = w.bShareUtil,
        d = w.bShare,
        n = d.config,
        h = d.imageBasePath,
        A = document,
        p = h + "logos/s4/",
        r = h + "logos/m2/",
        s = h + "logos/mp2/",
        t = h + "logos/l3/",
        D = -18,
        E = -26,
        F = -34,
        G = -52,
        l = "sprite/top_logos_sprite",
        c = "*display:inline;display:inline-block;}",
        m = " no-repeat;" + c,
        f, i, b, a, q = j.isIe ? ".gif" : ".png",
        H = "more-style-",
        e, y = ["android", "apple", "sharethis", "sharethis-orange", "addthis"];
    j.ready(function () {
        var a = function () {
            d.completed ? (C(), d.params.type != 15 && n.pop != -1 && !n.beta && !n.popjs && j.loadScript(d.jsBasePath + "styles/bshareS887.js?v=20150716")) : setTimeout(a, 50)
        };
        a()
    })
})();