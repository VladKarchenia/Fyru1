import { combineReducers } from 'redux'
import _omit from 'lodash/omit'
import _set from 'lodash/set'

import { APP_KEY } from '../constants/permanentSave'
import { ITEM_KEYS } from '../constants/todoItem'

const visibilityFilterInitial = 'all'
let itemsInitial = {}
let listNameInitial = 'My Todo List'

const localData = localStorage.getItem(APP_KEY)
if (localData) {
  const { listName, items } = JSON.parse(localData)
  listNameInitial = listName
  itemsInitial = items
}

const visibilityFilter = (state = visibilityFilterInitial, { type, payload }) => {
  switch (type) {
    case 'SET_VISIBILITY_FILTER':
      return payload.filter
    default:
      return state
  }
}

const items = (state = itemsInitial, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
    const id = Date.now()
      return {
        ...state,
        [id]: {
          [ITEM_KEYS.id]: id,
          [ITEM_KEYS.value]: payload.value,
          [ITEM_KEYS.isPinned]: false,
          [ITEM_KEYS.isCompleted]: false,
          [ITEM_KEYS.dueDate]: 'No due date'
        }
      }
    case 'DELETE_TODO':
      return _omit(state, payload.id)
    case 'EDIT_TODO':
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          [payload.key]: payload.value,
        },
      }
    case 'IMPORT_TODOS':
      return payload.items
    default:
      return state
  }
}

const listName = (state = listNameInitial, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LISTNAME':
      return payload.listName
  default:
    return state
  }
}

// const print = (state = printInitial, { type, payload }) => {
//   switch (type) {
//     case 'PRINT':
//       return payload.listName
//   default:
//     return state
//   }
// }

const rootReducer = combineReducers({
  visibilityFilter,
  listName,
  items,
})

export default rootReducer
