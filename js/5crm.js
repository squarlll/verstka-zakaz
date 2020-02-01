$(document).ready(function(){

	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').toggleClass('menu-active');
		$(this).toggleClass('hamburger-active');
		$('.header').toggleClass('header-active');
	});
	$('.possibility').on('click', function(){
		$('.menu__second-level').addClass('second-level-active');
		$('.header__menu ul:first-child').addClass('header__menu-hidden')
	})
	$('.second-level__back i').on('click', function(){
		$('.menu__second-level').removeClass('second-level-active');
		$('.header__menu ul:first-child').removeClass('header__menu-hidden')
	})
})