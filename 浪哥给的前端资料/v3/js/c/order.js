define("c/order.js", ["common/address.js", "common/shoppingcart.js", "common/tools.js"], function (require, exports, modules) {
    var g = require("common/shoppingcart.js");
    var e = require("common/address.js");
    var orderParam = { cartIDs: [] }, randomStr = T.url.getQueryValue("a"), firstAdress = [];
    var TPL = {
        prefix: '<a href="${T.site.member}getEasyBuyList.html" class="manage" target="_blank">管理收货地址</a><ul>',
        list: '{for record in data}<li id="consignee_index_${record.AddressID}"{if record.IsDefault} class="select"{/if}{if record_index>3} style="display:none;"{/if} data-place="&lt;p&gt;${record.AreaName} ${record.Address} &lt;/p&gt; &lt;p&gt; ${record.Receiver} 收 /${record.Mobile}&lt;/p&gt;"><p>${record.Receiver}   ${record.Mobile}</p><p>身份证   ${record.IdCard}</p><p>寄送至${record.AreaName} ${record.Address}</p><a href="#" data-aid="${record.AddressID}" class="edit">修改</a>{if record.IsDefault==false}<a href="#" data-aid="${record.AddressID}" class="set">设为默认</a>{/if}<a href="#" data-aid="${record.AddressID}" class="del">删除</a><input type="checkbox" name="addressID" value="${record.AddressID}" {if record.IsDefault}checked="checked"{/if}/></li>{forelse}{/for}',
        none: '<li id="consignee_index_0" class="last"><a href="#" data-aid="0" class="add" id="addshipAddr"><em></em>添加收货地址</a></li>',
        suffix: '</ul>{if data.length>3}<a href="#" class="expand">更多地址</a>{/if}',
        orderlist: '<div class="g-lists">{for record in cartList}<div class="item"><div class="seller" style="background-color:#efefef;"><span style="line-height:40px;padding-left:10px;">${record.sTag}</span></div><div class="bothItem">{for product in record.productList}<ul class="g-item{if product_index==0} first{/if}"><li class="col1"><div class="f1 img"><a href="${T.site.item}${product.pid}.html" target="_blank"><img src="${T.site.img}${product.imgPath}" alt="" width="80" height="80"></a></div><div class="f1 names"><p class="nm"><span class="goodsnm"><a href="${T.site.item}${product.pid}.html" target="_blank">${product.pname}</a></span></p><p class="subnm"><span>${product.attr}</span></p></div></li><li class="col2"><span>&yen;${product.mprice}</span></li><li class="col3">${product.pnum}</li><li class="col7">&yen;${product.tax}</li><li class="col6"><span class="red">&yen;${product.totalPrice}</span></li></ul>{/for}<div class="item-footer"><span class="cost-total">税费：&yen;${record.tax}<i class="sm-space">&nbsp;</i>合计：<b class="red">&yen;${record.totalPrice}</b></span><p class="red">&nbsp;</p></div></div></div>{/for}</div>',
        total: '<div class="order-summary clearfix"><div class="order-coupon"></div><div class="statistic"><div class="list"><span>总计商品件数：</span><em class="price">${productCount} 件</em></div><div class="list"><span>税费：</span><em class="price">&yen;${tax} </em></div><div class="list"><span>（中国保税网全场购物免运费）运费：</span><em class="price">&yen;${shipPrice} </em></div><div class="list"><span>应付总额：</span><em class="price">&yen;${totalPrice}  元</em></div></div></div>'
    };
    g();
    e({
        showlist: function (data) {
            var addresstem = TPL.prefix + TPL.list + TPL.none + TPL.suffix;
            var temstr = addresstem.process({ data: data });
            $("#consignee-addr").html(temstr);
            $("#consignee-addr li.select").each(function (index, item) {
                var place = item.getAttribute("data-place");
                place = place.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                $("#tradeItem").html(place);
            });
        },
        listEl: $("#consignee-addr"),
        itemtag:"li"
    });
    function getParams() {
        var sparam = {};
        sparam['addressID'] = $("#consignee-addr").find(":checked").val();
        sparam['remark'] = $("#remarkText").val();
        return sparam;
    }



    $('.addr-lists').on('click','li:not(.last)',function(e){
        var $this = $(this),place=$this.attr("data-place");
		if(place){
		    place = place.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
		    $("#tradeItem").html(place);
		}
        $this.find('input:checkbox').attr("checked",true);
        $this.siblings().find('input:checkbox').attr("checked",false);

        var e = e || window.event;
        var tar = (e.target) || e.srcElement;
        if(!$(tar).is('.edit')){
            $this.addClass('select').siblings().removeClass('select');
        }
    });
 
    /* 获取列表 */
    T.ajax("Cart/getCartList", {
        apiUrl: T.site.cartApi,
        type: "GET",
        data: randomStr ? { a: randomStr } : {},
        success: function (data) {
            var ptempstr = TPL.orderlist + TPL.total;
            $("#ccdfs-cart").html(ptempstr.process(data));
            if (firstAdress.length > 0) {
                bindData(firstAdress);
            }
            window.Head_Cart_Tpl_List && $("#headCartBox").html(Head_Cart_Tpl_List.process(data));
            orderParam.cartIDs=data.cartList;
            $("#payPrice,#payPriceId").text(new Number(data.totalPrice).toFixed(2));
            if (data.cartList.length == 0) {
                //layer.alert("购物车暂无商品",{icon:2},function(){
                //	window.location.href=T.site.web;
                //});
            }
            $.each(data.cartList, function (index, item) {
                $.each(item.productList, function (k, v) {
                    orderParam.cartIDs.push(v.cid);
                });
            });
        }
    });
    $("#order-submit").bind("click", function (e) {
        e.preventDefault();
        var sparam = getParams();
        orderParam['addressID'] = sparam.addressID;
        orderParam['payid'] = 1;
        orderParam['takeId'] = 1;
        orderParam['invoiceId'] = 1;
        orderParam['buyStatus'] = 0;//是否是立即购买
        orderParam['remark'] = sparam.remark || " ";
        if (randomStr) {
            orderParam['ytack'] = randomStr;
        }
        if (orderParam.cartIDs.length == 0) {
            layer.alert("购物车暂无商品", { icon: 2 });
            return;
        }
        if (!orderParam.addressID) {
            layer.alert("请选择收获地址", { icon: 2 });
            return;
        }
        T.ajax("Order/submitOrder", {
            apiUrl: T.site.cartApi,
            type: "POST",
            data: orderParam,
            success: function (data) {
                window.location.href = T.site.cart + "payment.html?o=" + data;
            }
        });
    });
});