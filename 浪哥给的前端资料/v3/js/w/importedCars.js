define(function (require, exports, modules) {
    window.$ = require("jquery");
    require("public/tools-dev.js");
    require('plugins/jquery.defscroll.js')($);
    // 页面效果切换
    $('#nav').off('click').on('click','li:not(.active)',function(){
        if($('#nav').hasClass('disabled')){
            return false;
        }else{
            $('#nav').addClass('disabled');
            var i = $(this).index();
            $('header').find('img').attr("src",T.site.base+"v3/img/importcars/logo-"+(i+1)+".png");
            $(this).addClass('active').siblings().removeClass('active');
            var inpage = $('#pages').find('.page.active');  // 退隐层
            var outpage = $('#pages').find('.page').eq(i);  // 入场层
            var pageclass = {
                inClass : 'pt-page-moveToBottom ',
                outClass : 'pt-page-scaleUp pt-page-ontop',
                orgclass : 'page page'+(i+1),
                irgclass : inpage.attr('class').replace('active','')
            }
            inpage.addClass(pageclass.inClass); 
            outpage.addClass(pageclass.outClass+ ' active');
            window.setTimeout(function(){
                inpage.attr( 'class', pageclass.irgclass );
                outpage.attr( 'class', pageclass.orgclass + ' active' );
                $('#nav').removeClass('disabled'); 
            },700);
        }
    });


    // 滚动条效果
    $('.cntwrap').slimscroll({
        "height":"320px",
        "color" : "#616163",
        "opacity" : "1",
        "borderRadius":"0",
        "start":"top",
        "size":"4px",
        "alwaysVisible":"true",
        "railVisible":true,
        "railsize":"1px",
        "raildistance":"1.5px",
        "railColor":"#333",
        "railOpacity":"1",
        "distance":"0px"
    });


    // 参数显示窗内导航定位
    var customScrollTo = function(i){
        var me = $('#carOpts').find('.cntwrap');
        var bar = $('#carOpts').find('.slimScrollBar');
        var th = $('#carOpts').find('th').eq(i).position().top + me.scrollTop();
        // 不能超出可滚范围
        if( th >= me[0].scrollHeight - me.outerHeight() ){
            th = me[0].scrollHeight - me.outerHeight();
        }
        var offsetTop = th / me[0].scrollHeight * me.outerHeight();
        bar.css({"top":offsetTop});
        me.scrollTop(th);
    }

    // 参数显示窗内导航定位高度预设
    var defaultHeightArr;
    var refreshDefaultHeightArr = function(){
        var arr = [];
        $('#carOpts').find('th').each(function(i){
            var _PH = $('#carOpts').find('th').eq(i).position();
            arr.push(_PH.top);
        });
        return arr;
    }

    // 显示参数说明
    $('#carOptsBtn').off('click').on('click',function(){
        var i = $('#nav').find('.active').index();
        var xHTML = $('#pages').find('.page').eq(i).find('.opts').html();
            xHTML = '<table class="opts" width="90%" cellpadding="0" cellspacing="0">' + xHTML + '</table>';
        $('#carOpts').find('.cntwrap').html(xHTML);
        $('#carOpts').show().find('.pop-container').removeClass('tipHide').addClass('tipShow');
        $('#carOpts').find('.cntwrap').scrollTop(0);
        $('#carOpts').find('.slimScrollBar').css({"top":"0px"});
        $('#carOpts .nav li').eq(0).addClass("current").siblings().removeClass("current");
        defaultHeightArr = refreshDefaultHeightArr();
    });

    // 关闭参数说明
    $('#carOpts').find('.pop-close').off('click').on('click',function(){
        $('#carOpts').find('.pop-container').removeClass('tipShow').addClass('tipHide');
        window.setTimeout(function(){
            $('#carOpts').hide();
        },700);
    });

    // 参数导航定位 点击按钮时
    $('#carOpts .nav').off("click").on("click","li",function(){
        var i = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        customScrollTo(i);
    });

    // 参数导航定位 滚动内容时
    var onOverPanel;
    $('#carOpts').find('.cntwrap').hover(function() {
        onOverPanel = true;
    }, function() {
        onOverPanel = false;
    });
    // 根据高度定位当前导航函数
    var autoDetailMenu = function(n){
        for (var i = 0 , end = defaultHeightArr.length; i < end; i++) {
            if(n>=defaultHeightArr[i]){
                // 70 = 30 + 40 外边距和标题高度
                $('#carOpts .nav li').eq(i).addClass("current").siblings().removeClass("current");
            }
        };
    }
    // 定位当前导航
    function removeNavClass(){
        if(!onOverPanel){
            return;
        }
        var top = $('#carOpts').find('.cntwrap').scrollTop();
        autoDetailMenu(top);
    }
    if (window.addEventListener) {
        this.addEventListener('DOMMouseScroll', removeNavClass, false);
        this.addEventListener('mousewheel', removeNavClass, false);
    } else {
        document.attachEvent("onmousewheel", removeNavClass)
    }



    // 显示平行进口汽车说明
    $('#explanBtn').off('click').on('click',function(){
        $('#explanpop').show().find('.pop-container').removeClass('tipHide').addClass('tipShow');
    });

    // 关闭平行进口汽车说明
    $('#explanpop').find('.pop-close').off('click').on('click',function(){
        $('#explanpop').find('.pop-container').removeClass('tipShow').addClass('tipHide');
        window.setTimeout(function(){
            $('#explanpop').hide();
        },700);
    });


})