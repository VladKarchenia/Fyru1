import React, { Component } from 'react'

class SortContainer extends Component {

  render() {
    return (
      <div className='sortContainer'>
        <div>
          <input type="radio" className='sort' name='sort' value='completed' id='completed'/>
          <label className='sortLabel' htmlFor='completed'>completed</label>
        </div>
        <div>
          <input type="radio" className='sort' name='sort' value='active' id='active'/>
          <label className='sortLabel' htmlFor='active'>active</label>
        </div>
        <div>
          <input type="radio" className='sort' name='sort' value='pinned' id='pinned'/>
          <label className='sortLabel' htmlFor='pinned'>pinned</label>
        </div>
        <div>
          <input type="radio" className='sort' name='sort' value='all' id='all' />
          <label className='sortLabel' htmlFor='all'>all</label>
        </div>
      </div>
    )
  }
}

export default SortContainer
