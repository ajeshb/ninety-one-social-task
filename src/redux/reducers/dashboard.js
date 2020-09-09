import { handleActions } from 'redux-actions'
import immutable from 'immutability-helper'
import { parseError } from '../../services/client'

import { ActionTypes, STATUS } from '../constants/index'

export const dashboardState = {
  categories: {
    message: '',
    data: [],
    status: STATUS.IDLE
  }
}

export default {
  dashboard: handleActions(
    {
      [ActionTypes.CATEGORY_GET_LIST]: (state, { payload }) =>
        immutable(state, {
          categories: {
            status: { $set: STATUS.RUNNING },
          }
        }),
      [ActionTypes.CATEGORY_GET_LIST_SUCCESS]: (state, { payload }) => {
        return immutable(state, {
          categories: {
            data: { $set: payload },
            status: { $set: STATUS.READY },
          }
        })
      },
      [ActionTypes.CATEGORY_GET_LIST_FAILURE]: (state, { payload }) =>
        immutable(state, {
          categories: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR }
          }
        }),
    },
    dashboardState
  )
}
