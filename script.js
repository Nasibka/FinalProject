$(document).ready(function(){
  $(window).scroll(function(){
	  if ($(this).scrollTop() > 200) {
	    $(".navbar").addClass('changeColor');
	    $('.navInfo li a').addClass('blackText');
	    $(".title span").addClass('displayNone');
	    $(".title div").addClass('displayNone');
	  }
	  if($(this).scrollTop() < 200) {
	    $(".navbar").removeClass('changeColor');
	    $('.navInfo li a').removeClass('blackText');
	    $(".title span").removeClass('displayNone');
	    $(".title div").removeClass('displayNone');
	  }
	  if($(this).scrollTop() > 1000){
	  	$(".leftTruck ").addClass('leftMoving');
	  	$(".rightTruck ").addClass('rightMoving');
	  }
	  if($(this).scrollTop() < 1000){
	  	$(".leftTruck ").removeClass('leftMoving');
	  	$(".rightTruck ").removeClass('rightMoving');
	  }
  })
})

// <!DOCTYPE HTML>
// <html>
// <head>
//   <style>
//     body,
//     html {
//       height: 100%;
//       width: 100%;
//       padding: 0;
//       margin: 0;
//     }

//     #matrix {
//       width: 400px;
//       margin: auto;
//       overflow: auto;
//       text-align: justify;
//     }

//     #arrowTop {
//       height: 9px;
//       width: 14px;
//       color: green;
//       position: fixed;
//       top: 10px;
//       left: 10px;
//       cursor: pointer;
//     }

//     #arrowTop::before {
//       content: '▲';
//     }

//   </style>
//   <meta charset="utf-8">
// </head>

// <body>

//   <div id="matrix">
//     <script>
//       for (let i = 0; i < 2000; i++) document.writeln(i)
//     </script>
//   </div>

//   <div id="arrowTop" hidden></div>

//   <script>

//     arrowTop.onclick = function() {
//       window.scrollTo(pageXOffset, 0);
//       // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
//     };

//     window.addEventListener('scroll', function() {
//       arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
//     });
//   </script>

// </body>
// </html>




