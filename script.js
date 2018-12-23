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
	  if($(this).scrollTop() > 2400){
	  	$(".leftTruck ").addClass('leftMoving');
	  	$(".rightTruck ").addClass('rightMoving');
	  }
	  if($(this).scrollTop() < 2400){
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

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "item") {
//     x.className += " responsive";
//   } else {
//     x.className = "item";
//   }
// }
// function classToggle() {
//   const navs = document.querySelectorAll('.navInfo')
  
//   navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }
// document.querySelector('.toggleMenu')
//   .addEventListener('click', classToggle);

