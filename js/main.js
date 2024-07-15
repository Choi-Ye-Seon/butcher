// PC - GNB, LNB
const gnbEl = document.querySelector('header .inner ul.gnb');
const lnbEl = document.querySelector('nav.lnb');

gnbEl.addEventListener('mouseenter', function() {
    showNav();
});
gnbEl.addEventListener('mouseleave', function() {
    hideNav();
});

lnbEl.addEventListener('mouseenter', function() {
    showNav();
});

lnbEl.addEventListener('mouseleave', function() {
    hideNav();
});

function showNav() {
    lnbEl.classList.add('show');
}

function hideNav() {
    lnbEl.classList.remove('show');

}

// 태블릿, 모바일 - 슬라이드 메뉴 버튼
const openMenuEl = document.querySelector('header .open-menu');
const headerEl = document.querySelector('header');

openMenuEl.addEventListener('click', function() {
    if (openMenuEl.classList.contains('on')) {
        openMenuEl.classList.remove('on');
        headerEl.classList.remove('menuing');
        playScroll();
    } else {
        openMenuEl.classList.add('on');
        headerEl.classList.add('menuing');
        stopScroll();
    }
});


// 태블릿, 모바일 - 슬라이드 메뉴 lnb
const slideGnbEls = document.querySelectorAll('.slide-menu ul.gnb li.main-menu');

slideGnbEls.forEach(function(slideGnbEl) {
    slideGnbEl.addEventListener('click', function() {
        const isShow = slideGnbEl.classList.contains('show');

        slideGnbEls.forEach(function(el) {
            el.classList.remove('show');
        });

        if (!isShow) {
            slideGnbEl.classList.add('show');
        }
    });
});


// 태블릿, 모바일 - 슬라이드 메뉴 오픈 시, 스크롤 방지
function playScroll() {
    document.documentElement.classList.remove('fixed');
}

function stopScroll() {
    document.documentElement.classList.add('fixed');
}

// ScrollMagic
const spyEls = document.querySelectorAll('section .scroll-spy');
spyEls.forEach(function(spyEl) {
    const scene = new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .on('enter', function() {
            spyEl.classList.add('show');
            startCounting(spyEl)
        })
        .on('leave', function() {
            spyEl.classList.remove('show');
        })
        .addTo(new ScrollMagic.Controller());
});


// Products Swiper
new Swiper('.products .swiper', {
    slidesPerView: 1,
    grapCursor: true,
    spaceBetween: 40,
    breakpoints: {
        412: {
            slidesPerView: "auto"
        }
    }
});

// Choose Count
function startCounting(spyEl) {
    if (spyEl.querySelector('#number1')) {
        startCounter('#number1', 1, 10, 40);
    }
    if (spyEl.querySelector('#number2')) {
        startCounter('#number2', 1, 97, 10);
    }
    if (spyEl.querySelector('#number3')) {
        startCounter('#number3', 1, 25, 40);
    }
    if (spyEl.querySelector('#number4')) {
        startCounter('#number4', 1, 104, 10);
    }
}

function startCounter(selector, start, end, interval) {
    let count = start;
    const counterEl = document.querySelector(selector);

    const counter = setInterval(function() {
        count++;
        counterEl.innerHTML = count;
        if (count >= end) {
            clearInterval(counter);
        }
    }, interval);

}


// Branches Swiper
new Swiper('.branches .swiper', {
    slidesPerView: 1,
    grapCursor: true,
    spaceBetween: 40,
    breakpoints: {
        412: {
            slidesPerView: "auto",

        }
    }
});

// News Swiper
new Swiper('.news .swiper', {
    slidesPerView: 1,
    grapCursor: true,
    spaceBetween: 40,
    breakpoints: {
        412: {
            slidesPerView: "auto",
        }
    }
});

//  Alert 
function notice() {
    alert("현재 준비 중 입니다. 정식 버전을 기대해 주세요!")
}

// Copyright 년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();