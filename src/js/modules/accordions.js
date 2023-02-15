const accordions = () => {
    const tabs = document.querySelectorAll('.header__mobile-accordion'),
          tabsContent = document.querySelectorAll('.header__mobile-accordion__content')

    tabsContent.forEach(cont => {
        cont.classList.add('hide');
    });

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            tabsContent[i].classList.toggle('show');
            tabs[i].classList.toggle('header__mobile-accordion--active');
        });
    }
};

export default accordions;