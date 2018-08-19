import React, { Component } from "react"
import { generateRnd } from "./utils"
import { generateColor } from "./utils"
import Circle from '../Circle/Circle.jsx'
import Modal from './Modal.jsx'

export default class Core extends Component {
    updateData = () => this.setState({ rnd: generateRnd(), backgroundColor: generateColor() } )
    
    _openModal() {
        this.setState({modalOpen: true})
    }
    _closeModal() {
        this.setState({modalOpen: false})
    }

    state = {
        rnd: '??',
        backgroundColor: '#fff',
        modalOpen: false
    }

    render() {
        console.log(this)
        const { rnd } = this.state
        const { generateNum } = this.props.btnNames
        const { changeBg } = this.props.btnNames
        const { backgroundColor } = this.state
        const spanColor = {backgroundColor}
        const { modalOpen } = this.state;

        return (
            <div>
                <div>Рандомное число:
                    <span style={spanColor}>{rnd}</span>
                </div>
                <button onClick={this.updateData}>{generateNum}</button>
                <Circle />
                {/* <div className='modal'>
                    <button className='esc' onClick={closeModal}></button>
                    <h1 className='modalText'>Do you want to change circle background? </h1>
                    <input type='text' className='input'/>
                    <button className='botBtn ok'>{ok}</button>
                    <button className='botBtn cancel' onClick={closeModal}>{cancel}</button>
                </div> */}
                <button className='changeBg' onClick={!modalOpen ? this._openModal.bind(this) : this._closeModal.bind(this)}>{changeBg}</button>
                {modalOpen ? <Modal closeModal={this._closeModal.bind(this)} /> : ''}
            </div>
        )
    }
}
