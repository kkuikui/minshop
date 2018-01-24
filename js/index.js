requirejs.config({
	paths: {
		"jquery" : "../vendor/jquery/jquery.min"
	}
});
requirejs(["jquery","js/module/nav.js","js/module/scrollimg.js"],function($,nav,scrollimg){
	nav.Nav({
		Class: "shortcut"
	});

	$(".pup-c-title a").click(function(){
		$(".pup-c-title a").removeClass("on");
		$(this).addClass("on");
		var num = $(this).index();
		$(".pup-xs-p").removeClass("on").eq(num).addClass("on");
	});

	scrollimg.Scrollimg({
		Class: "banner",
		Img: "banner-img",
		Btn: "banner-btn"
	});

	$(".scroll-back").click(function () {
		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		return false;
	});
	
})
