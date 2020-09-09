// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'

import { ActionTypes } from '../constants/index'

export const { getCompanyInfo } = createActions({
  [ActionTypes.GET_COMPANY_INFO]: () => ({ }),
  
})
