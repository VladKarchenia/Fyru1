import React, { PureComponent } from 'react'

import styles from './InputField.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class InputField extends PureComponent {
  state = {
    inputValue: '',
  }

  componentDidMount() {
    document.addEventListener('keyup', this.enterAddTodo)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.enterAddTodo)
  }

  addItem = () => {
    if (this.state.inputValue !== '') {
      this.props.addItem(this.state.inputValue)
    }
    this.setState({ inputValue: '' })
  }

  enterAddTodo = (e) => {
    if (e.key === 'Enter' && this.inputRef.current === document.activeElement) {
      this.addItem()
    }
  }

  inputRef = React.createRef()

  onChange = (e) => this.setState({
    inputValue: e.target.value
  })

  render() {
    const { inputValue } = this.state

    return (
      <div className={styles.root}>
        <div className={styles.form}>
          <input ref={this.inputRef} placeholder='Write your next task here...' className={styles.input} value={inputValue} onChange={this.onChange} />
          <button onClick={this.addItem} className={cx({ inactiveBtn: !inputValue }, { activeBtn: inputValue })}>ADD</button>
        </div>
      </div>
    )
  }
}

export default InputField
