/**


*/
$.fn.ajaxForm = function (options) {
    if (options.initData != null) {
        this.each(function () {
            options.form = $(this);
            $.ajaxRequest(options);
        });
        options.initData = null;
    }
    return this.ajaxFormUnbind().bind('submit.form-plugin', function () {
        $(this).ajaxSubmit(options);
        return false;
    }).each(function () {
        $(":submit,input:image", this).bind('click.form-plugin', function (e) {
            var form = this.form;
            form.clk = this;
            if (this.type == 'image') {
                if (e.offsetX != undefined) {
                    form.clk_x = e.offsetX;
                    form.clk_y = e.offsetY;
                } else if (typeof $.fn.offset == 'function') {
                    var offset = $(this).offset();
                    form.clk_x = e.pageX - offset.left;
                    form.clk_y = e.pageY - offset.top;
                } else {
                    form.clk_x = e.pageX - this.offsetLeft;
                    form.clk_y = e.pageY - this.offsetTop;
                }
            }
            setTimeout(function () {
                form.clk = form.clk_x = form.clk_y = null;
            }, 10);
        });
    });
}
$.fn.ajaxFormUnbind = function () {
    this.unbind('submit.form-plugin');
    return this.each(function () {
        $(":submit,input:image", this).unbind('click.form-plugin');
    });
}
$.fn.ajaxSubmit = function (options) {
    return this.each(function () {
        options.form = $(this);
        $.ajaxRequest(options);
    });
}
$.fn.pageBar1 = function (options) {
    var configs = {
        PageIndex: 1,
        PageSize: 15,
        TotalPage: 0,
        RecordCount: 0,
        showPageCount: 4,
        onPageClick: function () {
            return false
        }
    }
    $.extend(configs, options);
    var tmp = "",
        i = 0,
        j = 0,
        a = 0,
        b = 0,
        totalpage = parseInt(configs.RecordCount / configs.PageSize);
    totalpage = configs.RecordCount % configs.PageSize > 0 ? totalpage + 1 : totalpage;
    tmp += "<span>总记录数：" + configs.RecordCount + "</span > ";
    tmp += " <span>页数：" + totalpage + "</span>";
    if (configs.PageIndex > 1) {
        tmp += "<a>&lt;</a>"
    } else {
        tmp += "<a class=\"no\">&lt;</a>"
    }
    tmp += "<a>1</a>";
    if (totalpage > configs.showPageCount + 1) {
        if (configs.PageIndex <= configs.showPageCount) {
            i = 2;
            j = i + configs.showPageCount;
            a = 1;
        } else if (configs.PageIndex > totalpage - configs.showPageCount) {
            i = totalpage - configs.showPageCount;
            j = totalpage;
            b = 1;
        } else {
            var k = parseInt((configs.showPageCount - 1) / 2);
            i = configs.PageIndex - k;
            j = configs.PageIndex + k + 1;
            a = 1;
            b = 1;
            if ((configs.showPageCount - 1) % 2) {
                i -= 1
            }
        }
    }
    else {
        i = 2;
        j = totalpage;
    }
    if (b) {
        tmp += "..."
    }
    for (; i < j; i++) {
        tmp += "<a>" + i + "</a>"
    }
    if (a) {
        tmp += " ... "
    }
    if (totalpage > 1) {
        tmp += "<a>" + totalpage + "</a>"
    }
    if (configs.PageIndex < totalpage) {
        tmp += "<a>&gt;</a>"
    } else {
        tmp += "<a class=\"no\">&gt;</a>"
    }
    tmp += "<input type=\"text\" /><a>Go</a>"
    var pager = this.html(tmp)
    var index = pager.children('input')[0]
    pager.children('a').click(function () {
        var cls = $(this).attr('class');
        //清除上个表格的选中状态
        $(this).parents(".g_pagerwp").prev("table").find("input[type='checkbox']").removeAttr("checked");
        if (this.innerHTML == '&lt;') {
            if (cls != 'no') {
                configs.onPageClick(configs.PageIndex - 2)
            }
        } else if (this.innerHTML == '&gt;') {
            if (cls != 'no') {
                configs.onPageClick(configs.PageIndex)
            }
        } else if (this.innerHTML == 'Go') {
            if (!isNaN(index.value) && index.value != "") {
                var indexvalue = parseInt(index.value);
                indexvalue = indexvalue < 1 ? 1 : indexvalue
                indexvalue = indexvalue > totalpage ? totalpage : indexvalue
                configs.onPageClick(indexvalue - 1)
            }
        } else {
            if (cls != 'cur') {
                configs.onPageClick(parseInt(this.innerHTML) - 1)
            }
        }
    }).each(function () {
        if (configs.PageIndex == parseInt(this.innerHTML)) {
            $(this).addClass('cur');
        }
    })
}

