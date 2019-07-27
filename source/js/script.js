var menuToggleButton = document.querySelector('.header__nav-toggle');
var menuMobileBlock = document.querySelector('.nav__wrapper');


if (menuToggleButton!==null) {
    menuToggleButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (menuToggleButton.classList.contains('header__nav-toggle--open')){
            menuToggleButton.classList.remove('header__nav-toggle--open');
            menuToggleButton.classList.add('header__nav-toggle--close');
        } else {
            menuToggleButton.classList.add('header__nav-toggle--open');
            menuToggleButton.classList.remove('header__nav-toggle--close');
        }
        menuMobileBlock.classList.toggle('nav__wrapper--active');
    });
}


var catToggleLinkBefore = document.querySelector('.live-example__cat-btn--before');
var catToggleLinkAfter = document.querySelector('.live-example__cat-btn--after');
var catImageHolder = document.querySelector('.live-example__cat');
var catToggleCheckbox = document.querySelector('.live-example__slider-central');

if (catToggleLinkBefore!==null) {
    catToggleLinkBefore.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (catImageHolder.classList.contains('live-example__cat--after')) {
            catImageHolder.classList.remove('live-example__cat--after');
            catImageHolder.classList.add('live-example__cat--before');
        }
    });
}

if (catToggleLinkAfter!==null) {
    catToggleLinkAfter.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (catImageHolder.classList.contains('live-example__cat--before')) {
            catImageHolder.classList.remove('live-example__cat--before');
            catImageHolder.classList.add('live-example__cat--after');
        }
    });
}

if (catToggleCheckbox!==null) {
    catToggleCheckbox.addEventListener('CheckboxStateChange', function (evt) {
        evt.preventDefault();
        if (catToggleCheckbox.checked) {
            alert('checked');
            // catImageHolder.classList.remove('live-example__cat--before');
            // catImageHolder.classList.add('live-example__cat--after');
            // catToggleCheckbox.checked = false;
        } else {
            alert('unchecked');
            // catImageHolder.classList.remove('live-example__cat--after');
            // catImageHolder.classList.add('live-example__cat--before');
            // catToggleCheckbox.checked = true;
        }
    });
}