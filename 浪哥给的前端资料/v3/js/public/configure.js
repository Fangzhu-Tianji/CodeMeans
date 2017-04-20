
// 全局公共变量配置
siteConfig = {
	action_path:"http://api.ccdfs.cc/v3/",
	static_version: '20151221',
	member_path: "http://member.ccdfs.cc/"
}

;(function(){
	
	// sea.js 配置
	seajs.config({
		paths: {
			'jsdir': 'http://base.ccdfs.cn/v3/js/',
		},
		//模块系统的基础路径
		base: 'http://base.ccdfs.cn/v3/js/',

		//别名
		alias: {
			//'jquery': 'public/jquery-1.8.0.min.js',
			'jquery': 'public/jquery.min.js',
			'layer': 'plugins/layer/layer.js',
			'jquery.cookie': 'plugins/jquery.cookie.min.js',
		},
		
		//预加载
		preload: ['jquery'],

		//文件映射
		map: [
			//可配置版本号
			['.css', '.css?v=' + siteConfig.static_version],
			['.js', '.js?v=' + siteConfig.static_version]
		],

		//编码
		charset: 'utf-8'

	});

})();