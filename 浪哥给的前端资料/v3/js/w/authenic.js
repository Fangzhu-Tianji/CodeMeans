define(function(require, exports, modules){
	require("public/m-public");
	// 4-选中导航  2-hot位置
	P.mnav.run(4,2);
	P.mlogin.run.getcustomer(P.mlogin.run.getcart);

	// 动画
	var H = $(window).height();
	var blocksH = [
		$('.block1').position().top,
		$('.block2').position().top,
		$('.block3').position().top,
		$('.block4').position().top
	];
	var animations = function(arrs){
		for(var i=0;i<arrs.length;i++){
			switch(arrs[i]){
				case 0: (function(){$('.promise').find('img')[0].style.cssText = "animation-play-state:running";})(); break;
				case 1: (function(){
					$('.block2').find('img').each(function(){
						this.style.cssText = "animation-play-state:running";
					});
				})();
				break;
				case 2: (function(){
					$('.block3').find('img').each(function(){
						this.style.cssText = "animation-play-state:running";
					});
				})();
				break;
				case 3: (function(){
					$('.block4').find('img').each(function(){
						this.style.cssText = "animation-play-state:running";
					});
				})();
				break;
			}
		}
	}
	var animated = function(scrolltop){
		if(scrolltop >= blocksH[3]){
			animations([0,1,2,3]);
		}else if(scrolltop >= blocksH[2]){
			animations([0,1,2]);
		}else if(scrolltop >= blocksH[1]){
			animations([0,1]);
		}else{
			animations([0]);
		}	
	}
	$(window).scroll(function(){
		var scrolltop = $(document).scrollTop();
		animated(scrolltop);
	});
	animated($(document).scrollTop());
})
