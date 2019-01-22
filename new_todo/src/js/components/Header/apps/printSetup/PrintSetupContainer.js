import { connect } from 'react-redux'

import PrintSetup from './PrintSetup.jsx'
import { setVisibilityFilter } from '../../../../actions'
import {
  getListName,
  getFilteredItems,
  getVisibilityFilter,
} from '../../../../selectors'

export default connect(
  (state) => ({
    listName: getListName(state),
    items: getFilteredItems(state),
    filter: getVisibilityFilter(state),
  }),
  {
    setVisibilityFilter,
  }
)(PrintSetup)
