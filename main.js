/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function createCarousel(slidesCount = 5) {
    let container = null;
    let prevIndicator = null;

    function createContainer() {
        elem = document.createElement('div');
        elem.setAttribute('id', 'carousel');
        elem.setAttribute('class', 'carousel');
        document.querySelector('body').appendChild(elem);
        container = document.querySelector('#carousel');
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
            let controlItem = document.createElement('div');
            let controlIcon = document.createElement('i');
            const defItemClass = 'controls__item';
            const defIconClass = 'fas';

            switch (i) {
                case 0:
                    controlItem.setAttribute('class', `${defItemClass} controls__prev`);
                    controlIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
                    break;
                case 1:
                    controlItem.setAttribute('class', `${defItemClass} controls__next`);
                    controlIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
                    break;
                case 2:
                    controlItem.setAttribute('class', `${defItemClass} controls__pause`);
                    controlIcon.setAttribute('class', `${defIconClass} fa-play`);
                    break;
            }
            controlItem.appendChild(controlIcon);
            controlsContainer.appendChild(controlItem);
        }
        container.appendChild(controlsContainer);
    }

    function createStyle() {
        styleContainer = document.createElement('style');
        let styleCode = `
          .controls,
          .slides {
            position: relative;
            display: flex;
            justify-content: center;
          }
          .controls__item {
            margin: 20px;
          }
          .indicators {
            display: flex;
            justify-content: center;
          }
          ul {
            list-style-type: none;
            height: 100px;
            background-color: blue;
          }
          .indicators__item {
            display: block;
            width: 20px;
            height: 20px;
            background-color: gray;
            margin: 5px;
            border-radius: 5px;
          }`;

        styleContainer.innerHTML = styleCode;
        container.appendChild(styleContainer);
    }

    function indicatorsHandler(e) {
        let target = e.target;

        if (target.classList.contains('indicators__item')) {
            target.style.backgroundColor = 'red';
            if (prevIndicator !== null) prevIndicator.removeAttribute('style');
            prevIndicator = target;
        }
    }

    function setListener() {
        let indContainer = document.querySelector('div.indicators');
        indContainer.addEventListener('click', indicatorsHandler);
    }

    container = document.querySelector('#carousel');
    // createContainer();
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createStyle();
    setListener();
}
createCarousel();
