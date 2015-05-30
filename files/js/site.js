$(document).ready(function(){
	$(".gallery_expand").hide(); //hide expanded navigation sections on page load
		 var time;
		 function hideExpandedNav() {
			 $(".gallery_expand").fadeOut(50);
		 };
		 $(".gallery").mouseover(function () {
			 $(".gallery_expand").show(); //expanded navigation section is revealed when the relevant text is moused over
			 clearTimeout(time); //stop the expanded section from hiding if the timer is counting down
		 });
		 $(".gallery").mouseleave(function () {
			 time = setTimeout(hideMe, 200); //prevents the expanded section from hiding if the user accidentally mouses out quickly
		 });
})