/**
* @constructor $(this).fillTableTemplate
* @description 绑定表格
* @example $(this).fillTableTemplate(aList);
* @param 参数是一般是一个对象数组:[{userid:1,username:'123'},{userid:2,username:'1234'}]
*/

$.fn.pageBar = function (options) {
    return this.each(function () {
        var configs = {
            PageIndex: 1,
            PageSize: 15,
            TotalPage: 0,
            RecordCount: 0,
            showPageCount: 4,
            onPageClick: function () {
                return false;
            }
        }
        $.extend(configs, options);
        var opt = {
            callback: configs.onPageClick
        }
        opt.items_per_page = configs.PageSize;
        opt.num_display_entries = configs.showPageCount;
        opt.current_page = --configs.PageIndex;
        opt.num_edge_entries = 1;
        opt.prev_text = "上一页";
        opt.next_text = "下一页";
        $(this).pagination(configs.RecordCount, opt)
        $(this).find('a').each(function () {
            if ($(this).html() == configs.PageIndex + 1) {
                $(this).addClass('cur')
            }
        });
        return this;
    });
};

var tmplParams = {
    eval: function (str, format) {
        var result = "";
        if (str != undefined && format) {
            if (format.startWith("N") || format.startWith("F")) { result = parseFloat(str.toString()).toFixed(parseInt(format.toString().substr(1, 1))); if (isNaN(result)) { result = 0; } } else { result = str.toString().toDate().format(format); }
        }
        return result;
    },
    enumClass: function (str, enumName) {
        var name = "";
        if (str != undefined && enumName) {
            $.each(enumName, function (i, item) {
                if (item["n"] == str) {
                    name = item["v"];
                    return false;
                }
            });
        }
        return name;
    },
    ens: function () {
        if (G && G.util && G.util.ens && arguments.length > 0) {
            var args = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                var reg = new RegExp("\\(" + (i - 1) + "\\)", "g");
                args = args.replace(reg, arguments[i]);
            }
            return G.util.ens(args);
        }
        return arguments.length > 0 ? arguments[0] : "";
    }
};
/*
${$item.eval(UserCode,'N2')} 转化数字
${$item.enum(StatusFlag,enumClass.EnumEnableStatusFlag)} 转化检举,需要生成enumClass.js
${$item.eval(LastLoginTime,'yyyy-MM-dd HH:mm:ss')} 转化日期格式
*/
/**
* @param {Object} options 
* @param {String} options.act 请求数据的动作
* @param {String} options.mod  请求数据的模块
* @param {htmlObject} options.form  提交表单的按钮
* @param {htmlObject} options.target  装数据的容器
* @param {String} options.resultType  //other 不分页  conditionresult 分页
* @param {Object} options.page 分页配置 
* @param {Boolean} options.page.AllowPaging
* @param {Object} options.page.PageIndex
* @param {Object} options.page.PageSize
* @param {Object} options.page.TotalPage
* @param {Object} options.page.RecordCount
* @param {Object} options.page.showPageCount
* @param {Object} options.onRequest  搜索表单提交元素的名称和值
* @param {Function} options.onResponse  对参数值特殊处理的函数,
* @param {Function} options.onComplete 数据请求完成时的执行方法
* @param {Function} options.onError  数据请求失败所执行的方法
* @param {String} options.initData  请求成功后接收的数据
* @param {htmlObject} options.tmpl  js数据模版
* @param {String} options.tmplParam  模版参数格式化操作
* @example 
*$.ajaxRequest({
*   act: "getReceiverAddressList",
*    mod: "ReceiverAddress",
*    resultType: "conditionresult", //other 不分页  conditionresult 分页
*    page: { AllowPaging: true, PageSize: G.CONFIGS.PAGESIZE, PageIndex: pIndex },
*    target: $('#tbResult'),
*    tmpl: '#datatmpl',
*    onRequest: sparam,
*    onComplete: function () {
*        alert("☺");
*   }
});
*/


