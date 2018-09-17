import React, { Component } from 'react'

class Header extends Component {
  logIn = () => {
    console.log('log in')
  }

  newList = () => {
    console.log('new list')
  }
  
  render() {
    return (
      <div className='header'>
        <a onClick={this.logIn} className='a'>Log in</a>
        <a onClick={this.newList} className='a newList'>New List</a>
      </div>
    )
  }
}

export default Header
