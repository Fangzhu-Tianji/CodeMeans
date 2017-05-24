// Admin Pages Frame
// 依赖 jquery.js 
// 依赖 jquery.rightMenu.js 
// 依赖 js/public/tools.js
var customFrame = { 
	// 配置参数
	opts:{
		isInitEnd:false,					// 初始化是否完成
		logo:"#logo",						// 用来切换宽窄屏显示
		currentCss:"current",				// 选中样式
		menuRoot:"#menuRoot",				// 顶级导航容器ID
		menuRootTpl:'#menuRootTpl',			// 顶级导航容器的模板ID
		menuSub:'#menuSub',					// 子类导航容器ID
		menuSubTpl:"#menuSubTpl",			// 子类导航容器的模板ID
		subItemCss:"box",					// 子类导航下面的子集样式名
		subHideCss:"hide",					// 子类导航折叠后样式名
		pagesWrap:"#mainWrap",				// 右侧主窗口区最外围ID
		pagesTab:"#tabsList",				// 窗口TAB区容器ID
		pagesWindow:"#pagesWindow",			// 窗口区容器ID
		pagesItemCss:"item",				// 窗口区页面子集样式名
		morePagesBtn:"#tabsMore",			// 更多窗口按钮
		morePagesTip:"tabsMoreTip",			// 更多窗口列表容器样式名
		morePagesCount:"count",				// 打开的页面总数统计 默认只有首页显示：1
		requires:{
			// 请求数据
			url:"./json/menu.json",			// 请求地址
			para:{							// 传参
				pageIndex:1,
				productid:15320
			}
		},
		tabsListLeft:"tabsListLeft",		// 左侧可滚动时显示
		tabsListRight:"tabsListRight"		// 右侧可滚动时显示
	},
	// 窗口自适应函数
	winAuto : function(){
		$(this.opts.menuSub).height($(window).height()-50);
		$(this.opts.pagesWindow).height($(window).height()-103);
		if($(this.opts.menuSub).hasClass("un")){
			$(this.opts.pagesTab).width($(window).width()-112);
		}else{
			$(this.opts.pagesTab).width($(window).width()-262);
		}
		// 自动定位显示TABS
		if(this.opts.isInitEnd){
			var i = $(this.opts.pagesTab).find("li."+this.opts.currentCss).index();
			this.tabAuto(this.opts.pagesTab,i,true);
		}
	},
	// 定位 TABS 显示位置
	tabAuto:function(_tab,_cut,_target){
		var _len = $(_tab).find("li").length;
		if(_cut == _len-1){
			$('.'+this.opts.tabsListRight).css({"display":"none"});
		}else{
			$('.'+this.opts.tabsListRight).css({"display":""});
		}
		var _scLeft = $(_tab).scrollLeft();
		var _maxWidth = $(_tab).width() ;
		var _lastWidth = $(_tab).find("li").eq(_len-1).outerWidth();
		var _lastLeft = $(_tab).find("li").eq(_len-1).position().left;
		// 显示更多窗口下拉菜单
		if ( _scLeft + _lastLeft + _lastWidth + 5 > _maxWidth ){
			$(this.opts.morePagesBtn).css({"display":""});
		}else{
			$(this.opts.morePagesBtn).css({"display":"none"});
		}
		var _cutWidth = $(_tab).find("li").eq(_cut).outerWidth();
		var _cutLeft = $(_tab).find("li").eq(_cut).position().left;
		// scrollLeft 定位
		if(_cutLeft<0 || ( _cutWidth + 5 > _maxWidth - _cutLeft ) || _target == true){
			var toLeft = _cutLeft + _scLeft + _cutWidth + 5 - _maxWidth;
			if(toLeft<0){
				toLeft=0;
				$('.'+this.opts.tabsListLeft).hide();
			}else{
				$('.'+this.opts.tabsListLeft).show();
			}
			$(_tab).scrollLeft(toLeft);
		}
		// console.log(_cutLeft + _scLeft + _cutWidth + 5 - _maxWidth);
		// console.log( 'scrollLeft：' + _scLeft + '------position.left：' + _cutLeft + '------this.width：' + (_cutWidth + 5) + '------tabs.width：' + _maxWidth );
	},
	// 更多窗口显示时自动选中当前打开的窗口
	moreMenuAuto:function(){
		var node = $(this.opts.morePagesBtn);
		var index = node.find("li."+this.opts.currentCss).index();
		var top = node.find("li").eq(index).position().top;
		var scrTop = node.find("."+this.opts.morePagesTip).scrollTop();
		// console.log(top);
		if(top+scrTop>=391){
			var newScrTop = top+scrTop - 361;
			node.find("."+this.opts.morePagesTip).scrollTop(newScrTop);
		}
	},
	// 根据当前TAB次序显示层级关系
	updataRootPath:function(index){
		var me = this;
		var _index = index ? index : $(me.opts.pagesTab).find("li."+me.opts.currentCss).index();
		// 显示层次关系
    	if(_index==0){
    		// 系统首页
    		$(me.opts.menuSub).find("dd").removeClass(me.opts.currentCss);
    		$(me.opts.menuRoot).find("a").removeClass(me.opts.currentCss);
    		return;
    	}else{
			var cateid = $(me.opts.pagesTab).find("li").eq(_index).attr("id");
			var cateArr = cateid.split("_");
			$(me.opts.menuSub).find("dd").removeClass(me.opts.currentCss);
			var sIndex = $("#"+cateArr[0]+"_menu").addClass(me.opts.currentCss).closest("."+me.opts.subItemCss).index();
			$(me.opts.menuSub).find("."+me.opts.subItemCss).eq(sIndex).show().siblings().hide();
			$("#"+cateArr[1]+"_nav").addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
	    }
	},
	// 高亮当前选中的选项卡及对应的内容
	switchPages:function(_index,_target){
		var me = this;
		var curTab = $(me.opts.pagesTab).find("li").eq(_index);
		var curSid = $(me.opts.morePagesBtn).find("li").eq(_index);
	    var items = $(me.opts.pagesWindow).children();
	    if( _target==='del'){
	    	if(_index==0){
	    		// 第一个不充许关闭
	    		return;
	    	}else{
	    		if(curTab.hasClass(me.opts.currentCss)){
					// 关闭当前
			    	curTab.prev().addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
			    	curSid.prev().addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
			    	items.eq(_index-1).show().siblings().hide();
			    	curTab.remove();
			    	curSid.remove();
			    	items.eq(_index).remove();
			    	me.tabAuto(me.opts.pagesTab,_index-1,true);
	    		}else{
	    			curTab.remove();
			    	curSid.remove();
			    	items.eq(_index).remove();
	    			var tsIndex = $(me.opts.pagesTab).find("li."+me.opts.currentCss).index();
	    			me.tabAuto(me.opts.pagesTab,tsIndex,true);
	    		}
	    		// 更新更多窗口列表数字
	    		var cut = $(me.opts.pagesTab).find("li").length;
	    		$(me.opts.morePagesBtn).find("."+me.opts.morePagesCount).html(cut);
	    	}
	    }else{
	    	// 选中当前高亮
			curTab.addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
			curSid.addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
			me.tabAuto(me.opts.pagesTab,_index);
			items.eq(_index).show().siblings().hide();
	    }
	    me.updataRootPath();
	},
	// 关闭页面 
	closePages:function(n,type){
		var me = this;
		var index = typeof(n)=="number"? n : $(n).index();
		var items = $(this.opts.pagesWindow).children();
		switch(type){
			case 'all':
				// 全部关闭			
				$(me.opts.pagesTab).find("li:not(:eq(0))").remove();
				$(me.opts.morePagesBtn).find("li:not(:eq(0))").remove();
				$(me.opts.pagesWindow).find(".item:not(:eq(0))").remove();
				$(me.opts.pagesTab).find("li:eq(0)").addClass(me.opts.currentCss);
				$(me.opts.pagesWindow).find(".item:eq(0)").show();
				me.tabAuto(me.opts.pagesTab,0,true);
				break;
			case 'notThis':
				// 自己除外全部关闭			
				$(me.opts.pagesTab).find("li:not(:eq(0),:eq("+index+"))").remove();
				$(me.opts.morePagesBtn).find("li:not(:eq(0),:eq("+index+"))").remove();
				$(me.opts.pagesWindow).find(".item:not(:eq(0),:eq("+index+"))").remove();
				$(me.opts.pagesTab).find("li:eq(1)").addClass(me.opts.currentCss);
				$(me.opts.pagesWindow).find(".item:eq(1)").show();
				me.tabAuto(me.opts.pagesTab,1,true);
				break;
			case 'before':
				// 当前显示左侧全部关闭			
				$(me.opts.pagesTab).find("li:lt("+index+"):gt(0)").remove();
				$(me.opts.morePagesBtn).find("li:lt("+index+"):gt(0)").remove();
				$(me.opts.pagesWindow).find(".item:lt("+index+"):gt(0)").remove();
				var i = $(this.opts.pagesTab).find("li."+this.opts.currentCss).index();
				if(i>0){
					me.tabAuto(me.opts.pagesTab,i,true);
				}else{
					$(me.opts.pagesTab).find("li:eq(1)").addClass(me.opts.currentCss);
					$(me.opts.pagesWindow).find(".item:eq(1)").show();
					me.tabAuto(me.opts.pagesTab,1,true);
				}
				break;
			case 'after':
				// 当前显示右侧全部关闭			
				$(me.opts.pagesTab).find("li:gt("+index+")").remove();
				$(me.opts.morePagesBtn).find("li:gt("+index+")").remove();
				$(me.opts.pagesWindow).find(".item:gt("+index+")").remove();
				var i = $(this.opts.pagesTab).find("li."+this.opts.currentCss).index();
				if(i>0){
					me.tabAuto(me.opts.pagesTab,i,true);
				}else{
					$(me.opts.pagesTab).find("li:eq("+index+")").addClass(me.opts.currentCss);
					$(me.opts.pagesWindow).find(".item:eq("+index+")").show();
					me.tabAuto(me.opts.pagesTab,index,true);
				}
				break;
			default:
				me.switchPages(index,"del");
				me.tabAuto(me.opts.pagesTab,index-1,true);
			;
		}
		me.updataRootPath();
	},
	// 刷新当前页面
	refresh:function(n,fromToIframe){
		if( !n && fromToIframe){
			// 来自子窗口数据
			// console.log(fromToIframe);
			var index = $(this.opts.pagesTab).find("li."+this.opts.currentCss).index();
			var items = $(this.opts.pagesWindow).children();
			var _iframe = items.eq(index).find("iframe");
				_iframe.attr("data-src",fromToIframe);
		}else{
			// 替换或添加地址中的 rand=1440121031601 
			var index = typeof(n)=="number"? n : $(n).index();
			var items = $(this.opts.pagesWindow).children();
			var _iframe = items.eq(index).find("iframe");
			var _src = _iframe.attr("data-src") ? _iframe.attr("data-src") : _iframe.attr("src");
			var _rand = "rand=" + (new Date().getTime());
			if( _src.indexOf("rand=") < 0 ){
				var _url = _src += (_src.indexOf('?') < 0 ? '?' : '&') + _rand;
				_iframe.attr("src",_url);
			}else{
				var _url = _src.replace(/(rand=)[0-9]{5,}/g,_rand);
				_iframe.attr("src",_url);
			}
		}
	},
	// 在新窗口打开当前页面
	openNewwindow:function(o){
		var index = $(o).index();
		var items = $(this.opts.pagesWindow).children();
		var url = items.eq(index).find("iframe").attr("src");
		window.open(url);
	},
	// 绑定事件
	binEvent : function(){
		// 当前对象
		var me = this;
		// 绑定窗口事件
		$(window).on("resize",function(){
			me.winAuto();					// 窗口自适应
		});
		// 禁止F5刷新当前窗口 F5的window.event.keyCode==116
		$(window).off('keydown').on("keydown",function(e){
			var ev = window.event || e;
		    var code = ev.keyCode || ev.which;
		    if (code == 116) {
		        ev.keyCode ? ev.keyCode = 0 : ev.which = 0;
		        if (e && e.preventDefault){
		        	e.preventDefault(); 
		        }else{
					event.returnValue = false;
					window.event.cancelBubble=true;
				}
				return false;
		    }
		});
		// 切换宽窄屏
        $(me.opts.menuSub).off("click").on("click","h2",function(){
            if($(me.opts.menuSub).hasClass("un")){
            	$(me.opts.logo).removeClass("un");
                $(me.opts.menuSub).removeClass("un");
                $(me.opts.pagesWrap).removeClass("un");
                $(me.opts.menuSub).find("em").css({"display":"block"});
            }else{
            	$(me.opts.logo).addClass("un");
                $(me.opts.menuSub).addClass("un");
                $(me.opts.pagesWrap).addClass("un");
                $(me.opts.menuSub).find("em").css({"display":"none"});
                // 为动画效果而设
                window.setTimeout(function(){
                    $(me.opts.menuSub).find("em").css({"display":"block"});
                },1000);
            }
            me.winAuto();
        });
		// 切换顶级导航
		$(me.opts.menuRoot).on("click","a",function(){
			var index = $(this).index();
			if($(this).hasClass(me.opts.currentCss)){
				return;
			}else{
				$(this).addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
				$(me.opts.menuSub).find("."+me.opts.subItemCss).eq(index).show().siblings().hide();
			}
		});
		// 折叠显示
		$(me.opts.menuSub).on("click","dt",function(){
			var wrap = $(this).closest("dl");
			if(wrap.hasClass(me.opts.subHideCss)){
				wrap.removeClass(me.opts.subHideCss);
			}else{
				wrap.addClass(me.opts.subHideCss);
			}
		});
		// 打开窗口
		$(me.opts.menuSub).on("click","dd",function(){
			$(me.opts.menuSub).find("dd").removeClass(me.opts.currentCss);
			$(this).addClass(me.opts.currentCss);
			var _url = $(this).attr("url");
			_url += (_url.indexOf('?') < 0 ? '?rand=' : '&rand=') + (new Date().getTime());
			var _name = $(this).text();
			var _id = parseInt($(this).attr("id"));
			var _pID = parseInt($(this).closest("."+me.opts.subItemCss).attr("id"));
			var isVing = $(me.opts.pagesTab).find("#"+_id+'_'+_pID);
			if(isVing && isVing.length>0){
				var isVingIndex = isVing.index();
				me.switchPages(isVingIndex,"b");
				$(me.opts.pagesWindow).find("."+me.opts.pagesItemCss).eq(isVingIndex).find("iframe").attr("src",_url);
				// me.refresh(isVingIndex);
				return;
			}else{
				$(me.opts.pagesTab).find("ul").append('<li id="'+_id+'_'+_pID+'"><b>'+_name+'</b><del>close</del></li>').find("li:last").addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
				$(me.opts.morePagesBtn).find("ul").append('<li id="'+_id+'_'+_pID+'_side"><b>'+_name+'</b><del>close</del></li>').find("li:last").addClass(me.opts.currentCss).siblings().removeClass(me.opts.currentCss);
				$(me.opts.pagesWindow).append('<div class="'+me.opts.pagesItemCss+'"><iframe src="'+_url+'" frameborder="0" width="100%" height="100%" style="background:#fff;" scrolling="yes"></iframe></div>').find("."+me.opts.pagesItemCss+":last").show().siblings().hide();
				var cut = $(me.opts.pagesTab).find("li").length;
				$(me.opts.morePagesBtn).find("."+me.opts.morePagesCount).html(cut);
				me.tabAuto(me.opts.pagesTab,cut-1);
				if($.fn.rightMenu && typeof($.fn.rightMenu) == 'function'){
					$(me.opts.pagesTab).find("li").eq(cut-1).rightMenu({ 
						menuMode : "tabsRightMode",
						menuList: [
					        { menuName: '刷新', clickEvent: function(o){me.refresh(o);}},
					        { menuName: '在新窗口打开', clickEvent: function(o){me.openNewwindow(o)}},
					        { menuName: 'split_line'},
					        { menuName: '关闭', clickEvent: function(o){me.closePages(o)}},
					        { menuName: '全部关闭', clickEvent: function(o){me.closePages(o,"all")}},
					        { menuName: '除此之外全部关闭', clickEvent: function(o){me.closePages(o,"notThis")}},
					        { menuName: '当前右侧全部关闭', clickEvent: function(o){me.closePages(o,"after")}},
					        { menuName: '当前左侧全部关闭', clickEvent: function(o){me.closePages(o,"before")}}
					    ],
					    splitCss : 'rightMenuSplit',
					    menuBoxCss : 'rightMenu'
					});
				}else{
					console.log("error:rightMenu()");
				}
			}
		});
		// 切换窗口 与 关闭窗口
		$(me.opts.pagesTab).on("click","li",function(event){
			var index = $(this).index();
			var target = $(event.target).is("del") ? "del" : "b";
		    // 禁止冒泡
			if (event.stopPropagation) {
                event.stopPropagation();	//其它
                } else {
                event.cancelBubble = true;	//IE
            }
            me.switchPages(index,target);
		});
		// 更多窗口
		$(me.opts.morePagesBtn).on("click","li",function(event){
			var index = $(this).index();
			var target = $(event.target).is("del") ? "del" : "b";
		    // 禁止冒泡
			if (event.stopPropagation) {
                event.stopPropagation();	//其它
                } else {
                event.cancelBubble = true;	//IE
            }
            me.switchPages(index,target);
		});
		// 显示更多窗口
		$(me.opts.morePagesBtn).hover(function(){
			$(this).find("."+me.opts.morePagesTip).show();
			me.moreMenuAuto();
		},function(){
			$(this).find("."+me.opts.morePagesTip).hide();
		});
		// 刷新第一个TAB页
		if($.fn.rightMenu && typeof($.fn.rightMenu) == 'function'){
			// 刷新首页 将当前页面window对象传入子页供随时调
			me.refresh(0);
			$(me.opts.pagesTab).find("li").rightMenu({ 
				menuMode : "defaultRightMode",
				menuList: [
			        { menuName: '刷新', clickEvent: function(o){me.refresh(o);}},
			        { menuName: '在新窗口打开', clickEvent: function(o){me.openNewwindow(o)}},
			        // { menuName: '除此之外全部关闭', clickEvent: function(){alert($().attr("id"))}}
			        { menuName: '除此之外全部关闭', clickEvent: function(o){me.closePages(o,"notThis")}}
			    ],
			    splitCss : 'rightMenuSplit',
			    menuBoxCss : 'rightMenu'
			});
		}else{
			console.log("error:rightMenu()");
		}
	},
	// 获取视窗数据
	getViewData:function(){
		// 请求传参
		var me = this;
		// var opts = me.opts.requires;
		if (window.T) {
			$.ajax({
                type: "GET",
                url: me.opts.requires.url,
                dataType: "json",
                success: function(data){
                    alert("OK");
				    // var json = JSON.parse(json);
				    // 请求数据
				    // json.data.menuPool =JSON.parse(json);
			        // 一级菜单
			        $(me.opts.menuRoot).empty();
			        $(me.opts.menuRootTpl).tmpl(data).appendTo(me.opts.menuRoot);
			        $(me.opts.menuRoot).find("a").eq(0).addClass(me.opts.currentCss);
			        // 二级菜单
			        $(me.opts.menuSub).empty();
			        $(me.opts.menuSubTpl).tmpl(data).appendTo(me.opts.menuSub);
			        $(me.opts.menuSub).find("." + me.opts.subItemCss).eq(0).show();
			        // 初始化视窗事件
			        me.opts.isInitEnd = true;
			        // 事件绑定
			        me.binEvent();
                },
                error: function(jqXHR){
                    alert("发生错误：jqXHR.status");
                }
            });
		}
	},

	// 初始化
	init:function(options){
		this.opts = $.extend(this.opts, options);
		this.winAuto();								// 窗口自适应
		this.getViewData();							// 初始化视窗显示
	}
}