$.ajaxRequest = function (options) {
    var configs = {
        act: null,
        mod: null,
        form: null,
        target: null,
        resultType: "other",
        page: {
            AllowPaging: false,
            PageIndex: 0,
            PageSize: 15,
            TotalPage: 0,
            RecordCount: 0,
            showPageCount: 4
        },
        onRequest: null,
        onResponse: null,
        onComplete: null,
        onError: null,
        initData: null,
        tmpl: null,
        tmplParam: tmplParams
    }
    options.page = $.extend({}, configs.page, options.page);
    if (options.tmplParam) {
        options.tmplParam = $.extend({}, configs.tmplParam, options.tmplParam);
    }
    $.extend(configs, options);
    var param = {}
    if (configs.form) {
        param = configs.form.formToJSON();
    }
    if (configs.onRequest) {
        param = configs.onRequest(param);
        if (param === null) {
            return
        }
    }
    var jsonData = null;
    if (configs.initData == null) {
        jsonData = serializeRequest(configs, param);
    }
    var infoTip = new Tip('数据加载中...'),
	    _errorInfo = new Tip('服务器端出错'),
		_jq = jQuery;
    var ajaxOptions = {
        requestConfigs: configs,
        requestParam: param,
        url: '/json/ajaxRequest.ashx?fmt=2&localurl=' + window.location.href,
        type: "post",
        dataType: "json",
        data: jsonData,
        error: function (msg) {
            requestConfigs = this.requestConfigs;
            if (requestConfigs.onError) {
                requestConfigs.onError(msg);
            }
            else {
                _errorInfo.show();
                _jq("#tip16").css("backgroundColor", "#fff").find("img").hide();
            }
        },
        success: function (data) {
            var oJson = data,
                mValue = {},
                oPage = {},
                requestConfigs = this.requestConfigs,
                requestParam = this.requestParam,
                ajaxOpt = this;
            if (oJson == null) { alert("数据查找失败!"); return; }
            if (oJson.errno == 0) {
                if (oJson.data != null) {
                    switch (requestConfigs.resultType) {
                        case 'conditionresult':
                            oPage.AllowPaging = oJson.data.AllowPaging;
                            oPage.TotalPage = oJson.data.TotalPage;
                            oPage.PageIndex = oJson.data.PageIndex == undefined ? 1 : oJson.data.PageIndex;
                            oPage.PageSize = oJson.data.PageSize;
                            oPage.RecordCount = oJson.data.TotalRecord;
                            oPage.showPageCount = requestConfigs.page.showPageCount;
                            oPage = $.extend({}, requestConfigs.page, oPage);
                            oPage.onPageClick = function (pageIndex) {
                                $.extend(requestConfigs.page, oPage);
                                requestConfigs.page.PageIndex = ++pageIndex;
                                ajaxOpt.data = serializeRequest(requestConfigs, requestParam);
                                infoTip.show();
                                $.ajax(ajaxOpt);
                            }
                            mValue = oJson.data.ResultList;
                            break;
                        default:
                            mValue = oJson.data;
                            break;
                    }
                }
                if (requestConfigs.onResponse) {
                    setPageIndex(requestConfigs.target, oPage);
                    mValue = requestConfigs.onResponse(mValue, oPage);
                }
                if (requestConfigs.target) {
                    var targetTag = requestConfigs.target[0].tagName.toLowerCase();
                    switch (targetTag) {
                        case "table":
                        default:
                            if (empty(mValue, requestConfigs.target, oPage)) {
                                $(requestConfigs.target).find("tbody tr").remove();
                                $(requestConfigs.tmpl).tmpl(mValue, requestConfigs.tmplParam).appendTo(requestConfigs.target);
                                $("#" + requestConfigs.target.attr("id") + "_PageBar").pageBar(oPage);
                            }
                            $(requestConfigs.target).find("input[type='checkbox']").removeAttr("checked");
                            break;
                        case "form":
                            if (empty(mValue, requestConfigs.target, oPage)) {
                                $(requestConfigs.target).fillForm(mValue);
                            }
                            break;
                        case "tbody":
                            if (empty(mValue, requestConfigs.target, oPage)) {
                                $(requestConfigs.target).find("tr").remove();
                                $(requestConfigs.tmpl).tmpl(mValue, requestConfigs.tmplParam).appendTo(requestConfigs.target);
                                requestConfigs.target.closest('.g_grid').siblings('.g_pagerwp').find('.g_pager').css('visibility', 'visible').pageBar1(oPage);
                            }
                            $(requestConfigs.target).parents('table').find("input[type='checkbox']").removeAttr("checked");
                            break;
                    }

                }
                if (requestConfigs.onComplete) {
                    requestConfigs.onComplete(mValue, oPage);
                }
                infoTip.hide();
            }
            else {
                infoTip.hide();
                alert("提示信息:oJson错误," + oJson.errmsg);
            }
        }
    }
    if (configs.initData != null) {
        ajaxOptions.success(configs.initData);
    } else {
        infoTip.show();
        $.ajax(ajaxOptions);
    }

    function setPageIndex(target, opage) {
        if (target == null || opage == null) {
            return false;
        }
        opage.PageIndex = opage.PageIndex == 0 ? 1 : opage.PageIndex;
        var tabID = $(target).attr("id") + "_PageIndex";
        var elpageindex = $("#" + tabID);
        if (elpageindex.length == 0) {
            $('body').append('<input type="hidden" value="' + opage.PageIndex + '" id="' + tabID + '" \/>');
        } else {
            $(elpageindex).val(opage.PageIndex);
        }
    }
    function empty(mValue, target, oPage) {
        if (!mValue || mValue.length == 0) {
            var targetTag = target[0].tagName.toLowerCase(), count = 1;
            switch (targetTag) {
                case "table":
                default:
                    alert("table");
                    break;
                case "tbody":
                    $(target).find("tr").remove();
                    count = 0;
                    $(target).parents("table").find("thead tr:first th").each(function () { count++; var col = $(this).attr('colspan'); if (col && col > 1) { count += col - 1; } });

                    $(target).append("<tr><td colspan='" + count + "' style='text-align:center;'>暂未查询到任何数据,请更改查询条件后重试！</td></tr>");
                    target.closest('.g_grid').siblings('.g_pagerwp').find('.g_pager').css('visibility', 'visible').pageBar1(oPage)
                    break;
                case "form":
                    alert("form");
                    break;
            }
            return false;
        }
        return true;
    }
    function serializeRequest(config, param) {
        if (configs.page.AllowPaging) {
            param.AllowPaging = true;
            param.PageSize = param.PageSize || configs.page.PageSize;
            param.RecordCount = configs.page.RecordCount;
            var __el = $("#" + $(config.target).attr("id") + "_PageIndex");
            param.PageIndex = config.page.PageIndex;
        }
        var request = {
            act: configs.act,
            mod: configs.mod,
            param: $.toJSON(param)
        }
        return $.param(request);
    }
}
