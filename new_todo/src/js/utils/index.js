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
