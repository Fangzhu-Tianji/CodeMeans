define(function (require, exports, modules) {
    var $ = require("jquery");
    require("public/tools-dev");
    require("plugins/jquery.tmpl")($);
    var addcategorys = function(){
        /*
        T.GET({
            //action:'http://item.ccdfs.com/product/GetCategories',
            action:'',
            //params:opts.para,
            success:function(data){
                if(data.result == "T"){
                    var json = JSON.parse(data.data);
                    data.data = json;
                    $('#categorytmpl').tmpl(json).appendTo($('#menu-navs'));
                }
            },
            failure:function(){},
            error:function(){}
        });
*/
        

    }
    addcategorys();
    var run = function (i, k, isIndex) {
        if (i != null) {
            var li = $('#m-nav').find('li').eq(i), bgcolor;
            if ($('#flexslider') && $('#flexslider').length > 0) {
                if ($('#flexslider').find('.slides li').length == 1) {
                    $('#flexslider').find('.control-nav-overlay').hide();
                }
            }
            li.addClass('select').siblings().removeClass('select');
        } 
        if (k != null) {
            $('#m-nav').find('li').eq(k).addClass('hot').siblings().removeClass('hot');
        }
		var menucnt = $('#category-menus').find('.menu-cnt');
		if(isIndex){
            menucnt.show();
            $('#category-menus').off("hover");
		}else{
			$('#category-menus').hover(function () {
				menucnt.show().children('.olay').css({
					"width": "178px",
					"marginTop":"-2px",
					"border": "1px solid #ddd",
					"border-top":"1px solid #c71622"
				});
				menucnt.find('.menu-sub-panel').css({
					'borderLeft':'none'
				});
			}, function () {
				menucnt.hide();
			});
		}
    }
    
    var navdisabled = function(){
        $('#category-menus').find('.menu-cnt').show();
        $('#category-menus').off("hover");
        $('#category-menus').on('mouseleave mouseenter','.menu-nav-item',function(e){
            var e = e || window.event;
            var index = $(this).index();
            var mouseleave = function(){

            } 
            var mouseenter = function(){
                $('#flexslider').find('.slides').find('li').eq(index).css({
                    opacity: 1,
                    zIndex: 2
                }).addClass('flex-active-slide').siblings().css({
                    opacity: 0,
                    zIndex: 1
                }).removeClass('flex-active-slide');  
            }
            switch(e.type){
                case "mouseleave": mouseleave(); break;
                case "mouseenter": mouseenter(); break;
            } 
        });
        return false;
    }

    exports.run = run;
    exports.navdisabled = navdisabled;
})