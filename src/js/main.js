import {
    getSVGs,
    Loading
} from "./utilities/util";
import Tab from './libraries/Tab'
// active scrollBar window
const scrollBar = () => {
    const heigh = $(window).height();
    const isChange = window.innerWidth > 1024;
    if (isChange == true) {
        $(window).scroll(function() {
            if (heigh > 137) {
                $("header").addClass('sroll');
            } else {
                $("header").removeClass("sroll");
            }
        });
    }

}
const navMobile = () => {
    const btn = $(".navMobile");
    const nav = $(".navBar");
    if (btn) {
        $(btn).click(function(e) {
            e.preventDefault();
            $(btn).toggleClass('active');
            $(nav).toggleClass("active");
        });
    }
    const contentsMobile = document.querySelectorAll('[data_content--mobile]');
    const contentsPc = document.querySelectorAll('[data_content--pc]');
    const isChange = window.innerWidth < 1025;
    if (isChange == true) {
        contentsMobile.forEach((item) => {
            const valueContent = item.getAttribute('data_content--mobile');
            item.innerHTML = valueContent;
        })
    } else {
        contentsPc.forEach((item) => {
            const valueContent = item.getAttribute('data_content--pc');
            item.innerHTML = valueContent;
        })
    }
}
const changeHeightFooter = () => {
        const isChange = window.innerWidth < 768;
        if (isChange == true) {
            $(window).resize(function() {
                const height = $(".footer__inner").height();
                console.log(height);
                $(".footer__wrapper").css('height', height + 150);
            });
        }
    }
    // swiper home page video
const swiperForBanner = () => {
    var swiper = new Swiper(".hot-news--banner .swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        simulateTouch: false,
    });
};

//Swiper Hot Event
const swiperHotEvent = () => {
    var swiper = new Swiper(".home__stuff .swiper-container", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".home__stuff .swiper-button-next",
            prevEl: ".home__stuff .swiper-button-prev",
        },
    });
};

//Swiper New Member
const swiperNewMember = () => {
    var swiper = new Swiper(".home__new-member .swiper-container", {
        slidesPerView: 3,
        simulateTouch: false,
        slidesPerGroup: 1,
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: true,
                centeredSlidesBounds: true
            }
        },
        on: {
            init: function() {
                setTimeout(() => {
                    const temp = $(".home__new-member .swiper-slide-active");
                    const width = temp.width();
                    $(".home__new-member--info__wrapper").css("width", `${width + 40}`)
                }, 1000);
            },
        },
        navigation: {
            nextEl: ".fake-swiper-button .swiper-button-next",
            prevEl: ".fake-swiper-button .swiper-button-prev",
        },
    });
    swiper.on("slideChange", function() {
        const data = $(".home__new-member .swiper-slide-active");
        const width = data.width();
        $(".home__new-member--info__wrapper").width(width);
        const temp = data.find(".model--desc");
        $(".home__new-member--info .home__new-member--info__wrapper").html(
            temp.html()
        );
    });
};

//swiper happy birthday
const swiperHappyBirthday = () => {
	var swiper = new Swiper(".home__happy-birthday .swiper-container", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 45,
			},
		},
		autoplay: {
		    delay: 2000,
		},
		navigation: {
			nextEl: ".home__stuff .swiper-button-next",
			prevEl: ".home__stuff .swiper-button-prev",
		},
	});
};

//swiper member homepage
const swiperMemberHome = () => {
	var swiper = new Swiper(".home__member--swiper .swiper-container", {
		slidesPerView: 5,
		slidesPerGroup: 1,
		loop: true,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
			}
		},
		autoplay: {
			delay: 1000,
		},
		simulateTouch: false,
		navigation: {
			nextEl: ".home__member--swiper .swiper-button-next",
			prevEl: ".home__member--swiper .swiper-button-prev",
		},
	});
};
const swiperNews = () => {
    const swiper = new Swiper(".block__HREC.right .swiper-container", {
        slidesPerView: 1,
        slidesPerColumn: 4,
        slidesPerColumnFill: 'row',
        speed: 800,
        navigation: {
            nextEl: ".block__HREC.right .swiper-button-next",
            prevEl: ".block__HREC.right .swiper-button-prev",
        },
    });
    const swipery = new Swiper(".block__HREC.left .swiper-container", {
        slidesPerView: 1,
        slidesPerColumn: 4,
        slidesPerColumnFill: 'row',
        speed: 800,
        navigation: {
            nextEl: ".block__HREC.left .swiper-button-next",
            prevEl: ".block__HREC.left .swiper-button-prev",
        },
    });
};

