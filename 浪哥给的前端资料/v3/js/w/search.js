define("w/search.js", ["common/category.js", "common/layer.login.js", "common/shoppingcart.js", "lib/jquery.lazyload.js"], function (require, exports, modules) {

	require("lib/jquery.lazyload.js");
	var c = require("common/category.js");
	var g = require("common/shoppingcart.js");
	c({ isInitData: !1 });
	g();
    /* 显示隐藏面包屑 */
	!function () {
	    var a = $(".menu-drop");
	    a.hover(function () {
	        var a = $(this);
	        a.addClass("z-menu-drop-open")
	    }, function () {
	        var a = $(this);
	        a.removeClass("z-menu-drop-open")
	    })
	}();
	// 图片懒加载
	$("img").lazyload({
		threshold:300,
		effect: "fadeIn"
	});

});