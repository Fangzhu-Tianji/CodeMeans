define("m/collection.js", ["common/shoppingcart.js", "lib/trimPath.js", "lib/jquery.page", "common/tools.js", "common/m-home-slider.js"], function (require, exports, modules) {
    require("lib/trimPath.js");
    require("lib/jquery.page");
    require("common/tools.js");
    require("common/m-home-slider.js");
    var g = require("common/shoppingcart.js");
    g();


	var sparam={pageIndex:1,pageSize:20,allowPaging:true},$CountBox=$("#totalCount");

	var TPL = {
	    list: '<ul class="store-list">{for record in ResultList}<li><div class="img"><a href="${T.site.item}${record.ProductID}.html" target="_blank"><img src="${T.site.img}${record.PicPath}" alt="" /></a><div class="hover"><div class="bar"><a href="#" data-fid="${record.ProductID}" class="addtocar" title="加入购物车"></a><a href="#" data-fid="${record.FavoriteID}" class="del" title="移出收藏夹"></a></div></div></div><p class="goodsnm"><a href="${T.site.item}${record.ProductID}.html" target="_blank"><span>${record.ProductName}</span></a></p><p class="units">¥${record.Price}</p></li>{/for}</ul>',
	    none: '<div class="nothing"><div class="cnt"><p class="title">对不起，没有找到相关收藏</p><p class="subtitle"><a href="' + T.site.web + '">去随便逛逛</a><span>，万一有喜欢的呢</span></p></div></div>'
	};

	function pageClickCallback(){
		 T.ajax("Favorite/MyFavorite",{
			data:this.data,
			success: function (data) {
			    var temstr = data.ResultList.length > 0 ? TPL.list.process(data) : TPL.none;
			    $("#resultList").html(temstr);
			    $CountBox.text(data.TotalRecord);
			}
		 });
	}	
	function runSearch(){
		 T.ajax("Favorite/MyFavorite",{
			data:sparam,
			success: function (data) {
			    var temstr = data.ResultList.length > 0 ? TPL.list.process(data) : TPL.none;
			    $("#resultList").html(temstr);
			    $CountBox.text(data.TotalRecord);
				$('.pagination').page({
					total: data.TotalRecord,
					pageSize: data.PageSize,
					click: function (pageIndex) { //pageIndex:当前点击页数，索引从0开始，页数=索引+1
					  sparam['pageIndex']=pageIndex+1;
					  pageClickCallback.call({data:sparam});
					}
				});  
			}
		 });
	}
	runSearch();	
	$("#resultList").delegate(".del","click",function(e){
		e.preventDefault();
		var fid=$(this).attr("data-fid");
		layer.confirm('您确定要移除该商品？',{icon:0}, function(index){	
			T.ajax("Favorite/DelFavorite",{
				type:"POST",
				data:{ID:fid},
				success: function (data) {
					layer.msg("删除成功",{icon:1});
					runSearch();
					layer.close(index);
				}
			});
		});		
	}); 
	$("#resultList").delegate(".addtocar","click",function(e){
		e.preventDefault();
		var fid=$(this).attr("data-fid");
		T.ajax("Cart/goToCart",{
			type:"POST",
			apiUrl:T.site.cartApi,
			data:{pid:fid,pnum:1,stauts:0},		   
			success: function (json) {
				layer.msg("加入购物车成功",{icon:1});
			}
		});
	
	}); 
});
  