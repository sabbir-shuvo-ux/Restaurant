// navbar
window.onscroll = function() {navbar()};
function navbar() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.querySelector(".sh_navbar_main").style.boxShadow = "0px 0px 3px 0px #ddd";
		document.querySelector('.backToHome').style.bottom = '20px';
	}else{
		document.querySelector(".sh_navbar_main").style.boxShadow = "none";
		document.querySelector('.backToHome').style.bottom = '-100%';
	};
};

// preloader

function preloader(){
	document.querySelector('.preloader').style.display = 'none';
};

//dark mode

var dark_mode = document.querySelector('.bar');
dark_mode.addEventListener('click', function () {
	//body
	document.querySelector('body').classList.toggle('body_dark');

	// all h1
	const h1 = document.querySelectorAll("h1");
	for (let i = 0; i < h1.length; i++) {
  	h1[i].classList.toggle('h1_dark');
	};

	//all p
	const p = document.querySelectorAll("p");
	for (let i = 0; i < p.length; i++) {
  	p[i].classList.toggle('p_dark');
	};

	// nav
	const navbar_dark = document.querySelector('.sh_navbar_main');
	navbar_dark.classList.toggle('nav_dark');

	// menu iteam
	const menu_item = document.querySelectorAll('.nav-link');
	for (let i = 0; i < menu_item.length; i++) {
		menu_item[i].classList.toggle('menu_item_dark');
	};

	// logo
	const sh_logo = document.querySelector('.sh_logo');
	sh_logo.classList.toggle('menu_item_dark');

	// footer iteam
	const footer_item = document.querySelectorAll('.footer_item h4');
	for (let i = 0; i < footer_item.length; i++) {
		footer_item[i].classList.toggle('menu_item_dark');
	};

	// footer icon
	const footer_main_Icon = document.querySelectorAll('.footer_main i');
	for (let i = 0; i < footer_main_Icon.length; i++) {
		footer_main_Icon[i].classList.toggle('menu_item_dark');
	};

	// special_menu
	const special_menu = document.querySelectorAll('.special_menu');
	for (let i = 0; i < special_menu.length; i++) {
		special_menu[i].style.background = 'transparent';
	};
})