const initialState = {
    phones: [],
    thePhone: {}
  }

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SAVE_ALL_PHONES":
            return {
                ...state,
                phones: action.payload
            }
        case "GET_ONE_PHONE":
            return {
                ...state,
                thePhone: state.phones.filter(phone => phone.id === parseInt(action.payload))[0]
            }
        default:
            return state
    }
} 

export default rootReducer
  