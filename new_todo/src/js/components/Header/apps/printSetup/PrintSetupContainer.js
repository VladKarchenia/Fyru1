import { connect } from 'react-redux'

import PrintSetup from './PrintSetup.jsx'
import { setPrintVisibilityFilter } from '../../../../actions'
import {
  getListName,
  getPrintFilteredItems,
  getPrintVisibilityFilter,
} from '../../../../selectors'

export default connect(
  (state) => ({
    listName: getListName(state),
    items: getPrintFilteredItems(state),
    activeFilter: getPrintVisibilityFilter(state),
  }),
  {
    setPrintVisibilityFilter,
  }
)(PrintSetup)
