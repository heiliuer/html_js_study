$(function(){
			$('#slides').slides({
				preload: true,
				preloadImage: '../images/img/loading.gif',
				play: 3000,
				pause: 2500,
				hoverPause: true,
				animationStart: function(){
					$('.caption').animate({
						bottom:-62
					},50);
				},
				animationComplete: function(current){
					
					$('.caption').animate({
						bottom:0
					},500);
					
					if (window.console && console.log) {
						console.log(current);
					};
				}
			});
		});





$(function(){
	$("#div_11").click(function(){
	$("#div_11").css({"background-image":"url(images/home_photo/sddddd.png)"});$("#div_12").css({"background-image":"url(images/home_photo/sddddddd.png)"});
	$("#div_1").hide();
	$("#div_2").fadeIn();
	$(".abanico_div_frame").animate({height:170},"slow");

	});
	$("#div_12").click(function(){
									$("#div_12").css({"background-image":"url(images/home_photo/sddddd.png)"});$("#div_11").css({"background-image":"url(images/home_photo/sddddddd.png)"});
	$("#div_2").hide();
	$("#div_1").fadeIn();
	$(".abanico_div_frame").animate({height:340},"slow");

	});
});





$(document).ready(function(){
	$('.box a').mouseover(function(){
		$(this).stop().animate({"top":"-120px"}, 200); 
	});
	$('.box a').mouseout(function(){
		$(this).stop().animate({"top":"0"}, 200); 
	});
});



