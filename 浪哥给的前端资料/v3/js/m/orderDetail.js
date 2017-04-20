define("m/orderDetail.js", ["common/shoppingcart.js", "lib/trimPath.js", "common/tools.js", "common/m-home-slider.js"], function (require, exports, modules) {
    require("lib/trimPath.js");
    require("common/tools.js");
    require("common/m-home-slider.js");
    var g = require("common/shoppingcart.js");
    g();
	var OrderID = T.url.getQueryValue("oid");
	function updateProcess(num){
		$("#process").children().each(function(index,item){
			if(index<num){
				$(item).addClass("done");
			}
		});
	}
	window.buyStatusTips = { "0": '请您在提交订单后的剩余时间内完成支付，否则订单会自动取消。<a href="'+T.site.pay+'?o='+OrderID+'" target="_blank">立即支付</a>', "10": "尊敬的客户，您的订单正在等待客服审核", "20": "尊敬的客户，您的订单已审核通过。", "70": "尊敬的客户，您的订单等待发货。", "80": "尊敬的客户，您的订单已出库，请您耐心等待。", "400": "交易成功", "510": "您的订单已关闭", "520": "订单已取消" };
	window.buyerStatusObj = { "0": "待支付", "10": "待审核", "20": "审核通过", "70": "待发货", "80": "已发货", "400": "交易成功", "510": "订单已关闭", "520": "订单已取消" };
	var Templates = {
	    ostatus: '<div class="mt"><strong>订单号：${OrderCode}&nbsp;&nbsp;&nbsp;&nbsp;状态：<span class="ftx14 ftx04">${buyerStatusObj[BuyerStatus]}</span><span id="pay-button-11850550889"></span></strong></div><div class="mc" style="display:show">${buyStatusTips[BuyerStatus]}</div>',
	    logistic: '<h2>物流信息</h2><div class="oderInfoList box"><dl class="box"><dt>发货方式：</dt><dd>快递</dd></dl><dl class="box"><dt>物流公司：</dt><dd>${LogisticsName}</dd></dl><dl class="box"><dt>运单号码：</dt><dd>${LogisticsNum}</dd></dl></div>',
	    orderInfo: '<dl class="fore"><dt>收货人信息</dt><dd><ul><li>收 货 人：${ReceiveName}</li><li>收货地址：${Address}</li><li>手机号码：${ReceiveMobile}</li><li>身 份 证：${ReceiveCard}</li><li>买家留言：${BuyerRemark}</li></ul></dd></dl><dl class="fore"><dt>订单时间</dt><dd><ul><li>下单时间：${CreateTime}</li><li>付款时间：${PayTime}</li><li>发货时间：${DeliveryTime}</li><li>确认时间：${SignTime}</li></ul></dd></dl>',
	    plist: '<dl><dt>商品清单</dt><dd class="p-list"><table cellpadding="0" cellspacing="0" width="100%"><thead><th width="45%">商品</th><th  width="11%">单价（元）</th><th  width="10%">数量</th><th  width="11%">优惠</th><th  width="11%">税费</th><th  width="12%">小计</th></thead><tbody>{for product in ProductList}<tr><td><div class="f1 img"><a href="${T.site.item}${product.ProductID}.html" target="_blank" class="proImg"><img src="${T.site.img}${product.ProductPic}" width="86" height="86" alt="${product.ProductName}" /></a></div><div class="f1 names"><p class="nm"><a href="${T.site.item}${product.ProductID}.html" target="_blank">${product.ProductName}</a></p><p class="subnm">${product.SkuAttrs}</p></div></td><td><b>&yen;${product.UnitPrice}</b></td><td ><b>${product.ProductCount}</b></td><td><b>0</b></td><td><b>&yen;${product.Tax}</b></td><td><b class="c-c12">&yen;${product.TotalPrice}</b></td></tr>{/for}</tbody></table></dd></dl>',
	    ototal: '<div class="total clearfix"><ul><li><span>商品件数：</span>${ProductCount}</li><li><span>总商品金额：</span>&yen;${TotalPrice}</li><li><span>实收税：</span>&yen;${TaxesFees}</li><li><span>运费：</span>&yen;${ShipPrice}</li></ul><span class="clr">ad</span> <span style="color:#EDEDED;"></span><div class="extra">应付总额：<span class="ftx04"><b>&yen;${TotalPrice}</b></span></div></div>',
	    paylist: ''
	};
	/* BuyerStatus
	* 0 "待支付"
	* 10 "待审核"
	* 20 "审核通过"
	* 70 "待发货"
	* 80 "已发货"
	* 400 "交易成功"
	* 510 "订单已关闭"
	* 520 "订单已取消"
	*/
	
   //请求订单信息
	T.ajax("UserOrder/GetOrderDetail", {
		data:{OrderCode:OrderID},
		success: function (data) {
			if(T.tool.in_array(data.BuyerStatus,[10,20,70])){
				updateProcess(2);
			}else if(data.BuyerStatus==80){
				updateProcess(3);
			}else if(data.BuyerStatus==400){
				updateProcess(4);
			}else{
				updateProcess(1);
			}
			data.PayTime = data.PayTime.replace("1900-01-01 00:00:00", "");
			data.DeliveryTime = data.DeliveryTime.replace("1900-01-01 00:00:00", "");
			data.SignTime = data.SignTime.replace("1900-01-01 00:00:00", "");
			var orderInfoTem = Templates.orderInfo + Templates.plist + Templates.ototal;
			var orderInfoStr = orderInfoTem.process(data);
			var statusStr = Templates.ostatus.process(data);
			$("#resultItem").html(orderInfoStr);
			$("#orderstate").html(statusStr);
			console.log();
		    //订单状态->物流信息->订单信息->商品信息->支付信息
		//	$("#resultItem").setTemplateElement("orderTemplate",null,{f_escapeString:function(text){return text.replace("1900-01-01 00:00:00","")}}).processTemplate(data);
		}
	 });
})
