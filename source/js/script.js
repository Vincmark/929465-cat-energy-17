var menuToggleButton = document.querySelector('.nav__toggle');

if (menuToggleButton!==null) {
    menuToggleButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (menuToggleButton.classList.contains('nav__toggle--open')){
            menuToggleButton.classList.remove('nav__toggle--open');
            menuToggleButton.classList.add('nav__toggle--close');
        } else {
            menuToggleButton.classList.add('nav__toggle--open');
            menuToggleButton.classList.remove('nav__toggle--close');
        }
    });
}