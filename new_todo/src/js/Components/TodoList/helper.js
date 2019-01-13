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
