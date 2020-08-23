
$ ( function() {

	// Menu Hamburger

	$('.burger').click( function () {
		$('.menu-collapse').toggleClass('d-none order');
		$('.navigation__menu').toggleClass('menu-open');
	})

	$('.menu-open li a').click( function () {
		$('.menu-collapse').addClass('d-none');
		$('.navigation__menu').toggleClass('menu-open');
	})

	// Preloader

	var loader = $('.loader');
	loader.fadeOut();
	loader.delay(1000).fadeOut('slow');

	// плавное перемещение страницы к нужному блоку

	$('.go').click( function (e) {
		e.preventDefault();
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 900);
	});

	//Popup

	$('.navigation__btn, .footer__btn').click( function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	})

	// Slider 

	if ($('#subcat__comments').length) {
		$('.subcat__slider').slick({
	 	dots:true,
	 	prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
	 	nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	 });
	}

	//Map

    if ($('#map').length) {
    	ymaps.ready(init);
		    function init(){ 
		        var myMap = new ymaps.Map("map", {
		            center: [46.4740989249328,30.74796114816278],
		            zoom: 16
		        });

		        var myPlacemark = new ymaps.Placemark ([46.47412857443835,30.746008499999924], {
		        	hintContent:'65000, Украина, г. ОдессаУл Базарная, 36 ',
		        	balloonContent: '65000, Украина, г. ОдессаУл Базарная, 36 ',
		        });

		        myMap.geoObjects.add(myPlacemark)
			}
    	}
    
});








	