$(function(){
	$('.slider__inner, .sliderreview__inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});

	

	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	});

	
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset
		}, 1000)
	});
	
});


