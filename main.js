/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function createCarousel(slidesCount = 5) {
    // let container = null;

    function createContainer() {
        elem = document.createElement('div');
        elem.setAttribute('class', 'carousel');
        document.querySelector('body').appendChild(elem);
        container = document.querySelector('.carousel');
    };

    function createSlides(n) {
        slidesContainer = document.createElement('ul');
        slidesContainer.setAttribute('class', 'slides');

        for (i = 0; i < n; i++) {
            let slideItem = document.createElement('li');
            let slideLink = document.createElement('a');
            slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
            slideLink.setAttribute('href', '#');
            slideItem.appendChild(slideLink);
            slidesContainer.appendChild(slideItem);
        }
        container.appendChild(slidesContainer);
    };

    function createIndicators(n) {
        indContainer = document.createElement('div');
        indContainer.setAttribute('class', 'indicators');

        for (i = 0; i < n; i++) {
            let indItems = document.createElement('span');
            indItems.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
            indItems.setAttribute('data-slide-to', i);
            indContainer.appendChild(indItems);
        }
        container.appendChild(indContainer);
    };

    function createControls() {
        controlsContainer = document.createElement('div');
        controlsContainer.setAttribute('class', 'controls');
        for (i = 0; i < 3; i++) {
            controlsItem = document.createElement('div');
            controlsIcon = document.createElement('i');
            const defItemClass = 'controls__item';
            const defIconClass = 'fas';

            switch (i) {
                case 0:
                    controlsItem.setAttribute('class', `${defItemClass} controls__prev`);
                    controlsIcon.setAttribute('clas', `${defIconClass} fa-chevron-left`);
                    break;
                case 1:
                    controlsItem.setAttribute('class', `${defItemClass} controls__pause`);
                    controlsIcon.setAttribute('clas', `${defIconClass} fas fa-play`);
                    break;
                case 2:
                    controlsItem.setAttribute('class', `${defItemClass} controls__next`);
                    controlsIcon.setAttribute('clas', `${defIconClass} fa-chevron-right`);
                    break;
            };
            controlsItem.appendChild(controlsIcon);
            controlsContainer.appendChild(controlsItem);
        };
        container.appendChild(controlsContainer);
    }

    function createStyle() {
        styleContainer = document.createElement('style');
        let styleCode = `
        ul {
            list-style: none;
        }
        .controls, .slides {
            position: relative;
            height: 100px;
        }
        indicators {
            display: flex;
        }
        .indicators__item {
            display: block;
            width: 30px;
            height: 30px;
            background-color: black;
            margin: 10px;
            border-radius: 10px;
        }`;
        styleContainer.innerHTML = styleCode;
        container.appendChild(styleContainer);
    };
    createContainer();
    createSlides(5);
    createIndicators(5)
    createControls()

}

createCarousel(4);