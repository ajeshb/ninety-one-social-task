/**
 * @module Sagas/User
 * @desc User
 */

import { all, put, call, takeLatest } from 'redux-saga/effects'

import { ActionTypes, APIEndpoints } from '../constants/index'
import { request } from '../../services/client'

/**
 * Signup
 */
export function * getAwardNewRegistrationList ({ payload }) {
  try {
    const response = yield call(request, APIEndpoints.AWARD_NEW_REGISTRATION_GET_LIST, {
      method: 'GET'
    })
    yield put({
      type: ActionTypes.AWARD_NEW_REGISTRATION_GET_LIST_SUCCESS,
      payload: response
    })
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.AWARD_NEW_REGISTRATION_GET_LIST_FAILURE,
      payload: err
    })
  }
}

export function * getAwardRegistrationDetails({ payload }) {
  try {
    const { id } = payload
    const response = yield call(request, APIEndpoints.AWARD_REGISTRATION_GET_DETAILS(id), {
      method: 'GET'
    })
    yield put({
      type: ActionTypes.AWARD_REGISTRATION_GET_DETAILS_SUCCESS,
      payload: response
    })
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.AWARD_REGISTRATION_GET_DETAILS_FAILURE,
      payload: err
    })
  }
}

export function * approveRegistration({ payload }) {
  try {
    const { id } = payload
    const response = yield call(request, APIEndpoints.APPROVE_REGISTRATION(id), {
      method: 'POST',
      payload: {}
    })
    
    yield put({
      type: ActionTypes.APPROVE_REGISTRATION_SUCCESS,
      payload: { ...response, id }
    })
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.APPROVE_REGISTRATION_FAILURE,
      payload: err
    })
  }
}

/**
 * User Sagas
 */
export default function * root () {
  yield all([
    takeLatest(ActionTypes.AWARD_NEW_REGISTRATION_GET_LIST, getAwardNewRegistrationList),
    takeLatest(ActionTypes.AWARD_REGISTRATION_GET_DETAILS, getAwardRegistrationDetails),
    takeLatest(ActionTypes.APPROVE_REGISTRATION, approveRegistration)
  ])
}
