define("c/index.js", ["common/shoppingcart.js", "lib/trimPath.js", "common/tools.js", "common/layer.login.js", "lib/jquery.checkAll.js"], function (require, exports, modules) {

    require("lib/trimPath.js");
    require("common/tools.js");
    require("lib/jquery.checkAll.js");
   var login = require("common/layer.login.js");

    $("#import-tax-rules").attr({ "href": T.site.base + "about/rules.html", target: "_blank" });
    var CART_TPL = {
        list: '<input type="hidden" id="changeBeforeValue" value="" /><div class="g-lists">{for record in cartList}<div class="item"><div class="seller"><label class="ui-checkbox"><input type="checkbox" name="checkItem" data-type="${record.stype}"{if record.status} checked="checked"{/if}><span>${record.sTag}</span></label></div><div class="bothItem">{for product in record.productList}<ul class="g-item{if product_index==0} first{/if}"><li class="col1"><input type="checkbox" value="${product.cid}" name="cartIDs"{if product.status} checked="checked"{/if} /></li><li class="col2"><div class="f1 img"><a href="${T.site.item}${product.pid}.html" target="_blank"><img src="${T.site.img}${product.imgPath}" alt="" /></a></div><div class="f1 names"><p class="nm"><span class="goodsnm"><a href="${T.site.item}${product.pid}.html" target="_blank">${product.pname}</a></span></p><p class="subnm"><span>${product.attr}</span></p></div></li><li class="col3">&yen;${product.mprice}</li><li class="col4"><div class="costs"><a href="javascript:;" class="reduce" data-disabled="0"></a><input type="text" value="${product.pnum}" data-max="5" data-cid="${product.cid}" readonly="readonly" /><a href="javascript:;" class="plus" data-disabled="0"></a></div><div class="subtitle" style="display:none;">限购<em>5</em>件</div></li><li class="col6">&yen;${product.tax}</li><li class="col7"><span class="red">&yen;${product.totalPrice}</span></li><li class="col8"><a href="#" data-cid="${product.cid}" class="del">删除</a></li></ul>{/for}<div class="item-footer"><span class="cost-total">税费：&yen;${record.tax}<i class="sm-space">&nbsp;</i>合计：<b class="red">&yen;${record.totalPrice}</b></span><p class="red">&nbsp;</p></div></div></div>{/for}</div><div class="total-footer"><div class="options-box clearfix"><div class="toolbar-right"><div class="amount-sum">应付总额： <b class="red">&yen;${totalPrice}</b> 元</div><input type="button" id="orderCheckOut" class="acount{if totalPrice==0} disabled{/if}" value="去结算" /></div><div class="select-all"><label class="ui-checkbox"><input type="checkbox" class="j-chk-all"><span>全选</span></label></div><div class="options"><a href="javascript:;" class="batchdel" id="batchdel">批量删除</a></div></div></div>',
        nothing: '<div class="nothing"><img src="${T.site.base}v3/img/public/i-1036.png">购物车还没有任何商品！<a href="${T.site.web}">去购物></a></div>'
    };
	/* 获取列表 */
	T.ajax("Cart/getCartList",{
		apiUrl:T.site.cartApi,
		type:"GET",
		data:{},
		success: function (data) {
		    updateTemplate(data);
		}
	});
	function updateTemplate(data) {
	    var temstr = data.cartList.length > 0 ? CART_TPL.list.process(data) : CART_TPL.nothing;
	    $("#ccdfs-cart").html(temstr);
	    window.Head_Cart_Tpl_List && $("#headCartBox").html(Head_Cart_Tpl_List.process(data));
	    checkAllStatus(data);
	}
	function getCheckedCids(){
		var $checkedEle = $("#ccdfs-cart").find("input:checked[name=cartIDs]"),checkedArr=[];
		$checkedEle.each(function(index,item){
			checkedArr.push(item.value);
		});
		return checkedArr;
	}
	function getCids(elems){
		var cidArr=[],flag=0;
		$.each(elems,function(index,item){			
			if(item.checked){
				flag=4;				
			}
			cidArr.push(item.value);
		});
		return  {cartIDs:cidArr,statusFlag:Number(flag)};
	}
	function getAllCids(){
		var $cidElem=$("#ccdfs-cart").find(":checkbox[name=cartIDs]"),cidArr=[];
		$cidElem.each(function(index,item){
			cidArr.push(item.value);
		});
		return cidArr;
	}
	function checkAllStatus(data){
		var ichksAll = true;
		$.each(data.cartList,function(index,item){
		  $.each(item.productList,function(k,v){
			  if(v.status==false){
				  ichksAll=false;
			  }						  
		  });					  
		});
		$('.j-chk-all').prop('checked',ichksAll);
	}
	function updateHeadCart(data) {
	    $("#nav-shopcarts .cartsNum").text(data.productCount);
	    $("#headCartBox").setTemplateElement("headCartemp").processTemplate(data);
	}
	function updateCart(elems){
		var cartObj=getCids(elems);
		T.ajax("Cart/updateCartStatusFlag",{
			apiUrl:T.site.cartApi,
			type:"POST",
			data:cartObj,
			success:function(data){
			    updateTemplate(data);

			}
		});
		
	}
	/* 
	* 全选与反选 
	* 数量更新
	* 删除和批量删除
	*/ 
	// 全选
	
    $('#contents').delegate('.j-chk-all',"click",function(e){
		var isChecked = this.checked,allCids=getAllCids(),flag= isChecked ? 4 : 0;
		$('.j-chk-all').prop('checked',isChecked);
        $('#ccdfs-cart').find('input[type="checkbox"]').prop("checked",isChecked);
		T.ajax("Cart/updateCartStatusFlag",{
			apiUrl:T.site.cartApi,
			type:"POST",
			data: {cartIDs:allCids,statusFlag:flag},
			success:function(data){
			    updateTemplate(data);
			}
		});
	});
	//去结算
	$("#ccdfs-cart").delegate("#orderCheckOut","click",function(e){
		var self=$(this);
		if(self.hasClass("disabled")){return;}
		if (!T.login.isLogin) {
		    login.open({
		        success:function(){
		            window.location.href = T.site.cart + "order.html";
		        }
		    });
		}else{
		    window.location.href = T.site.cart + "order.html";
		}
	});
    $("#ccdfs-cart").delegate(":checkbox","click",function(e){
		var itemName=this.name,itemVal=this.value,itemCid,itemChecked=this.checked,itemEle=$(this).closest(".item"),cidCheck=itemEle.find("input[name=cartIDs]"),cidChecked=itemEle.find("input:checked");
		if(T.tool.in_array(itemName,["checkItem","cartIDs"])){
			if(itemName=="checkItem"){
				cidCheck.prop('checked',itemChecked);
				updateCart(cidCheck);
			}else{
				updateCart([this]);
			}
			
		}
	});
	/*
    // 自定义 select
	$('.ui-select').selectPluging({
		width:'60px',
		minWidth:'60px',
		height:'100px',
		selectedShowSpan:"ui-selectSpan",	
		selectedShowOpts:"ui-selectOpts"
	});*/
 var cartObj = {
	 init: function(){
        // 绑定事件
            this.bindCartEvent();
	 },
	 // 增加商品数量+
	 addSkuNum:function(obj){
		 var aimnode=[],$prevEle=$(obj).prev(),num=$prevEle.val(),cid=$prevEle.attr("data-cid"),params ={cartID:cid,updateNum:num};
		if(num > 0 && num < 1001){
			this.changeSkuNum(params,$prevEle, aimnode);
		}else{
			$prevEle.val(num-1);
		}		 
	 },
	//减少商品数量-
	minusSkuNum: function(obj){
		var aimnode=[],$nextEle=$(obj).next(),num=$nextEle.val(),cid=$nextEle.attr("data-cid"),params ={cartID:cid,updateNum:num};
		if(num > 0 && num < 1001){
			this.changeSkuNum(params,$nextEle, aimnode);
		}else{
			$nextEle.val(num+1);
		}	
		this.changeSkuNum(params, $nextEle, aimnode);
	},
	//修改商品数量
	inputSkuNum: function(obj){
		 var $iptEle=$(obj),num = $iptEle.val(),cid=$iptEle.attr("data-cid");
            if(num > 0 && num < 1001){
                var params = {cartID:cid,updateNum:num},aimnode=[];
                this.changeSkuNum(params, $(obj), aimnode);
            }else{
            	//还原input值,弹出提示信息
            	$(obj).val(num);
            	if (num <= 0){
					layer.alert("商品数量必须大于0",{icon:2});
            	}else {
					layer.alert("商品数量超限",{icon:2});
            	}
            }
	},
	changeSkuNum: function(params, obj, aimnode){
		/* 更新数量 */
		T.ajax("Cart/updateOrderCartNum",{
			apiUrl:T.site.cartApi,
			type:"POST",
			data:params,
			success: function (data) {
			    updateTemplate(data);
			}
		}); 
	},
	 // 绑定事件
	 bindCartEvent: function(){
		 var me = this;
		 // 单个删除
		$("#ccdfs-cart").delegate(".del","click",function(e){
			e.preventDefault();
			var self=$(this),cid=self.attr("data-cid");		
			layer.confirm("删除商品？",{icon:0},function(index){
				T.ajax("Cart/clearOrderCart",{
					apiUrl:T.site.cartApi,
					type:"POST",
					data:{cartIDs:[cid],statusFlag:0},
					success:function(data){
						layer.close(index);
						$("#ccdfs-cart").setTemplateElement("cartTemplate").processTemplate(data);
						updateHeadCart(data);
					}
				});

			});
		});
		// 批量删除
		$('#ccdfs-cart').delegate("#batchdel","click",function(e){
			e.preventDefault();
			var cartIDArr =getCheckedCids();
			if(cartIDArr && cartIDArr.length > 0){
				layer.confirm("确定要批量删除操作？",{icon:0},function(index){
					T.ajax("Cart/clearOrderCart",{
						apiUrl:T.site.cartApi,
						type:"POST",
						data:{cartIDs:cartIDArr,statusFlag:0},
						success:function(data){
							layer.close(index);
							$("#ccdfs-cart").setTemplateElement("cartTemplate").processTemplate(data);
							updateHeadCart(data);
						}
					});
					
				});
			}
		});
		// 增加数量
		 $('#ccdfs-cart').delegate('a.plus', 'click', function(){
                var anode = $(this);
                var pnode = anode.parent();
                var inputEl = $('input', pnode);
                var cur = inputEl.val();
                cur++;
                inputEl.css('color','#fff');
                var uphtml = '<span class="upspan"><span style="position:relative;">' + (cur-1) + '</span></span>';
                var downhtml = '<span style="top:28px;" class="downspan"><span style="position:relative;">' + cur + '</span></span>';
                pnode.prepend(uphtml);
                pnode.append(downhtml);

                $(".upspan span:last").animate({top: -28}, "10");
                $(".downspan span:last").animate({top: -28}, "10",function(){
                    $('.downspan,.upspan').remove();
                    inputEl.css('color','#333');
                    inputEl.val(cur);
                    me.addSkuNum(anode);
                });
		 });
		$('#ccdfs-cart').delegate('a.reduce', 'click', function(){
			var anode = $(this);
			if(anode.hasClass('disabled')){
				return;
			}
			var pnode = anode.parent();
			var inputEl = $('input', pnode);
			var cur = inputEl.val();
			cur--;
			if(cur == 0){
				return;
			}
			inputEl.css('color','#fff');
			var uphtml = '<span class="upspan"><span style="position:relative;">' + (cur+1) + '</span></span>';
			var downhtml = '<span style="top:-28px;" class="downspan"><span style="position:relative;">' + cur + '</span></span>';
			pnode.prepend(uphtml);
			pnode.append(downhtml);

			$(".upspan span:last").animate({top: 28}, "10");
			$(".downspan span:last").animate({top: 28}, "10",function(){
				$('.downspan,.upspan').remove();
				inputEl.css('color','#333');
				inputEl.val(cur);
				me.minusSkuNum(anode);
			});
		});
        //商品数量文本框获取焦点，保存之前的值
		$('#ccdfs-cart').delegate('div.costs input', 'focus', function(event){
			var val = parseInt($(this).val());
			if(isNaN(val)){
				return;
			}
			val && $("#changeBeforeValue").val(val);
		});
		//改变商品数量
		$('#ccdfs-cart').delegate('div.costs input', 'change', function(event){
			var theval=$(this).val();
			if(/^[\d]+$/.test(theval) && (theval>0)){
				me.inputSkuNum(this);
			}else{
				var oldval=$("#changeBeforeValue").val();
				if(oldval){this.value=oldval;}
			}
		});
	 }
 };
 cartObj.init();
})
