/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-24 14:26:59
 * @version $Id$
 */

define(function (require, exports, modules) {
    var $ = require("jquery");
    var getDomain=function(){
        var hostArr=document.location.host.split("."),hostLen=hostArr.length,hostDomain;
        if(hostLen>2){hostDomain=hostArr[hostLen-2].concat(".",hostArr[hostLen-1])}
        return hostDomain;
    },_DOMAIN=getDomain();
    document.domain=_DOMAIN;
    window.T = window.T || {},
    T.site=T.site || {},
    T.url=T.url || {},
    T.json=T.json || {},
    T.type=T.type || {},
    $.extend(T.site,{
        action:'http://action.' + _DOMAIN + '/',
        web:'http://www.' + _DOMAIN + '/',
        base:'http://base.' + _DOMAIN + '/',
        domain:_DOMAIN
    });
    T.url.getQueryValue=function(key,url){var url=url||window.location.href,escapeReg=function(source){return String(source).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])","g"),"\\\x241")},reg=new RegExp("(^|&|\\?|#)"+escapeReg(key)+"=([^&#]*)(&|\x24|#)","i"),match=url.match(reg);if(match){return match[2]}return null};
    T.url.getFileName=function(url){var url=url||window.location.href;url=url.substring(0,(url.indexOf("#")==-1)?url.length:url.indexOf("#"));url=url.substring(0,(url.indexOf("?")==-1)?url.length:url.indexOf("?"));url=url.substring(url.lastIndexOf("/")+1,url.length);return url};
    T.Each=function(enumerable,iterator,context){var i,n,t;if(typeof iterator=="function"&&enumerable){n=typeof enumerable.length=="number"?enumerable.length:enumerable.byteLength;if(typeof n=="number"){if(Object.prototype.toString.call(enumerable)==="[object Function]"){return enumerable}for(i=0;i<n;i++){t=enumerable[i];t===undefined&&(t=enumerable.charAt&&enumerable.charAt(i));iterator.call(context||null,t,i,enumerable)}}else{if(typeof enumerable=="number"){for(i=0;i<enumerable;i++){iterator.call(context||null,i,i,i)}}else{if(typeof enumerable=="object"){for(i in enumerable){if(enumerable.hasOwnProperty(i)){iterator.call(context||null,enumerable[i],i,enumerable)}}}}}}return enumerable};
    /* 类型判断集合 */
    T.Each(['Array','Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
        T.type['is' + name] = function(obj) {
          return toString.call(obj) === '[object ' + name + ']';
        };
    });
    T.type.isObject=function(obj){var type = typeof obj;return type === 'function' || type === 'object' && !!obj;};
    T.type.isArrayLike = function(collection) {
        var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1,
        property = function(key) {
            return function(obj) {
              return obj == null ? void 0 : obj[key];
            };
        },
        getLength=property('length'),
        length = getLength(collection);
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };
    T.type.isEmpty = function(obj) {
        if (obj == null) return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))){ return obj.length === 0;}
        //return _.keys(obj).length === 0;
    };
    /* 
     * 用途：设置cookie 依赖 jquery.cookie.js
     */
    T.cookie = function (key, value, day) {
        //?替换成分钟数如果为60分钟则为 60 * 60 *1000
        if (typeof (key) != 'undefined' && typeof (value) != 'undefined') {
            if (day) {
                $.cookie(key, value, { expires: day, path: '/', domain: T.site.domain });
            } else {
                $.cookie(key, value, { path: '/', domain: T.site.domain });
            }
        } else if (typeof (key) != 'undefined') {
            return $.cookie(key);
        }
    };
T.bind = function(t, n, o) {
        t && (t.nodeType || 1 == t.nodeType || 9 == t.nodeType || t.top === e.top) && (t.addEventListener ? t.addEventListener(n, o, !1) : t.attachEvent ? t.attachEvent("on" + n, o) : t["on" + n] = o)
    };
