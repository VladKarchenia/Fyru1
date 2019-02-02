import { filterItems } from '../utils'
import { createSelector } from 'reselect'

export const getListName = state => state.listName || 'Default'

export const getVisibilityFilter = state => state.visibilityFilter

export const getAllItems = state => state.items

export const getFilteredItems = state => {
  const items = getAllItems(state)
  const visibilityFilter = getVisibilityFilter(state)
  return filterItems(items, visibilityFilter)
}

export const getCurrentItemsCount = createSelector(
  getFilteredItems,
  (items) => items.length
)
