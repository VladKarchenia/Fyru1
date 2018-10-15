export const filterItems = (items, filterType) => {
  const itemsArray = Object.values(items).reverse()
  if (filterType === 'pinned') {
    return itemsArray.filter(({ isPinned }) => isPinned)
  }
  if (filterType === 'completed') {
    return itemsArray.filter(({ isCompleted }) => isCompleted)
  }
  if (filterType === 'active') {
    return itemsArray.filter(({ isCompleted }) => !isCompleted).sort((a, b) => {
      if (a.isPinned < b.isPinned) {
        return !a.isPinned && b.isPinned
      } return 0
    })
  }
  if (filterType === 'all') {
    return itemsArray.sort((a, b) => {
      if (a.isCompleted > b.isCompleted) {
        return a.isCompleted && !b.isCompleted
      } else if (a.isPinned < b.isPinned) {
        return !a.isPinned && b.isPinned
      } return 0
    })
  }
  return filterItems
}

export const readFile = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => {
    resolve(reader.result)
  }
  reader.onerror = reject
  reader.readAsText(file)
})
