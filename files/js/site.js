$(document).ready(function(){
	console.log("meme")
	$("#services_expanded").hide()
	$("#community_expanded").hide()
	$("#gallery_expanded").hide(); //hide expanded navigation sections on page load
	
	$(".slider").unslider({
		dots:true,
	}); //The unslider banner plugin
	
//The following are 3 functions which hide and show different navigation sections
	var countdownServices;
	function hideExpandedServices() {
			 $("#services_expanded").fadeOut(50);
		 };
		 $("#services").mouseover(function () {
			 $("#services_expanded").show(); //expanded navigation section is revealed when the relevant text is moused over
			 clearTimeout(countdownServices); //stop the expanded section from hiding if the timer is counting down
		 });
		 $("#services").mouseleave(function () {
			 countdownServices = setTimeout(hideExpandedServices, 100); //prevents the expanded section from hiding if the user accidentally mouses out quickly
		 });
		 
	var countdownCommunity;	 
	function hideExpandedCommunity() {
			 $("#community_expanded").fadeOut(50);
		 };
		 $("#community").mouseover(function () {
			 $("#community_expanded").show(); //expanded navigation section is revealed when the relevant text is moused over
			 clearTimeout(countdownCommunity); //stop the expanded section from hiding if the timer is counting down
		 });
		 $("#community").mouseleave(function () {
			 countdown = setTimeout(hideExpandedCommunity, 200); //prevents the expanded section from hiding if the user accidentally mouses out quickly
		 });	 
		 
	var countdownGallery;
	function hideExpandedGallery() {
			 $("#gallery_expanded").fadeOut(50);
		 };
		 $("#gallery").mouseover(function () {
			 $("#gallery_expanded").show(); //expanded navigation section is revealed when the relevant text is moused over
			 clearTimeout(countdownGallery); //stop the expanded section from hiding if the timer is counting down
		 });
		 $("#gallery").mouseleave(function () {
			 countdownGallery = setTimeout(hideExpandedGallery, 100); //prevents the expanded section from hiding if the user accidentally mouses out quickly
		 });
		 

})