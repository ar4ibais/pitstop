const headerBtn = () => {
    const headerBtn = document.querySelector('.header__info-btn'),
          headerWrapper = document.querySelector('.header__mobile-wrapper'),
          headerCloseBtn = document.querySelector('.header__mobile-top__close'),
          header = document.querySelector('.header');

    headerBtn.addEventListener('click', () => {
        headerWrapper.classList.add('header__mobile-wrapper--active');
        header.classList.add('hide');
        header.classList.remove('show-block');
    });

    headerCloseBtn.addEventListener('click', () => {
        headerWrapper.classList.remove('header__mobile-wrapper--active');
        header.classList.add('show-block');
        header.classList.remove('hide');
    });
};

export default headerBtn;