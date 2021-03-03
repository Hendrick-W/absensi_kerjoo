import ACTION from '../types'

const initialState = {
  access_token:'',
  loading:false
}

export default function userReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case ACTION.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case ACTION.SIGN_OUT:
      return {
        access_token:'',
        loading:false
      }
    default:
      return {
        ...state
      }
  }
}