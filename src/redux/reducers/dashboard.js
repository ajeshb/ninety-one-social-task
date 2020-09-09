import { handleActions } from 'redux-actions'
import immutable from 'immutability-helper'
import { parseError } from '../../services/client'

import { ActionTypes, STATUS } from '../constants/index'

export const dashboardState = {
  info: {
    message: '',
    data: {},
    status: STATUS.IDLE
  }
}

export default {
  dashboard: handleActions(
    {
      [ActionTypes.GET_COMPANY_INFO]: (state, { payload }) =>
        immutable(state, {
          info: {
            status: { $set: STATUS.RUNNING },
          }
        }),
      [ActionTypes.GET_COMPANY_INFO_SUCCESS]: (state, { payload }) => {
        return immutable(state, {
          info: {
            data: { $set: payload },
            status: { $set: STATUS.READY },
          }
        })
      },
      [ActionTypes.GET_COMPANY_INFO_FAILURE]: (state, { payload }) =>
        immutable(state, {
          info: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR }
          }
        }),
    },
    dashboardState
  )
}
