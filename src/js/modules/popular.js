const popular = () => {
    const hearts = document.querySelectorAll('.popular__item-like');

    hearts.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
};

export default popular;