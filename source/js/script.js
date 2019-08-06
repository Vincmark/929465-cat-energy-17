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


var catToggleLinkBefore = document.querySelector('.example__cat-btn--before');
var catToggleLinkAfter = document.querySelector('.example__cat-btn--after');
var catImageHolder = document.querySelector('.example__cat');
var catToggleSlider = document.querySelector('.example__slider-central');

if (catToggleLinkBefore!==null) {
    catToggleLinkBefore.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (catImageHolder.classList.contains('example__cat--after')) {
            catImageHolder.classList.remove('example__cat--after');
            catImageHolder.classList.add('example__cat--before');
            catToggleSlider.value = '1';
        }
    });
}

if (catToggleLinkAfter!==null) {
    catToggleLinkAfter.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (catImageHolder.classList.contains('example__cat--before')) {
            catImageHolder.classList.remove('example__cat--before');
            catImageHolder.classList.add('example__cat--after');
            catToggleSlider.value = '2';
        }
    });
}

if (catToggleSlider!==null) {
    catToggleSlider.addEventListener('click', function (evt) {
        evt.preventDefault();
        console.log('slider alive');
        // console.log(catToggleSlider.value);
        if (catToggleSlider.value === '1') {
            if (catImageHolder.classList.contains('example__cat--after')) {
                catImageHolder.classList.remove('example__cat--after');
                catImageHolder.classList.add('example__cat--before');
            }
        } else if (catToggleSlider.value === '2') {
            if (catImageHolder.classList.contains('example__cat--before')) {
                catImageHolder.classList.remove('example__cat--before');
                catImageHolder.classList.add('example__cat--after');
            }
        }
    });
}


// Form validation
var submitButton = document.querySelector('.form__submit');
var form = document.querySelector('.form');

var catName = document.getElementById('cat-name');
var weight = document.getElementById('weight');
var email = document.getElementById('email');
var phone = document.getElementById('phone');


if (submitButton!==null) {
    submitButton.addEventListener('click', function (evt) {
        evt.preventDefault();

        var validation = true;
        var errorMsg = 'Проверьте правильность заполнения:\n';

        // Name
        var catNameStr = catName.value;
        catNameStr.trim();
        catName.classList.remove('form__input-text--error');
        if (catNameStr.length === 0) {
            validation = false;
            catName.classList.add('form__input-text--error');
            errorMsg += '- Имя кота должно быть заполнено\n';

        }

        // Weight
        weight.classList.remove('form__input-text--error');
        var catWeight = weight.value;
        catWeight.trim();
        if ((catWeight.length === 0 ) || (isNaN(Number(catWeight)))) {
            validation = false;
            weight.classList.add('form__input-text--error');
            errorMsg += '- Вес кота должен быть заполнен\n';

        }

        // Email
        var emailStr = email.value;
        emailStr.trim();
        email.classList.remove('form__input-email--error');
        if ((emailStr.length === 0) || (!isEmail(emailStr))) {
            validation = false;
            email.classList.add('form__input-email--error');
            errorMsg += '- Емейл должен быть правильно заполнен\n';
        }


        //Phone
        var phoneStr = phone.value;
        phoneStr.trim();
        phone.classList.remove('form__input-tel--error');
        if ((phoneStr.length === 0)||(!isPhone(phoneStr))) {
            validation = false;
            phone.classList.add('form__input-tel--error');
            errorMsg += '- Телефон должен быть правильно заполнен\n';
        }

        if (validation) {
            //form.submit();
        } else {
            alert(errorMsg);
        }
    });
}

var isEmail = function(eml) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(eml);
};

var isPhone = function(tel) {
    var re = /((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    return re.test(tel);
};
