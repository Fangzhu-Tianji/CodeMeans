var proModel = {
    init: function () {
        $("#goodsAttr").hide();
    },
    doFlag: true,
    CFlag: true,
    categoryChange: function () {
        var currOptions=this.options[this.selectedIndex];
        var level = currOptions.getAttribute("level");
        var ckey = $(this).val();
        var codePath = currOptions.getAttribute("codepath")
       // var selectVal = $(this).val().split("|");
        if (level != 3) {
            alert("请选择三级分类");
            $(this).find("option[text='--请选择--']").attr("selected", true);
            $("#goodsAttr").hide();
            return;
        }
        if (G.util.parse.key("Action") == "Add") {
            //$("#txtQuickCode").val("CCDFS-" + selectVal[3].replace(/\^/g, "-"));
            G.util.jsonpost({ mod: "Pro_ProductCategory", act: "getPro_ProductNorms", param: { CategoryKey: ckey } }, function (res) {
                if (res.errno == 0) {
                    //$("#txtQuickCode").val(res.data["QuickCode"]);
                    var Pro_ProductNorms = res.data["Pro_ProductNorms"], Categorys = res.data["Categorys"];
                    if (Pro_ProductNorms != null) {
                        $('#tbResult tr').remove();
                        $("#datatmpl").tmpl(Pro_ProductNorms, null).appendTo($('#tbResult'));
                    }
                    if (Categorys != null) {
                        //pager.editorID3.html(Categorys[0].AfterService);
                        //pager.editorID4.html(Categorys[0].Transport);
                    }
                    //if (FQAs != null) {
                    //    $('#tbFQAResult tr').remove();
                    //    $("#FQAdatatmpl").tmpl(FQAs, null).appendTo($('#tbFQAResult'));
                    //}
                } else {
                    alert(res.errmsg);
                }
            });
        }

        if (ckey!="") {
            var params;
            if (G.util.parse.key("ProductKey") != null) {
                params = { CodePath: codePath, ProductKey: G.util.parse.key("ProductKey") };
            } else {
                params = { CodePath: codePath, ModelKey: G.util.parse.key("ModelKey") };
            }
            G.util.jsonpost({ mod: "Pro_ProductCategory", act: "getAttrbuteByCodePath", param: params }, function (res) {
                if (res.errno == 0) {
                    $("#itemproperties").html("");
                    var aList = res.data["skuAttrData"];
                    var ul = $("<ul/>");
                    for (var i = 0; i < aList.length; i++) {
                        var item = aList[i];
                        var showType = item.ShowType;
                        var li;
                        switch (parseInt(showType)) {
                            case 1: //下拉列表框
                                li = $.getSelectHtml(item);
                                break;
                            case 2: //多选框
                                var li = $.getCheckBoxHtml(item);
                                console.log(li);
                                break;
                            case 3: //文本框
                                aList[i].AppendValue = "";
                                break;
                            case 4: //单选按钮
                                li = $.getRadioHtml(item);
                                break;
                            default:
                                break;
                        }
                        if (item.IsImportant)
                            li.attr("check", "true");
                        ul.append(li);
                    }
                    $("#itemproperties").append('<dl class="hint propertymsg"><dd>选错商品属性，可能会引起商品下架，影响正常销售。请认真准确填写</dd></dl>').append(ul);
                    $("#goodsAttr").show();
                    $("#hiWebSource").val(Obj2str(aList));
                    if ((G.util.parse.key("ModelKey") != null || G.util.parse.key("ProductKey") != null) && G.util.parse.key("CategoryKey") == ckey) {
                        var aList = res.data["skuOptionValueList"];
                        if (aList != null && aList != undefined) {
                            $(aList).each(function () {
                                var controlList = $("#itemproperties [name='cp_" + this.SkuAttrID + "']");
                                if (controlList.length > 0) {
                                    var contorlItem = controlList[0];
                                    if (contorlItem.type == "radio") {
                                        $("#rdo" + this.SkuAttrID + "-" + this.SkuAttrValueID).attr("checked", 'checked');
                                        if (G.util.parse.key("Action") == "SecEdit" || G.util.parse.key("ProductKey")) {
                                            $("#rdo" + this.SkuAttrID + "-" + this.SkuAttrValueID).parent().parent().find("input").attr("disabled", "disabled");
                                        }
                                    } else if (contorlItem.type == "select-one") {
                                        $("#prop_" + this.SkuAttrID).val(this.SkuAttrID + ":" + this.SkuAttrValueID);
                                        if (G.util.parse.key("Action") == "SecEdit" || G.util.parse.key("ProductKey")) {
                                            $("#prop_" + this.SkuAttrID).attr("disabled", "disabled");
                                        }
                                    } else if (contorlItem.type == "checkbox") {
                                        var checkbox = $("#prop_" + this.SkuAttrID + "-" + this.SkuAttrValueID);
                                        checkbox.attr("checked", 'checked');
                                        checkbox.parent().addClass("edit");
                                        var color = checkbox.parent().find(".color-lump");
                                        if (this.CustomValue != "") {
                                            $("#J_Alias_" + this.SkuAttrID + "-" + this.SkuAttrValueID).val(this.CustomValue);
                                            if (color != null && color != undefined) {
                                                $(".J_Map_" + this.SkuAttrID + "-" + this.SkuAttrValueID).text(this.CustomValue);
                                            }
                                        }
                                        if (this.PictureName != null) {
                                            $("#img" + this.SkuAttrID + "-" + this.SkuAttrValueID).attr("imgName", this.PictureName);
                                        }
                                        if (color != null && color != undefined) {
                                            var parent = checkbox.parent();
                                            var parentDiv = parent.parent().parent();
                                            var $thisTable = parentDiv.find("table");
                                            $thisTable.show();
                                            $("#J_MapImg_" + this.SkuAttrID + "-" + this.SkuAttrValueID).show();
                                        }
                                        if (G.util.parse.key("Action") == "SecEdit" || G.util.parse.key("ProductKey")) {

                                            if (G.util.parse.key("ProductKey")) {
                                                if (this.IsSeller == false) {
                                                    return;
                                                }
                                            }
                                            $("#J_Alias_" + this.SkuAttrID + "-" + this.SkuAttrValueID).attr("disabled", "disabled");
                                            checkbox.attr("disabled", "disabled");
                                        }
                                    }
                                }
                            });
                            if (proModel.doFlag) {
                                //绑定上传图片控件
                                $("input[name^='cpvf_']").each(function (i, item) {
                                    upFileLoad($(this).attr("id"), $(this).attr("imgN"));
                                    var imgName = $("#" + $(this).attr("id")).attr("imgName");
                                    if (String(imgName).length > 1 && imgName != undefined) {
                                        var imgUrl = '<img style="width:80px;height:60px;" src="http://' + G.DOMAIN.IMGS_WDBUY_COM + '/attr/' + imgName + '" alt=""/>'
                                        $('#' + $(this).attr("id") + 'Queue').append(imgUrl);
                                        $('#' + $(this).attr("imgN")).val(imgName);
                                    }

                                });
                                proModel.doFlag = false;
                            }
                        }
                    }
                } else {
                    alert(res.errmsg);
                }
            });

        }
    }
};

