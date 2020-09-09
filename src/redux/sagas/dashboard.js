/**
 * @module Sagas/Dashboard
 * @desc Dashboard
 */

import { all, put, call, takeLatest } from 'redux-saga/effects'

import { ActionTypes, APIEndpoints } from '../constants/index'
import { request } from '../../services/client'


export function * getCategoryList ({ payload }) {
  try {
    const response = yield call(request, APIEndpoints.CATEGORY_GET_LIST, {
      method: 'GET'
    })
    yield put({
      type: ActionTypes.CATEGORY_GET_LIST_SUCCESS,
      payload: response
    })
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.CATEGORY_GET_LIST_FAILURE,
      payload: err
    })
  }
}
/**
 * User Sagas
 */
export default function * root () {
  yield all([
    takeLatest(ActionTypes.CATEGORY_GET_LIST, getCategoryList)
  ])
}
