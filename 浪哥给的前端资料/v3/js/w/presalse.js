define("w/presalse.js", ["lib/jquery.lazyload.js","common/nav.js","common/category.js", "common/shoppingcart.js"], function (require, exports, modules) {
    require("lib/jquery.lazyload.js");    
    var c = require("common/category.js");
    var n = require("common/nav.js");    
    var g = require("common/shoppingcart.js");
    c({ isInitData: !1 });
    n("home");
	g();
	// 图片懒加载
	$(".main").find('img').lazyload({
		effect: "fadeIn"
	});
	var partH = $(".main").position().top + $(".part1").height(),
		winH = $(window).height();
	if(partH >= winH){
		$(".main").find('img').each(function(){
			var dataoriginal = $(this).attr("data-original");
			$(this).attr("src",dataoriginal);
		})
	}
	// 滚动  判断几个区块
	var stoline = {
		// 内容区个数
		counts: $('#goods-widget').find('.m-goods-timeaxis').length,
		// 滚动有效区间 最小
		minrange: $('#goods-widget').position().top,
		// 滚动有效区间 最大
		maxrange : $('#goods-widget').position().top + $('#goods-widget').height() - 86*$('#goods-widget').find('.m-goods-timeaxis').length + 36,
		addEvent : function(){
			$(window).scroll(function(){
				var scrolltop = $(document).scrollTop();
				// 是否出现 分步骤
				if(scrolltop > stoline.maxrange){
					$('#page-step-nav').hide();
					$('#goods-widget').find('.m-goods-timeaxis').css('visibility','visible');
				}else if(scrolltop > stoline.minrange){
					$('#page-step-nav').show();
					for(var i=0;i<stoline.counts;i++){
						if(scrolltop >= stoline.minrange + 36 + 280*i){
							var cur = $('#page-step-nav').find('.m-goods-timeaxis').eq(i).show();
							cur.prevAll().show().addClass('disable');
							cur.nextAll().hide().removeClass('disable');

							var cur1 = $('#goods-widget').find('.m-goods-timeaxis').eq(i).css('visibility','hidden');
							cur1.prevAll().css('visibility','hidden');
							cur1.nextAll().css('visibility','visible');
						}
					}
				}else{
					$('#page-step-nav').hide();
					$('#goods-widget').find('.m-goods-timeaxis').css('visibility','visible');
				}
			});
		},
		create: function(){
			var html = '<div id="page-step-nav">';
				html += $('#goods-widget').find('.m-times-left-box').html();
				html += '</div>';
			$('body').append(html);	
			stoline.addEvent();
		},
		init : function(){
			// 赋高度值给线条
			$('.blines').height($('#goods-widget').height());
			// 创建 一个步骤 在body
			stoline.create();	
		}
	}

	stoline.init();

	$('body').on('click','.m-goods-timeaxis',function(){
		var top = stoline.minrange + 330 * $(this).index();
		$('html,body').animate({scrollTop: top+'px'}, 500);
	});
});