function Obj2str(o) {
    if (o == undefined) {
        return "";
    }
    var r = [];
    if (typeof o == "string") return "\"" + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    if (typeof o == "object") {
        if (!o.sort) {
            for (var i in o) {
                r.push("\"" + i + "\":" + Obj2str(o[i]));
            }
            if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                r.push("toString:" + o.toString.toString());
            }
            r = "{" + r.join() + "}"
        } else {
            for (var i = 0; i < o.length; i++) {
                r.push(Obj2str(o[i]));
            }
            r = "[" + r.join() + "]";
        }
        return r;
    }
    return o.toString().replace(/\"\:/g, '":""');
}

function upFileLoad(fileId, fileName) {
    $('#' + fileId).uploadify({
        'auto': true, //选定文件后是否自动上传，默认false
        'fileDesc': '*.jpg;*.png;*.gif', //出现在上传对话框中的文件类型描述
        'fileExt': '*.jpg;*.png;*.gif', //控制可上传文件的扩展名，启用本项时需同时声明fileDesc
        'sizeLimit': 2044000, //控制上传文件的大小，单位byte common.js中定义
        'folder': '/attr',
        //'onSelectOnce': function () { $('#imgInfo').html('图片还在上传中，请等待'); },
        'onComplete': function (e, queueID, fileObj, response, data) {
            var currentId = $("#" + e.target.id);
            var arr = response.split("|");
            if (arr.length == 2) {
                var picURL = '<img style="width:80px;height:60px;" src="http://' + G.DOMAIN.IMGS_WDBUY_COM + '/attr/' + arr[0] + '" alt=""/>';
                currentId.next().next().find('img').remove();
                currentId.next().next().append(picURL);
                $('#' + currentId.attr("imgN")).val(arr[0]);
            } else {
                alert("上传失败,请联系管理员");
            }

        }
    });
}

