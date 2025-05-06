(function() {
    'use strict';

    const button = document.querySelector('button');
    const buttonBg = document.querySelector('#toggle-bg');
    const slider = document.querySelector('#toggle-circle');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner img');
    let mode = 'light';

    button.addEventListener('mouseover', function() {
        if (mode === 'light') {
            slider.src = '../../images/light_circle_hover.svg';
        } else {
            slider.src = '../../images/dark_circle_hover.svg';
        }
    })

    button.addEventListener('mouseout', function() {
        if (mode === 'light') {
            slider.src = '../../images/light_circle_default.svg';
        } else {
            slider.src = '../../images/dark_circle_default.svg';
        }
    })

    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.style.color = 'white';
            body.style.backgroundColor = '#2D2D2E';
            banner.src = '../../images/banner_dark.jpg';
            buttonBg.src = '../../images/dark_toggle_bg.svg';
            slider.src = '../../images/dark_circle_hover.svg';
            slider.className = 'left';

            mode = 'dark';
        } else {
            body.style.color = 'black';
            body.style.backgroundColor = '#FFFEFB';
            banner.src = '../../images/banner_light.jpg';
            buttonBg.src = '../../images/light_toggle_bg.svg';
            slider.src = '../../images/light_circle_hover.svg';
            slider.className = 'right';

            mode = 'light'
        }
    })
})()