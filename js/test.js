$(document).ready(function () {
    $('.thirdslider').bxSlider({
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: 370,
            pager:false,
            randomStart:true,
            auto:true,

        });
        $('.slider').bxSlider({
        moveSlides: 1,
        maxSlides:5,
        slideWidth: 280,
        pager: false,
        randomStart: true,
    });
    $('.headerslider').bxSlider({
        pager:false,
        auto:true,
        autoHover:true,
        maxSlides:1,
        moveSlides:1,
        minSlides:1,
    });

});









