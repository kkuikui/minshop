$(function(){
	$(".pup-c-title a").click(function(){
		$(".pup-c-title a").removeClass("on");
		$(this).addClass("on");
		var num = $(this).index();
		$(".pup-xs-p").removeClass("on").eq(num).addClass("on");
	});

	Scrollimg("banner","banner-img","banner-btn");

	$(".scroll-back").click(function () {
		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		return false;
	});
	
})
