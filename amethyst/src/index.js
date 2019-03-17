'use strict'

// for price plan switcher
$(function() {
  $('#yearly').click(function() {
    $('.perMonth').hide()
    $('.perYear').show()
  })
  $('#monthly').click(function() {
    $('.perMonth').show()
    $('.perYear').hide()
  })
})

// for our services icons active class

var selectedLi
document.querySelector('.services-icons-container').onclick = (e) => {
  if (e.target.tagName != 'LI') {
    return
  } else {
    if (document.querySelector('.services-icon').classList.contains('active-service-icon')) {
      document.querySelector('.services-icon').classList.remove('active-service-icon')
    }
    makeBold(e.target)
  }
}

function makeBold(node) {
  if (selectedLi) {
    selectedLi.classList.remove('active-service-icon')
  }
  selectedLi = node;
  selectedLi.classList.add('active-service-icon')
}

// for scroll to top button show and animation

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 830) {
      $('#toTopBtn').show()
    } else {
      $('#toTopBtn').hide()
    }
  })
  $('#toTopBtn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800)
  })
})

// for nav-tabs form - active tab class

var selectedTab
document.querySelector('.nav-tabs').onclick = (e) => {
  if (e.target.tagName != 'A') {
    return
  } else {
    if (document.querySelector('.default-active-tab').classList.contains('active-tabItem')) {
      document.querySelector('.default-active-tab').classList.remove('active-tabItem')
    }
    makeTabActive(e.target)
  }
}

function makeTabActive(node) {
  if (selectedTab) {
    selectedTab.classList.remove('active-tabItem')
  }
  selectedTab = node;
  selectedTab.classList.add('active-tabItem')
}

// for accordion form - active btn class

var selectedBtn
document.querySelector('.accordion').onclick = (e) => {
  if (e.target.tagName != 'BUTTON') {
    return
  } else {
    if (document.querySelector('.activeAccordBtn').classList.contains('displayed-card')) {
      document.querySelector('.activeAccordBtn').classList.remove('displayed-card')
    }
    makeBtnActive(e.target)
  }
}

function makeBtnActive(node) {
  if (selectedBtn) {
    selectedBtn.classList.remove('displayed-card')
  }
  selectedBtn = node;
  selectedBtn.classList.add('displayed-card')
}

// for works imgs filter

$(function() {
  $('#list-all').click(function() {
    $('.design').show()
    $('.urban').show()
    $('.posters').show()
  })
  $('#list-design').click(function() {
    $('.design').show()
    $('.urban').hide()
    $('.posters').hide()
  })
  $('#list-urban').click(function() {
    $('.design').hide()
    $('.urban').show()
    $('.posters').hide()
  })
  $('#list-posters').click(function() {
    $('.design').hide()
    $('.urban').hide()
    $('.posters').show()
  })
})
