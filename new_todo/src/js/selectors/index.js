import { filterItems } from '../components/TodoList/helper'

export const getListName = state => state.listName || 'Default'

export const getVisibilityFilter = state => state.visibilityFilter

export const getPrintVisibilityFilter = state => state.printVisibilityFilter

export const getAllItems = state => state.items

export const getFilteredItems = state => {
  const items = getAllItems(state)
  const visibilityFilter = getVisibilityFilter(state)
  return filterItems(items, visibilityFilter)
}

export const getPrintFilteredItems = state => {
  const items = getAllItems(state)
  const printVisibilityFilter = getPrintVisibilityFilter(state)
  return filterItems(items, printVisibilityFilter)
}
