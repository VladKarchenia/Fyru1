import { connect } from 'react-redux'

import Footer from './Footer.jsx'
import { getCurrentItemsCount } from '../../selectors'

export default connect(
  (state) => ({
    count: getCurrentItemsCount(state),
  })
)(Footer)
