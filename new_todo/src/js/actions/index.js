export const addItem = value => ({
  type: 'ADD_TODO',
  payload: { value },
})
export const TOGGLE_TODO = {}
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter },
  })
