$(document).ready(function() {

    
    let $slider = $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        prevArrow: `<a href="#" class="slide__arrow slide__arrow--rotate-left"></a>`,
        nextArrow: `<a href="#" class="slide__arrow slide__arrow--rotate-right"></a>`,
        pauseOnFocus: true,
        
    });
    
    $(document).on('keydown', function(e) {
        if(e.keyCode == 37) {
            $slider.slick('slickPrev');
        }
        if(e.keyCode == 39) {
            $slider.slick('slickNext');
        }
    });
})