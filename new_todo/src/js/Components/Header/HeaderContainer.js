import { connect } from 'react-redux'

import Header from './Header.jsx'
import { getListName, getAllItems } from '../../selectors'
import { clearTodos, clearListName, changeListName } from '../../actions'

export default connect(
  (state) => ({
    listName: getListName(state),
    items: getAllItems(state),
  }),
  {
    clearTodos,
    clearListName,
    changeListName,
  }
)(Header)
