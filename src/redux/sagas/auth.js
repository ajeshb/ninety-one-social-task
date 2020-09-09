/**
 * @module Sagas/User
 * @desc User
 */

import { all, put, call, takeLatest } from 'redux-saga/effects'

import { ActionTypes, APIEndpoints } from '../constants/index'
import { request } from '../../services/client'
import { setCookie, } from '../../services/cookie'

/**
 * Login
 */
export function * login (action) {
  try {
    const { username, password } = action.payload
    const response = yield call(request, APIEndpoints.LOGIN, {
      method: 'POST',
      payload: { username, password }
    })
    yield setCookie('user_details', response.id)
    yield setCookie('token', response.token)
    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload: response
    })
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err.error
    })
  }
}

export function * logout (action) {
    yield setCookie('user_details', '')
    yield setCookie('token', '')
}

/**
 * User Sagas
 */
export default function * root () {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
    takeLatest(ActionTypes.USER_LOGOUT, logout)
  ])
}
