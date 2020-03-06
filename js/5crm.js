$(document).ready(function(){
	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').toggleClass('menu-active');
		$(this).toggleClass('hamburger-active');
		$('.header').toggleClass('header-active');
	});
	$('.second-level__back').on('click', function(){
		$('.menu__second-level').removeClass('second-level-active');
		$('.header__menu ul:first-child').removeClass('header__menu-hidden')
	});
    $('.header__search').on('click', function(){
        // $('.header__menu ul:nth-child(2), .header__client, .header__logo').addClass('header__menu-hidden');
        $('body').addClass('html-fixed');
        $('html').addClass('html-scroll');
        $('.header__search-quick-wrapper').addClass('header__search-quick-wrapper-active');
        $('.desktop__input').focus();
        $('.header__inner').addClass('btns-hidden');
        $('.desktop__form').addClass('desktop__form-active');
        $('.header__logo, .header__client').addClass('logo-hidden');
        // $('.desktop-ul').addClass('desktop-active');
        $('.desktop-ul').fadeOut();

        $('.form__button').on('click', function(){
            $('.desktop__form').removeClass('desktop__form-active');
            $('.header__menu ul:nth-child(2), .header__client, .header__logo').removeClass('header__menu-hidden');
            $('body').removeClass('html-fixed');
            $('.header__search-quick-wrapper').removeClass('header__search-quick-wrapper-active');
            $('.header__inner').removeClass('btns-hidden');
            $('.header__logo, .header__client').removeClass('logo-hidden');
            // $('.desktop-ul').removeClass('desktop-active');
            $('.desktop-ul').fadeIn(0);
        });
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
            $('.header-bottom').toggleClass('db');
            $('.header__contact').on('click', function(){
                $('.header-bottom').removeClass('db')
            });
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
            $('.header-bottom').toggleClass('db1');
            $('.possibility').on('click', function(){
                $('.header-bottom').removeClass('db1')
            });
        }
    });
    $(".sticky-content").stick_in_parent();
});
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