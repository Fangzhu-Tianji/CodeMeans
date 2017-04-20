/*  

html:
    <div id="popup" style="display:none;">     
        弹窗中的内容及样式请自己定义
    </div>

useage:
    1   配置data-popup属性，无需添加js
        <a href="javascript:;" data-popup="#popupLogin">show2</a>
    2
        $(function(){
            // 页面加载完就弹出
            $('.popup').popup();

            // 点击弹出
            $('.lnk-popup').click(function(){
                $('.popup').popup();
            })
        })

*/

    (function($, window, undefined) {
        "use strict";
        // 普通弹窗
        $.fn.inputLimit = function(options){
            var defaults = {    
                maxlength: 50                        
            };
            var opts = $.extend(defaults, options);
            var orgValue = "";
            var init = function(obj){
                $(obj).on('click keydown',function(e){
                    var e = e || window.event;

                    var maxlength = $(obj).attr("maxlength") || opts.maxlength;
                        
                    var click = function(){
                        orgValue = $(obj).val();
                    }
                    var keydown = function(){
                        var curValue = $(obj).val();
                        if(curValue > maxlength){
                            $(obj).val(orgValue);
                        }else{
                            orgValue = $(obj).val();
                        }
                    }
                    switch(e.type){
                        case "click" : click(); break;
                        case "keydown" : keydown(); break;
                    }
                });
            }

            // 插件入口
            return this.each(function() {
                init(this);
            });
        }

    })(jQuery, window);

