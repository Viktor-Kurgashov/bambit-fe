import './style.scss';

const accordion = {
  current: null,

  toggle(event) {
    let elem = event.target.closest('.item');

    if (elem.classList.contains('item--active')) {
      elem.classList.remove('item--active');
      this.current = null;
    }
    else {
      elem.classList.add('item--active');
      if (this.current) this.current.classList.remove('item--active');
      this.current = elem;
    }
  },

  init() {
    for (let itemSwitch of document.querySelectorAll('.item__switch')) {
      itemSwitch.addEventListener('click', (e) => this.toggle(e));
    }
  },
};

accordion.init();