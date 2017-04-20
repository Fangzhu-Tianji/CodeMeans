define(function(require, exports, modules){
	require("public/m-public");
	P.mlogin.run.getcustomer(P.mlogin.run.getcart);
	var orderID = T.url.getQueryValue("o"), payEndTime;
	$("#viewOrderDetail").attr("href", T.site.member + "orderDetail.html?oid=" + orderID);
	T.ajax("Order/GetOrderPayment", {
	    apiUrl: T.site.cartApi,
	    type: "GET",
	    loginJump: true,
	    data: { orderCode: orderID },
	    success: function (data) {
	        var orderObj = {
	            "Address": data.Address,
	            "OrderCode": data.OrderCode,
	            "ReceiveMobile": data.ReceiveMobile,
	            "ReceiveName": data.ReceiveName,
	            "styleTotalPrice": data.TotalPrice,
	            "mustTotalPrice": data.TotalPrice,
	            "TotalPrice": data.TotalPrice
	        };/*
	        $.each(orderObj, function (index, item) {
	            $("#" + index).text(item);
	        });
	        $("#confirmPayBtn").attr("href", T.site.pay + "?o=" + data.OrderCode);
	        payEndTime = data.DataStamp * 1000;
	        countdown();
	        timer = setInterval(countdown, 1000);
            */
	    }
	});
})
