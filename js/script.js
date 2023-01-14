// hamburger menu 
const header = document.querySelector('.header');
const hamburgerButton = document.querySelector('.header__hamburger-button');

hamburgerButton.addEventListener('click', function() {
  hamburgerButton.classList.toggle('open');
  header.classList.toggle('hamburger');
})
