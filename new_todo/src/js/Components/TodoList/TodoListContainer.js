import { connect } from 'react-redux'

import { getVisibilityFilter } from '../../selectors'
import { getFilteredItems } from '../../selectors'
import { setVisibilityFilter } from '../../actions'
import { addItem } from '../../actions'
import TodoList from './TodoList.jsx'

export default connect(
  (state) => ({
    activeFilter: getVisibilityFilter(state),
    items: getFilteredItems(state),
  }),
  {
    setVisibilityFilter,
    addItem,
  },
)(TodoList)
