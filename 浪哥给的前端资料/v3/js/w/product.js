define("w/product.js", ["lib/trimPath.js", "common/tools.js", "lib/jquery.validate.min.js", "lib/elevator.js", "lib/jquery.lazyload.js", "lib/jquery.jqzoom.js", "lib/funParabola.js", "lib/jquery.page.js", "common/category.js", "common/layer.login.js", "common/shoppingcart.js"], function (require, exports, modules) {
    require("lib/trimPath.js"); 
    require("common/tools.js");
    require("lib/jquery.validate.min.js");
    require("lib/elevator.js");//产品详情导航定位
    require("lib/jquery.lazyload.js"); // 懒加载模块
    require("lib/jquery.jqzoom.js"); // 加载放大镜
    var parabola = require("lib/funParabola.js"); // 抛物线动画
    require("plugins/jquery.page");
    var c = require("common/category.js");
    var g = require("common/shoppingcart.js");
    c({ isInitData: !1 });
    g({ hasMbar: !0, isInit: !0 });
    var login = require("common/layer.login.js");
    var productID = T.url.getFileName().slice(0, 5);
    var TPL = {
        comment: '{for record in ResultList}<table class="itemTable" cellpadding="0" cellspacing="0" width="100%"><tr class="cont"><td align="left"><div class="userComment"><p class="box">${record.CommentContent}</p>{if record.HasImage}<div class="photos"><ul class="smaList">{for cimg in record.ProductCommentImgList}<li><img src="${T.site.img}${cimg.ImagePath}" data-img="${T.site.img}${cimg.ImagePath}" width="40" height="40" alt="" /></li>{/for}</ul><div class="bigShow">{for cimg in record.ProductCommentImgList}<img src="${T.site.base}v3/img/tmp/P002.jpg" alt="" />{/for}</div></div>{/if}</div><div class="serviceReply"><p class="box">回复：${record.ReplyContent}</p></div></td><td width="30%" align="center" valign="middle">{if record.SkuAttrs}${record.SkuAttrs}{/if}</td><td width="20%" align="center" valign="middle"><p>${record.UserName}</p><p><em class="starLevel"><i class="level-${record.Score}"></i></em></p></td></tr><tr class="foot"><td align="left" class="footCount">阅读（25）点赞（85）</td><td>&nbsp;</td><td align="center" class="time">${record.ReplyTime}</td></tr></table>{/for}',
        counsel: '{for record in ResultList}<dl class="box"><dt><em>网友：${record.UserName}</em><span>${record.CounselTime}</span></dt><dd><h2>${record.CounselContent}</h2><p>${record.AnswerContent}</p></dd></dl>{/for}'
    };
    // 图片懒加载
	$("img").lazyload({threshold: 380,effect: "fadeIn"});
    // 产品图片放大镜事件绑定
    $("#jqzoom").jqueryzoom({
        bigImgSrc: 'bImg', // 大图路径取值属性
        xzoom: 480, // 放大图的宽度(默认是 200)
        yzoom: 480, // 放大图的高度(默认是 200)
        offset: 0, // 离原图的距离(默认是 10)
        position: "right", // 放大图的定位(默认是 "right")
        preload: 1
    });
	function counselClickCallback(){
		T.ajax("Product/GetProductCounselList",{
			apiUrl:T.site.productApi,
			data:this.data,
			success: function (data) {
			    var tempstr = TPL.counsel.process(data);
			    $("#proConsultBox").html(tempstr);
			}
		 });
	}
	function commentClickCallback(){
		T.ajax("Product/GetProductCommentList",{
			apiUrl:T.site.productApi,
			data:this.data,
			success: function (data) {
			    var tempstr = TPL.comment.process(data);
			    $("#commentItem").html(tempstr);
			}
		 });
	}
    // 切换选中当前图片并预加载对应大图
    $("#smaPhoto").on("click", "li", function() {
        $(this).addClass("current").siblings().removeClass("current");
        var proPhoto = $(this).children("img");
        var mImg = proPhoto.attr("mImg");
        var bImg = proPhoto.attr("bImg");
        // 显示当前选中图片
        $("#proViewPhoto").attr({
            "src": mImg,
            "bImg": bImg
        });
        // 预加载当前选中大图备用 放大镜调用
        $("body").append('<div style="display:none;"><img src="' + bImg + '"></div>')
    });
    // 商品数量统计 减少一个 增加一个
    $("#proNumberCount").off("click").on("click","button",function(e){
        e.preventDefault();
        var self=$(this),$count=self.siblings(".count"),currentNum=Number($count.val()),step=self.attr("class"),afterNum;
       // this.blur &&  this.blur();
        afterNum = step=="reduce" ? (currentNum>1?currentNum-1 :1):(currentNum+1);
        $count.val(afterNum);
    });
    /* 详情导航位置定位 */
    var $topbar = $("#detailMenu");
    var $topbar_width = $topbar.width();
    var $topbar_positon = $topbar.position();

    $(window).resize(function() {
        $topbar_positon = $topbar.position();
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= $topbar_positon.top) {
            $topbar.css({
                "width": $topbar_width,
                "position": "fixed",
                "z-index": 20,
                "left": $topbar_positon.left,
                "top": 0,
                'box-shadow': '0px 3px 5px 1px #ddd'
            });
        } else {
            $topbar.css({
                "position": "relative",
                "z-index": 0,
                "left": 0,
                "top": 0,
                'box-shadow': 'none'
            });
        }
    });
    // 商品详情导航 nav tabs position 定位
    //晒单小图点击显示大图并切换
    $("#commentItem").off("click").on("click", "li.smaListImg", function() {
        var _index = $(this).index();
        var _bigShow = $(this).closest(".smaList").next(".bigShow").find("img").eq(_index);
        var _bigShowSrc = _bigShow.attr("data-src");
        // 图片取回真实宽度后回调
        var callback = function(o) {
            // console.log(o.width);
            if (o.width > 420) {
                _bigShow.css({
                    'width': 420
                });
            }
            _bigShow.attr("src", _bigShowSrc); //加载图片
            _bigShow.show().siblings().hide();
            // 重新刷新高度
            window.setTimeout(resetDefaultHeightArr, 100);
        }
        var resetDefaultHeightArr = function() {
            defaultHeightArr = refreshDefaultHeightArr();
        }
        $(this).addClass("selected").siblings().removeClass("selected");
        T.getImgSize(_bigShowSrc, callback);
    });
/* 评价 */
    $("#toCommentBtn").on("click", function (e) {
        var tarlink =$(this).attr("href");
        if (!T.login.isLogin) {
            e.preventDefault();
            login.open({
                success: function () {
                    window.location.href = tarlink;
                }
            });
        } else {
            return true;
        }
   
});
/* 产品咨询列表 */
function loadCounselList(){
	var sparam={iD:productID,allowPaging:true,pageIndex:1,pageSize:15};
	T.ajax("Product/GetProductCounselList",{
		apiUrl:T.site.productApi,
		data:sparam,		
		success: function (data) {
		    var tempstr = TPL.counsel.process(data);
		    $("#proConsultBox").html(tempstr);
			$('#consultPagination').page({
				total: data.TotalRecord,
				pageSize: data.PageSize,
				click: function (pageIndex) { //pageIndex:当前点击页数，索引从0开始，页数=索引+1
				  sparam['pageIndex']=pageIndex+1;
				  counselClickCallback.call({data:sparam});
				}
			});  
		}
	}); 
}
loadCounselList();
/* 产品评价列表 */
function loadCommentList(type){
	var sparam={productID:productID,allowPaging:true,type:type?1:0,pageIndex:1,pageSize:15};
	T.ajax("Product/GetProductCommentList",{
		apiUrl:T.site.productApi,
		data:sparam,		
		success: function (data) {
		    var tempstr = TPL.comment.process(data);
		    $("#commentItem").html(tempstr);
			$('#commentPagination').page({
				total: data.TotalRecord,
				pageSize: data.PageSize,
				click: function (pageIndex) { //pageIndex:当前点击页数，索引从0开始，页数=索引+1
				  sparam['pageIndex']=pageIndex+1;
				  commentClickCallback.call({data:sparam});
				}
			});  
		}
	}); 
}
loadCommentList();
$("#commentTab").find(":radio").bind("click",function(){
	var stype=$(this).val();
	loadCommentList(stype);
});
function sendBuyAction(obj, param) {
    var randomStr = Math.random();
    obj.attr("disabled", true).text("\u63d0\u4ea4\u4e2d...").addClass("disabled");
    T.ajax("Cart/goToCart",{
        type:"POST",
        apiUrl:T.site.cartApi,
        data: param,
        success: function (json) {
            window.location.href = T.site.cart + "order.html?a=" + param.ytack + "&r=" + randomStr;
        },
        error:function(){
            obj.text("\u7acb\u5373\u62a2\u8d2d").removeAttr("disabled").removeClass("disabled");
        }
    });
}
    //立即购买
$("#buyNowBtn").bind("click", function (e) {
    e.preventDefault();
    var timeStr = new Date().getTime(), 
        $that = $(this), $buyNum = $("#buy-num"), pId = $buyNum.attr("data-pid"), pNum = $buyNum.val(),
        sparam={ pid: pId, pnum: pNum, stauts: 1, ytack: timeStr};
        if (!T.login.isLogin) {
            login.open({
                success: function () {
                    sendBuyAction($that, sparam);
                }
            });
        } else {
            sendBuyAction($that, sparam);
        }
});	
    // 放入购物车
    $(".addShopCar").off("click").on("click", function(e) {
       e.preventDefault();
		var _so = $(this).offset(); // 当前大图的位置
		var $buyNum=$("#buy-num"),pId=$buyNum.attr("data-pid"),pNum=$buyNum.val();
        if ($(".startDiv") && $(".startDiv").length > 0) {
            return;
        } else {
            // 创建动画源文件  当ajajx请求成功后执行动画
           T.ajax("Cart/goToCart",{
                type:"POST",
		        apiUrl:T.site.cartApi,
                data:{pid:pId,pnum:pNum,stauts:0},		   
                success: function (json) {
					// 创建动画源文件
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					var _sId = 'menuStart' + T.setTempID(); // 起始ID
					var _sImg = $("#proViewPhoto").attr("src"); // 取回当前产品图片
					if (scrollTop > 500) {
						var _sDiv = $('<div class="startDiv" style="width:40px; height:40px; left:' + (_so.left + 60) + 'px;top:' + (_so.top - scrollTop) + 'px;" id="' + _sId + '"><img src="' + _sImg + '"></div>');
						$("body").append(_sDiv);
						// 创建抛物线飞入购物车动画
						var catAnimation = parabola.createObj(_sId, 'i-cartNums', {
							preWidth: 40,
							complete: function() {
								$("#" + _sId).remove();
							}
						});
						catAnimation.init();
					} else {
						var _jqzoomSo = $("#jqzoom").offset(); // 当前大图的位置
						var _sDiv = $('<div class="startDiv" style="width:240px; height:240px; left:' + (_jqzoomSo.left + 240) + 'px;top:' + (_jqzoomSo.top - scrollTop) + 'px;" id="' + _sId + '"><img src="' + _sImg + '"></div>');
						$("body").append(_sDiv);
						// 创建抛物线飞入购物车动画
						var catAnimation = parabola.createObj(_sId, 'i-cartNums', {
							preWidth: 240,
							complete: function() {
								$("#" + _sId).remove();
								g({ hasMbar: !0 });
							}
						});
						catAnimation.init();
					}
                }
            });
        }

    });
	/* 商品咨询 */
	$("#CounselFrom").validate({
		errorPlacement: function (error, element) {
			$(element).closest("dd").find(".td-tips").html(error);
		},
		rules: {
			CounselType: {
				required: true
			},
			CounselContent: {
				required: true
			}
		},
		messages: {
			CounselType: {
				required: "请选择咨询类型"
			},
			CounselContent: {
				required: "请填写咨询内容"
			}
		},
		submitHandler: function (form) {
			var sparam = $(form).serializeObject();
			 T.ajax("Counsel/AddProductCounsel",{
				type:"POST",
				data:sparam,
				success: function (data) {
					form.reset();
					layer.msg("咨询成功",{icon:1,shade: [0.8, '#393D49']});					
				}
			 });
		}
	});

    // 阶段选择
    $("#stageArea").on("click", "a", function(e) {
		if($(this).hasClass("disabled")){
			e.preventDefault();
			return;
		}
    });
    function sendCollectionAct(obj) {
        var self = $(obj), $em = self.find("em"), pos = $em.offset(), pid = self.attr("data-pid"), collNum = $em.text();
        var spanHtml = '<span id="artShowCollectionPro" style="position: absolute; left: ' + Math.floor(pos.left) + 'px; top: ' + (Math.floor(pos.top) - 3) + 'px; font-size: 16px; line-height: 24px; color: #c71521; font-weight: 700;">+1</span>';
        T.ajax("Favorite/AddFavorite", {
            type: "POST",
            data: { ID: pid },
            success: function (data) {
                $("body").append(spanHtml);
                $em.text(parseInt(collNum) + 1);
                $("#artShowCollectionPro").stop(true, false).animate({
                    "font-size": 50,
                    "left": Math.floor(pos.left) - 30,
                    "top": Math.floor(pos.top) - 50,
                    "opacity": 0
                }, 500, function () {
                    $("#artShowCollectionPro").remove();
                });
            }, error: function (e) {
                layer.msg(e.errmsg, { icon: 2, shade: [0.8, '#393D49'] });
            }
        });
    }
    /* 收藏商品 */
    $(".collectionPro").on("click", function (e) {
        e.preventDefault();
        $that = $(this);
        if (!T.login.isLogin) {
            login.open({
                success: function (index) {
                    sendCollectionAct($that);
                    layer.close(index);
                }
            });
        } else {
            sendCollectionAct($that);
        }
    });
	/* 商品详情面板切换 */
	$("body").elevator({
		floorClass: "floor",
		elevatorClass: "elevator",
		handlerClass: "handler",
		selectClass: "current",
		delay: 1200,
		onStart: function() {
		},onEnd: function(a) {
			$(a.floor).addClass("floor-current").siblings().removeClass("floor-current")
		}
	});
});
