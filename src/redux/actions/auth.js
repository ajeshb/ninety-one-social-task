// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'

import { ActionTypes } from '../constants/index'

export const {
  userLogin,
  userLogout
} = createActions({
  [ActionTypes.USER_LOGIN]: (userKey) => ({ userKey }),
  [ActionTypes.USER_LOGOUT]: () => ({ }),
})
