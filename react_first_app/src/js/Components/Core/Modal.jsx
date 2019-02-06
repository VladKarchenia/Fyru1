import React, { Component } from 'react'

class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount')
    document.addEventListener('click', this.handleOutsideClick, true)
    document.addEventListener('keydown', this.handleKeyPress, true)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    document.removeEventListener('click', this.handleOutsideClick, true)
    document.removeEventListener('keydown', this.handleKeyPress, true)
  }
  
  handleKeyPress = (e) => {
    const { closeModal, changeCircleBg: changeBg } = this.props
    if (e.keyCode === 27) {
      console.log('press esc')
      closeModal()
    }
    if (e.key === 'Enter') {
      console.log('press enter')
      changeBg(this.inputValue)
      closeModal()
    }
  }

  handleOutsideClick = (e) => {
    const { target } = e
    const { closeModal, excludeClass } = this.props
    if (!this.node.contains(target) && !target.classList.contains(excludeClass)) {
      console.log('handleOutsideClick')
      closeModal()
      document.removeEventListener('click', this.handleOutsideClick, true);
    }
  }

  applyColor = () => {
    const { closeModal, changeCircleBg: changeBg } = this.props
    changeBg(this.inputValue)
    closeModal()
    console.log('applyColor')
  }
  
  inputValue = ''

  render() {
    const { closeModal } = this.props

    return (
      <div className='modal' ref={node => (this.node = node)}>
        <button className='esc' onClick={closeModal}></button>
        <h1 className='modalText'>Do you want to change circle background? </h1>
        <input type='text' className='input' onChange={(e) => {this.inputValue = e.target.value}} />
        <button className='botBtn ok' onClick={this.applyColor}>OK</button>
        <button className='botBtn cancel' onClick={closeModal}>Cancel</button>
      </div>
    )
  }
}

export default Modal