// MAIN BANNER WEBSITE
const initMainBanner = () => {
    const namePage = document.querySelector("#js-page-verify");
    const mainBanner = document.querySelector(".MainSlider__Banners");
    if (
        (namePage.className == "index-page") |
        (namePage.className == "introduce-page")
    ) {
        mainBanner.classList.add("isIndex");
    }
    return new Swiper(".MainSlider__Banners .swiper-container", {
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".MainSlider__Banners .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });
};

//get title breadcrum
const getBreadcrumbTitle = () => {
    let title = $("#breadcrumb-wrapper ul li").eq(1).text();
    $("#breadcrumb-wrapper ul li").last().addClass("active");
    $(".pagesBanner__title h1").text(title);
};

const swipeIntroducePurpose = () => {
    var swiper = new Swiper(".introduce__purpose__wrapper .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 60,
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
    });
};
const sniperEvent = () => {
    const swiper = new Swiper('.eventBottom__HREC .swiper-container', {
        slidesPerView: 2,
        slidesPerColumn: 4,
        slidesPerColumnFill: 'row',
        speed: 800,
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
                slidesPerColumn: 4,
            },
        },
        navigation: {
            nextEl: '.eventBottom__HREC .swiper-button-next',
            prevEl: '.eventBottom__HREC .swiper-button-prev',
        },
    });
}
const swiperNewAdc = () => {
    const swiperL = new Swiper(".nSlider__col.left .swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        simulateTouch: false,
    });
};
const swiperNewAdcR = () => {
    const swiperR = new Swiper(".nSlider__col.right .swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        simulateTouch: false,
    });
    const swiperT = new Swiper(".eventTop__slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        simulateTouch: false,
    });
    const swiperB = new Swiper(".eventBot__slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        simulateTouch: false,
    });
    const swiperD = new Swiper(".detail__Adc .swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        simulateTouch: false,
    });
};
const showInputSearch = () => {
    const btn = document.querySelector(".navSearch__btn");
    const navSearch__input = document.querySelector(".navSearch__input");
    if (btn) {
        btn.addEventListener("click", (e) => {
            btn.classList.toggle("active");
            navSearch__input.classList.toggle("show");
        });
    }
};

export const swiperExecutiveCommittee = () => {
	var swiper = new Swiper(".tab-bch .swiper-container", {
		slidesPerView: 2,
		slidesPerColumn: 2,
		slidesPerColumnFill: "row",
		spaceBetween: 20,
		// breakpoints: {
		// 	// 300: {
		// 	// 	slidesPerView: 1,
		// 	// },
		// 	// 600: {
		// 	// 	slidesPerView: 2,
		// 	// },
		// 	// 1024: {
		// 	// 	slidesPerView: 3,
		// 	// }
		// },
		navigation: {
			nextEl: ".tab-bch .swiper-button-next",
			prevEl: ".tab-bch .swiper-button-prev",
		},
	});
	var swiper = new Swiper(".tab-bkt .swiper-container", {
		slidesPerView: 2,
		slidesPerColumn: 2,
		slidesPerColumnFill: "row",
		spaceBetween: 20,
		// breakpoints: {
		// 	// 300: {
		// 	// 	slidesPerView: 1,
		// 	// },
		// 	// 600: {
		// 	// 	slidesPerView: 2,
		// 	// },
		// 	// 1024: {
		// 	// 	slidesPerView: 3,
		// 	// }
		// },
		navigation: {
			nextEl: ".tab-bkt .swiper-button-next",
			prevEl: ".tab-bkt .swiper-button-prev",
		},
	});
};

//render info in intro page
const renderInfo = () => {
    document
        .querySelectorAll(".executive-committee-swiper__wrapper .swiper-slide")
        .forEach((item) => {
            item.addEventListener("click", () => {
                const temp = item.querySelector("a");
                $(".executive-committee-active").html(temp.innerHTML);
            });
        });
};
// swiper partner
const swiperPartner = () => {
    if (document.querySelector(".place-to-get-partner")) {
        document
            .querySelectorAll(".place-to-get-partner img")
            .forEach((item) => {});
    }
};
const copyDataByAttr = () => {
    const items__paste = document.querySelectorAll('[data-paste]');
    const items__copy = document.querySelectorAll('[data-copy]');

    items__paste.forEach((itemPaste) => {
        items__copy.forEach((itemCopy) => {
            var data = itemCopy.getAttribute('data-copy');
            if (data != null && data == itemPaste.getAttribute('data-paste')) {
                itemPaste.textContent = itemCopy.textContent;
            }
        });
    });
};
// ACTIVE LANGGUAGE
const activeLanguage = () => {
    const htmlLang = document.querySelector('html').getAttribute('lang');
    const items__language = document.querySelectorAll(
        '.header__languages .languages__item'
    );
    items__language.forEach((item) => {
        if (item.getAttribute('data-language') == htmlLang) {
            item.classList.add('active');
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    getSVGs();
    Loading();
    scrollBar();
    navMobile();
    changeHeightFooter();
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
    swiperPartner();
    renderInfo();
    copyDataByAttr();
    // ACTIVE LANGGUAGE
    activeLanguage();
    //tab
    const ExecutiveCommittee = new Tab(".executive-committee .tab-container");
});