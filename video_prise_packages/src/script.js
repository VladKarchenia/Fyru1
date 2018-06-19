'use strict'

var slider = document.getElementById('myRange');
var videosNum = document.querySelector('.videos_num');
var frst = document.getElementById('frst');
var scnd = document.getElementById('scnd');
var thrd = document.getElementById('thrd');
videosNum.innerHTML = slider.value + ' videos';

slider.oninput = function() {
    if (this.value == 1) {
        videosNum.innerHTML = this.value + ' video';
        frst.classList.add('active');
    } else {
        frst.classList.remove('active');
    }

    if (this.value > 1 & this.value <= 20) {
        videosNum.innerHTML = this.value + ' videos';
        scnd.classList.add('active');
    } else {
        scnd.classList.remove('active');
    }

    if (this.value > 20 & this.value < 30) {
        videosNum.innerHTML = this.value + ' videos';
        thrd.classList.add('active');
    } else {
        if (this.value == 30) {
            videosNum.innerHTML = this.value + '+ videos';
            thrd.classList.add('active');
        } else {
            thrd.classList.remove('active');
        }
    }
}
