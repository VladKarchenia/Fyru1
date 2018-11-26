'use strict'

const all = document.getElementById('all')
const parallaxInstance = new Parallax(all)

const snow = document.getElementById('snow')

const snowfall = (function() {

  let flakes, 
      mouseX, 
      mouseY,
      wind = 0

  const flakesTotal = 200

  function Snowflake(size, x, y, vx, vy) {
    this.size = size
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.hit = false
    this.melt = false
    this.div = document.createElement('div')
    this.div.classList.add('snowflake')
    this.div.style.width = this.size + 'px'
    this.div.style.height = this.size + 'px'
  }

  Snowflake.prototype.move = function() {
    if (this.hit) {
      if (Math.random() > 0.995) this.melt = false;
    } else {
      this.x += this.vx + Math.min(Math.max(wind, -10), 10)
      this.y += this.vy
    }

    if (this.x > window.innerWidth + this.size) {
      this.x -= window.innerWidth + this.size
    }

    if (this.x < -this.size) {
      this.x += window.innerWidth + this.size
    }

    if (this.y > window.innerHeight + this.size) {
      this.x = Math.random() * window.innerWidth
      this.y -= window.innerHeight + this.size * 2
      this.melt = false
    }

    let dx = mouseX - this.x, 
        dy = mouseY - this.y

    this.hit = this.melt && this.y < mouseY && dx * dx + dy * dy < 2400
  }

  Snowflake.prototype.draw = function() {
    this.div.style.transform = 'translate3d(' + this.x + 'px' + ',' + this.y + 'px,0)'
  }

  function update() {
    for (let i = flakes.length; i--;) {
      let flake = flakes[i]
      flake.move()
      flake.draw()
    }
    requestAnimationFrame(update)
  }

  Snowflake.init = function(container) {
    flakes = []
    for (let i = flakesTotal; i--;) {
      let size = (Math.random() + 0.2) * 12 + 1
      const flake = new Snowflake(
        size,
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() - 0.5,
        size * 0.3
      )
      container.appendChild(flake.div)
      flakes.push(flake)
    }
    container.onmousemove = function(event) {
      mouseX = event.clientX
      mouseY = event.clientY
      wind = (mouseX - window.innerWidth / 2) / window.innerWidth * 6
    }
    update()
  }
  return Snowflake
}())

window.onload = function() {
  setTimeout(function() {
    snowfall.init(snow)
  }, 500)
}
