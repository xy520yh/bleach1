$(document).ready(function(){
/* =================================================================
Background
================================================================= */
var tl = new TimelineMax({repeat:-1, repeatDelay:0, delay:0});
	tl.add(TweenLite.to(".bg_1", 3, {opacity:1}));
      tl.add(TweenLite.to(".bg_1", 1, {width:'105%', height:'100%', left:'-2%', top:'-2%', opacity:0}));
      tl.add(TweenLite.to(".bg_2", 3, {opacity:1}));
      tl.add(TweenLite.to(".bg_2", 1, {width:'105%', height:'100%', left:'-2%', top:'-2%', opacity:0}));
      tl.add(TweenLite.to(".bg_3", 3, {opacity:1}));
      tl.add(TweenLite.to(".bg_3", 1, {width:'105%', height:'100%', left:'-2%', top:'-2%', opacity:0}));


var tl = new TimelineMax({repeat:-1, repeatDelay:0, delay:0});
	tl.add(TweenLite.to(".tg_1", 3, {opacity:1}));
      tl.add(TweenLite.to(".tg_1", 1, {width:'499px', height:'750px',  opacity:0}));
      tl.add(TweenLite.to(".tg_2", 3, {opacity:1}));
      tl.add(TweenLite.to(".tg_2", 1, {width:'499px', height:'750px', opacity:0}));
      tl.add(TweenLite.to(".tg_3", 3, {opacity:1}));
      tl.add(TweenLite.to(".tg_3", 1, {width:'499px', height:'750px', opacity:0}));
	  tl.add(TweenLite.to(".tg_4", 3, {opacity:1}));
      tl.add(TweenLite.to(".tg_4", 1, {width:'499px', height:'750px', opacity:0}));
	  tl.add(TweenLite.to(".tg_5", 3, {opacity:1}));
      tl.add(TweenLite.to(".tg_5", 1, {width:'499px', height:'750px', opacity:0}));
	  tl.add(TweenLite.to(".tg_6", 3, {opacity:1}));
      tl.add(TweenLite.to(".tg_6", 1, {width:'499px', height:'750px', opacity:0}));



/* =================================================================
Nav
=================================================================*/
$("nav a").hover(function() {
	$("nav a b").css("animation-delay","0s")
})


});	


















