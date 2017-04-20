define(function(require, exports, modules){
	require("public/m-public");
	require("plugins/jquery.slider.js")($);
	require("plugins/jquery.lazyload.js")($);

	P.mnav.run(3,2);
	P.mlogin.run.getcustomer(P.mlogin.run.getcart);
	
	// 倒计时
	

	$('.cutdown').each(function(){
		var cutdown = $(this);
		var time = {
			day : parseInt(cutdown.find('em').eq(0).text()),	
			hour : parseInt(cutdown.find('em').eq(1).text()),
			minute : parseInt(cutdown.find('em').eq(2).text()),
			second : parseInt(cutdown.find('em').eq(3).text())	
		}
		var html = {
			day : "0",
			hour : "00",
			minute : "00",
			second : "00"
		}
		var total = time.day * 24 * 60 * 60 + time.hour * 60 * 60 + time.minute * 60 + time.second;
		var timer = setInterval(function(){
			if(total == 0){
				clearInterval(timer);
			}else{
				total -- ;
				var curtime = {
					day: parseInt(total / (24*60*60)),
					hour : parseInt((total % (24*60*60)) / (60*60)),
					minute : parseInt(((total % (24*60*60)) % (60*60)) / 60),
					second : parseInt(((total % (24*60*60)) % (60*60)) % 60)
				}
				
				html = {
					day : curtime.day,
					hour : curtime.hour > 9 ? curtime.hour : "0" + curtime.hour,
					minute : curtime.minute > 9 ? curtime.minute : "0" + curtime.minute,
					second : curtime.second > 9 ? curtime.second : "0" + curtime.second
				}

			}
			cutdown.find('em').eq(0).text(html.day);
			cutdown.find('em').eq(1).text(html.hour);
			cutdown.find('em').eq(2).text(html.minute);
			cutdown.find('em').eq(3).text(html.second);	
		},1000);
	});
	
	$('#row-top').on('click','li:not(.select)',function(){
		$(this).addClass('select').siblings().removeClass('select');
		var index = $(this).index();
		$('#brand-slide-panels').stop().animate({
			marginLeft: -230*index
		},500);
	});

	var rtimer = setInterval(function(){
		var index = $('#row-top').find('li.select').index();
		var cur = index + 1 > 2 ? 0 : index + 1; 
		$('#row-top').find('li').eq(cur).addClass('select').siblings().removeClass('select');
		$('#brand-slide-panels').stop().animate({
			marginLeft: -230*cur
		},500);
	},5000);

	$('.row-preview').hover(function(){
		clearInterval(rtimer);
	},function(){
		rtimer = setInterval(function(){
			var index = $('#row-top').find('li.select').index();
			var cur = index + 1 > 2 ? 0 : index + 1; 
			$('#row-top').find('li').eq(cur).addClass('select').siblings().removeClass('select');
			$('#brand-slide-panels').stop().animate({
				marginLeft: -230*cur
			},500);
		},5000);
	})
})
