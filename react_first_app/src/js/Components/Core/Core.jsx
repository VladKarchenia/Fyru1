import React, { Component } from "react"
import { generateRnd } from "./utils"
import { generateColor } from "./utils"
import Circle from '../Circle/Circle.jsx'
import Modal from './Modal.jsx'

export default class Core extends Component {
  state = {
    rnd: '??',
    backgroundColor: '#fff',
    modalOpen: false
  }

  updateData = () => this.setState({
    rnd: generateRnd(), 
    backgroundColor: generateColor(),
  })

  toggleModal = () => {
    const { modalOpen } = this.state
    this.setState({
      modalOpen: !modalOpen,
    })
  }

  closeModal = () => this.setState({
    modalOpen: false,
  })
  
  changeCircleBg = circleColor => this.setState({circleColor})

  render() {
    const { rnd, backgroundColor, modalOpen, circleColor } = this.state
    const { generateNum, changeBg } = this.props.btnNames
    const spanColor = {backgroundColor}
    const changeBgClass = 'changeBg'

    return (
      <div>
        <div>Рандомное число:
          <span style={spanColor}>{rnd}</span>
        </div>
        <button onClick={this.updateData}>{generateNum}</button>
        <Circle circleColor={circleColor} />
        <button className={changeBgClass} onClick={this.toggleModal}>{changeBg}</button>
        {modalOpen && <Modal excludeClass={changeBgClass} closeModal={this.closeModal} changeCircleBg={this.changeCircleBg} />}
      </div>
    )
  }
}
