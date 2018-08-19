import React, { Component } from 'react';

class Modal extends Component {
    constructor() {
        super();
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleOutsideClick(e) {
        const { closeModal } = this.props;
        if (!this.node.contains(e.target)) {
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
        const { closeModal } = this.props;

         return (
            <div className='modal' ref={node => (this.node = node)}>
                <button className='esc' onClick={closeModal}></button>
                <h1 className='modalText'>Do you want to change circle background? </h1>
                <input type='text' className='input'/>
                <button className='botBtn ok'>OK</button>
                <button className='botBtn cancel' onClick={closeModal}>Cancel</button>
            </div>
        )
    }
}

export default Modal
