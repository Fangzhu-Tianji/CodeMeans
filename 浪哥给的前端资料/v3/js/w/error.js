define(function(require, exports, modules){
	var $ = require("jquery");
	var template = require("plugins/artTemplate.js");

	var getHots = function(url){
		T.GET({
		    action:url,
		    success:function(obj){
				if(obj.isSuccess){
					// 模板替换
					var thtml = template('hotsGoods', obj);
				    $('#hotsGoods').next("ul").html(thtml);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
	            console.log(textStatus);
	        },
		    failure:function(){}
		});
	}

	exports.getHots = getHots;

})
