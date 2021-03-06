/**
 * @module Sagas/User
 * @desc User
 */

import { all, put, call, takeLatest } from 'redux-saga/effects'

import { ActionTypes, APIEndpoints } from '../constants/index'
import { request } from '../../services/client'

/**
 * Login
 */
export function * login (action) {
  try {
    const { userKey } = action.payload
    const response = yield call(request, APIEndpoints.LOGIN(userKey), {
      method: 'GET'
    })
   
    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload: response.user
    })
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err.error
    })
  }
}


/**
 * User Sagas
 */
export default function * root () {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
  ])
}
