		// 放大插件
		(function($) {

			$.fn.jqueryzoom = function(options) {

				var defaults = {
					bigImgSrc:'bigImg',		// 大图src路径取值(自定义HTML属性名)
					bigImgBox:'zoomdiv',	// 大图容器class
					bigImgScale:800,		// 大图指定尺寸800px ，去掉这个参数则是实际大图尺寸
					moveArea:'jqZoomPup',	// 图片内移动小方块class
					xzoom: 200, 			// 大图显示层宽
					yzoom: 200, 			// 大图显示层高
					offset: 10, 			// 默认图片间隔
					position: "right", 		// 大图位置
					lens: 1, 				// 移动时小移动块样式 , 1:白色透明小方块; 0 十字符号
					preload: 1 				// 大图片预先加载备用
				};
				var settings = $.extend(defaults, options);
				var noalt = '';		//图片说明文字 alt取值

				$(this).hover(function() {

					// 默认参数取值
					var imageLeft = $(this).offset().left;
					var imageTop = $(this).offset().top;
					var imageWidth = $(this).children('img').width();
					var imageHeight = $(this).children('img').height();
						noalt = $(this).children("img").attr("alt");
					var bigimage = $(this).children("img").attr(settings.bigImgSrc);

					// 去掉图片提示功能
					$(this).find("img").attr("alt", '');

					// 创建大图窗口
					if ($("div."+settings.bigImgBox).length == 0) {
						$(this).after("<div class='"+settings.bigImgBox+"'><img width='"+settings.bigImgScale+"' height='"+settings.bigImgScale+"' src='" + bigimage + "'/></div>");
						$(this).append("<div class='"+settings.moveArea+"'>&nbsp;</div>");
					}

					// 设置位置
					if (settings.position == "right") {
						if (imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width) {
							leftpos = imageLeft - settings.offset - settings.xzoom;
						} else {
							leftpos = imageLeft + imageWidth + settings.offset;
						}
					} else {
						leftpos = imageLeft - settings.xzoom - settings.offset;
						if (leftpos < 0) {
							leftpos = imageLeft + imageWidth + settings.offset;
						}
					} 

					// 设置位置
					$("div."+settings.bigImgBox).css({
						top: imageTop,
						left: leftpos
					});

					// 显示大图图层
					$("div."+settings.bigImgBox).width(settings.xzoom);
					$("div."+settings.bigImgBox).height(settings.yzoom);
					
					// 如果大图小于可显示区域 的 125% 则 不执行任何操作 直接退回
					// console.log(big_scrollWidth);
					// if(big_scrollWidth < settings.xzoom || big_scrollHeight < settings.yzoom){
					// 	return false;
					// }else{
						$("div."+settings.bigImgBox).show();
					// }

					if (!settings.lens) {
						$(this).css('cursor', 'crosshair');
					}

					$(document.body).mousemove(function(e) {

						// 当前鼠标位置取值
						var mouse = {};
							mouse.x = e.pageX;
							mouse.y = e.pageY;

						// 大图宽高取值
						var bigwidth = $('div.'+settings.bigImgBox).find("img").get(0).offsetWidth;
						var bigheight = $('div.'+settings.bigImgBox).find("img").get(0).offsetHeight;
						var scaley = 'x';
						var scalex = 'y';
						if (isNaN(scalex) | isNaN(scaley)) {
							var scalex = (bigwidth / imageWidth);
							var scaley = (bigheight / imageHeight);
							$("div."+settings.moveArea).width((settings.xzoom) / scalex);
							$("div."+settings.moveArea).height((settings.yzoom) / scaley);
							if (settings.lens) {
								$("div."+settings.moveArea).css('visibility', 'visible');
							}
						}

						var xpos = mouse.x - $("div."+settings.moveArea).width() / 2 - imageLeft;
						var ypos = mouse.y - $("div."+settings.moveArea).height() / 2 - imageTop;

						if (settings.lens) {
							xpos = (mouse.x - $("div."+settings.moveArea).width() / 2 < imageLeft) ? 0 : (mouse.x + $("div."+settings.moveArea).width() / 2 > imageWidth + imageLeft) ? (imageWidth - $("div."+settings.moveArea).width()) : xpos;
							ypos = (mouse.y - $("div."+settings.moveArea).height() / 2 < imageTop) ? 0 : (mouse.y + $("div."+settings.moveArea).height() / 2 > imageHeight + imageTop) ? (imageHeight - $("div."+settings.moveArea).height()) : ypos;
						}

						if (settings.lens) {
							$("div."+settings.moveArea).css({
								top: ypos,
								left: xpos
							});
						}

						scrolly = ypos;
						$("div."+settings.bigImgBox).get(0).scrollTop = scrolly * scaley;
						scrollx = xpos;
						$("div."+settings.bigImgBox).get(0).scrollLeft = (scrollx) * scalex;

					});

				}, function() {
					$(this).children("img").attr("alt", noalt);
					$(document.body).unbind("mousemove");
					if (settings.lens) {
						$("div."+settings.moveArea).remove();
					}
					$("div."+settings.bigImgBox).remove();
				});

				count = 0;

				if (settings.preload) {
					$('body').append("<div style='display:none;' class='jqPreload" + count + "'>sdsdssdsd</div>");
					$(this).each(function() {
						var imagetopreload = $(this).children("img").attr(settings.bigImgSrc);
						var content = jQuery('div.jqPreload' + count + '').html();
						jQuery('div.jqPreload' + count + '').html(content + '<img src=\"' + imagetopreload + '\">');
					});
				}

			}

		})(jQuery);

