import { combineReducers } from 'redux'

const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.filter
    default:
      return state
  }
}

const items = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    const id = Date.now()
      return {
        ...state,
        [id]: {
          id,
          value: action.value,
          isPinned: false,
          isCompleted: false,
          dueDate: 'No due date'
        }
      }
    case 'TOGGLE_TODO':
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  items,
})

export default rootReducer
