import { connect } from 'react-redux'
// import { compose, withProps } from 'recompose'
import { compose, withHandlers } from 'recompose'
import fileSaver from 'file-saver'

import ListManagement from './ListManagement.jsx'
import { changeListName, importTodos } from '../../actions'
import { getListName, getFilteredItems } from '../../selectors'
import { readFile } from '../../utils'

export default compose(
	connect(
		(state) => ({
			listName: getListName(state),
			items: getFilteredItems(state),
		}),
		{
			changeListName,
			importTodos,
		}
	),
	withHandlers({ 
		exportList: ({ listName, items }) => {
			const json = JSON.stringify({listName, items}, null, 2)
			const fileName = `${listName}.json`
			const file = new Blob([json], {type: 'application/json'})
			fileSaver.saveAs(file, fileName)
		},
		importList: ({ importTodos, changeListName }) => async (e) => {
			const file = e.target.files[0]
			const json = await readFile(file)
			const { listName, items } = JSON.parse(json)
			changeListName(listName)
			importTodos(items)
		},	
	})
)(ListManagement)
