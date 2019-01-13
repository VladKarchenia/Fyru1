import { connect } from 'react-redux'
import { getFilteredItems } from '../../selectors'
import {
  updateItemByKey,
  deleteItem,
  addItem,
} from '../../actions'
import TodoList from './TodoList.jsx'

export default connect(
  (state) => ({
    items: getFilteredItems(state)
  }),
  {
    addItem,
    deleteItem,
    updateItemByKey,
  }
)(TodoList)
