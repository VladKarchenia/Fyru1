import { connect } from 'react-redux'

import PrintSetup from './PrintSetup.jsx'
import {
  getListName,
  getFilteredItems,
  getVisibilityFilter,
} from '../../../../selectors'

export default connect(
  (state) => ({
    listName: getListName(state),
    items: getFilteredItems(state),
    activeFilter: getVisibilityFilter(state),
  })
)(PrintSetup)
