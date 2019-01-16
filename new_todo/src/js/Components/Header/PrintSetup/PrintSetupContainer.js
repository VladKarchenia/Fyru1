import { connect } from 'react-redux'

import {
  getListName,
  getFilteredItems,
  getVisibilityFilter,
} from '../../../selectors'

import PrintSetup from './PrintSetup.jsx'

export default connect(
  (state) => ({
    listName: getListName(state),
    items: getFilteredItems(state),
    filter: getVisibilityFilter(state),
  }),
  {

  }
)(PrintSetup)