T.RE = {
    number: /^\d+$/,
    mobile: /^1[3|4|5|6|7|8|9]\d{9}$/,
    tel: /^(\d{3,4}-)\d{7,8}$/,
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    mobile_email: /^1[3|4|5|6|7|8|9]\d{9}$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    mobile_email_uname: /^1[3|4|5|6|7|8|9]\d{9}$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$|^[_a-zA-Z0-9\-]{4,16}$/,
    code: /^[0-9]{6}$/,
    qq: /^[0-9]{5,12}$/,
    pwd: /^\S{6,16}$/,
    uri: /^[a-zA-z]+:\/\/[^\s]*$/,
    url: /^[a-zA-z]+:\/\/[\w-]+\.[\w-]+\.[\w-]+\S*$/,
    date: /^((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31))|(([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)$/,
    time: /sdf/,
    datetime: /asd/,
    uname: /^[a-zA-Z]\w{5,15}$/,
    nonempty: /\S/,
    expedited_zone: /^广东省\^深圳市\^南山区|^广东省\^深圳市\^福田区/,
    quantity: /^数量|数量$/,
    size: /\d+[\d.]*[A-za-z]*\*+\d+[\d.]*[A-za-z]*|\d+[*×]\d+/i
 };
 T.FORM = function(n, o, i) {
        function r(e, n, o) {
            var i = this;
            e && n && (i.form = "string" == typeof e ? document.getElementById(e) : e, i.options = n, i.funs = o, i.form && n.action && (i.action = n.action, i.items = {}, i.indexs = [], i.caches = {}, i.cacheForm = t.createElement("form"), i.cacheForm.style.display = "none", i.init()))
        }
        return r.prototype = {/*
bind: function(e) {
                var t = this;
                if (e) {
                    var n = e.type;
                    if (/^textarea$/i.test(e.tagName) && (n = "textarea"), n) {
                        var o = e.name;
                        if (/^submit$|^button$|^image$/.test(n)){
                          //  T.bind(e, "click", function(e) {
                          //      t.form.submit()
                          //  });
                        }else if (/^reset$/.test(n)){
                           //;
                        }else if (o) {
                            var i = t.items[o] || {};
                            if (i.type = n, i.name = o, i.tips = i.tips || {}, T.bind(e, "invalid", function(e) {
                                T.stopPropagation(e), T.preventDefault(e)
                            }), /^text$|^textarea$|^password$/.test(n)) {
                                /email/.test(i.rule) && T.Mailfix({inputs: [e]}), i.noplaceholder || t.placeholder(e, i.tips.placeholder), T.bind(e, "focus", function(n) {
                                    $(T.closest(e, "span")).addClass("focus"), t.isEnd = T.Array.indexOf(t.indexs, i.name) >= t.indexs.length
                                }), T.bind(e, "blur", function(n) {
                                    if ($(T.closest(e, "label")).removeClass("focus"), t.showInput(i.show, i.name), i.rule) {
                                        i.value = i.evts.value.call(t, e);
                                        var r = i.evts.valid.call(t, e);
                                        i.evts.output.call(t, e, r), t.validator();
                                        var a = {};
                                        a[o] = i.value, r && r.ret && i.unique && i.unique_value != i.value && T.POST({action: i.unique,params: a,success: function(n) {
                                                i.unique_value = i.value, i.uniqued = !0, i.evts.output.call(t, e, {ret: !0,msg: ""}), t.validator()
                                            },failure: function(n) {
                                                i.unique_value = i.value, i.evts.output.call(t, e, {ret: !1,msg: i.tips.unique || ""})
                                            },error: function() {
                                                T.alt(r.msg || T.TIPS.DEF, function(e) {
                                                    e.remove()
                                                })
                                            }})
                                    }
                                });
                                var r = !0;
                                T.bind(e, "keyup", function(e) {
                                    e = e || event, r = !0
                                }), t.options.prevent || T.bind(e, "keydown", function(o) {
                                    if (o = o || event, !/^textarea$/.test(n) && r) {
                                        r = !1;
                                        var a = o.keyCode || o.which, s = T.Array.indexOf(t.indexs, i.name);
                                        if (13 === a) {
                                            i.show && t.showInput(i.show, i.name);
                                            var l = t.indexs[s + 1], c = i.evts.valid.call(t, e);
                                            if (c && c.ret) {
                                                var u = t.input(l);
                                                u ? (t.isEnd = !1, "function" == typeof u.focus && u.focus()) : (t.isEnd = !0, t.form.submit())
                                            }
                                        }
                                    }
                                }), e.removeAttribute && e.removeAttribute("placeholder")
                            } else
                                /^radio$|^checkbox$|^select/.test(n) && (t.checked.call(t, e, !1), t.checkall.call(t, e, i), T.bind(e, /^select/.test(i.type) ? "change" : "click", function(n) {
                                    t.checked.call(t, e, !1), t.showInput(i.show, i.name), /all$/.test(o) && t.checkall.call(t, e, i), i.rule && (i.value = i.evts.value.call(t, e, i), i.evts.output.call(t, e, i.evts.valid.call(t, e, i)), t.validator())
                                }));
                            t.items[o] && (t.items[o] = i, t.indexs.push(o))
                        }
                    }
                }
            },*/
            placeholder: function(e, n) {
                return function(e, n) {
                    function o(t) {
                        var n = e.value.replace(/(^\s*)|(\s*$)/g, "");
                        $(e).removeClass("placeholder"), r.style.display = "none", e.focus(), "" == n && (e.value = "")
                    }
                    function i() {
                        var t = e.value.replace(/(^\s*)|(\s*$)/g, "");
                        "" === t ? ($(e).addClass("placeholder"), $(r).addClass("placeholder"), r.style.cssText = "position:absolute;left:" + e.offsetLeft + "px;top:" + e.offsetTop + "px;display:none;_zoom:1;", r.style.display = "", r.value = n) : ($(e).removeClass("placeholder"), r.style.display = "none")
                    }
                    if (e) {
                        var r = document.createElement(e.tagName.toLowerCase());
                        r.className = e.className, r.setAttribute("autocomplete", "off"), "input" === e.tagName.toLowerCase() && (r.type = "text"), e.parentNode.appendChild(r), e.getAttribute("disabled") && r.setAttribute("disabled", "disabled"), T.bind(r, "focus", o), T.bind(e, "focus", o), T.bind(e, "blur", i), i()
                    }
                }(e, n)
            }
        }, new r(n, o, i)

    };
    T.IS={AXO: false,CVS: true,DM: undefined,EL: true,FD: true,FR: true,XHR: true,fixed: true}
    T.mailSuffix = ["@qq.com", "@163.com", "@126.com", "@sina.com", "@gmail.com", "@sina.cn", "@139.com", "@189.cn", "@wo.com.cn", "@2008.sina.com", "@51uc.com", "@vip.sina.com", "@3g.sina.cn", "@foxmail.com", "@vip.qq.com", "@yeah.net", "@vip.163.com", "@yahoo.com", "@sohu.com", "@56.com", "@yahoo.com.cn", "@msn.com", "@hotmail.com", "@live.com", "@aol.com", "@ask.com", "@163.net", "@263.net", "@came.net.cn", "@8ycn.net", "@tuziba.net", "@googlemail.com", "@mail.com", "@aim.com", "@inbox.com", "@21cn.com", "@tom.com", "@eyou.com", "@x.cn", "asiainfo.com", "mplus-info.com", "exinfozone.com.cn", "@chinaren.com", "@sogou.com"];
    T.Mailfix = function(n) {
        n = n || {};
        var o = {},t=document;
        if (T.mailSuffix && T.mailSuffix.length && "object" == typeof T.mailSuffix && (o.container = t.body || t.documentElement, o.container && (o.inputs = t.getElementsByName(n.name || "mail"), n.inputs && (o.inputs = n.inputs), o.inputs))) {
            o.maxlength = 5, o.trim = function(e) {
                return e.replace(/(^\s*)|(\s*$)/g, "")
            }, o.addEvent = function(t, n, o) {
                e.addEventListener ? t.addEventListener(n, o, !1) : t.attachEvent("on" + n, o)
            }, o.stopPropagation = function(t) {
                t && t.stopPropagation ? t.stopPropagation() : e.event.cancelable = !1
            }, o.preventDefault = function(t) {
                t && t.preventDefault ? t.preventDefault() : e.event.returnValue = !1
            }, o.offset = function(e) {
                var t = {top: 0,left: 0}, n = function(e) {
                    e && (t.top += e.offsetTop, t.left += e.offsetLeft, n(e.offsetParent))
                };
                return n(e), t
            }, o.closest = function(e, t) {
                var n = function(e) {
                    var o = e.tagName.toUpperCase();
                    return "HTML" === o ? null : e.className.indexOf(t) >= 0 ? e : n(e.parentNode)
                };
                return n(e)
            }, o.fixs = T.mailSuffix, o.size = T.mailSuffix.length, o.index = 0, o.items = null, o.item = null, o.length = 0, o.search = function(t) {
                t = t || e.event;
                var n = t.keyCode || t.which;
                if (13 != n && 38 != n && 40 != n) {
                    o.hide(), this && this.nodeType && (o.input = this);
                    var i = o.trim(o.input.value || "");
                    if (o.value = i, "" !== o.value) {
                        o.fixs = T.mailSuffix, o.fix = "";
                        var r = o.value.lastIndexOf("@");
                        if (r > 0 && (o.fix = o.value.substring(r)), "" != o.fix && "undefined" != typeof o.fix) {
                            o.fixs = [];
                            for (var a = o.fix.length, s = null, l = 0, u = 0; u < o.size; u++)
                                s = T.mailSuffix[u], l = s.length, l >= a && o.fix === s.substring(0, a) && o.fixs.push(s.substring(a))
                        }
                        o.fixs.length && o.show()
                    }
                }
            }, o.position = function() {
                var e = o.offset(o.input), t = o.offset(o.container);
                o.dom.style.top = e.top + o.input.offsetHeight - t.top + "px", o.dom.style.left = e.left - t.left + "px"
            }, o.hover = function() {
                o.index = o.index < 0 ? o.length - 1 : o.index, o.index = o.index >= o.length ? 0 : o.index;
                for (var e = o.length - 1; e >= 0; e--)
                    o.items[e].className = o.index == e ? "selected" : "";
                o.item = o.items[o.index], o.item && (o._value = o.item.innerHTML)
            }, o.keydown = function(e) {
                if (o.dom) {
                    e = e || event;
                    var t = e.keyCode || e.which;
                    13 == t ? (o.item && (o.input.value = o.item.innerHTML), o.hide()) : 38 == t ? (o.preventDefault(e), o.index--, o.hover()) : 40 == t && (o.preventDefault(e), o.index++, o.hover())
                }
            }, o.click = function(e) {
                var t = this;
                o.input.value = t.innerHTML, o.hide(), o.input.blur()
            }, o.show = function() {
                this && this.nodeType && (o.input = this), o.selectedIndex = 0, o.dom && (o.dom.parentNode.removeChild(o.dom), o.dom = null), o.dom = t.createElement("div"), o.dom.className = "association";
                var e = o.closest(o.input, "popup_layer");
                e && (o.container = e), o.container.appendChild(o.dom), T.IS.fixed || (o.dom.innerHTML = '<div class="popup_opacity"><iframe frameborder="0" scrolling="no"></iframe></div>'), o.list = t.createElement("ul"), o.dom.appendChild(o.list), o.dom.style.width = o.input.offsetWidth - 2 + "px", o.count = Math.min(o.fixs.length, o.maxlength);
                for (var n = T.RE.mobile.test(o.value) ? '<li class="selected">' + o.value + "</li>" : "", i = 0; i < o.count; i++)
                    n += "<li" + (n ? "" : ' class="selected"') + ">" + o.value + o.fixs[i] + "</li>";
                o.list.innerHTML = n, o.position(), o.items = o.list.getElementsByTagName("li"), o.length = o.items.length, o.index = 0, o.hover();
                for (var r = null, i = 0; i < o.length; i++)
                    r = o.items[i], r.onclick = function() {
                        return function(e) {
                            o.click.call(this, e)
                        }
                    }();
                o.dom.onmousedown = function(e) {
                    o.stopPropagation(e), o.preventDefault(e)
                }, o.dom.onmouseenter = function(e) {
                    o.input.onblur = null
                }, o.dom.onmouseleave = function(e) {
                    o.input.onblur = o.hide
                }, o.input.onblur = o.hide
            }, o.hide = function(e) {
                o.dom && (o.dom.parentNode.removeChild(o.dom), o.dom = null)
            };
            for (var i = o.inputs.length, r = 0; i > r; r++)
                o.inputs[r].onfocus = o.search, o.inputs[r].onkeyup = o.search, o.inputs[r].onblur = o.hide, o.inputs[r].setAttribute("autocomplete", "off");
            window.addEventListener ? t.addEventListener("keydown", o.keydown, !0) : e.attachEvent ? t.attachEvent("onkeydown", o.keydown) : t.onkeydown = o.keydown
        }
    };
    // 清除 cookie 设置过期时间
    T.uncookie = function () {
        $.cookie("__asid", "", { expires: -1, path: '/', domain: T.site.domain });
        //$.cookie("_type", "", { expires: -1, path: '/' });
    };
    T.json.stringify=(function(){var escapeMap={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function encodeString(source){if(/["\\\x00-\x1f]/.test(source)){source=source.replace(/["\\\x00-\x1f]/g,function(match){var c=escapeMap[match];if(c){return c}c=match.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})}return'"'+source+'"'}function encodeArray(source){var result=["["],l=source.length,preComma,i,item;for(i=0;i<l;i++){item=source[i];switch(typeof item){case"undefined":case"function":case"unknown":break;default:if(preComma){result.push(",")}result.push(T.json.stringify(item));preComma=1}}result.push("]");return result.join("")}function pad(source){return source<10?"0"+source:source}function encodeDate(source){return'"'+source.getFullYear()+"-"+pad(source.getMonth()+1)+"-"+pad(source.getDate())+"T"+pad(source.getHours())+":"+pad(source.getMinutes())+":"+pad(source.getSeconds())+'"'}return function(value){switch(typeof value){case"undefined":return"undefined";case"number":return isFinite(value)?String(value):"null";case"string":return encodeString(value);case"boolean":return String(value);default:if(value===null){return"null"}else{if(value instanceof Array){return encodeArray(value)}else{if(value instanceof Date){return encodeDate(value)}else{var result=["{"],encode=T.json.stringify,preComma,item;for(var key in value){if(Object.prototype.hasOwnProperty.call(value,key)){item=value[key];switch(typeof item){case"undefined":case"unknown":case"function":break;default:if(preComma){result.push(",")}preComma=1;result.push(encode(key)+":"+encode(item))}}}result.push("}");return result.join("")}}}}}})();
     /**
     * @将参数对象转换为URL参数字符串
     * @method ConvertToQueryString
     * @param {Object} [options] 必选，参数对象
     * Return {String} URL参数字符串
     */
    T.ConvertToQueryString = function (options) {
        var params = [];
        for (var o in options){
            if (options.hasOwnProperty(o)){params.push(o + '=' + encodeURIComponent(T.type.isObject(options[o]) ? T.json.stringify(options[o]) : options[o]));}
        }
        return params.join('&');
    };
    /* 
     * 用途：基于时间戳生成20位全局唯一标识（每一毫秒只对应一个唯一的标识，适用于生成DOM节点ID） 
     */
    T.UUID=function(len){var timestamp=new Date().getTime()||0,chars="abcdefghijklmnopqrstuvwxyz",uuid="";this.timestamp=this.timestamp==timestamp?timestamp+1:timestamp;timestamp=""+this.timestamp;len=len||20;for(var i=0;i<len;i++){var k=timestamp.charAt(i);if(k==""){k=Math.floor(Math.random()*26)}uuid+=chars.charAt(k)||"x"}return uuid};
    /*
     * 用途：生成GUID的方法
     */
    T.Guid=function(){var guid="";for(var i=1;i<=32;i++){var n=Math.floor(Math.random()*16).toString(16);guid+=n;if((i==8)||(i==12)||(i==16)||(i==20)){guid+="-"}}return guid};
    /**
     * 用途：T.GET 数据成功后回调处理函数
     * @param {Object} options 请求数据
     * @param {String} options.action 请求API
     * @param {Object} options.params 请求参数
     * @param {Function} options.success 请求成功后回调
     * @param {Function} options.failure 请求失败后回调（逻辑错误）
     * @param {Function} options.error 请求出错后回调（系统错误）
     */
    T.callback = function (options) {
        // 有JSON数据返回
        var tdata,terror,idata,ierror,tmsg="";
        if (options && T.type.isObject(options.data)) {
            // console.log('==========>', options.action.replace(/\?.*/, ''), '    ', options.data, '    ', '路由');
            // 服务器返回JSON数据==正常返回
            terror =options.data.errno,tmsg=options.data.errmsg;
            if (terror == 0) {
                ierror=options.data.data.errno,idata=options.data.data;
                if (ierror == 0 && idata) {
                    if (options.success) {
                        options.success(idata);
                    }
                }else{
                  tmsg=idata.errmsg;
                }
            }
        }
        if(options.error || terror || ierror){
            if(options.failure || options.error){
                options.failure && options.failure.call(null,idata);
                options.error && options.error.call(null,idata);
            }else{
                window.layer && layer.alert(tmsg,{icon:2});
            } 
        }
    };
    /**
     * GET 方法
     * @param {Object} options 请求数据
     * @param {String} options.action 请求API
     * @param {Object} options.params 请求参数
     * @param {Function} options.success 请求成功后回调
     * @param {Function} options.failure 请求失败后回调（逻辑错误）
     * @param {Function} options.error 请求出错后回调（系统错误）
     */
    T.GET = function (options, _failure, _error) {
        if (!options || !options.action) return;
        var params = options.params || {},_params,script,
        sremove=function(){
            script && script.remove();
            window[jsoncallback]=null;
        },
        jsoncallback = params.jsoncallback || T.UUID().toUpperCase(); //产生随机函数名
        if (!/^http/.test(options.action)) {
            options.action = T.site.action + options.action;
        }
        params.jsoncallback = jsoncallback;
        _params = params;
        options.action += (options.action.indexOf('?') < 0 ? '?' : '&') + T.ConvertToQueryString(_params);
        script=$('<script defer="defer" async="async" src="'+options.action+'"></script>').appendTo(document.body);
        // 定义回调函数
        window[jsoncallback] = function (response) {
            //定义被脚本执行的回调函数
            try {
                options.data = response;
                T.callback(options);
            } catch (e) {
                // alert(e);
            } finally {
                //最后删除该函数与script元素
               sremove();
            }
        };
        script.unbind('error').bind('error', function () {
            T.type.isFunction(options.error) && options.error();
            sremove();
        });        
    };
    /**
     * POST 方法
     * @param {Object} options 请求数据
     * @param {String} options.action 请求API
     * @param {Object} options.params 请求参数
     * @param {Function} options.success 请求成功后回调
     * @param {Function} options.failure 请求失败后回调（逻辑错误）
     * @param {Function} options.error 请求出错后回调（系统错误）
     */
    T.POST = function (options, _error) {
        if (!options || !options.action) return;
        T.POST.zIndex = (T.POST.zIndex || 0) + 1;
        options.params = options.params || {};
        if (!/^http/.test(options.action)) {
            options.action = T.site.action + options.action;
        }
        // 添加唯一随机ID
        options.action += (options.action.indexOf('?') > 0 ? '&' : '?') + 'ccdfs=' + T.UUID().toUpperCase(); //Math.random();
        var ipts = [];
        T.Each(options.params, function (v, k) {
            if(T.type.isObject(v)){v=T.json.stringify(v);}
            ipts.push('<input type="hidden" name="' + k + '" value="'+v+'" />');
        });
        var form,iframe;
        // 创建表单        
        form = $('<form action="' + options.action + '" method="post" target="pIframe_' + T.POST.zIndex + '">' + ipts.join('') + '</form>');
        iframe = $('<iframe name="pIframe_' + T.POST.zIndex + '" src="about:blank" style="display:none" width="0" height="0" scrolling="no" allowtransparency="true" frameborder="0"></iframe>').bind('load', function () {
            this.callback = function (o) {
                options.data = o;
                T.callback(options);
            };
            iframe.unbind('load').bind('load', function () {
                form.remove();
            });
            form.submit();
        });
        form.append(iframe).appendTo(document.body);
    };

    /* 将表单数据转换成json */
    $.fn.serializeObject=function(){var a=this,c={},b={},d={validate:/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,key:/[a-zA-Z0-9_]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_]+$/};this.build=function(g,e,f){g[e]=f;return g};this.push_counter=function(e){if(b[e]===undefined){b[e]=0}return b[e]++};$.each($(this).serializeArray(),function(){if(!d.validate.test(this.name)){}var e,f=this.name.match(d.key),h=this.value,g=this.name;while((e=f.pop())!==undefined){g=g.replace(new RegExp("\\["+e+"\\]$"),"");if(e.match(d.push)){h=a.build([],a.push_counter(g),h)}else{if(e.match(d.fixed)){h=a.build([],e,h)}else{if(e.match(d.named)){h=a.build({},e,h)}}}}c=$.extend(true,c,h)});return c};
    /* 自动填充表单 */
    $.fn.autofill=function(data,options){var settings={findbyname:true,restrict:true},self=this;if(options){$.extend(settings,options)}return this.each(function(){$.each(data,function(k,v){var selector,elt;if(settings.findbyname){selector='[name="'+k+'"]';elt=(settings.restrict)?self.find(selector):$(selector);if(elt.length==1){elt.val((elt.attr("type")=="checkbox")?[v]:v)}else{if(elt.length>1){elt.val([v])}else{selector='[name="'+k+'[]"]';elt=(settings.restrict)?self.find(selector):$(selector);elt.each(function(){$(this).val(v)})}}}else{selector="#"+k;elt=(settings.restrict)?self.find(selector):$(selector);if(elt.length==1){elt.val((elt.attr("type")=="checkbox")?[v]:v)}else{var radiofound=false;elt=(settings.restrict)?self.find('input:radio[name="'+k+'"]'):$('input:radio[name="'+k+'"]');elt.each(function(){radiofound=true;if(this.value==v){this.checked=true}});if(!radiofound){elt=(settings.restrict)?self.find('input:checkbox[name="'+k+'[]"]'):$('input:checkbox[name="'+k+'[]"]');elt.each(function(){$(this).val(v)})}}}})})};

});
