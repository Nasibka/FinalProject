$(document).ready(function(){
  $(window).scroll(function(){
	  if ($(this).scrollTop() > 300) {
	    $(".navbar").addClass('changeColor');
	    $('.navInfo li a').addClass('blackText');
	    $(".title p").addClass('displayNone');
	    $(".title div").addClass('displayNone');
	    document.getElementById("scrollBtn").style.display = "block";

	  }
	  if($(this).scrollTop() < 300) {
	    $(".navbar").removeClass('changeColor');
	    $('.navInfo li a').removeClass('blackText');
	    $(".title p").removeClass('displayNone');
	    $(".title div").removeClass('displayNone');
	    document.getElementById("scrollBtn").style.display = "none";
	  }
	  if($(this).scrollTop() > 2800){
	  	$(".leftTruck ").addClass('leftMoving');
	  	$(".rightTruck ").addClass('rightMoving');
	  }
	  if($(this).scrollTop() < 2800){
	  	$(".leftTruck ").removeClass('leftMoving');
	  	$(".rightTruck ").removeClass('rightMoving');
	  }
  })
});
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
	function myFunction(){
		if($('.navInfo').is(':visible')) {
			$('.navInfo').slideUp();
		} else {
			$('.navInfo').slideDown();
		}
		$(this).toggleClass('open');
		return false;
	};
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.scrollUp.style.displayNone;
//   } else {
//    document.scrollUp.style.displayNone;
//   }
// }

// var x = window.matchMedia("(max-width: 414px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction)



