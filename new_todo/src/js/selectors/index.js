// import { createSelector } from "reselect";

import { filterItems } from '../Components/TodoList/helper'

export const getListName = state => state.listName || 'Default'

export const getVisibilityFilter = state => state.visibilityFilter

export const getAllItems = state => state.items
export const getFilteredItems = state => {
  const items = getAllItems(state)
  const visibilityFilter = getVisibilityFilter(state)
  return filterItems(items, visibilityFilter)
}

// export const getFilteredItems = state => {

// }
