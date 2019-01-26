import { setTitle } from '../utils'

export const changeListName = listName => {
  setTitle(listName)
  return {
    type: 'CHANGE_LISTNAME',
    payload: { listName },
  }
}

export const importTodos = items => ({
  type: 'IMPORT_TODOS',
  payload: { items },
})

export const addItem = value => ({
  type: 'ADD_TODO',
  payload: { value },
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: { filter },
})

export const setPrintVisibilityFilter = filter => ({
  type: 'SET_PRINT_VISIBILITY_FILTER',
  payload: { filter },
})

export const deleteItem = id => ({
  type: 'DELETE_TODO',
  payload: { id },
})

export const updateItemByKey =  ({ id, key, value }) => ({
  type: 'EDIT_TODO',
  payload: { id, key, value},
})
