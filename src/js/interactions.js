const navWrap = document.querySelector('.navigation-wrapper');
const navBtn = document.querySelector('.navigation-btn');
const hamburgerBtn = document.querySelector('.hamburger-icon');
const closeBtn = document.querySelector('.close-icon');
navBtn.addEventListener('click', () => {
  navWrap.classList.toggle('hidden');
  hamburgerBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
});
