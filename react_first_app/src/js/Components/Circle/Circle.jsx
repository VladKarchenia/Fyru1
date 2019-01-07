import React from 'react'

const Circle = ({ circleColor }) => (
  <div className='circle' style={{backgroundColor: circleColor}} title={circleColor || 'rgb(247, 223, 191)'} />
)

export default Circle
