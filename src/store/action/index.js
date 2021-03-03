import ACTION from '../types'

export const requestSignIn = (payload) => {
  return {type: ACTION.SIGN_IN_REQUEST, payload: payload}
}

export const signOut = () => {
  return {type: ACTION.SIGN_OUT}
}

export const checkStorage = () => {
  return {type: ACTION.CHECK_STORAGE}
}