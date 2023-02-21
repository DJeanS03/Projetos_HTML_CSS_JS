const navMenu = document.querySelector('#nav_menu'),
      navToggle = document.querySelector('#nav_toggle'),
      navClose = document.querySelector('#nav_close')
const navLink = document.querySelectorAll('.nav_link')

// open and close menu
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show_menu')
})
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
})
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
})


