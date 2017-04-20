/**
 * 全选 全不选 反选
 * @authors Inman Shaw
 * @date    2014-07-09 10:39:01
 * @version 1.0.0
 */

define(function($) {
    return function($) {

        // plugin start

        ;
        (function($, window, document, undefined) {
            "use strict";
            $.fn.checkAll = function(options) {
                var defaults = {
                    type: 'all', // 全选-all; 反选-invert
                    name: '', // 默认name
                    callback: function() {} // 回调函数
                };
                var opts = $.extend(defaults, options);
                // 取得选中的数组
                var getElArr = function(para){
                    var elArr = [];
                    $('input[name="' + para.name + '"]').each(function(){
                        if(this.checked){
                            elArr.push(this);
                        }
                    });
                    if(elArr && elArr.length>0){
                        return elArr; 
                    }else{
                        return [];
                    }
                }
                // 是否全选中了
                var ischeckAll = function(o,para){
                    var isFalse;
                    $('input[name="' + para.name + '"]').each(function(i){
                        if(this.checked == false){
                            isFalse = true;
                            return false;
                        }
                    });
                    // 遍历完后返回 true 则全选中
                    if(isFalse){
                        $(o).attr("checked",false);
                    }else{
                        $(o).attr("checked",true);
                    }
                }
                // 初始化
                var init = function(o) {
                    $(o).on('click', function() {
                        var check = this.checked;
                        $('input[name="' + opts.name + '"]').each(function() {
                            // 全选/全不选
                            if (opts.type === 'all') {
                                this.checked = check;
                            }
                            // 反选
                            else {
                                if (this.checked){
                                    this.checked = false;
                                }else{
                                    this.checked = true;
                                }
                            }
                        });
                        // 回调函数：返回所选的input dom 数组
                        if(opts.callback){
                            var elArrData = getElArr(opts);
                            opts.callback(elArrData);
                        }
                    });
                    // 如果有一个没有选中，则去掉全选
                    if (opts.type === 'all') {
                        $('input[name="' + opts.name + '"]').off("click").on("click",function(){
                            if(this.checked == false){
                                // 当前取消选中，则取消全选
                                $(o).attr("checked",false);
                            }else{
                                ischeckAll(o,opts);
                            }
                        });
                    }
                };
                return this.each(function() {
                    init(this);
                });
            };
        })(jQuery, window, document)

        // plugin end

    }
});