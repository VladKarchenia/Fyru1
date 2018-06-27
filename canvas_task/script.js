'use strict';

const canvas = document.getElementById('canvas')
if (canvas.getContext) {
    var ctx = canvas.getContext('2d')
}

const circle = new Path2D()
circle.arc(150, 75, 40, 0, 2 * Math.PI)

const triangle = new Path2D()
triangle.moveTo(250, 35)
triangle.lineTo(290, 115)
triangle.lineTo(210, 115)

const square = new Path2D()
square.rect(10, 35, 80, 80)

const lines = new Path2D()
ctx.lineWidth = 2
lines.moveTo(110, 30)
lines.lineTo(190, 30)
lines.moveTo(110, 120)
lines.lineTo(190, 120)

ctx.fillStyle = '#FFFF00'
ctx.fill(circle)
ctx.fillStyle = '#FF0000'
ctx.fill(triangle)
ctx.fillStyle = '#00FF00'
ctx.fill(square)
ctx.stroke(lines)
