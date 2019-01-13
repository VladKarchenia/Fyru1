import { connect } from 'react-redux'

import { getVisibilityFilter } from '../../../../selectors'
import { setVisibilityFilter } from '../../../../actions'
import SortComponent from './SortComponent.jsx'

export default connect(
  (state) => ({
    activeFilter: getVisibilityFilter(state)
  }),
  {
    setVisibilityFilter,
  }
)(SortComponent)
