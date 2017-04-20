    (function($, window, undefined) {
        "use strict";
        // 普通弹窗
        $.fn.autocomplete = function(options){
            var defaults = {                        
                width: "244px",
                height: "150px",
                tpls: [ 
                    "@qq.com",
                    "@126.com",
                    "@139.com",
                    "@163.com",
                    "@sohu.com",
                    "@sina.cn",
                    "@gmail.com",
                    "@yeah.ne",
                    "@189.com",
                    "@vip.126.com",
                    "@example.com",
                    "@outlook.com",
                    "@aliyun.com",
                    "@tom.com",
                    "@2980.com",
                    "@21cn.com",
                    "@188.com",
                    "@wo.cn",
                    "@263.net"
                ],
                wrap:$('#datalist')
            };
            var opts = $.extend(defaults, options);
            var $this;
            var contentInit = function(entryv){
                if(entryv && $.trim(entryv).length > 0){
                    entryv = $.trim(entryv); 

                    // 此时判断 是否含有 @ 
                    // 1、如果 没有，则用原有的库
                    // 2、如果有的话，则检索输入的值匹配库
                    if(opts.tpls.length > 0){
                        var html = "";
                        var arr = opts.tpls;
                        if(entryv.indexOf("@") > -1){
                            var suffix = entryv.substr(entryv.indexOf("@"));
                            entryv = entryv.substr(0,entryv.indexOf("@"));
                            arr = $.grep(opts.tpls,function(i,v){
                                return i.indexOf(suffix) > -1 ? true : false;
                            });
                        }
                        for(var i=0;i<arr.length;i++){
                            var li = "<li><span class='n'>"+entryv+"</span><span class='s'>"+arr[i]+"</span></li>";
                            html += li;
                        } 
                        opts.wrap.show(function(){
                            $(this).off('click').on('click','li',function(){
                                $this.val($(this).text()).focus().blur();
                                opts.wrap.hide();
                            });
                        }).html(html);
                    }      
                }
            }

            var show = function(Func){
                if(Func && $.isFunction(Func)){
                    Func();
                }

            }
            var hide = function(){
                opts.wrap.hide();
            }
            //入口函数
            var init = function(input) {
                input.on('keyup keydown focusin focusout',function(e){
                    var e = e || window.event;
                    switch(e.type){
                        case 'keyup':
                        case 'keydown':
                        case 'focusin':
                            var entryv = $(this).val();
                            show(contentInit(entryv));
                            break;
                        case 'focusout':
                            /*hide();*/
                            break;
                    }
                });
                $(document).on('click',function(e){
                    if($(this).is(input)){
                        return false;
                    }else{
                        hide();    
                    }
                });
            };

         
            // 插件入口
            return this.each(function() {
                $this = $(this);
                init($(this));
            });

        };


       
    })(jQuery, window);

