$(document).ready(function(){
    
    //loadmore
    size_li = $(".writing-clips .li").size();
    x=2;
    $('.writing-clips .li:lt('+x+')').show();
    $('.showmore').click(function () {
        x= (x+1 <= size_li) ? x+1 : size_li;
        $('.writing-clips .li:lt('+x+')').show();
    });
    $('.showless').click(function () {
        x=(x-1<2) ? 2 : x-1;
        $('.writing-clips .li').not(':lt('+x+')').hide();
    });

    
    
    
    
    
    
    
    
    $('.js--section-about').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '45px;'  
    });
    
    /* Scroll down to form */
    
    $('.js--scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000)
    });
    

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    //Animations on Scroll
    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animated fadeInLeft');
        //Code to highlight the specific nav li
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animated fadeIn');
        $()
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '99%'
    });
    
     $('.js--wp-4').waypoint(function(){
        $('.js--wp-4').addClass('animated fadeInDown');
    }, {
         offset:'50%'
    });

    
    /*MOBILE NAVIGATION*/
    $('.js--nav-icon').click(function(){
        
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200);
        
        if ($(this).attr('src') == "icons/icon-close.png") {
            $(this).attr('src', 'icons/hamburger-menu.png');
        } else if ($(this).attr('src') == 'icons/hamburger-menu.png') {
            $(this).attr('src', 'icons/icon-close.png')
        };
        
    });
    
});