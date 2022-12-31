// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
// // ===== end show menu ===== //

// // ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// // ===== end remove menu mobile ===== //

// // ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// // ===== end scroll sections active link ===== //

// // ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
// // ===== end change background header ===== //

// ===== PRODUCTS CAROUSEL ===== //
const productsSwiper = new Swiper('.products__container', {
	spaceBetween: 24,
	loop: true,
	grabCursor: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},

	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	}
});
// ===== end blog carousel ===== //

// ===== GALLERY ===== //
const gallerySwiper = new Swiper(".gallery__container", {
	spaceBetween: 0,
	loop: 'true',
	grabCursor: true,

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		568: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})
// ===== end gallery ===== //

// ===== DARK LIGHT THEME ===== //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
// ===== end dark light theme ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');

	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true// animation repeat //
})

sr.reveal(`.home__content, .quality__images, .find__img`, {origin: 'left'})
sr.reveal(`.quality__data, .find__data`, {origin: 'right'})
sr.reveal(`.fitur__card, .sponsor__img, .blog__card, .footer__content`, {interval: 100})
sr.reveal(`.section__title, .products__container, .footer__copy, .footer__note`)
// ===== end scroll reveal animation ===== //