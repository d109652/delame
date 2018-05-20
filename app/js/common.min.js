$('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    prevArrow: $('.slider__arrow--prev'),
    nextArrow: $('.slider__arrow--next'),
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
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<i class="fas fa-angle-left"></i>',
        nextArrow: '<i class="fas fa-angle-right"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
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




jQuery(document).ready(function( $ ) {
    $("#mmMenu").mmenu({
        "slidingSubmenus": false,
        "extensions": [
            "pagedim-black",
            "position-right"
        ],
        "navbar" :{
            "add": false,
        },
        "onClick": {
            "close": true,
        }
    });
});

function burgerToggle() {
    const mmMenu = document.getElementById('mmMenu');
    const burger = document.querySelector('.hamburger');

    mmMenu.classList.contains('mm-menu_opened') ? burger.classList.add('is-active') : null
}

burgerToggle();


function fullScreenGallery() {
    const images = document.querySelectorAll(".gallery_img-thumb");
    const fullscreenGallery = document.querySelector(".gallery--fullscreen");
    const closeButton = document.querySelector(".gallery__button-close");

    function toggleFSgallery() {
            fullscreenGallery.classList.toggle("hidden");
            closeButton.classList.toggle('hidden');
        }
    for(let img of images) {
        img.addEventListener("click", function (ev) {
            document.body.style.overflow = "hidden";
            toggleFSgallery();
            $('.gallery--fullscreen').slick('slickGoTo', ev.target.parentNode.getAttribute('data-slick-index'), true)
        });
    }

    closeButton.addEventListener("click", function () {
        document.body.style.overflow = "";
        toggleFSgallery();
    });

}
fullScreenGallery();

function showMap() {
    const map = document.querySelector('.js-map');
    const bigMap ='<a href="https://yandex.ru/maps/-/CBqFz2TutB" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A5898ff99bd04b9bc7b80969c478fac587bab936019d65016f6974e9f4cffc417&amp;width=495&amp;height=450&amp;lang=ru_RU" alt="" style="border: 0;" /></a>';
    const smallMap = '<a href="https://yandex.ru/maps/-/CBqFz2TutB" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A5898ff99bd04b9bc7b80969c478fac587bab936019d65016f6974e9f4cffc417&amp;width=300&amp;height=300&amp;lang=ru_RU" alt="" style="border: 0;" /></a>';

    if (window.matchMedia("(min-width: 769px)").matches) {
        /* the viewport is at least 768 pixels wide */
        let div = document.createElement('div');
        div.innerHTML = bigMap;
        map.appendChild(div);
    } else {
        /* the viewport is less than 768 pixels wide */
        let div = document.createElement('div');
        div.innerHTML = smallMap;
        map.appendChild(div);
    }
}
showMap();