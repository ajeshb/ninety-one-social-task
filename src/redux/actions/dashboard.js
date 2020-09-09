// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'

import { ActionTypes } from '../constants/index'

export const { awardNewRegistrationGetList, awardRegistrationGetDetails, approveRegistration } = createActions({
  [ActionTypes.AWARD_NEW_REGISTRATION_GET_LIST]: () => ({ }),
  [ActionTypes.AWARD_REGISTRATION_GET_DETAILS]: (id) => ({ id }),
  [ActionTypes.APPROVE_REGISTRATION]: (id) => ({ id }),
})
