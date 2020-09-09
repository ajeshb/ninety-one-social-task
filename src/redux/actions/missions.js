// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'

import { ActionTypes } from '../constants/index'

export const { getMissionList } = createActions({
  [ActionTypes.GET_MISSION_LIST]: () => ({ }),
  
})
