define(function(require, exports, modules){
	var $ = require("jquery");
	require("plugins/jquery-jtemplates");
	require('public/tools-dev.js');
	// 初始化接口
	$("#mui-bar-plugin2").delegate(".i-del","click",function(e){
		e.preventDefault();
		var cid=$(this).attr("data-cid");
		 T.ajax("Cart/clearOrderCart",{
			apiUrl:T.site.cartApi,
			type:"POST",
			data:{"cartIDs": [cid],"statusFlag": 0},
			success: function (data) {                   
              $("#mui-bar-plugin2").setTemplateElement("muibarplugin2tmp").processTemplate(data);		
			}
		 });
	});	
	var run = {
		islogin : T.cookie("__sid"),
		refresh:function(){
			run.getcustomer(run.getcart,true);
		},
		// 登录接口 
		// 参数1  购物车接口
		// 参数2  需要侧边栏 默认为false 
		getcustomer : function(a,needaside){
			var bool = needaside || false; 
			// 不需要去除dom
			if(!bool){
				$('#m-mui-bar').remove();
			}else{
				$('#m-mui-bar').show();
			}
			var jsondata={
				islogin:run.islogin,
				infourl:T.site.member+"baseinfo.html",
				collectionurl:T.site.member+"myCollection.html",
				username:T.cookie("__uname"),
			};
			if(run.islogin){
				$('#nologin').hide();
				$('#logined').find('.username').attr('href',jsondata.infourl).find('em').text(jsondata.username);
				$('#logined').show();						
			}else{
				$('#nologin').show();
				$('#logined').hide(function(){
					$(this).find('.username em').text('').attr('href','');
					$(this).find('.logout').attr('href','');
				});
			}
            
          //  if(bool){
				a(bool);
				if($("#mui-mbar-tabs").length>0){
					$("#mui-mbar-tabs").setTemplateElement("muimbartabstmp").processTemplate(jsondata);
				}	
			//}
		},
		// 2 购物车接口
		getcart : function(needaside,json){
		    var bool = needaside || false;
		    if (location.host.indexOf("cart.ccdfs.") > -1 && T.tool.in_array(T.url.getFileName(), ["index.html", "order.html"])) { return; }
            T.ajax("Cart/getCartList",{
				apiUrl:T.site.cartApi,
                type:"GET",
                data:{},
                success:function(data){
					// 头部购物车					
					if($('#headCartBox').length>0){
				        $("#nav-shopcarts .cartsNum").text(data.productCount);
						$("#headCartBox").setTemplateElement("headCartemp").processTemplate(data);	
					}
					if($("#mui-bar-plugin2").length>0){
						$("#i-cartNums").text(data.productCount);
						$("#mui-bar-plugin2").setTemplateElement("muibarplugin2tmp").processTemplate(data);						
                  						
					}			   
                }
            });
		},
		loginpop: function(path){
			if(run.islogin){
				var loginpop = "<div class='Jpopup' id='loginpop'><div class='pop-overlay'></div><div class='pop-container' >";
					loginpop +=	"<div class='pop-header' ><span class='title'>登录保税网</span>";
					loginpop +=	"<a href='javascript:;' class='close'></a></div>";
					loginpop +=	"<div class='pop-cnt '><div class='cnt'>";
					loginpop +=	"<iframe src='"+path+"' frameborder='0' style='margin-left:30px;' width='300' height='350'></iframe></div></div></div></div>";

					if($('#loginpop') && $('#loginpop').length > 0){
						$('#loginpop').show().find('.pop-container').removeClass('falldown').addClass('falldown');
					}else{
						$(loginpop).appendTo($('body')).show().find('.pop-container').removeClass('falldown').addClass('falldown');
					}
				$('#loginpop').on('click','.close',function(){
					$('#loginpop').hide().find('.pop-container').removeClass('falldown');
				});
			}
		}
	}
	exports.run = run;
	exports.loginpop = function(path){
		run.loginpop(path);
	}
})