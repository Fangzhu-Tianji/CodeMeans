define(function(require, exports, modules){
	window.$ = require("jquery");
		// require("plugins/jcountdown/jquery.jcountdown.min");
	$('#goodlist').find('li').hover(function(){
		var _self = $(this),
			index = _self.index();
		$('#lights').find('li').eq(index).addClass("select").siblings().removeClass("select");
	},function(){
		$('#lights').find('li').removeClass("select");
	});


	// 倒计时函数
	var setTimeoutDoing = function(node){
		// 倒计时
		var time = {
			hour : parseInt(node.find('.tm').eq(0).text()),
			minute : parseInt(node.find('.tm').eq(1).text()),
			second : parseInt(node.find('.tm').eq(2).text())	
		}
		var html = {
			hour : "00",
			minute : "00",
			second : "00"
		}
		var total = time.hour * 60 * 60 + time.minute * 60 + time.second;
		var timer = setInterval(function(){
			if(total == 0){
				clearInterval(timer);
			}else{
				total -- ;
				var curtime = {
					hour : parseInt((total / (60*60))),
					minute : parseInt(((total % (60*60)) % (60*60)) / 60),
					second : parseInt(((total % (60*60)) % (60*60)) % 60)
				}
				html = {
					hour : curtime.hour > 9 ? curtime.hour : "0" + curtime.hour,
					minute : curtime.minute > 9 ? curtime.minute : "0" + curtime.minute,
					second : curtime.second > 9 ? curtime.second : "0" + curtime.second
				}
			}
			node.find('.tm').eq(0).text(html.hour);
			node.find('.tm').eq(1).text(html.minute);
			node.find('.tm').eq(2).text(html.second);	
		},1000);
	}
	setTimeoutDoing($('.timeline'));

	// 上下滚动 切屏
	/*滑动监听及效果*/
	addEvent($("html")[0],'mousewheel',wheel);
	addEvent($("html")[0],'DOMMouseScroll',wheel);

	function addEvent(obj,sEvent,fn){
		if(obj.addEventListener){
			obj.addEventListener(sEvent,fn,false);
		}else{
			obj.attachEvent('on'+sEvent,fn);	
		}
	};

	var dowheel = false;

	var action = {
		down : function(){
			dowheel = true;
			$('.page2').stop().animate({
				top:"0%"
			},1000,function(){
				$('.page1').css('opacity',0);
				dowheel = false;
			});
		},
		up : function(){
			dowheel = true;
			$('.page2').stop().animate({
				top:"100%"
			},1000,function(){
				dowheel = false;
			});
			$('.page1').stop().animate({
				opacity:1
			},1000);
		}
	}

	function wheel(ev){
		var oEvent = ev || event;
		var bDown = true;
		bDown = oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;//滚轮方向判断	
		var cur = 0;
		
		if(bDown){//下	
			if(!dowheel){
				action.down();	
			}
		}else{//上
			if(!dowheel){
				action.up();	
			}
		}
		if(oEvent.preventDefault){
			oEvent.preventDefault();
		}
		return false;
	}

	$('.page1').on('click','.i-arrows',function(){
		action.down();
	});
	$('.page2').on('click','.arrow-up',function(){
		action.up();	
	});	
})