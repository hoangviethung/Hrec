import {
    getSVGs,
    Loading
} from "./utilities/util";


const scrollBar = () => {
        const heigh = $(window).height();
        $(window).scroll(function() {
            if (heigh > 137) {
                $("header").addClass('sroll');
            } else {
                $("header").removeClass("sroll");
            }
        });
    }
    // swiper home page video
const swiperForBanner = () => {
    var swiper = new Swiper('.hot-news--banner .swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        simulateTouch: false,
    });
};

//Swiper Hot Event
const swiperHotEvent = () => {
    var swiper = new Swiper('.home__stuff--event__wrapper .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 45,
        slidesPerGroup: 3,

        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 45
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 45
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 45
            }

        },
        navigation: {
            nextEl: '.home__stuff--event__wrapper .swiper-button-next',
            prevEl: '.home__stuff--event__wrapper .swiper-button-prev',
        },
    });
}

//Swiper New Member
const swiperNewMember = () => {
    var swiper = new Swiper('.home__new-member .swiper-container', {
        slidesPerView: 3,
        simulateTouch: 15,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerGroup: 1,
        breakpoints: {
            // 300: {
            // 	slidesPerView: 1,
            // },
            // 600: {
            // 	slidesPerView: 2,
            // },
            // 1024: {
            // 	slidesPerView: 3,
            // }
        },
        navigation: {
            nextEl: '.fake-swiper-button .swiper-button-next',
            prevEl: '.fake-swiper-button .swiper-button-prev',
        },
    });
}

//swiper happy birthday
const swiperHappyBirthday = () => {
    var swiper = new Swiper('.home__happy-birthday .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 45
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 45
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 45
            }
        },
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: '.home__stuff .swiper-button-next',
            prevEl: '.home__stuff .swiper-button-prev',
        },
    });
}

//swiper member homepage
const swiperMemberHome = () => {
    var swiper = new Swiper('.home__member--swiper .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        breakpoints: {
            // 300: {
            // 	slidesPerView: 1,
            // 	spaceBetween: 45
            // },
            // 600: {
            // 	slidesPerView: 2,
            // 	spaceBetween: 45
            // },
            // 1024: {
            // 	slidesPerView: 3,
            // 	spaceBetween: 45
            // }
        },
        autoplay: {
            delay: 1000,
        },
        simulateTouch: false,
        navigation: {
            nextEl: '.home__member--swiper .swiper-button-next',
            prevEl: '.home__member--swiper .swiper-button-prev',
        },
    });
}
const swiperNews = () => {
    const swiper = new Swiper('.block__HREC.right .swiper-container', {
        navigation: {
            nextEl: '.block__HREC.right .swiper-button-next',
            prevEl: '.block__HREC.right .swiper-button-prev',
        },
    });
    const swipery = new Swiper('.block__HREC.left .swiper-container', {
        navigation: {
            nextEl: '.block__HREC.left .swiper-button-next',
            prevEl: '.block__HREC.left .swiper-button-prev',
        },
    });
}

// MAIN BANNER WEBSITE
const initMainBanner = () => {
    const namePage = document.querySelector('#js-page-verify');
    const mainBanner = document.querySelector('.MainSlider__Banners');
    if (namePage.className == 'index-page') {
        mainBanner.classList.add('isIndex');
        return new Swiper('.MainSlider__Banners .swiper-container', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.MainSlider__Banners .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
    }
};

//get title breadcrum
const getBreadcrumbTitle = () => {
    let title = $('#breadcrumb-wrapper ul li').eq(1).text();
    $('#breadcrumb-wrapper ul li').last().addClass('active');
    $('.pagesBanner__title h1').text(title);
};

const swipeIntroducePurpose = () => {
    var swiper = new Swiper('.introduce__purpose__wrapper .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 60,
        slidesPerGroup: 1,
        breakpoints: {
            // 300: {
            // 	slidesPerView: 1,
            // 	spaceBetween: 45
            // },
            // 600: {
            // 	slidesPerView: 2,
            // 	spaceBetween: 45
            // },
            // 1024: {
            // 	slidesPerView: 3,
            // 	spaceBetween: 45
            // }
        },
    });
}
const sniperEvent = () => {
    const swiper = new Swiper('.eventBottom__HREC .swiper-container', {
        slidesPerView: 2,
        slidesPerColumn: 4,
        slidesPerColumnFill: 'row',
        speed: 800,
        navigation: {
            nextEl: '.eventBottom__HREC .swiper-button-next',
            prevEl: '.eventBottom__HREC .swiper-button-prev',
        },
    });
}
const swiperNewAdc = () => {
    const swiperL = new Swiper('.nSlider__col.left .swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        simulateTouch: false,
    });

}
const swiperNewAdcR = () => {
    const swiperR = new Swiper('.nSlider__col.right .swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        simulateTouch: false,
    });
    const swiperT = new Swiper('.eventTop__slider .swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        simulateTouch: false,
    });
    const swiperB = new Swiper('.eventBot__slider .swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        simulateTouch: false,
    });
    const swiperD = new Swiper('.detail__Adc .swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        simulateTouch: false,
    });

}
const showInputSearch = () => {
    const btn = document.querySelector('.navSearch__btn');
    const navSearch__input = document.querySelector('.navSearch__input')
    if (btn) {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('active');
            navSearch__input.classList.toggle('show');
        })
    }
}
document.addEventListener("DOMContentLoaded", () => {
    getSVGs();
    Loading();
    scrollBar();
    //Swiper for banner
    swiperForBanner();
    //swiper for hotvent homepage
    swiperHotEvent();
    // Swiper for new member
    swiperNewMember();
    //Swiper happy birthday
    swiperHappyBirthday();
    //Swiper home member
    swiperMemberHome();
    //Main banner
    initMainBanner();
    //get title breadcrum
    getBreadcrumbTitle();
    //swiper introduce struct
    swipeIntroducePurpose();
    swiperNews();
    sniperEvent();
    swiperNewAdc();
    swiperNewAdcR();
    showInputSearch();
});