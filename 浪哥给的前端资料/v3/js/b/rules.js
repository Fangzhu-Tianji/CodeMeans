define(function(require, exports, modules){
	require("public/m-public");
    require("public/category");
	P.mlogin.run.getcustomer(P.mlogin.run.getcart);
	function renderCategory(json){
		var html ='';
		json && $.each(json,function(index,item){
			html+='<li class="menu-nav-item"><a class="title" href="javascript:;"><img src="'+T.site.img+item.pic+'"><span>'+item.name+'</span></a><div class="menu-sub-panel">',
			item.categoryList && $.each(item.categoryList,function(key,val){
				html +='<dl><dt><a target="_blank" href="'+T.site.web+val.codename+'_c'+val.id+'.html">'+val.name+'</a></dt>',
				val.categoryList && $.each(val.categoryList,function(k,v){
					html +='<dd><a target="_blank" href="'+T.site.web+v.codename+'_c'+v.id+'.html">'+v.name+'</a></dd>';
				}),
				html +='</dl>';
			}),
			html+='</div></li>';
		});
		return html;
	}
	var categoryHtml = renderCategory(category);
	$("#menu-navs").html(categoryHtml);
	P.mnav.run(0,2);
})
