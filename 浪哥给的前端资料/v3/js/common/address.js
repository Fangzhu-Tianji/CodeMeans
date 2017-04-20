define("common/address.js", ["lib/trimPath.js", "lib/jquery.form.select.js", "lib/jquery.inputLimit.js", "lib/jquery.area.js", "lib/jquery.validate.min.js", "common/tools.js"], function (require) {
    require("lib/trimPath.js");
    require('lib/jquery.form.select.js');
    require('lib/jquery.area.js');
    require("lib/jquery.validate.min.js");
    require("lib/jquery.inputLimit.js");
    var e = {
        setting: {
            showlist: function (d) {
                console.log(d);
            },
            adrForm: $("#modifyAdress"),
            listEl: $("#addressBox"),
            itemtag:"tr"
        },
        init: function (a) {
            var b = this;
            var c = $.extend(this,b.setting, a);
         //   b.adrForm = c.adrForm;
           // b.showlist = c.showlist;
            b.seach(c);
            b.bindEvent(c);
        },
        defaultOpt: {
            AddressID: 0,
            Receiver: "",
            IdCard: "",
            AreaID: 0,
            AreaName: "",
            Address: "",
            ZipCode: "",
            Mobile: "",
            Tel: "",
            Email: "",
            IsDefault: false,
            action: ""
        },
        getSelectObj: function (elems, type) {
            var selectObj = { list: [], text: [], value: [] };
            elems.each(function (index, item) {
                var thename = this.name, theOptions = this.options, theIndex = this.selectedIndex, theval = theOptions[theIndex].value, thetext = theOptions[theIndex].text;
                selectObj.list.push({ name: thename, value: theval, text: thetext });
                selectObj.text.push(thetext);
                selectObj.value.push(theval);
            });
            if (type) {
                return selectObj[type];
            }
            return selectObj.list;
        },
        bindData:function(jsondata){
		    $.each(jsondata,function(index,item){
		        $("#consignee_index_"+item.AddressID).data("item",item);
		    });
        },
        bindEvent: function (c) {
            var that = this;
            that.listEl.delegate("a", "click", function (e) {
                e.preventDefault();
                var self = $(this), aid = self.attr("data-aid"), cName = self.attr("class"), thedata = self.closest(that.itemtag).data("item") || that.defaultOpt, adrtemp = that.shipAdressTemp(), titleText, msgText;
                switch (cName) {
                    case 'del':
                        layer.confirm('您确定要移除该地址？', { icon: 0 }, function (index) {
                            T.ajax("Address/DelUserAddress", {
                                type: "POST",
                                data: { ID: aid },
                                success: function (data) {
                                    that.seach(c);
                                    layer.close(index);
                                }
                            });
                        });
                        break;
                    case 'add':
                    case 'edit':
                        thedata.AddressID ? (titleText = "修改收获地址", msgText = "收获地址更新成功") : (titleText = "添加新地址", msgText = "新增收获地址成功");
                        layer.open({
                            type: 1,
                            title: titleText,
                            area: ["602px", "642px"],
                            success: function (layero, index) {
                                $cancle = layero.find(".cancel");
                                $addressForm = $("#adressForm"), $addrWrap = $('#editAddress');
                                $addressForm.autofill(thedata);
                                that.editpop();
                                var add = {
                                    provice: $addrWrap.find('.provice'),
                                    city: $addrWrap.find('.city'),
                                    district: $addrWrap.find('.district'),
                                    obj: $addrWrap.find('.ui-select')
                                };
                                $addrWrap.area({
                                    provice: add.provice,
                                    city: add.city,
                                    district: add.district,
                                    callback: that.callback(add.obj)
                                });
                                that.editpop(thedata.AreaID.toString());
                                $cancle.unbind("click").bind("click", function (e) {
                                    e.preventDefault();
                                    layer.close(index);
                                });
                                $addressForm.validate({
                                    errorPlacement: function (error, element) {
                                        // 报错的位置
                                        if ($(element).is('.ui-select')) {
                                            $(element).next('.ui-selectSpan').addClass('error');
                                        } else {
                                            $(element).after(error);
                                        }
                                    },
                                    ignore: "input[type=hidden]",
                                    rules: {
                                        provice: {
                                            required: true,
                                            nonzero: true
                                        },
                                        city: {
                                            required: true,
                                            nonzero: true
                                        },
                                        district: {
                                            required: true,
                                            nonzero: true
                                        },
                                        Address: {
                                            required: true
                                        },
                                        ZipCode: {
                                            zipcode: true
                                        },
                                        Mobile: {
                                            required: true,
                                            mobile: true
                                        },
                                        Tel: {
                                            tel: true
                                        },
                                        Receiver: {
                                            required: true
                                        },
                                        IDCard: {
                                            required: true,
                                            idcard: true
                                        },
                                        reIDCard: {
                                            required: true,
                                            equalTo: '#IDCard'
                                        }

                                    },
                                    messages: {
                                        provice: {
                                            required: ""
                                        },
                                        city: {
                                            required: ""
                                        },
                                        district: {
                                            required: ""
                                        },
                                        Address: {
                                            required: ""
                                        },
                                        Mobile: {
                                            required: "手机号码不能为空",
                                            mobile: "请输入正确的手机号码"
                                        },
                                        Tel: {
                                            tel: "电话号码格式错误"
                                        },
                                        Receiver: {
                                            required: ""
                                        },
                                        IDCard: {
                                            required: "",
                                            idcard: "请输入正确的身份证号码"
                                        },
                                        reIDCard: {
                                            required: "",
                                            equalTo: "前后输入不一致"
                                        }
                                    },
                                    submitHandler: function (form) {
                                        var sparam = $(form).serializeObject();
                                        T.ajax("Address/AddUserAddress", {
                                            type: "POST",
                                            data: sparam,
                                            success: function (data) {
                                                that.seach(c);
                                                layer.msg(msgText, { icon: 1 });
                                                layer.close(index);
                                            }
                                        });
                                    }
                                });
                            },
                            content: adrtemp
                        });
                        break;
                    case 'set':
                        T.ajax("Address/setDefaultAddr", {
                            type: "POST",
                            data: { ID: aid },
                            success: function (data) {
                                that.seach(c);
                            }
                        });
                        break;
                }
            });
        },
        shipAdressTemp: function () {
            var adrhtml = '<div class="cnt" id="editAddress"><form id="adressForm"><input type="hidden" name="AddressID" value="" /><input type="hidden" name="AreaID" id="AreaIDText" value="" /><input type="hidden" name="AreaName" id="areaNameText" value="sss" /><table>';
            adrhtml += '<tr><td class="td-nm"><span>所在地址<em class="red">*</em></span></td><td class="td-cnt"><select name="provice"  class="ui-select provice"><option value="">请选择省份</option></select><select name="city"  class="ui-select city"><option value="">请选择城市</option></select><select name="district"  class="ui-select district"><option value="">请选择区县</option></select></td></tr>';
            adrhtml += '<tr><td class="td-nm"><span>详情地址<em class="red">*</em></span></td><td class="td-cnt"><textarea name="Address" id="" class="ui-textarea" placeholder="不需要重复填写省市区"></textarea></td></tr>';
            adrhtml += '<tr><td class="td-nm"><span>邮政编码<em class="red"></em></span></td><td class="td-cnt"><input type="text" class="ui-input" name="ZipCode"></td></tr>';
            adrhtml += '<tr><td class="td-nm"><span>手机号码<em class="red">*</em></span></td><td class="td-cnt"><input type="text" class="ui-input" style="width:250px;" name="Mobile"></td></tr>';
            //adrhtml +='<tr><td class="td-nm"><span>电话号码<em class="red"></em></span></td><td class="td-cnt"><input type="text" class="ui-input" style="width:250px;" name="Tel" /></td></tr>';
            // adrhtml +='<tr><td class="td-nm"><span>邮箱<em class="red">*</em></span></td><td class="td-cnt"><input type="text" class="ui-input" style="width:250px;" name="Email"></td></tr>';
            adrhtml += '<tr><td class="td-nm"><span>收货人姓名<em class="red">*</em></span></td><td class="td-cnt"><input type="text" class="ui-input" name="Receiver" /></td></tr>';
            adrhtml += '<tr><td class="td-nm"><span>身份证号码<em class="red">*</em></span></td><td class="td-cnt"><input type="text" class="ui-input" placeholder="请输入中国身份证号码" style="width:250px;" name="IDCard" id="IDCard" onpaste="return false;" oncontextmenu="return false;" oncopy="return false;" /></td></tr>';
            adrhtml += '<tr><td class="td-nm"><span>重复身份证<em class="red">*</em></span></td><td class="td-cnt"><input type="text" class="ui-input" placeholder="请重复输入中国身份证号码" style="width:250px;" name="reIDCard" onpaste="return false;" oncontextmenu="return false;" oncopy="return false;" /></td></tr>';
            // adrhtml +='<tr><td class="td-nm"><span>邮箱<em class="red">*</em></span></td><td class="td-cnt"><lable><input type="radio" class="ui-radio" name="IsDefault" value="true">是</lable> <lable><input type="radio" class="ui-radio" name="IsDefault" value="false">否</lable> </td></tr>';
            adrhtml += '</table>';
            adrhtml += '<div class="ui-tips">必须填写收货人对应的身份证号码，身份证信息仅在海关清关环节作为个人物品进境必须的凭证。按照国家隐私法规定，保税网确保你的个人隐私权利不受侵犯</div>';
            adrhtml += '<div class="ui-btns "><input type="submit" class="submit" value ="确 定" /><input type="button" class="cancel close" value ="取 消" /></div>';
            //adrhtml +='';
            adrhtml += '</form></div>';
            return adrhtml;
        },
        seach: function (s) {
            var self = this;
            T.ajax("Address/getAddressList", {
                data: {},
                success: function (data) {
                    s.showlist(data);
                    s.bindData(data);
                  //  var temstr = data.length > 0 ? TPL.list.process({ data: data }) : TPL.none;
                  //  $("#resultList").html(temstr);
                  //  $.isFunction(fn) && fn(data);
                    //$("#saveAdrCount").text(data.length);
                }
            });
        },
        editor: function (aid) {
    
        },
        del: function (aid) {
            var self = this;
            layer.confirm('您确定要移除该地址？', { icon: 0 }, function (index) {
                T.ajax("Address/DelUserAddress", {
                    type: "POST",
                    data: { ID: aid },
                    success: function (data) {
                        self.seach();
                        layer.close(index);
                    }
                });
            });
        },
        submit: function () {

        },
        callback: function (obj) {
            var that = this;
                // 自定义 select
            obj.selectPluging({
                width: '90px',
                minWidth: '60px',
                height: '180px',
                selectedShowSpan: "ui-selectSpan",
                selectedShowOpts: "ui-selectOpts",
                dis: 'fixed'
            }).change(function () {
                $(this).siblings('.ui-selectSpan').removeClass('error');
                var selectElems = $(this).parent().find("select"), theval = $(this).val(), areaName;
                if (theval > 0) {
                    areaName = that.getSelectObj(selectElems, "text").join(" ");
                    $("#AreaIDText").val(theval);
                    $("#areaNameText").val(areaName);
                }
            });
        },
        editpop : function (areaid) {
            var self=this;
            var edit = {
                provice: self.adrForm.find('.provice'),
                city: self.adrForm.find('.city'),
                district: self.adrForm.find('.district'),
                obj: self.adrForm.find('.ui-select')
            }
            var p = null;
            if (areaid && areaid.length > 0) {
                var o = {
                    provice: areaid.substr(0, 2) + "0000",
                    city: areaid.substr(0, 4) + "00",
                    district: areaid
                }
                p = $('#editAddress').area({
                    provice: edit.provice,
                    city: edit.city,
                    district: edit.district,
                    editdef: o
                });
            } else {
                p = $('#editAddress').area({
                    provice: edit.provice,
                    city: edit.city,
                    district: edit.district,
                    callback: self.callback(edit.obj)
                });
            }
            return p;
        }
    };
    function f(a) {
        e.init(a)
    }
    return f
});


