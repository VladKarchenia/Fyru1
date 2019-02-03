import { connect } from 'react-redux'

import PrintSetup from './PrintSetup.jsx'
import {
  getListName,
  getAllItems,
  getVisibilityFilter,
} from '../../../../selectors'

export default connect(
  (state) => ({
    listName: getListName(state),
    items: getAllItems(state),
    activeFilter: getVisibilityFilter(state),
  })
)(PrintSetup)
