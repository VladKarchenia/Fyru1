'use strict'

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
