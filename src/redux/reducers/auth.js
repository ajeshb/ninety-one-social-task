import { handleActions } from 'redux-actions'
import immutable from 'immutability-helper'

import { STATUS, ActionTypes } from '../constants/index'
import { getCookie } from '../../services/cookie';

export const userState = {
  login: {
    data: {},
    status: STATUS.IDLE,
    message: ''
  },
  isAuthenticated: false,
  user: {},
}

export default {
  auth: handleActions(
    {
      [ActionTypes.USER_LOGIN]: (state, { payload }) =>
        immutable(state, {
          login: { 
            status: {$set: STATUS.RUNNING }
          }
        }),
      [ActionTypes.USER_LOGIN_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          login: {
            status: { $set: STATUS.READY },
            data: { $set: payload }
          },
          user: { $set: payload },
          isAuthenticated: { $set: true },
        }),
      [ActionTypes.USER_LOGIN_FAILURE]: (state, { payload }) =>
        immutable(state, {
          login: {
            status: { $set: STATUS.ERROR },
            data: { $set: payload }
          },
          user: { $set: payload },
          isAuthenticated: { $set: false },
        }),

      [ActionTypes.USER_LOGOUT]: (state, { payload }) =>
        immutable(state, {
          user: { $set: {} },
          isAuthenticated: { $set: false },
        }),
    },
    userState
  )
}
