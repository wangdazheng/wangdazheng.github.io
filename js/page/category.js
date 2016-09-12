$(function(){
	var scrollLeft,scrollMid,scrollRight;
	
	if($("#categoryLeft").length > 0){
		scrollLeft();
	}
	if($("#categoryMid").length > 0){
		scrollMid();
	}
	if($("#categoryRight").length > 0){
		scrollRight();
	}

	//tab切换事件
	var tabs = function(nav,content){
		$(nav).find("li").bind("click",function(e){
			e.preventDefault();
			var index = $(this).index();
			$(this).addClass("cur").siblings().removeClass("cur");
			$(content).eq(index).show().siblings(content).hide();
			scrollMid.refresh();
			scrollMid.scrollTo(0, 0, 200);
			//显示右边字母导航事件
			if(index == 0){
				$(".letter_box").show();
			}else{
				$(".letter_box").hide();
			}
			
		});
	}
	
	tabs(".category-menu", ".tabs_cell");
	
	function scrollLeft(){
	  scrollLeft = new iScroll('categoryLeft',{
				  hScrollbar:false,
				  vScrollbar:false,
				  hideScrollbar:true
			  });
	}
	function scrollMid(){
	  scrollMid = new iScroll('categoryMid',{
				  hScrollbar:false,
				  vScrollbar:false,
				  hideScrollbar:true
			  });
	}
	function scrollRight(){
	  scrollRight = new iScroll('categoryRight',{
				  hScrollbar:false,
				  vScrollbar:false,
				  hideScrollbar:true
			  });
	}
	
	
	//监听横竖屏切换事件
	window.addEventListener("orientationchange", function() {
		scrollMid.refresh();
	}, false);
	
});