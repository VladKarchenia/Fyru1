import { connect } from 'react-redux'

import SortComponent from './SortComponent.jsx'
import { getVisibilityFilter } from '../../selectors'
import { setVisibilityFilter } from '../../actions'

export default connect(
  (state) => ({
    activeFilter: getVisibilityFilter(state)
  }),
  {
    setVisibilityFilter,
  }
)(SortComponent)
