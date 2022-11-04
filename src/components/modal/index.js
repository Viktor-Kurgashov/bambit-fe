import './style.scss';

const modal = {
  header: document.querySelector('.header'),
  body: document.querySelector('.header__nav'),
  burger: document.querySelector('.header__burger'),
  burgerActive: 'header__burger--opened',
  active: false,

  show() {
    this.burger.classList.add(this.burgerActive);
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    document.body.style.overflow = 'hidden';
    this.header.classList.add('header--modal');
    this.body.style.display = 'block';
    setTimeout(() => this.body.style.transform = 'translateX(0)');
    this.active = true;
  },

  hide() {
    this.burger.classList.remove(this.burgerActive);
    document.body.style.paddingRight = document.body.style.overflow = '';
    this.header.classList.remove('header--modal');
    this.body.style.display = this.body.style.transform = '';
    this.active = false;
  },

  clear() {
    if (!window.matchMedia('(max-width: 1023px)').matches) {
      modal.hide();
      window.removeEventListener('resize', modal.clear);
    }
  },

  init() {
    this.burger.addEventListener('click', () => {
      if (!this.active) {
        this.show();
        window.addEventListener('resize', this.clear);
      }
      else this.hide();
    });
  },
};

modal.init();