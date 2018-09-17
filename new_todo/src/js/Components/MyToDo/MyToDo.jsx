import React, { Component } from 'react'

class MyToDo extends Component {
  saveToDo = () => {
    console.log('Save this list')
  }

  render() {
    return (
      <div className='myToDo'>
        <h2 className='toDoName'><span className='newNameSpan'>My to-do list 08/05/2018</span></h2>
        <button onClick={this.saveToDo} className='saveBtn'>Save This List</button>
      </div>
    )
  }
}

export default MyToDo
