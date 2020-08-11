import { getSVGs, Loading } from "./utilities/util";


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

document.addEventListener("DOMContentLoaded", () => {
	getSVGs();
	Loading();
	//Swiper for banner
	swiperForBanner();
	//swiper for hotvent homepage
	swiperHotEvent();
	// Swiper for new member
	swiperNewMember();
	//Swiper happy birthday
	swiperHappyBirthday();
	//Swiper home member
	swiperMemberHome()
});
