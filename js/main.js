//* ====== show menu ===== *//
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	//* validate that variable exitst *//
    if (toggle && nav){
    	toggle.addEventListener('click', ()=>{
    		//* we add the show-menu class to the div tag with the nav_menu class*//
            nav.classList.toggle('show-menu')
    	})
    }

}

showMenu('nav-toggle', 'nav-menu')


//* ====== scroll section active link ===== *//
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	// when we click on each nav_link , we remove the show-menu class//
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//* ====== show menu ===== *//
const section = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset

	section.forEach (current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
        sectionid = currentAtribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

//* ====== change background header ===== *//
function scrollHeader(){
	const nav = document.getElementById('header')

	//when the scroll is greater than 200 viewport height, add the scroll-header class to the header //
	if(this.scrollY >= 200) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//* ====== show scroll top ===== *//
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top')

	//when the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll-top //
	if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
	else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


//* ====== drak light theme ===== *//
const themeButton = document.getElementById('theme-button')
const drakTheme = 'drak-theme'
const iconTheme = 'bx-toggle-right'

//* ======previous selected ===== *//
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//* ====== we obtain the current theme that thw interance has by validating the drak theme class===== *//
const getCurrentTheme = () => document.body.classList.contains(drakTheme) ? 'drak' : 'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

//* ====== we validate if the user previously chosse a topic ===== *//
if (selectedTheme){
	//* ====== if the validation if full, we ass what the issue  was a to know if we activated or deactivated the drak ===== *//
 	document.body.classList[selectedTheme == 'drak' ? 'add' : 'remove'](drakTheme)
    themeButton.classList[selectedIcon == 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

//* ====== actived ===== *//
themeButton.addEventListener('click', () => {
	//* ====== remove icon theme ===== *//
	document.body.classList.toggle(drakTheme)
    themeButton.classList.toggle(iconTheme)
    //* ====== save the theme current icon ===== *//
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentTheme())
})


//* ====== efek ngetik ===== *//
const txtElement = ['Hai........', 'Saya Dwi Pasha', ' Seorang Manusia', 'Bukan Alien', 'Bukan Wibu', 'Hanya Nolep',];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';
  
(function ngetik(){

	if (count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;
    
    if(words.length == currentTxt.length){
    	count++;
    	txtIndex = 0;
    }

	setTimeout(ngetik, 500);

})();