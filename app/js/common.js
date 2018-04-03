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

function button() {
    var btn = document.querySelector('.button--gradient')
    btn.onmousemove = function (e) {
        var x = e.pageX - btn.offsetLeft
        var y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')
    }
}

button();

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

function burgerToggle() {
    const mmMenu = document.getElementById('mmMenu');
    const burger = document.querySelector('.hamburger');
    mmMenu.classList.contains('mm-menu_opened') ? burger.classList.add('is-active') : null
}

burgerToggle();

var sonlineWidgetOptions = {
    placeid: 4031
}
