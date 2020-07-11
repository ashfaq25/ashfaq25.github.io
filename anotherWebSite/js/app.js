$(document).ready(function(){
//scroll-to-top//
var offset= 250;
var duration= 500;
$(window).scroll(function(){
	if($(this).scrollTop()>offset){
		$(".top").fadeIn(duration);
	}else{
		$(".top").fadeOut(duration);
	};
});
$(".top").click(function(){
	$("html,body").animate({scrollTop:0},duration);
});

$(".click_me").click(function(){
	$(".for-bTn").toggleClass("cliCk-to-show");
});
  //progress//
$(function() {
        $('.chart').easyPieChart({
			size:150, barColor:'#DDD014', scaleColor: false, lineWidth:15, trackColor:'#cbcbcb'
        });
    }); 
 

	 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
})
