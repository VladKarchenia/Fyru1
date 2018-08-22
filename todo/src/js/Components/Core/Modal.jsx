import React, { Component } from 'react'

class Modal extends Component {

  handleOutsideClick = (e) => {
    const { target } = e
    const { closeModal, excludeClass } = this.props
    if (!this.node.contains(target) && !target.classList.contains(excludeClass)) {
      closeModal()
      document.removeEventListener('click', this.handleOutsideClick, true);
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true)
  }

  render() {
    const { closeModal, changeCircleBg, circleColor } = this.props

    return (
      <div className='modal' ref={node => (this.node = node)}>
        <button className='esc' onClick={closeModal}></button>
        <h1 className='modalText'>Do you want to change circle background? </h1>
        <input type='text' className='input' onChange={changeCircleBg} value={circleColor}/>
        <button className='botBtn ok' >OK</button>
        <button className='botBtn cancel' onClick={closeModal}>Cancel</button>
      </div>
    )
  }
}

export default Modal
