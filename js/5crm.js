$(document).ready(function(){
	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').toggleClass('menu-active');
		$(this).toggleClass('hamburger-active');
		$('.header').toggleClass('header-active');
	});
	$('.second-level__back').on('click', function(){
		$('.menu__second-level').removeClass('second-level-active');
		$('.header__menu ul:first-child').removeClass('header__menu-hidden')
	})
});



// MENU

$('.possibility').on('click', function windowSize(){
    if ($(window).width() <= '768'){
            $('.mobile-menu__possibility').addClass('second-level-active');
            $('.header__menu ul:first-child').addClass('header__menu-hidden')
    }
    else {
        $('.header-bottom__possibility').siblings().removeClass('menu-bottom_active')
        $('.header-bottom__possibility').addClass('menu-bottom_active');
        $('.header-bottom').css('display', 'block');
    }
});

$('.header__contact').on('click', function windowSize(){
    if ($(window).width() <= '768'){
            // $('.mobile-menu__contacts').toggleClass('second-level-active');
            $('.mobile-menu__contacts').slideToggle();
            $('.contact__menu').toggleClass('contact__menu-active');
            $('.header__contact i').toggleClass('angle-active');
    }
    else {
        $('.header-bottom__contact').siblings().removeClass('menu-bottom_active')
        $('.header-bottom__contact').addClass('menu-bottom_active');
        $('.header-bottom').css('display', 'block');
    }
});


// $('.header__help').on('click', function windowSize(){
//     if ($(window).width() <= '910'){
//             $('.menu__second-level').addClass('second-level-active');
//             $('.header__menu ul:first-child').addClass('header__menu-hidden')
//     }
//     else {
//             $('.header-bottom').html('<div>6</div>')
//     }
// });



$(function() {
    var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
        {
       // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
        onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
            console.log(percent);
        }
    });
    $(window).resize(function() {
      if ($(window).width() <= 768) {
        elem.destroy();
      }
      else {
        elem.reinitialize();
      }
    });
});