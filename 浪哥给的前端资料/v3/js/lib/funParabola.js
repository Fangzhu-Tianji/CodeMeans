/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-15 13:53:31
 * @version $Id$
 */

define("lib/funParabola.js", [],function (require, exports, modules) {

	var createObj = function(element, target, options) {

		// 兼容IE的数组函数
		if (!Array.prototype.forEach) {  
		    Array.prototype.forEach = function(fun /*, thisp*/){  
		        var len = this.length;  
		        if (typeof fun != "function"){
					throw new TypeError();  
		        }   
		        var thisp = arguments[1];  
		        for (var i = 0; i < len; i++){  
		            if (i in this)  
		                fun.call(thisp, this[i], i, this);  
		        }  
		    };  
		}

		// 转换ID为DOM对象
		var element = element ? document.getElementById(element) : null;
		var target = target ? document.getElementById(target) : null;

		// 动画函数定义
		var rAF = window.requestAnimationFrame  ||
	        window.webkitRequestAnimationFrame  ||
	        window.mozRequestAnimationFrame     ||
	        window.oRequestAnimationFrame       ||
	        window.msRequestAnimationFrame      ||
	        function (callback) { window.setTimeout(callback, 1000 / 60); };

		// 默认参数
		var defaults = {
			preWidth : 240,
			speed: 333.34, // 每帧移动的像素大小，每帧（对于大部分显示屏）大约16~17毫秒 166.67
			curvature: 0.0004,  // 实际指焦点到准线的距离，你可以抽象成曲率，这里模拟扔物体的抛物线，因此是开口向下的
			progress: function() {},
			complete: function() {}
		};
		// 传参继承
		var params = {}; options = options || {};
		for (var key in defaults) {
			params[key] = options[key] || defaults[key];
		}

		// 对象对外接口
		var exports = {
			position: function() { return this; },
			move: function() { return this; },
			init: function() { return this; }
		};
		
		/* 确定移动的方式 
		 * IE6-IE8 是margin位移
		 * IE9+使用transform
		*/
		var moveStyle = "IEposition", testDiv = document.createElement("div");
		if ("oninput" in testDiv) {
			["", "ms", "webkit"].forEach(function(prefix) {
				var transform = prefix + (prefix? "T": "t") + "ransform";
				if (transform in testDiv.style) {
					moveStyle = transform;
				}
			});		
		}
		
		// 根据两点坐标以及曲率确定运动曲线函数（也就是确定a, b的值）
		/* 公式： y = a*x*x + b*x + c;
		*/
		var a = params.curvature, b = 0, c = 0;
		
		// 是否执行运动的标志量
		var flagMove = true;
		if (element && target && element.nodeType == 1 && target.nodeType == 1) {

			// 移动元素的中心点位置，目标元素的中心点位置
			var centerElement = {}, centerTarget = {};
			// 目标元素的坐标位置
			var coordElement = {}, coordTarget = {};
			var startLeft = parseInt(element.offsetLeft);
			var startTop = parseInt(element.offsetTop);
			var startWidth = parseInt(element.clientWidth);
			var startHeight = parseInt(element.clientHeight);

			exports.position = function() {
				if (flagMove == false) return this;
				
				var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
					scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				
				// 初始位置
				if (moveStyle == "IEposition") {
					element.style.left = startLeft + "px";
					element.style.top = startTop + "px";
				} else {
					element.style[moveStyle] = "translate(0, 0)";
				}
				
				// 移动元素的中心点坐标
				centerElement = {
					x: element.offsetLeft + params.preWidth / 2,
					y: element.offsetTop  + params.preWidth / 2 
				};
				
				// 目标元素的中心点位置 version 2.0 位置
				// centerTarget = {
				// 	x: target.offsetLeft + 12,
				// 	y: target.offsetTop + scrollTop + 12  
				// };

				// 目标元素的中心点位置 version 3.0 位置
				if (window.innerWidth){
					var winWidth = window.innerWidth;
				}else if ((document.body) && (document.body.clientWidth)){
					var winWidth = document.body.clientWidth;
				}
				
				centerTarget = {
					x: winWidth - 25,
					y: target.offsetTop + scrollTop + 192  
				};
				console.log(centerTarget);
				
				// 转换成相对坐标位置
				coordElement = {
					x: 0,
					y: 0	
				};
				coordTarget = {
					x: centerTarget.x - centerElement.x,
					y: centerTarget.y -	centerElement.y -scrollTop
				};
				
				/*
				 * 因为经过(0, 0), 因此c = 0
				 * 于是：
				 * y = a * x*x + b*x;
				 * y1 = a * x1*x1 + b*x1;
				 * y2 = a * x2*x2 + b*x2;
				 * 利用第二个坐标：
				 * b = (y2+ a*x2*x2) / x2
				*/
				// 于是
				b = (coordTarget.y - a * coordTarget.x * coordTarget.x) / coordTarget.x;	
				
				return this;
			};		
			
			// 按照这个曲线运动
			exports.move = function() {
				// 如果曲线运动还没有结束，不再执行新的运动
				if (flagMove == false) return this;
				
				var startx = 0, rate = coordTarget.x > 0? 1: -1;

				var scaleStep = 1;
				var shiftStep = 0;		// 容器在缩小 left 需偏移 IE偏移值
				// 帧频动画函数
				var step = function() {
					if(params.preWidth > 100){
						scaleStep = scaleStep - 0.02 ;
						shiftStep = ( params.preWidth - scaleStep * params.preWidth ) / 2 ;
						if(scaleStep <= 0.1){
							scaleStep = 0.1;
						}
					}else{
						scaleStep = scaleStep - 0.01 ;
						shiftStep = ( params.preWidth - scaleStep * params.preWidth ) / 2 ;
						if(scaleStep <= 0.5){
							scaleStep = 0.5;
						}
					}
					
					// 切线 y'=2ax+b
					var tangent = 2 * a * startx + b; // = y / x
					// y*y + x*x = speed
					// (tangent * x)^2 + x*x = speed
					// x = Math.sqr(speed / (tangent * tangent + 1));
					startx = startx + rate * Math.sqrt(params.speed / (tangent * tangent + 1));
					
					// 防止过界
					if ((rate == 1 && startx > coordTarget.x) || (rate == -1 && startx < coordTarget.x)) {
						startx = coordTarget.x;
					}
					var x = startx, y = a * x * x + b * x;
					
					// 标记当前位置，这里有测试使用的嫌疑，实际使用可以将这一行注释
					// element.setAttribute("data-center", [Math.round(x), Math.round(y)].join());

					// x, y目前是坐标，需要转换成定位的像素值
					if (moveStyle == "IEposition") {
						element.style.left = ( startLeft + shiftStep + x ) + "px";
						element.style.top = ( startTop + shiftStep + y ) + "px";
						element.style.width = ( startWidth * scaleStep ) + "px";
						element.style.height = ( startHeight * scaleStep ) + "px";
					} else {
						element.style[moveStyle] = "translate("+ x + "px," + y + "px) scale("+scaleStep+","+scaleStep+")";
					}
					
					if (startx !== coordTarget.x) {
						params.progress(x, y);
						rAF(step);	
					} else {
						// 运动结束，回调执行
						params.complete();
						flagMove = true;
					}
				};
				rAF(step);
				flagMove = false;
				
				return this;
			};
			
			// 初始化方法
			exports.init = function() {
				this.position().move();
			};
		}
		
		return exports;
	};

	exports.createObj = createObj;

});