import $ from "jquery";
$(document).ready(function() {
    $("#project-slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '25%',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: '20%'
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '15%'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '10%'
                }
            }
        ]
    });
})

