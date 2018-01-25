$(function(){
	var Data ='{"data": [{"name":"select1","choose":"selectA"},{"name":"select2","choose":"selectB"},{"name":"select3","choose":"selectC"}]}'

	Sort(Data);

	$(".scroll-back").click(function () {
		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		return false;
	});
})
