define("m/consult.js", ["common/shoppingcart.js", "lib/trimPath.js", "lib/jquery.page", "common/tools.js", "common/m-home-slider.js"], function (require, exports, modules) {
    require("lib/trimPath.js");
    require("lib/jquery.page");
    require("common/tools.js");
    require("common/m-home-slider.js");
    var g = require("common/shoppingcart.js");
    g();
    var TPL = {
        list: '{for record in ResultList}<dl class="box"><dt><span>${record.CounselTime}</span></dt><dd><h2>${record.AnswerContent}</h2><p>${record.CounselContent}</p></dd></dl>{/for}',
        none: '<div class="nothing"><div class="cnt"><p class="title">对不起，没有找到相关地址</p><p class="subtitle"><a href="' + T.site.web + '">去随便逛逛</a><span>，万一有喜欢的呢</span></p></div></div>'
    };
	function pageClickCallback(){
	    T.ajax("Counsel/MyProductCounsel", {
			data:this.data,
			success: function (data) {
			    var temstr = data.ResultList.length > 0 ? TPL.list.process(data) : TPL.none;
			    $("#resultList").html(temstr);
			}
		 });
	}
	 var sparam={pageIndex:1,pageSize:20,allowPaging:true};
	 T.ajax("Counsel/MyProductCounsel", {
		data:sparam,
		success: function (data) {
		    var temstr = data.ResultList.length > 0 ? TPL.list.process(data) : TPL.none;
		    $("#resultList").html(temstr);
			$('.pagination').page({
				total: data.TotalRecord,
				pageSize: data.PageSize,
				click: function (pageIndex) { //pageIndex:当前点击页数，索引从0开始，页数=索引+1
				  sparam['pageIndex']=pageIndex+1;
				  pageClickCallback.call({data:sparam});
				}
			});  
		}
	 });
})
