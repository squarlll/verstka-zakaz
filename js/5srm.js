$(document).ready(function() {
	$('.header__menu-btn').on('click', function() {
		$('.header__menu-btn').toggleClass('menu-btn_active');
		$('.header').slideToggle();
	});
	
	$('.team__slider').slick({
		dots:false,
		slidesToShow:5,
		slidesToScroll:1,
		speed:800,
		infinite: true,
		autoplay:true,
		autoplaySpeed:1000,
		pauseOnHover:true,
		responsive:[
			{
				breakpoint: 1000,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 701,
				settings: {
					slidesToShow:1,
					autoplaySpeed:2000
				}
			}
		]
	});
});







































































































































































































































































