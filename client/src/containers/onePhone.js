import {connect} from 'react-redux'
import {getOnePhone} from "../actions"
import PhoneDetails from '../PhoneDetails';

const mapStateToProps = state => ({
    thePhone: state.thePhone
})

const mapDispatchToProps = dispatch => ({
    getOnePhone: id => dispatch(getOnePhone(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhoneDetails)
  