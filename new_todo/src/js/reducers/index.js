import { combineReducers } from 'redux'

const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.filter
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state
    case 'TOGGLE_TODO':
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  todos,
})

export default rootReducer
