import { connect } from 'react-redux'

import TodoList from './TodoList.jsx'
import { getFilteredItems } from '../../selectors'
import {
  updateItemByKey,
  deleteItem,
  addItem,
} from '../../actions'

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
