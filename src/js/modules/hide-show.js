const hideShow = (item, button) => {
    const hideItem = document.querySelector(item),
          activeBtn = document.querySelector(button);

    activeBtn.addEventListener('click', () => {
        hideItem.classList.add('show', 'fade');
        activeBtn.classList.add('hide');
    });
};

export default hideShow;