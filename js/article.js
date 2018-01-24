requirejs.config({
	paths: {
		"jquery" : "../vendor/jquery/jquery.min"
	}
});
requirejs(["jquery"],function($){
	//点击菜单效果
	$(".help-subbox dt").unbind('click').click(function(){
		var dl=$(this).parent("dl");
		dl.toggleClass("on");
		var b = dl.find("b");
		b.attr("class","icon01");
		dl.find("dd").toggle();
	});
})