$.getSelectHtml = function (d) {
    var a = $("<select>", {
        "id": "prop_" + d.SkuAttrID,
        "name": "cp_" + d.SkuAttrID,
        "ref": 'select-one',
        'title': d.IsSeller ? "销售属性" : "非销售属性"
    });
    $(d.Pro_SkuAttrbuteValueList).each(function () {
        $("<option>").val(this.SkuAttrID + ":" + this.SkuAttrValueID).text(this.SkuAttrValue).appendTo(a);
    });

    var label = $("<label/>", {
        "html": d.FontName + (d.IsSeller ? "" : "(<font color='red'>非销售</font>)") + "：",
        "class": "label-title"
    });
    if (d.IsParent)
        label.addClass("font-bd");
    if (d.IsImportant)
        label.addClass("required");

    return $("<li/>", {
        "id": "spu_" + d.SkuAttrID,
        "class": "J_spu-property",
        "name": "spus"
    }).append(label).append($("<div id=\"err_NotNull_" + d.SkuAttrID + "\" style=\"display:none;\" class=\"alert alert-error c_red\"></div>")).append(a.appendTo($("<li/>")).appendTo($("<ul/>", { "class": "J_ul-single ul-select" })).appendTo($("<span/>")));
};

$.getCheckBoxHtml = function (d) {
    var topLi = $("<li/>", {
        "id": "spu_" + d.SkuAttrID,
        "class": "J_spu-property",
        "name": "spus"
    });

    var ul = $("<ul/>", { "class": "J_ul-multi ul-checkbox", 'title': d.IsSeller ? "销售属性" : "非销售属性" });

    var table = $("<table/>", {
        "class": "J_SKUImgTable img-table"
    }).attr("cellspacing", "0").attr("border", "0").css("display", "none");

    table.append($("<thead/>").append($("<tr/>").append($("<th/>", {
        "text": "颜色分类"
    })).append($("<th/>", {
        "text": "图片（无图片可不填）*图片大小(80*60)"
    }))));

    var tbody = $("<tbody/>");

    $(d.Pro_SkuAttrbuteValueList).each(function () {

        var li = $("<li/>");

        var ids = this.SkuAttrID + "-" + this.SkuAttrValueID;

        var checkbox = $("<input>", {
            "type": "checkbox",
            "val": this.SkuAttrID + ":" + this.SkuAttrValueID,
            "class": "checkbox",
            "name": "cp_" + this.SkuAttrID,
            "id": "prop_" + ids
        });

        var colorlump = $("<label>", {
            "class": "color-lump"
        }).attr("for", "prop_" + ids).css("backgroundColor", this.ColorStyle);

        var textlump = $("<label>", {
            "text": this.SkuAttrValue,
            "title": this.SkuAttrValue,
            "class": "labelname"
        }).attr("for", "prop_" + ids);

        var textbox = $("<input>", {
            "type": "text",
            "name": "cpva_" + ids,
            "val": this.SkuAttrValue,
            "class": "editbox text",
            "id": "J_Alias_" + ids
        });
        if (this.SkuAttrValue == "通用" && d.Pro_SkuAttrbuteValueList.length == 1 && G.util.parse.key("Action") == "Add") {
            checkbox.attr("checked", "checked");
        }
        li.append(checkbox);

        if (d.IsColor) {
            checkbox.attr("class", "J_Checkbox");
            li.attr("class", "sku-item");
            ul.attr("class", "sku-list");

            li.append(colorlump);

            /*构建table*/
            var tr = $("<tr/>", {
                id: "J_MapImg_" + ids
            }).css("display", "none");

            $("<td/>", {
                "class": "tile"
            }).append($("<i/>", {
                "class": "color-lump"
            }).css("backgroundColor", this.ColorStyle)).append($("<span/>", {
                "class": "J_Map_" + ids,
                "text": this.SkuAttrValue
            })).appendTo(tr);

            $("<td/>").append($("<input>", {
                "type": "file",
                "name": "cpvf_" + ids,
                "id": "img" + ids,
                "imgN": "imgName" + ids
            })).append($("<input>", {
                "type": "text",
                "id": "imgName" + ids,
                "style": "display:none;"
            })).appendTo(tr);

            tr.appendTo(tbody);

        }

        li.append(textlump);

        if (d.IsEdit) {
            ul.attr("class", "sku-list");
            li.attr("class", "sku-item");
            li.append(textbox);
        }

        li.appendTo(ul);
    });

    table.append(tbody);

    if (d.IsColor || d.IsEdit) {
        topLi.attr("class", "sku-style");

        var css = "sku-box";
        if (d.IsColor) {
            css += " sku-color";
        }

        var div = $("<div/>", {
            "class": css
        }).append(ul);

        if (d.IsColor) {
            div.append(table);
        }

        var label = $("<label/>", {
            "html": d.FontName + (d.IsSeller ? "" : "(<font color='red'>非销售</font>)") + "：",
            "class": "sku-label"
        });
        if (d.IsImportant)
            label.addClass("required");

        if (d.IsParent)
            label.addClass("font-bd");

        $("<div/>", {
            "class": "sku-group"
        }).append(label).append(div).append($("<div id=\"err_NotNull_" + d.SkuAttrID + "\" style=\"display:none;\" class=\"alert alert-error c_red\"></div>")).append($("<div/>").css("clear", "both")).appendTo(topLi);;

        topLi.append($("<div/>").css("clear", "both"));
        if (d.IsColor) {
            topLi.find("input[name^='cp_']").click(function () {
                var $this = $(this);
                if (proModel.doFlag) {
                    //绑定上传图片控件
                    $("input[name^='cpvf_']").each(function (i, item) {
                        upFileLoad($(this).attr("id"), $(this).attr("imgN"));
                    });
                    proModel.doFlag = false;
                }
                var parent = $(this).parent();
                var parentDiv = parent.parent().parent();
                var $thisTable = parentDiv.find("table");
                var allTr = $thisTable.find("tbody");
                var $thisVal = $(this).val().replace(":", "-");;
                if (this.checked) {
                    /*设置编辑状态*/
                    parent.addClass("edit");
                    $thisTable.show();
                    /*查找tr并显示*/
                    $thisTable.find("#J_MapImg_" + $thisVal).show();
                } else {
                    parent.removeClass("edit");

                    $thisTable.find("#J_MapImg_" + $thisVal).hide();
                    if (allTr.find("tr:visible").length == 0) {
                        $thisTable.hide();
                    }
                }
            });
            topLi.find("input[name^='cpva_']").blur(function () {
                var $this = $(this);
                var $thisVal = $this.attr("name").replace("cpva_", "").replace(":", "-");
                $(".J_Map_" + $thisVal).text($this.val());
            });
        } else {
            topLi.find("input[name^='cp_']").click(function () {
                var parent = $(this).parent();
                if (this.checked) {
                    /*设置编辑状态*/
                    parent.addClass("edit");
                } else {
                    parent.removeClass("edit");
                }
            });
        }

    } else {
        var label = $("<label/>", {
            "html": d.FontName + (d.IsSeller ? "" : "(<font color='red'>非销售</font>)") + "：",
            "class": "label-title"
        });
        if (d.IsImportant)
            label.addClass("required");

        if (d.IsParent)
            label.addClass("font-bd");

        topLi.append(label).append(ul.appendTo($("<span/>"))).append($("<div id=\"err_NotNull_" + d.SkuAttrID + "\" style=\"display:none;\" class=\"alert alert-error c_red\"></div>")).append($("<span/>", {
            "class": "cphelp_content",
            "text": d.Description
        }));
    }
    return topLi;
};

