define(function(require, exports, modules){
	
	window.$ = require("jquery");
    window.layer = require("layer");    
	// 公共模块
	window.P = {};
	// 如果页面存在 头部登录 
	if($('.m-header') && $('.m-header').length > 0){
		// 登录模块
		P.mlogin = require('public/m-login');
	}
	// 如果导航存在
	if($('#m-nav') && $('#m-nav').length > 0){
		// 导航模块
		P.mnav = require('public/m-nav');
	}
	// 如果侧边栏存在
	if($('#m-mui-bar') && $('#m-mui-bar').length > 0){
		// 导航模块
		P.mmuibar = require('public/m-mui-bar');
	}
	// 公共工具类
	require('public/tools-dev.js');
	// 引进弹窗插件
	//require('plugins/jquery.popup.js');

})