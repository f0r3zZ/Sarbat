class Bar {
  constructor(selector, percent) {
    this.selector = selector;
    this.percent = percent;
  }

  selectItem() {
    return document.querySelector(this.selector);
  }

  generateBar() {
      new ProgressBar.Circle(this.selector, {
      strokeWidth: 12,
      easing: 'easeInOut',
      duration: 1400,
      color: '#fff',
      trailColor: '#1e1e1e'
    }).animate(this.percent / 100)
  }
}

const skills = document.getElementsByClassName('skill__circle');

new Bar(skills[0], 70).generateBar()
new Bar(skills[1], 70).generateBar()
new Bar(skills[2], 70).generateBar()
new Bar(skills[3], 70).generateBar()

const reviewSlider = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.reviews-prev',
    prevEl: '.reviews-next'
  }
});

if (window.innerWidth <= 450) {
  const servicesSlider = new Swiper('#services')
}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (this.scrollY >= header.clientHeight / 2) {
    header.classList.add('header_active');
    header.classList.add('header_scrolled');
  } else if (false) {

  }
  else {
    header.classList.remove('header_active');
    header.classList.remove('header_scrolled');
  }
})


const nav = document.querySelector('nav'),
      burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  document.body.classList.toggle('lock');
  if (header.classList.contains('header_scrolled')) {
    nav.classList.toggle('menu_active');
  } else {
    nav.classList.toggle('menu_active');
    header.classList.toggle('header_active');
  }
});

nav.addEventListener('click', event => {
  if (event.target.classList.contains('header__link')) {
    nav.classList.remove('menu_active');
    burger.classList.remove('burger_active');
    document.body.classList.remove('lock');
  }
})