import { connect } from 'react-redux'

import { getVisibilityFilter } from '../../selectors'
import { setVisibilityFilter } from '../../actions'
import TodoList from './TodoList.jsx'

export default connect(
  (state) => ({
    activeFilter: getVisibilityFilter(state),
  }),
  {
    setVisibilityFilter,
  },
)(TodoList)
	