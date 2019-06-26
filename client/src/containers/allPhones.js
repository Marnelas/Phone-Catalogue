import {connect} from 'react-redux'
import {saveAllPhones} from "../actions"
import Phones from "../Phones";

const mapStateToProps = state => ({
    allPhones: state.phones
})

const mapDispatchToProps = dispatch => ({
    saveAllPhones: allPhones => dispatch(saveAllPhones(allPhones))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Phones)
  