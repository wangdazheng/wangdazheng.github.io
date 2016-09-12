$(function(){
	
	$('.js-get-invoice').click(function(){
		$(this).find('a').toggleClass('cur');
	});
	

	$('#yes').click(function(){
		$('.invoice').show();
		$('#no').removeClass("cur");	
		$(this).addClass("cur");
	});
	
	$('#no').click(function(){
		$('.invoice').hide();
		$('#yes').removeClass("cur");	
		$(this).addClass("cur");
	});


	//点击支付按钮时验证输入内容
	$(".js-payment-btn").click(function(e){
		//e.preventDefault();
		
		//地址
		/*if ($.trim($("#J_userName").val()) == ""){
			return jShare('请填写正确中文名称',"",""),
			$("#J_userName").addClass("error"),
        	!1;
		}else{
			$("#J_userName").removeClass("error");
		}*/
		

		
	});
	
	
	
});