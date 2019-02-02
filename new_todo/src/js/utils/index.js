import _throttle from 'lodash/throttle'

import { APP_KEY } from '../constants/permanentSave'

export const readFile = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => {
    resolve(reader.result)
  }
  reader.onerror = reject
  reader.readAsText(file)
})
  
export const setTitle = title => {
  document.title = title
}

export const saveState = _throttle(({ listName, items }) => {
  localStorage.setItem(APP_KEY, JSON.stringify({ listName, items }))
}, 3000, { trailing: true })

export const filterItems = (items, filterType) => {
  const itemsArray = Object.values(items).reverse()
  if (filterType === 'pinned') {
    return itemsArray.filter(({ isPinned }) => isPinned)
  }
  if (filterType === 'completed') {
    return itemsArray.filter(({ isCompleted }) => isCompleted)
  }
  if (filterType === 'active') {
    const pinned = itemsArray.filter(({ isPinned }) => isPinned)
    const ordinary = itemsArray.filter(({ isPinned, isCompleted }) => !isPinned && !isCompleted)
    return pinned.concat(ordinary)
  }
  if (filterType === 'all') {
    const pinned = itemsArray.filter(({ isPinned }) => isPinned)
    const completed = itemsArray.filter(({ isCompleted }) => isCompleted)
    const ordinary = itemsArray.filter(({ isPinned, isCompleted }) => !isPinned && !isCompleted)
    return pinned.concat(ordinary, completed)
  }
  return filterItems
}
