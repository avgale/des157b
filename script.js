(function() {
    'use strict';

    const button = document.querySelector('button img');
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
            button.src = 'images/light_toggle_hover.svg';
        } else {
            button.src = 'images/dark_toggle_hover.svg';
        }
    })

    button.addEventListener('mouseout', function() {
        if (mode === 'light') {
            button.src = 'images/light_toggle.svg';
        } else {
            button.src = 'images/dark_toggle.svg';
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
            button.src = 'images/dark_toggle_hover.svg';

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
            button.src = 'images/light_toggle_hover.svg';

            projects.style.backgroundColor = '#F5E5C5';
            research.style.backgroundColor = '#EBEBEB';
            development.style.backgroundColor = '#C6DBE4';
            capstone.style.backgroundColor = '#D9D9D9';

            mode = 'light'
        }
    })
})()