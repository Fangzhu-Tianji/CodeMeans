define("m/orders.js", ["common/shoppingcart.js", "lib/trimPath.js", "common/tools.js", "common/m-home-slider.js"], function (require, exports, modules) {
    require("lib/trimPath.js");
    require("common/tools.js");
    require("common/m-home-slider.js");
    var g = require("common/shoppingcart.js");
    g();
    var Templates = {
        ctitle: '<div class="cartTitle"><ul><li class="w34">商品</li><li class="w11">单价（元）</li><li class="w10">数量</li><li class="w11">维权</li><li class="w12">总计（元）</li><li class="w11">订单状态</li><li class="w11">操作</li></ul></div>',
        thead: '{for record in OrderList.ResultList}<table width="1000" border="0" cellspacing="0" cellpadding="0"><thead><tr><th colspan="7"><p class="itemTitle"><input type="checkbox" name="chk" value="${record.OrderCode}" {if record.BuyerStatus==0} data-status="1"{/if} /><b>下单时间：${record.CreateTime}</b><em>订单号：<a href="${T.site.member}orderDetail.html?oid=${record.OrderCode}" target="_blank">${record.OrderCode}</a></em></p></th></tr></thead><tbody>',
        tbody: '{var list_total=record.ProductList.length}{for product in record.ProductList}<tr><td class="w34"><a href="${T.site.item}${product.ProductID}.html" class="proImg" target="_blank"><img src="${T.site.img}${product.ProductPic}" width="86" height="86" alt="${product.ProductName}" /></a><div class="proName"><h2><a href="${T.site.item}${product.ProductID}.html" target="_blank">${product.ProductName}</a></h2><h6>${product.SkuAttrs}</h6></div></td><td class="w11"><b>&yen;${product.UnitPrice}</b></td><td class="w10"><b>${product.ProductCount}</b></td>{if product_index==0}<td class="w11" rowspan="${list_total}"></td><td class="w12" rowspan="${record.ProductList.length}"><b class="c-1b8 fw7">&yen;${product.TotalPrice}</b><br /><em>(含运费：&yen;${record.ShipPrice} )</em><br /><em>(含税费：&yen;${record.TaxesFees} )</em></td><td class="w10" rowspan="${list_total}"><span class="c-c12">${record.BuyerStatusStr}</span><br /><a href="${T.site.member}orderDetail.html?oid=${record.OrderCode}" target="_blank">订单详情</a></td><td class="w12" rowspan="${list_total}">{if record.BuyerStatus==400}<a href="${T.site.member}evaluate.html?oid=${record.OrderCode}" target="_blank" class="conformBtn">去评价</a>{/if}{if record.BuyerStatus==0}<span id="count-time-${record.OrderCode}"></span><br /><a href="{T.site.cart}payment.html?o=${record.OrderCode}" target="_blank" class="conformBtn">去付款</a><br /><a href="#" class="del" data-oid="${record.OrderCode}">取消订单</a>{/if}</td>{/if}</tr>{/for}',
        tfoot: '</tbody></table><div class="h10"></div>{/for} ',
        cfooter: '<div class="cartFoot"><p class="itemCollapse box"><label for="chkAll"><input type="checkbox" name="" id="chkAll" data-name="chk" class="j-chk-all">全选</label><a href="javascript:;" id="withCancel">批量取消</a></p></div>',
        none: '<div class="nothing"><div class="cnt"><p class="title">对不起，没有找到订单</p><p class="subtitle"><a href="' + T.site.web + '">去随便逛逛</a><span>，万一有喜欢的呢</span></p></div></div>'
    };
    var TPL = {
        list: Templates.ctitle + Templates.thead + Templates.tbody + Templates.tfoot + Templates.cfooter,
        none: Templates.none
    };
    function getTimeRemaining(endtime) {
         var t = endtime * 1000 - new Date().getTime();
         var seconds = Math.floor((t / 1000) % 60);
         var minutes = Math.floor((t / 1000 / 60) % 60);
         var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
         var days = Math.floor(t / (1000 * 60 * 60 * 24));
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
     }
     function initializeClock(id, endtime) {
         var clock = document.getElementById(id),timeinterval;
         if (clock) {
                 timeinterval = setInterval(function () {
                     var t = getTimeRemaining(endtime);
                     clock.innerHTML = '<b class="timeout">\u5269\u4f59' + t.minutes + '\u5206' + t.seconds + '\u79d2</b>';
                     if (t.total <= 0) {
                         clearInterval(timeinterval);
                         window.location.reload();
                     }
                }, 1000);
         }
     }

    // 获取列表
     function loadOrder(sid){
		 T.ajax("UserOrder/GetOrderList?",{
			data:{buyerStatus:sid,allowPaging:true,pageIndex:1,pageSize:20},
			success: function (data) {
			    var temstr = data.OrderList.ResultList.length > 0 ? TPL.list.process(data) : TPL.none;
			    $("#OrderStatusList").html(temstr);
			  //  console.log(temstr);
			   // return;
			    $.each(data.OrderList.ResultList, function (index, item) {
			        if (item.BuyerStatus==0) {
			            initializeClock("count-time-" + item.OrderCode, item.DataStamp);
			        }
			    });
			  $("#ordertoPay").find("em").text(data.WaitPay);
			  $("#ordertoShip").find("em").text(data.WaitFa);
			  $("#ordertoReceive").find("em").text(data.WaitShou);
			}
		 });
     }
     function getCancel(){
     	var statusArr=[];
     	$("#orderForm").find("input[name=chk]").each(function(index,item){
			var itemCheck=this.checked,itemStatus=this.getAttribute("data-status");
			if(itemStatus==1 && itemCheck){
               statusArr.push(item.value);
			}
		});
		return statusArr;
     }
     loadOrder();
	// 取消订单	  
	$("#OrderStatusList").delegate(".del","click",function(e){
		e.preventDefault();
		var oid=$(this).attr("data-oid");
		layer.confirm('您确定要取消该订单？',{icon:0}, function(index){	
			T.ajax("UserOrder/CancelOrder",{
				type:"POST",
				data:{Content:oid},
				success: function (data) {
					layer.msg("取消成功",{icon:1});
					loadOrder();
					layer.close(index);
				}
			});
		});		
	}); 

	$("#orderStaus").delegate("a","click",function(e){
		var self=$(this),sHref= self.attr("href"),statusId=self.attr("data-sid");
        if(sHref="#"){
        	e.preventDefault();
        	loadOrder(statusId);
			self.parent().addClass("select").siblings().removeClass("select");
        }else{
        	return true;        	
        }
	});
	$("#OrderStatusList").delegate("#chkAll","click",function(e){
		var eTarget=e.currentTarget,teform = eTarget.form,isChecked=eTarget.checked,eInputs=teform.chk;
		$(eInputs).prop("checked",isChecked);
	});
	$("#OrderStatusList").delegate("#withCancel","click",function(e){
		e.preventDefault();
        var cstatus=getCancel();
        if(cstatus.length==0){
        	layer.alert("没有可取消的订单",{icon:2});
        	return;
        }
		layer.confirm('您确定要批量取消订单？',{icon:0}, function(index){	
			T.ajax("UserOrder/BatchCancelOrder",{
				type:"POST",
				data:{orderList:cstatus},
				success: function (data) {
					layer.msg("取消成功",{icon:1});
					loadOrder();
					layer.close(index);
				}
			});
		});
	});
});

