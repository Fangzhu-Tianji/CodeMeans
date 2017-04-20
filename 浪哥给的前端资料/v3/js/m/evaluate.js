define("m/evaluate.js", ["common/shoppingcart.js", "lib/trimPath.js", "lib/jquery.validate.min.js", "lib/plupload/plupload.full.min.js", "common/tools.js", "common/m-home-slider.js"], function (require, exports, modules) {
	require("lib/trimPath.js");
	require("lib/jquery.validate.min.js");
	require("lib/plupload/plupload.full.min.js");
	require("common/tools.js");
	require("common/m-home-slider.js");
	var g = require("common/shoppingcart.js");
	g();
	var TPL = {
	    list: '{for record in ResultList}<div class="pro-info"><ul class="clearfix"><li class="fore1"><div class="p-item clearfix"><div class="p-img"><a href="${T.site.item}${record.ProductID}.html" target="_blank"><img width="80" height="80" src="${T.site.img}${record.ProductPic}" data-lazy-img="done" title="${record.ProductName}" /></a></div><div class="p-msg"><div class="p-name"><a href="${T.site.item}${record.ProductID}.html" target="_blank">${record.ProductName}</a></div><div class="p-tiem ftx-03">购买时间：${record.CreateTime}</div></div></div></li><li class="fore2 forem"><div class="op-wrap"><div class="op-cont"><div class="op-btns">{if record.CommentFlag}<a href="#" data-pid="${record.OrderCode}-${record.ProductID}" class="ui-btn  view-btn">查看评价</a>{else}<a href="#" data-pid="${record.OrderCode}-${record.ProductID}" class="ui-btn click-btn">点击评价</a>{/if}</div></div></div></li></ul><div class="comt-box" id="comt-box-${record.OrderCode}-${record.ProductID}" style="display:none;"><div class="box-t"></div>{if $T.record.CommentFlag}<div class="item clearfix scoreEl"><span class="label"><em>*</em>评分：</span><div class="fl"><span class="commstar">{for item in record.commstar}<a href="javascript:;" class="star${item}{if item==record.Score} active{/if}"></a>{/for}</span></div></div><div class="item clearfix xindeEl"><span class="label"><em>*</em>心得：</span><div class="fl"><div class="summary-cont-box"><div class="sumy-tags"></div><pre><div class="sumy-area-txt">${record.CommentContent}</div></pre></div></div></div>{if record.ImagePath.length>0}<div class="item clearfix imgEl"><span class="label">晒单：</span><div class="fl"><div class="upload-img-box"><div class="img-lists"><ul class="img-list-ul clearfix">{for compic in record.ImagePath}<li><img width="60" height="60" alt="" src="${T.site.img}${compic}" /></li>{/for}</ul><div class="img-bigbox hide"><img class=""><span class="img-del">删除图片</span></div></div></div></div></div>{/if}{else}<form><input type="hidden" name="OrderCode" value="${record.OrderCode}" /><input type="hidden" name="ProductID" value="${record.ProductID}" /><dl><dd><h2><em class="starLevel" data-level="0"><i></i><i></i><i></i><i></i><i></i></em><span>小提示：点击星星就能打分了哦！</span><input type="hidden" name="Score" value="0" /></h2><p class="commentTextarea"><textarea name="CommentContent"></textarea></p><h2>晒图</h2><div class="upload-img-box"><div class="img-lists"><ul class="img-list-ul" id="photoList-${record.OrderCode}-${record.ProductID}"><li class="upload-btn"><div><a id="pickbutton-${record.OrderCode}-${record.ProductID}" href="#" class="add-img-btn" style="position: relative; z-index: 0;"><b></b></a></div></li></ul></div></div></dd></dl><p class="submit"><input type="submit" value="发表评价" /></p></form>{/if}</div></div>{/for}',
	    none: '<div class="nothing"><div class="cnt"><p class="title">对不起，没有找到可评论的订单</p><p class="subtitle"><a href="' + T.site.web + '">去随便逛逛</a><span>，万一有喜欢的呢</span></p></div></div>'
	};
	var orderID=T.url.getQueryValue("oid"),productID =T.url.getQueryValue("pid");
	$("#comtPlists").delegate(".click-btn,.view-btn","click",function(e){
		e.preventDefault();
		var self=$(this),comboxid="#comt-box-"+self.attr("data-pid");
		$(comboxid).toggle();
	});


  
	var _toString = Object.prototype.toString,_hasOwnProperty = Object.prototype.hasOwnProperty,NULL_TYPE = 'Null',UNDEFINED_TYPE = 'Undefined',BOOLEAN_TYPE = 'Boolean',NUMBER_TYPE = 'Number',STRING_TYPE = 'String',OBJECT_TYPE = 'Object',NUMBER_CLASS = '[object Number]',BOOLEAN_CLASS = '[object Boolean]',STRING_CLASS = '[object String]',ARRAY_CLASS = '[object Array]',NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON && typeof JSON.stringify === 'function' && JSON.stringify(0) === '0' && typeof JSON.stringify(function(x) { return x }) === 'undefined',IS_DONTENUM_BUGGY = (function(){
    for (var p in { toString: 1 }) {
      // check actual property name, so that it works with augmented Object.prototype
      if (p === 'toString') return false;
    }
    return true;
  })();
function inspect(object) {
	try {
	  if (isUndefined(object)) return 'undefined';
	  if (object === null) return 'null';
	  return object.inspect ? object.inspect() : String(object);
	} catch (e) {
	  if (e instanceof RangeError) return '...';
	  throw e;
	}
}
function keys(object) {
	if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); }
	var results = [];
	for (var property in object) {
	  if (_hasOwnProperty.call(object, property))
		results.push(property);
	}

	// Account for the DontEnum properties in affected browsers.
	if (IS_DONTENUM_BUGGY) {
	  for (var i = 0; property = DONT_ENUMS[i]; i++) {
		if (_hasOwnProperty.call(object, property))
		  results.push(property);
	  }
	}

	return results;
}
function Type(o) {
    switch(o) {
      case null: return NULL_TYPE;
      case (void 0): return UNDEFINED_TYPE;
    }
    var type = typeof o;
    switch(type) {
      case 'boolean': return BOOLEAN_TYPE;
      case 'number':  return NUMBER_TYPE;
      case 'string':  return STRING_TYPE;
    }
    return OBJECT_TYPE;
  }
  function toJSON(value) {
    return Str('', { '': value }, []);
  }

  function Str(key, holder, stack) {
    var value = holder[key];
    if (Type(value) === OBJECT_TYPE && typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

    var _class = _toString.call(value);

    switch (_class) {
      case NUMBER_CLASS:
      case BOOLEAN_CLASS:
      case STRING_CLASS:
        value = value.valueOf();
    }

    switch (value) {
      case null: return 'null';
      case true: return 'true';
      case false: return 'false';
    }

    var type = typeof value;
    switch (type) {
      case 'string':
        return value.inspect(true);
      case 'number':
        return isFinite(value) ? String(value) : 'null';
      case 'object':

        for (var i = 0, length = stack.length; i < length; i++) {
          if (stack[i] === value) {
            throw new TypeError("Cyclic reference to '" + value + "' in object");
          }
        }
        stack.push(value);

        var partial = [];
        if (_class === ARRAY_CLASS) {
          for (var i = 0, length = value.length; i < length; i++) {
            var str = Str(i, value, stack);
            partial.push(typeof str === 'undefined' ? 'null' : str);
          }
          partial = '[' + partial.join(',') + ']';
        } else {
          var keys = Object.keys(value);
          for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i], str = Str(key, value, stack);
            if (typeof str !== "undefined") {
               partial.push(key.inspect(true)+ ':' + str);
             }
          }
          partial = '{' + partial.join(',') + '}';
        }
        stack.pop();
        return partial;
    }
  }

  function stringify(object) {
    return JSON.stringify(object);
  }
