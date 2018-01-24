// 显示头部菜单
define(["jquery"], function ($) {
	function Nav(opts) {
		this.opts = $.extend({}, Nav.DEFAULTX, opts);
		var _this = this.opts;
		$("."+ _this.Class +"").find(".menu").hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
	};

	Nav.DEFAULTX = {
		Class: "",//0为加载属性，1为加载数据
	};

	return {
		Nav: Nav
	};
});