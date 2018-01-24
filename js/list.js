requirejs.config({
	paths: {
		"jquery" : "../vendor/jquery/jquery.min"
	}
});
requirejs(["jquery","js/module/nav.js","js/module/sort.js"],function($,nav,sort){
	nav.Nav({
		Class: "shortcut"
	});
	sort.Sort({
		Data: '{"data": [{"name":"select1","choose":"selectA"},{"name":"select2","choose":"selectB"},{"name":"select3","choose":"selectC"}]}'
	});
	$(".scroll-back").click(function () {
		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		return false;
	});
})
