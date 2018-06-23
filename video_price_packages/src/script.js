'use strict';

(function() {
    const slider = document.getElementById('myRange');
    const videosNum = document.querySelector('.videos_num');
    const activePlan = document.getElementsByClassName('container active')
    const numToEntityMap = {
        1: document.getElementById('frst'),
        2: document.getElementById('scnd'),
        3: document.getElementById('thrd')
    }
    let lastIndex

    const onInput = (event) => {
        const { value } = event.target;
        let index;

        videosNum.innerText = `${value != 30 ? value : value + '+'} video${value == 1 ? '' : 's'}`;

        if (value == 1) {
            index = 1;
        } else if (value > 1 && value <= 20) {
            index = 2;
        } else {
            index = 3;
        }

        if (lastIndex !== index) {
            activePlan[0].classList.remove('active');
            numToEntityMap[index].classList.add('active');
            lastIndex = index;
        }
    }

    slider.addEventListener('input', onInput);
})();
