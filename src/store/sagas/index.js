import ACTION from '../types'
import {takeLatest, call, put} from 'redux-saga/effects'
import authAPI from '../../api/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormData from 'form-data';

/**SIgn In */
async function authSignIn(payload){
  const {email, password} = payload
  const response = await authAPI.post('/auth', {email, password})
  return response.data;
}

function* signIn({payload}){
  try{
    const response = yield call(authSignIn, payload);
    yield put({type:ACTION.SIGN_IN_SUCCESS, payload: response});
  }catch (err){
    console.log(err.message);
  }
}
/**SIgn In */

export default function* rootSaga(){
  yield takeLatest(ACTION.SIGN_IN_REQUEST, signIn);
}