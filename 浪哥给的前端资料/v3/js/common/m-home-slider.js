define("common/m-home-slider.js", ["common/tools.js"], function (require, exports, modules) {
    require("common/tools.js");
	/* 高亮左侧导航 */	
	var pathName=window.location.origin+window.location.pathname;
	if(!T.page.isLogged){
		window.location.href=T.site.passport+"login.html?jump="+pathName;
		return;
	}
	$("#m-home-slider a").each(function(index,item){
		var pname=this.getAttribute("href");
		if(pname==pathName){
			$(item).parent().addClass("select");
		}
	});
   /* 退出登录 */
   $("#m-home-slider").delegate(".logout","click",function(e){
	   e.preventDefault();
             T.ajax("UserLogin/Logout",{
                type:"POST",
                data:{},
                success: function (data) {
					T.uncookie();
                    layer.msg("退出成功",{icon:1});
					window.location.reload();
                }
             });
	   
   });
	
})