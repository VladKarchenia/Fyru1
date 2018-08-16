import React, { Component } from "react"
import { generateRnd } from "./utils"
import { generateColor } from "./utils"
import { Circle } from '../Circle/Circle.jsx'

export default class Core extends Component {
    state = {
        rnd: '??',
        backgroundColor: '#fff'
    }

    render() {
        console.log(this)
        const { rnd } = this.state
        const { generateNum } = this.props.btnNames
        const { changeBg } = this.props.btnNames
        const { backgroundColor } = this.state
        const spanColor = {backgroundColor}

        
        return (
            <div>
                <div>Рандомное число:
                    <span style={spanColor}>{rnd}</span>
                </div>
                <button onClick={this.updateData}>{generateNum}</button>
                <Circle />
                <div>
                    <input type="text" />
                </div>
                <button>{changeBg}</button>
            </div>
        )
    }

    updateData = () => this.setState({ rnd: generateRnd(), backgroundColor: generateColor() } )
}
