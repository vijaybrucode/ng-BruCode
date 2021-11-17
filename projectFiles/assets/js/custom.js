/*on-scroll fixed header*/ 
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >=147) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });  
 
/*opensubmenu-services-btn*/ 

function mouseHover() {
  $(document).ready(function(){
      $(".hoverable-btn").mouseover(function(){
        $(".sticky").addClass("custom-coloration");
      });
  });
}

function mouseOut() {
  $(document).ready(function(){
  $(".hoverable-btn").mouseout(function(){
    $(".sticky").removeClass("custom-coloration");
  });
});
} 


/*expandable search-bar*/ 
function openSearch() {
  alert("hello");
  $("#myOverlay").fadeIn(500);  
}


/*expandable search-bar*/ 
// function openSearch() {
//     document.getElementById("myOverlay").style.display = "block";
// }
  
// function closeSearch() {
//     document.getElementById("myOverlay").style.display = "none";
// }


//==================================new js 22-oct-21===================================================================

// Get viewport height for Hero Image
var headerHeight = $(".headerIntro").css({"padding-top":"0%","height":"100vh"}).outerHeight();

  $(".headerIntro").css({
     "paddingTop":0,
      "height":headerHeight,
  });


/* scroll animation in headerIntro section */
$(window).scroll(function (event) {

$(".headerIntro h4").css("opacity", 1 - $(window).scrollTop() / 180);
$(".headerIntro h1").css("opacity", 1 - $(window).scrollTop() / 290);
$(".headerIntro p").css("opacity", 1 - $(window).scrollTop() / 450);
$(".headerIntro .js-to-Scroll").css("opacity", 1 - $(window).scrollTop() / 550);

var scrollPos = $(this).scrollTop(),
  opacityValHeart = 1-(Math.min(scrollPos/100,2)),
  
  headerHeart = $(".headerIntro .header__title__img__wrapper");
  headerHeart.css({ 'transform' : 'translate(0px, -'+ scrollPos /1 +'%)','opacity': opacityValHeart });
  
  headerFade2 = $(".headerIntro h4"),
  headerFade1 = $(".headerIntro h1"),
  headerFadep = $(".headerIntro p"),
  headerFadesvg = $(".headerIntro .js-to-Scroll");
  headerFade2.css({ 'transform' : 'translate(0px, -'+ scrollPos /2.3 +'%)' });
  headerFade1.css({ 'transform' : 'translate(0px, -'+ scrollPos /4.3 +'%)' });
  headerFadep.css({ 'transform' : 'translate(0px, -'+ scrollPos /2.8 +'%)' });
  headerFadesvg.css({ 'transform' : 'translate(0px, -'+ scrollPos /1.5 +'%)' });

var alphaVal = 0.2+(Math.min(scrollPos/950,1)),
  rgba = 'rgba(0, 0, 0, ' + alphaVal + ')',
  headerOverlay = $(".header__overlay");

  headerOverlay.css({'backgroundColor': rgba });

});

/*css animation for headerIntro section*/
$(document).ready(function(){

var logoheadline = $(".headerIntro h4")
logoheadline.delay(1400).animate({top:'0px', opacity: '1'}, 600);

var headline = $(".headerIntro h1")
headline.delay(1400).animate({top:'0px', opacity: '1'}, 600);

var div = $(".headerIntro .header__title__paragraph")
div.delay(1400).animate({top:'0px', opacity: '1'}, 600); 

var scroll = $(".headerIntro .js-to-Scroll")
scroll.delay(1200).animate({opacity: '1'}, 600);  

$('.headerIntro').addClass('scaling');


$('html,body').delay(100).fadeIn( "slow" ,function(){
  $('.headerIntro').css( "transform", "matrix(1, 0, 0, 1, 0, 0)" ).fadeIn(500);
});

});

/* smooth scroll-up hero-section */
$('.scroll__icon').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ 
    scrollTop: $(this.hash).offset().top
  }, 200);
});
