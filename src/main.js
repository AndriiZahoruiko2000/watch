console.log('test');

const btn_open = document.querySelector('.open_mobile-menu');
const menu = document.querySelector('.mobile_menu');
const btn_close = document.querySelector('.close_btn');

btn_open.addEventListener('click', () => {
  menu.classList.add('is-open');
});

btn_close.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