$.extend(Object,{inspect:inspect,toJSON:NATIVE_JSON_STRINGIFY_SUPPORT ? stringify : toJSON,keys:Object.keys || keys});	
	
	
	
	/* 获取订单商品数据 */
	 window.pageOrderID=orderID;
	 T.ajax("Comment/GetProductComment", {
	     data: orderID ? { orderCode: orderID } : {},
		success: function (data) {
		    var jsondata = [], resultlist = data.ResultList;
            
		    $.each(resultlist, function (index, item) {
				item.commstar=[1,2,3,4,5];
				jsondata.push(item);
			});	
		    var temstr = data.ResultList.length > 0 ? TPL.list.process({ ResultList: jsondata }) : TPL.none;
		    $("#pro-info-list").html(temstr);
			$.each(jsondata, function (index, item) {
			    uploadTool({ browse_button: "pickbutton-" + item.OrderCode + "-" + item.ProductID, container: "photoList-" + item.OrderCode + "-" + item.ProductID });
			});
			// 评价等级
			$(".starLevel").hover(function(){
				$(this).find("i").mouseenter(function(){
					$(this).addClass("select").prevAll().addClass("select");
					$(this).nextAll().removeClass("select");
				});
			},function(){
				var _level = $(this).attr("data-level");
				if(_level>0){
					$(this).closest(".starLevel").find("i").eq(_level-1).addClass("select").prevAll().addClass("select");
					$(this).find("i").eq(_level-1).nextAll().removeClass("select");
				}else{
					$(this).find("i").removeClass("select");
				}
			});
			$(".starLevel").off("click").on("click","i",function(){
				var cur_starLevel = $(this).closest('.starLevel'),cur_input=cur_starLevel.siblings("input");
				cur_starLevel.attr("data-level",$(this).index()+1);
				//cur_starLevel.next(".starLevelVal").val($(this).index()+1);
				cur_input.val($(this).index()+1).blur();
				$(this).addClass("select").prevAll().addClass("select");
				$(this).nextAll().removeClass("select");
			});
			// 评论提交
			$('form').validate({
				//errorPlacement: function(error, element) {
					// 报错的位置
				  //  $(element).closest("li").find(".td-tip").html(error);
			   // },
				ignore:"",
				rules: {
					CommentContent: {
						required: true,
						rangelength:[1,500]
					},
					Score: {
						min: 1
					}
				},
				messages: {
					CommentContent: {
						required: "(麻烦填写0-500个字哦)",
						rangelength: "(字符限制在0-500个字符内)"
					},
					Score: {
						min: "请给宝贝评个分呗"
					}
				},
				submitHandler: function(form) {
					var sparam = $(form).serializeObject(),jsonparam=Object.toJSON(sparam);
					T.ajax("Comment/AddProductComment", {
						type:"POST",
						data: sparam,
						success: function (data) {
						    if (data.errno == 0) {
						        layer.msg("评论提交成功", { icon: 1 });
						        window.location.reload();
						    } else {
						        layer.msg(data.errmsg, { icon: 2 });
						    }
						 
						  
						}
					 });
				}
			});
		}
	 });
	 function uploadTool(options){
			var m = new plupload.Uploader({
			    runtimes: "gears,html5,flash",//上传插件初始化选用那种方式的优先级顺序
			    browse_button: options.browse_button,//触发浏览文件按钮标签的唯一id
			    file_data_name: "Filedata",//设置上传字段的名称
			    urlstream_upload: !0,//布尔值 如果是flash上传应该用URLStream 代替FileReference.upload
			    container: options.container,//展现上传文件列表的容器
			    max_file_size: "4mb",//最大上传文件大小（格式100b, 10kb, 10mb, 1gb）
			    multipart_params: { PHPSESSID: "mvpjl6muuk705ipboi3ia0b461" },//上传时的附加参数，以键/值对的形式传入，服务器端可是使用$_POST来获取这些参数
			    url: T.site.api + "Upload/ImgUpload",//上传服务器地址
			  //  url: "http:\/\/ibo.admin.ccdfs.cc/common/uploadifyhandler.ashx",
			    flash_swf_url: T.site.base + "v3/js/plugins/plupload/Moxie.swf?r=" + Math.random(),//flash文件地址
			    silverlight_xap_url: T.site.base + "v3/js/plugins/plupload/Moxie.xap",//silverlight文件，当需要使用silverlight方式进行上传时需要配置该参数
				filters: [{ title: "Image files", extensions: "jpg,jpeg,gif,png,bmp" }]//选择文件扩展名的过滤器,每个过滤规则中只有title和ext两项[{title:'', extensions:''}]
			});
			m.bind("FilesAdded", function(a, d) {
			//	console.log(a);
			});	
			m.bind("UploadProgress", function(a, d) {
			//	console.log(a);
			});	
			m.bind("UploadFile", function() {
				
			});	
			m.bind("UploadComplete", function() {
				
			});	
			m.bind("Error", function(a, c) {
				//console.log(a);
			});	
			m.bind("QueueChanged", function(a) {
				// a.settings.withCredentials=!1;
				 a.start()
			});	
			m.bind("FileUploaded", function(a, d, e) {
				var f = e.response;
				if ("" != f) {
				    var fileObj = T.json.parse(f), shortPath = fileObj.data, fullPath = T.site.img + shortPath, ul = $("#" + options.container);
					var tpl = $('<li id="' + d.id + '"><input type="hidden" name="ImgsPath[]" value="' + shortPath + '" /><img width="80px" height="80px" alt="" src="' + fullPath + '" /></li>');
					var itembox=tpl.prependTo(ul);
				}
			});
			m.init(); 
	 }

	/* 晒单图片上传操作 */

	// console.log(m.settings);
	// m.setOption("withCredentials",true);


})
