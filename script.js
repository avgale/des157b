(function() {
    'use strict';

    const button = document.querySelector('button');
    const buttonBg = document.querySelector('#toggle-bg');
    const slider = document.querySelector('#toggle-circle');
    const links = document.querySelectorAll('section a');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner img');
    const projects = document.querySelector('#projects');
    const research = document.querySelector('#research');
    const development = document.querySelector('#development');
    const capstone = document.querySelector('#capstone');
    let mode = 'light';

    button.addEventListener('mouseover', function() {
        if (mode === 'light') {
            slider.src = 'images/light_circle_hover.svg';
        } else {
            slider.src = 'images/dark_circle_hover.svg';
        }
    })

    button.addEventListener('mouseout', function() {
        if (mode === 'light') {
            slider.src = 'images/light_circle_default.svg';
        } else {
            slider.src = 'images/dark_circle_default.svg';
        }
    })

    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.style.color = 'white';
            body.style.backgroundColor = '#2D2D2E';
            for (let link of links) {
                link.style.color = 'white';
            }
            banner.src = 'images/banner_dark.jpg';
            buttonBg.src = 'images/dark_toggle_bg.svg';
            slider.src = 'images/dark_circle_hover.svg';
            slider.className = 'left';

            projects.style.backgroundColor = '#778AAB';
            research.style.backgroundColor = '#5C6272';
            development.style.backgroundColor = '#353C51';
            capstone.style.backgroundColor = '#868B98';

            mode = 'dark';
        } else {
            body.style.color = 'black';
            body.style.backgroundColor = '#FFFEFB';
            for (let link of links) {
                link.style.color = 'black';
            }
            banner.src = 'images/banner_light.jpg';
            buttonBg.src = 'images/light_toggle_bg.svg';
            slider.src = 'images/light_circle_hover.svg';
            slider.className = 'right';

            projects.style.backgroundColor = '#F5E5C5';
            research.style.backgroundColor = '#EBEBEB';
            development.style.backgroundColor = '#C6DBE4';
            capstone.style.backgroundColor = '#D9D9D9';

            mode = 'light'
        }
    })
})()