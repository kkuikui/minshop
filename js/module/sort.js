// 轮播图
function Sort(Data) {
	var showData = JSON.parse(Data);
	function sort_t(title, chooseName){
		$("#"+ title +" dd").click(function () {
			$(this).addClass("selected").siblings().removeClass("selected");
			if ($(this).hasClass("select-all")) {
				$("#"+ chooseName +"").remove();
			} else {
				var copyThisA = $(this).clone();
				if ($("#"+ chooseName +"").length > 0) {
					$("#"+ chooseName +" a").html($(this).text());
				} else {
					$(".select-result dl").append(copyThisA.attr("id", ""+ chooseName +""));
				}
			}
		});
		$("#"+ chooseName +"").live("click", function () {
			$(this).remove();
			$("#"+ title +" .select-all").addClass("selected").siblings().removeClass("selected");
		});
	};

	$.each(showData.data,function(i,val){
		sort_t(val.name, val.choose);
	});


	
	$(".select dd").live("click", function () {
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	});
};
