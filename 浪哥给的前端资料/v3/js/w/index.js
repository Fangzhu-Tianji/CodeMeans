define("w/index.js", ["lib/jquery.slider.js", "lib/jquery.lazyload.js", "lib/jquery.validate.min.js", "common/nav.js", "common/category.js", "common/shoppingcart.js"], function (require, exports, modules) {
    require("lib/jquery.slider.js");
    require("lib/jquery.lazyload.js");
    require("lib/jquery.validate.min.js");
    var c = require("common/category.js");
    var n = require("common/nav.js");
    var g = require("common/shoppingcart.js");
    c({isHome: !0,isInitData:!1});
    
    n("home");
    g({ hasMbar: !0, isInit: !0 });

    // 轮播图
    $('#flexslider').slider({
        slideshowSpeed: 7000
       ,directionNav: false
       ,pauseOnAction: false
      //  ,controlNav: false
      //  ,slideshow:true
      //  ,keyboardNav: true
    });

    // 图片懒加载
    var partH = $(".part1").position().top,winH = $(window).height();
    if(partH <= winH){
        $(".part1").find('img').each(function(){
            var dataoriginal = $(this).attr("data-original");
            $(this).attr("src",dataoriginal);
        })
    }
    $('img').each(function(){
        if($(this).attr('data-original') && $(this).attr('data-original').length > 0){
            $(this).lazyload();
        }
    });
    
    $('.brand-part').find('.part-cnt-item').each(function(){
        $(this).css({
            background:'url('+T.site.base+'v3/img/public/loading64.gif) no-repeat center center'
        }); 
        $(this).children().css({"opacity":0});
    })

    $(window).scroll(function(){
        var sh = $(window).scrollTop();
        $('.part-cnt-item').each(function(){
            var $this = $(this);
            if($this.position().top > sh){
                $this.css({
                    background:'none'
                }); 
                $this.children().animate({"opacity":1},500);    
            }
        })
    });
    var G = {
		cutIndex:-1,
        init: function(){
            G.cutdown();
            G.nationswitch();
            G.brandads();
            G.guesslove();
        },
		filter: function (source, iterator, thisObject) {
			var result = [],resultIndex = 0,len = source.length,item,i;			
			if ('function' == typeof iterator) {
				for (i = 0; i < len; i++) {
					item = source[i];
					if (true === iterator.call(thisObject || source, item, i)) {
						result[resultIndex++] = item;
					}
				}
			}			
			return result;
		},
        // 整点抢
        cutdown : function(){
            var sstamps = [],$cutdownEm=$('.cut-down').find('em'),$axisTd=$('#time-axis').find('td'),pad = function (source, length) {
				var pre = "",
					negative = (source < 0),
					string = String(Math.abs(source));

				if (string.length < length) {
					pre = (new Array(length - string.length + 1)).join('0');
				}

				return (negative ?  "-" : "") + pre + string;
			};
            $axisTd.each(function(){
                var datasstamp = $(this).attr("data-sstamp");
                sstamps.push(Number(datasstamp));
            });
            sstamps.sort(function(a,b){return a>b?1:-1});          
            var timer = setInterval(function(){
				var Time=Math.round(new Date().getTime()/1000),
					cArr=G.filter(sstamps,function(item,i){return Math.abs(Time-item)<7200;}),
					maxV=Math.max(cArr[0], cArr[1]),
					minV=Math.min(cArr[0], cArr[1]),
					cIndex=sstamps.indexOf(minV),
					laveT=(maxV-Time),
					Hour=Math.floor(laveT/3600),
					laveM=Math.floor((laveT)%3600),
					Minute=Math.floor(laveM/60),
					Second=laveM%60;
					if(cArr[0] && cArr[1]){
						$cutdownEm.eq(0).text(pad(Hour,2));
						$cutdownEm.eq(1).text(pad(Minute,2));
						$cutdownEm.eq(2).text(pad(Second,2));
					}else{
						$cutdownEm.text("--");
						return;
					}				
                    if(G.cutIndex!=cIndex){				
						G.timeaxis(cIndex,cIndex);
					}	
					G.cutIndex=cIndex;
            },1000);

            $('#time-axis').on('click','td',function(){
                var index = $(this).index();
                G.timeaxis(index);
              //  clearTimeout(timer);
            });
        },
        // 时间轴 切换
        timeaxis : function(index,idx){
			var $axisTd=$('#time-axis').find('td');
            if(index >= 0){
				var tds = $axisTd.length - 1;
				if(idx){					
					$axisTd.each(function(key,item){
						if(key<idx){
							$(item).addClass("overed");
						}
						key==idx ? $(item).addClass("select") : $(item).removeClass("select");
					});
				}
				$axisTd.eq(index).addClass('active').siblings().removeClass('active');
				var curW = $('#goods-widget').find('.m-goods-list').eq(index);
				curW.addClass('select').siblings().removeClass('select');
				curW.find('img').each(function(){
					var original =$(this).attr('data-original');
					$(this).attr('src',original);
				});
				var distance ='-'+(332*index)+"px";
				$('#goods-widget').css("margin-top",distance);
            }
        },
        // 展馆国家切换
        nationswitch: function(){
            $('#part-header').off('click mouseenter').on('click mouseenter','.nation',function(){
                var index = $(this).index();
                $(this).addClass('select').siblings().removeClass('select');
                $('#zg-part').find('.part-cnt-item').eq(index).find('img').each(function(){
                    var original =$(this).attr('data-original');
                    if(original){
                        $(this).attr('src',original);
                    }
                });
                $('#zg-part').stop().animate({
                    marginLeft: '-'+1200*index
                },500);
            });
        },
        // 频道页的广告切换
        brandads: function(){
            // 遍历 广告 添加切换栏
            $('.part-main-left').each(function(){
                var brand = $(this);
                var which = brand.closest('.part-cnt-item').index();
                var length = brand.find('li').length;
                if(length && length > 1){
                    var html = "<div class='switcher'>";
                    for(var i=0;i<length;i++){
                        html += "<span class='progress-item'><i></i><em></em></span>";
                    }
                    html += "</div>";
                    $(html).appendTo($(this));
                    // 无缝滚动
                    brand.find('ul').append(brand.find('ul').html());
                    brand.find('img').each(function(){
                        var original = $(this).attr('data-original');
                        $(this).attr('src',original);
                    });

                    var  animate = function(index ,bool){
                        var b = bool || false; 
                        brand.find('.progress-item').addClass('disabled');
                        var marginleft = 0;
                        var ml = brand.find('ul').css('marginLeft').replace('px','');
                        var len = brand.find('ul li').length,
                            single = brand.find('li').width();
                        var range = {
                            min : -single*(len-1),
                            max : -(len/2-1)*single,
                            sp: -(len/2)*single
                        }
                        if(ml == range.min){
                            brand.find('ul').css('marginLeft',range.max);
                            marginleft = range.sp;
                        }else{
                            marginleft = -single*index;
                        }
                        if(b){
                            var step = marginleft + single  > 0 ? range.sp + single: marginleft + single;
                            brand.find('ul').css("marginLeft",step);
                        }
                        brand.find('ul').animate({
                            marginLeft: '-='+single
                        },500,function(){
                            brand.find('.progress-item').removeClass('disabled');
                        });
                    }

                    // 切换栏滚动
                    brand.off('click').on('click','.progress-item:not(.select)',function(){
                        if($(this).hasClass('disabled')){

                        }else{
                            var index = $(this).index();
                            $(this).addClass('select').siblings().removeClass('select').find('em').attr('data-progress',0).css('width','0%');
                            animate(index,true);
                        }
                        
                    });
                    // 自动滚动
                    var progresslength = brand.find('.progress-item').length;
                    var timer = setInterval(function(){
                        var sel = brand.find('.progress-item.select em');
                        var progress = Number(sel.attr('data-progress') || 0 );
                            ++progress;
                        if(progress > 100){
                            var index = brand.find('.progress-item.select').index() + 1;
                            if(index == progresslength){
                                index = 0;
                            }
                            
                            sel.attr('data-progress',0).css('width',"0%");
                            sel.closest('.progress-item').removeClass('select');
                            brand.find('.progress-item').eq(index).addClass('select').siblings().removeClass('select').find('em').attr('data-progress',0).css('width','0%');
                            animate(index);
                        }else{
                            sel.attr('data-progress',progress).css('width',progress+"%");   
                        }   
                    },40);
                    
                    // 鼠标移入 移除定时器，移出则重新开始
                    brand.hover(function(){
                        clearInterval(timer);
                    },function(){
                        timer = setInterval(function(){
                            var sel = brand.find('.progress-item.select em');
                            var progress = Number(sel.attr('data-progress') || 0 );
                                ++progress;
                            if(progress > 100){
                                var index = brand.find('.progress-item.select').index() + 1;
                                if(index == progresslength){
                                    index = 0;
                                }
                                
                                sel.attr('data-progress',0).css('width',"0%");
                                sel.closest('.progress-item').removeClass('select');
                                brand.find('.progress-item').eq(index).addClass('select').siblings().removeClass('select').find('em').attr('data-progress',0).css('width','0%');
                                animate(index);
                            }else{
                                sel.attr('data-progress',progress).css('width',progress+"%");   
                            }   
                        },40);
                    })
                    setTimeout(function(){
                        brand.find('.progress-item').eq(0).addClass('select');  
                    },500*which);
                }
            });
        },
        // 猜你喜欢
        guesslove: function(){
            var render = function(){
				T.ajax("product/getMyProductList",{
					apiUrl:T.site.productApi,
					success:function(data){
						lovehtml='';
						$.each(data,function(index,item){
							lovehtml+='<li><a href="'+T.site.item+item.ProductID+'.html" target="_blank" title=""><img src="'+T.site.img+item.ProductImage+'" alt="'+item.ProductName+'"></a><p class="title"><a href="'+T.site.item+item.ProductID+'.html" target="_blank" title="'+item.ProductName+'">'+item.ProductName+'</a></p><p class="price"><span><b>￥'+item.SalePrice+'</b></span></p></li>';
						});  
               			$('#love-parts-cnt').html(lovehtml);
                        $('.love-part').find('.change').removeAttr("disabled");						
					}
				});
            }
            //render();
            $('.love-part').off('click').on('click','.change',function(){
                $(this).attr("disabled",true);
                render();
            });
        }
    }
    G.init();
});
