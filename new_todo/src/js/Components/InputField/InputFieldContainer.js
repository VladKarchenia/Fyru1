import { connect } from 'react-redux'

import InputField from './InputField.jsx'
import { addItem } from '../../actions'

export default connect(
  null,
  {
    addItem,
  }
)(InputField)
