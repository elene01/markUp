const cartItem = document.querySelector('header .cartitems')
const background = document.querySelector('.background')
const hamburger = document.querySelector('.header  .hamburger')
const menu = document.querySelectorAll('.hamb_menu')
const cart = document.querySelector('header .cart svg')

cart.addEventListener('click', () => {
  cartItem.classList.toggle('active')
  background.classList.toggle('activeBackground')
})

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  menu.classList.toggle('active')
})
