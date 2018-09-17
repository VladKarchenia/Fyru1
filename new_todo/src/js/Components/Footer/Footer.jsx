import React, { Component } from 'react'

class Footer extends Component {
  about = () => {
    console.log('about')
  }

  developers = () => {
    console.log('developers')
  }

  suggest = () => {
  console.log('suggest a faeture')
  }

  render() {
    return (
      <div className='footer'>
        <a onClick={this.about} className='a'>About</a>
        <a onClick={this.developers} className='a'>Developers</a>
        <a onClick={this.suggest} className='a'>Suggest a feature</a>
      </div>
    )
  }
}

export default Footer