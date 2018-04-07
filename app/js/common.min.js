$('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

function galleryNormal() {
    $('.gallery--normal').slick({
        centerPadding: '40px',
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

galleryNormal();

function galleryFullscreen() {
    $('.gallery--fullscreen').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
    });
}
galleryFullscreen();
/*
function button() {
    var btn = document.querySelector('.button--gradient')
    btn.onmousemove = function (e) {
        var x = e.pageX - btn.offsetLeft
        var y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')
    }
}

button();*/

$(document).ready(function () {
    $("#menu, #mmMenu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(function () {
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});

jQuery(document).ready(function ($) {
    $("#mmMenu").mmenu({
        "extensions": [
            "pagedim-black",
            "position-right"
        ],
        "onClick": {
            close: true
        },
        "navbar": {
            add: false
        }
    });
});

// function burgerToggle() {
//     const mmMenu = document.getElementById('mmMenu');
//     const burger = document.querySelector('.hamburger');
//     mmMenu.classList.contains('mm-menu_opened') ? burger.classList.add('is-active') : null
// }
//
// burgerToggle();

function fullScreenGallery() {
    const gallery = document.querySelector(".gallery--normal");
    const fullscreenGallery = document.querySelector(".gallery--fullscreen");
    const closeButton = document.querySelector(".gallery__button-close");

    function toggleFSgallery() {
            fullscreenGallery.classList.toggle("hidden");
            closeButton.classList.toggle('hidden');
        }
    gallery.addEventListener("click", function (ev) {
        document.body.style.overflow = "hidden";
        toggleFSgallery();
        $('.gallery--fullscreen').slick('slickGoTo', ev.target.parentNode.getAttribute('data-slick-index'), true)
    });

    closeButton.addEventListener("click", function () {
        document.body.style.overflow = "";
        toggleFSgallery();
    });

}
fullScreenGallery();
