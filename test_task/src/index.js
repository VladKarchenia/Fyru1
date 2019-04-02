'use strict'

import 'bootstrap';
import './scss/app.scss';

// // for mothly/yearly price
// let perMonth = document.querySelectorAll('.perMonth')
// let perYear = document.querySelectorAll('.perYear')

// document.querySelector('#yearly').onclick = () => {
//   for (let i = 0; i < perMonth.length; i++) {
//     perMonth[i].classList.add('noneDisplay')
//   }
//   for (let j = 0; j < perYear.length; j++) {
//     perYear[j].classList.remove('noneDisplay')
//   }
// }

// document.querySelector('#monthly').onclick = () => {
//   for (let i = 0; i < perMonth.length; i++) {
//     perMonth[i].classList.remove('noneDisplay')
//   }
//   for (let j = 0; j < perYear.length; j++) {
//     perYear[j].classList.add('noneDisplay')
//   }
// }

// // for our services icons active class

// var selectedLi
// document.querySelector('.services-icons-container').onclick = (e) => {
//   if (e.target.tagName != 'LI') {
//     return
//   } else {
//     if (document.querySelector('.services-icon').classList.contains('active-service-icon')) {
//       document.querySelector('.services-icon').classList.remove('active-service-icon')
//     }
//     makeBold(e.target)
//   }
// }

// function makeBold(node) {
//   if (selectedLi) {
//     selectedLi.classList.remove('active-service-icon')
//   }
//   selectedLi = node;
//   selectedLi.classList.add('active-service-icon')
// }

// // for scroll to top button show and animation

// document.addEventListener('scroll', function() {
//   if (window.pageYOffset >= 830) {
//     document.getElementById('toTopBtn').classList.remove('noneDisplay')
//   } else {
//     document.getElementById('toTopBtn').classList.add('noneDisplay')
//   }
// })

// // for nav-tabs form - active tab class

// var selectedTab
// document.querySelector('.nav-tabs').onclick = (e) => {
//   if (e.target.tagName != 'A') {
//     return
//   } else {
//     if (document.querySelector('.default-active-tab').classList.contains('active-tabItem')) {
//       document.querySelector('.default-active-tab').classList.remove('active-tabItem')
//     }
//     makeTabActive(e.target)
//   }
// }

// function makeTabActive(node) {
//   if (selectedTab) {
//     selectedTab.classList.remove('active-tabItem')
//   }
//   selectedTab = node;
//   selectedTab.classList.add('active-tabItem')
// }

// // for accordion form - active btn class

// var selectedBtn
// document.querySelector('.accordion').onclick = (e) => {
//   if (e.target.tagName != 'BUTTON') {
//     return
//   } else {
//     if (document.querySelector('.activeAccordBtn').classList.contains('displayed-card')) {
//       document.querySelector('.activeAccordBtn').classList.remove('displayed-card')
//     }
//       makeBtnActive(e.target)
//   }
// }

// function makeBtnActive(node) {
//   if (selectedBtn) {
//     selectedBtn.classList.remove('displayed-card')
//   }
//   selectedBtn = node;
//     selectedBtn.classList.add('displayed-card')
// }

// // for works imgs filter

// let design = document.querySelectorAll('.design')
// let urban = document.querySelectorAll('.urban')
// let posters = document.querySelectorAll('.posters')

// document.querySelector('#list-all').onclick = () => {
//   for (let i = 0; i < design.length; i++) {
//     design[i].classList.remove('noneDisplay')
//   }
//   for (let j = 0; j < urban.length; j++) {
//     urban[j].classList.remove('noneDisplay')
//   }
//   for (let k = 0; k < posters.length; k++) {
//     posters[k].classList.remove('noneDisplay')
//   }
// }

// document.querySelector('#list-design').onclick = () => {
//   for (let i = 0; i < design.length; i++) {
//     design[i].classList.remove('noneDisplay')
//   }
//   for (let j = 0; j < urban.length; j++) {
//     urban[j].classList.add('noneDisplay')
//   }
//   for (let k = 0; k < posters.length; k++) {
//     posters[k].classList.add('noneDisplay')
//   }
// }

// document.querySelector('#list-urban').onclick = () => {
//   for (let i = 0; i < design.length; i++) {
//     design[i].classList.add('noneDisplay')
//   }
//   for (let j = 0; j < urban.length; j++) {
//     urban[j].classList.remove('noneDisplay')
//   }
//   for (let k = 0; k < posters.length; k++) {
//     posters[k].classList.add('noneDisplay')
//   }
// }

// document.querySelector('#list-posters').onclick = () => {
//   for (let i = 0; i < design.length; i++) {
//     design[i].classList.add('noneDisplay')
//   }
//   for (let j = 0; j < urban.length; j++) {
//     urban[j].classList.add('noneDisplay')
//   }
//   for (let k = 0; k < posters.length; k++) {
//     posters[k].classList.remove('noneDisplay')
//   }
// }
