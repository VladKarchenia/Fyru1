'use strict'

$(function () {
  var element = $("#toTopBtn"), display
  $(window).scroll(function () {
    display = $(this).scrollTop() >= 800
    if (display) {
      element.show()
    } else {
      element.hide()
    }
  })
})