$.getRadioHtml = function (d) {
    var ul = $("<ul/>", { "class": "ul-radio" });
    $(d.Pro_SkuAttrbuteValueList).each(function () {
        ul.append($("<li/>").append($("<input>", {
            "type": "radio",
            "val": this.SkuAttrID + ":" + this.SkuAttrValueID,
            "class": "radio",
            "name": "cp_" + this.SkuAttrID,
            "id": "rdo" + this.SkuAttrID + "-" + this.SkuAttrValueID
        })).append($("<label>").attr("for", "rdo" + this.SkuAttrID + "-" + this.SkuAttrValueID).text(this.SkuAttrValue)));
    });

    var label = $("<label/>", {
        "html": d.FontName + (d.IsSeller ? "" : "(<font color='red'>非销售</font>)") + "：",
        "class": "label-title"
    });
    if (d.IsImportant)
        label.addClass("required");

    if (d.IsParent)
        label.addClass("font-bd");

    return $("<li/>", {
        "id": "spu_" + d.SkuAttrID,
        "class": "J_spu-property",
        "name": "spus"
    }).append(label).append($("<span/>").append(ul).append($("<div id=\"err_NotNull_" + d.SkuAttrID + "\" style=\"display:none;\" class=\"alert alert-error c_red\"></div>"))).append($("<span/>", {
        "class": "cphelp_content",
        "text": d.Description
    }));
};