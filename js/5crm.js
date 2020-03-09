$(document).ready(function(){
	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').toggleClass('menu-active');
		$(this).toggleClass('hamburger-active');
		$('.header').toggleClass('header-active');
        $('.header__form input').toggleClass('mobile-menu_active');
	});
	$('.second-level__back').on('click', function(){
		$('.menu__second-level').removeClass('second-level-active');
		$('.header__menu ul:first-child').removeClass('header__menu-hidden')
	});
    $(function(){
        $(".header__menu-btn").bind('click', function(e){
            e.preventDefault();
            $('body,html').animate({scrollTop: 0}, 0);    
        });
    });
    // desktop search
    $('.header__search').on('click', function(){
        // $('.header__menu ul:nth-child(2), .header__client, .header__logo').addClass('header__menu-hidden');
        $('body').addClass('html-fixed');
        $('html').addClass('html-scroll');
        $('.header__search-quick').addClass('header__search-quick-active');
        $('.desktop__input').focus();
        $('.header__inner').addClass('btns-hidden');
        $('.desktop__form').addClass('desktop__form-active');
        $('.desktop-ul').addClass('desktop-ul-active');
        $('.header__link').addClass('header__link-active');
        $('.background').addClass('background-active');
        $('.desktop__input').addClass('desktop__input-active');

        $('.form__button').on('click', function(){
            $('.desktop__form').removeClass('desktop__form-active');
            $('.header__menu ul:nth-child(2), .header__client, .header__logo').removeClass('header__menu-hidden');
            $('body').removeClass('html-fixed');
            $('.header__search-quick').removeClass('header__search-quick-active');
            $('.header__inner').removeClass('btns-hidden');
            $('.desktop-ul').removeClass('desktop-ul-active');
            $('.header__link').removeClass('header__link-active');
            $('.background').removeClass('background-active');
            $('.desktop__input').removeClass('desktop__input-active');
            $('.desktop__input').val('');
        });
    });

    // mobile search
    $('.header__form input').focus(function() {
        $(this).addClass('mobile-search_active');
        $('.header').addClass('header-search-active');
        $('.menu-active').addClass('search-ul');
        $('.mobile-search__close').toggleClass('mobile-search__close_active-1');
        $('.searchview').addClass('searchview_active');
        $('.menu-ul').addClass('searchview_hidden');

        $(this).keydown(function(){
            $('.mobile-search__close').addClass('mobile-search__close_active');
        });

        $('.mobile-search__close').on('click', function(){
            $('.header__form input').val('');
            $(this).removeClass('mobile-search__close_active');
        })
    });
    $('.mobile-search__button').focus(function() {
        $('.header__form input').removeClass('mobile-search_active')
        $('.header').removeClass('header-search-active');
        $('.menu-active').removeClass('search-ul');
        $('.header__form input').val('');
        $('.mobile-search__close').removeClass('mobile-search__close_active');
        $('.searchview').removeClass('searchview_active');
        $('.menu-ul').removeClass('searchview_hidden');
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
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});
var isMobile = false;
jQuery(document).ready(function() {
    if (jQuery('body').width() <= 1240) {
        isMobile = true;
    }
    if (isMobile) {
        $('.function__text').removeClass('sticky')
    }
});
$(".sticky-content").stick_in_parent();