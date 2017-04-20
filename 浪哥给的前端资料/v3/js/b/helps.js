define(function (require, exports, modules) {
  //  require("public/m-public");
    var c = require("common/category");
    var g = require("common/shoppingcart.js");
    c();
    g();
   // P.mlogin.run.getcustomer(P.mlogin.run.getcart);
	/* 高亮左侧导航 */	
	var pathName=window.location.origin+window.location.pathname;
	$("#m-helps-slider a").each(function(index,item){
		var pname=this.getAttribute("href");
		if(pname==pathName){
			$(item).parent().addClass("select");
		}
	});
});
