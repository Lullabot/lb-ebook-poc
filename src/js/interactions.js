const navWrap = document.querySelector('.navigation-wrapper');
const navBtn = document.querySelector('.navigation-btn');
navBtn.addEventListener('click', () => {
  navWrap.classList.toggle('hidden');
});
