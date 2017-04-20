/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-17 15:11:04
 * @version $Id$
 */

define(function(require, exports, modules){
	require("public/m-public");
	require("plugins/jquery.lazyload.js")($);	// 懒加载模块
	require("plugins/jquery.jqzoom.js")($);	// 加载放大镜

	P.mlogin.run.getcustomer(P.mlogin.run.getcart);
	var parabola = require("plugins/funParabola.js");	// 抛物线动画

	P.mnav.run(1,2,false);
	// 图片懒加载
	$("img").lazyload({
		threshold :380,
		effect : "fadeIn" 
	});


	
	// 产品图片放大镜事件绑定
	$("#jqzoom").jqueryzoom({
		bigImgSrc:'bImg',	// 大图路径取值属性
		xzoom: 480, 		// 放大图的宽度(默认是 200)
		yzoom: 480, 		// 放大图的高度(默认是 200)
		offset: 0, 			// 离原图的距离(默认是 10)
		position: "right", 	// 放大图的定位(默认是 "right")
		preload:1   
	});

	// 切换选中当前图片并预加载对应大图
	$("#smaPhoto").on("click","li",function(){
		$(this).addClass("current").siblings().removeClass("current");
		var proPhoto = $(this).children("img");
		var mImg = proPhoto.attr("mImg");
		var bImg = proPhoto.attr("bImg");
		// 显示当前选中图片
		$("#proViewPhoto").attr({"src":mImg,"bImg":bImg});
		// 预加载当前选中大图备用 放大镜调用
		$("body").append('<div style="display:none;"><img src="'+bImg+'"></div>')
	});




	// 商品详情导航 nav tabs position 定位

	//初始化存储定位高度预设
	var refreshDefaultHeightArr = function(){
		var arr = [];
		$("#detailMenu").find("li").each(function(i){
			var _PH = $("#detailArea_" + i).position();
			arr.push(_PH.top);
		});
		return arr;
	}
	var defaultHeightArr = refreshDefaultHeightArr();
	
	//根据高度定位当前Menu
	var autoDetailMenu = function(n){
		for (var i = 0 ; i < defaultHeightArr.length; i++) {
			if(n>=defaultHeightArr[i]-70){
				// 70 = 30 + 40 外边距和标题高度
				$("#detailMenu").find("li").eq(i).addClass("current").siblings().removeClass("current");
			}
		};
	}
	
	var $topbar = $("#detailMenu");
	var $topbar_width = $topbar.width();
	var $topbar_positon = $topbar.position();

	$(window).resize(function(){
		$topbar_positon = $topbar.position();
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>=$topbar_positon.top){
			$topbar.css({"width":$topbar_width,"position": "fixed","z-index":20,"left":$topbar_positon.left,"top":0,'box-shadow': '0px 3px 5px 1px #ddd'});
			autoDetailMenu($(window).scrollTop());
		}else{
			$topbar.css({"position": "relative","z-index":0,"left":0,"top":0,'box-shadow': 'none'});
			autoDetailMenu($(window).scrollTop());
		}
		defaultHeightArr = refreshDefaultHeightArr();
	});

	// 商品详情导航 nav tabs 切换并定位滚动到对应的位置
	var autoAreaHeight = function(i){
		var _position = defaultHeightArr[i];
		if(i>0){
			$(window).scrollTop(_position);
		}else{
			$(window).scrollTop(_position - 20);
		}
	}
	$("#detailMenu").on("click","li",function(){
		$(this).addClass("current").siblings().removeClass("current");
		var _index = $(this).index();
		autoAreaHeight(_index);
	});

	// 查看更多出价记录
	$('#showRecordMoew').on("click",function(){
		defaultHeightArr = refreshDefaultHeightArr();
		autoAreaHeight(1);
	});

	//小图点击显示大图并切换
	$(".commentItem").off("click").on("click","li.smaListImg",function(){
		var _index = $(this).index();
		var _bigShow = $(this).closest(".smaList").next(".bigShow").find("img").eq(_index);
		var _bigShowSrc = _bigShow.attr("data-src");
		// 图片取回真实宽度后回调
		var callback = function(o){
			// console.log(o.width);
			if(o.width>420){
				_bigShow.css({'width':420});
			}
			_bigShow.attr("src",_bigShowSrc);	//加载图片
			_bigShow.show().siblings().hide();
			// 重新刷新高度
			window.setTimeout(resetDefaultHeightArr,100);
		}
		var resetDefaultHeightArr = function(){
			defaultHeightArr = refreshDefaultHeightArr();
		}
		$(this).addClass("selected").siblings().removeClass("selected");
		T.getImgSize(_bigShowSrc,callback);
	});

	// 分享
	$(".sharePro").off("click").on("click",function(){
		$("#sharebox").show().on('click','.close',function(){
			$("#sharebox").hide().find('.pop-container').removeClass('falldown');
		})
		.find('.pop-container').removeClass('falldown').addClass('falldown')
		.find('.share').on('click','a',function(){
			var className = $(this).attr('class');

			var share_title = $('.baseProductInfo').find('h1').text();
			var share_url = "www.ccdfs.com";
			var share_pic = "http://www.ccdfs.com/fg/images/goods/goods-1.jpg?v=2015043018";
			var share_from = "中国保税网";
			var qzone = function(){
				window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+share_url+"&title="+share_title+"&pics="+share_pic+"&site="+share_from+"","newwindow");
			}
			var sina = function(){
				var param = {
				    url:share_url ,
				    appkey:'678438995',
				    title:share_title,
				    pic:share_pic,
				    ralateUid:'3061825921',
				    rnd:new Date().valueOf()
				}
				var temp = [];
				for( var p in param ){
				    temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
				}
				window.open('http://v.t.sina.com.cn/share/share.php?' + temp.join('&'));
			}
			var renren = function(){
				window.open('http://widget.renren.com/dialog/share?resourceUrl='+share_url+'&title='+share_title+'&images='+share_pic+'','newwindow');
			}
			var pengyou = function(){
				window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url='+share_url+'&pics='+share_pic+'&title='+share_title+'&site='+share_from+'','newwindow');
			}
			var tq = function(){
				window.open('http://share.v.t.qq.com/index.php?c=share&a=index&title='+share_title+'&site='+share_from+'&pic='+share_pic+'&url='+share_url+'','newwindow');
			}
			var kaixin = function(){
				window.open('http://www.kaixin001.com/repaste/bshare.php?rtitle='+share_title+'&rurl='+share_url+'&from=姘村ⅷ瀵掍釜浜哄畼鏂圭綉绔�','newwindow');	
			}
			switch(className){
				case 'share1': qzone(); break;
				case 'share2': sina(); break;
				case 'share3': renren(); break;
				case 'share4': pengyou(); break;
				case 'share5': tq(); break;
				case 'share6': kaixin(); break;
			}
		});
	});

	// 出价记录分页
	var renderRecodesList = function(options){
		T.GET({
		    action:'',
		    params:options.data || {},
		    success:function(json){
				// 模板替换
				var thtml = template('recordstmp', json);
			    $('#detailArea_1').find('.detailArea-cnt').html(thtml);

			    // 首页左侧记录
			    if(options.data.pageIndex == 1){
			    	var shtml = template('bidrecordstmp', json);
			    	$('#bidrecords').find('.recordlist').html(shtml);
			    }
			    $('#recordnum').text(json.TotalCount);
			    $('#pronums').text(json.TotalCount);
				//分页条函数
				var pagebar = T.pageBar(json.TotalCount,json.PageSize,json.PageIndex);
				$("#detailArea_1").find(".pagebarWrap").html(pagebar);
			},
		    failure:function(){},
		    error:function(){}
		});
	}


	

	// 加减 
	var addActionEvent = function(options){
		var input = $('#maininfo').find('input[name=money]:hidden');
		var	inputtext = $('#maininfo').find('.numinput');
		var button = $('#maininfo').find('.purchase');
		var minmoney = input.val();
		$('#maininfo').off('click').on('click','.inputwrap a',function(){
			
			var money = Number(input.val()) || 0;
			var stepmoney = Number($('#maininfo').find('.stepprice').attr("data-step"));
			// 减
			if($(this).hasClass('del')){
				var lastmoney = money - stepmoney;
				if(lastmoney < minmoney){
					// 提示不能低于当前价
					inputtext.css('border-color','#c71622').nextAll('.i-tips').text("不能低于当前出价");
					return false;
				}else{
					var mnytext = T.fmtMoney(lastmoney);
					input.val(lastmoney);
					inputtext.text(mnytext);
				}
			}else if($(this).hasClass('add')){ 	
				var lastmoney = money + stepmoney;
				var mnytext = T.fmtMoney(lastmoney);
				input.val(lastmoney);
				// 取消提示
				inputtext.css('border-color','#ccc').text(mnytext).nextAll('.i-tips').text("");
				// 恢复按钮
				button.removeClass('disabled');
			}
		});
		// 倒计时
		setTimeoutDoing($('.cutdown'));

		// 没有交付保证金的时候
		$('#maininfo').find(".protocol input").on("change",function(){
			var button = $('#maininfo').find('.apply');
			if($(this).prop("checked")){
				var url = button.attr("data-url");
				button.removeClass('disabled').attr("href",url);
			}else{
				button.addClass('disabled').attr("href","javascript:;");
			}
		});
	}
	

	// 倒计时函数
	var setTimeoutDoing = function(node){
		// 倒计时
		var time = {
			hour : parseInt(node.find('em').eq(0).text()),
			minute : parseInt(node.find('em').eq(1).text()),
			second : parseInt(node.find('em').eq(2).text()),
			ms : parseInt(node.find('em').eq(3).text())	
		}
		var html = {
			hour : "00",
			minute : "00",
			second : "00",
			ms : "0"
		}
		var total = time.hour * 60 * 60 * 10 + time.minute * 60 * 10 + time.second * 10 + time.ms ;
		var timer = setInterval(function(){
			if(total == 0){
				clearInterval(timer);
			}else{
				total -- ;
				var curtime = {
					hour : parseInt(total / (60*60*10)),
					minute : parseInt(total % (60*60*10) / (60*10)),
					second : parseInt(total % (60*60*10) % (60*10) / 10),
					ms : parseInt(total % (60*60*10) % (60*10)  % 10),
				}
				html = {
					hour : curtime.hour > 9 ? curtime.hour : "0" + curtime.hour,
					minute : curtime.minute > 9 ? curtime.minute : "0" + curtime.minute,
					second : curtime.second > 9 ? curtime.second : "0" + curtime.second,
					ms : curtime.ms
				}
			}
			node.find('em').eq(0).text(html.hour);
			node.find('em').eq(1).text(html.minute);
			node.find('em').eq(2).text(html.second);	
			node.find('em').eq(3).text(html.ms);	
		},100);
	}
	


	// 渲染拍卖数据
	var renderSaleRecords = function(url,fn){
		var stepprice = 100,
			startprice = 100;
		T.GET({
		    action:url,
		    success:function(data){
				if(data.isSuccess){
					// 相关数据转换
					var nstamp = new Date().valueOf(),
					// 精确到毫秒的时间戳
						sstamp = parseInt(nstamp/100);
					// 小于开始时间	
					var time = {
						hour: 0,
						minute: 0,
						second: 0,
						msecond: 0
					}
					data.isstart = 0;						
					if(sstamp < parseInt(data.starttime)){
						data.statustext = "即将开始";
						var total = parseInt(data.starttime) - parseInt(sstamp);
						time.hour = parseInt(total / (60*60*10));
						time.minute = parseInt(total % (60*60*10) / (60*10));
						time.second = parseInt(total % (60*60*10) % (60*10) / 10);
						time.ms = parseInt(total % (60*60*10) % (60*10)  % 10);
					}else if(sstamp < parseInt(data.endtime)){  // 小于结束时间
						data.statustext = "正在拍卖";
						data.isstart = 1;
						var total = parseInt(data.endtime) - parseInt(sstamp);
						time.hour = parseInt(total / (60*60*10));
						time.minute = parseInt(total % (60*60*10) / (60*10));
						time.second = parseInt(total % (60*60*10) % (60*10) / 10);
						time.ms = parseInt(total % (60*60*10) % (60*10)  % 10);
					}else{
						data.statustext = "已经结束";
						data.isstart = 2;
					}
					var html = {
						hour : time.hour > 9 ?  time.hour : "0" + time.hour,
						minute : time.minute > 9 ?  time.minute : "0" + time.minute,
						second : time.second > 9 ?  time.second : "0" + time.second,
						msecond : time.msecond
					}
					data.hour = html.hour;
					data.minute = html.minute;
					data.second = html.second;
					data.msecond = html.msecond;
					data.stepprice = stepprice;
					data.startprice = startprice;
					data.extprice = data.extprice.toFixed(2);
					data.saleprice = data.saleprice.toFixed(2);
					data.minprice = data.minprice.toFixed(2);
					data.needprice = Number(data.saleprice) + parseInt(stepprice);
					data.needpricetext = T.fmtMoney(data.needprice);
					// 模板替换
					var thtml = template('maininfotmp', data);
				    $('#maininfo').html(thtml);
				    addActionEvent(options);
				    if(fn){
				    	fn();
				    }
				}
			},
		    failure:function(){},
		    error:function(){}
		});
	}

	exports.renderSaleRecords = renderSaleRecords;
	exports.renderRecodesList = renderRecodesList;
});
