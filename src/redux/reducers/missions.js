import { handleActions } from 'redux-actions'
import immutable from 'immutability-helper'
import { parseError } from '../../services/client'

import { ActionTypes, STATUS } from '../constants/index'

export const missionState = {
  list: {
    message: '',
    data: {},
    status: STATUS.IDLE
  }
}

export default {
  missions: handleActions(
    {
      [ActionTypes.GET_MISSION_LIST]: (state, { payload }) =>
        immutable(state, {
          list: {
            status: { $set: STATUS.RUNNING },
          }
        }),
      [ActionTypes.GET_MISSION_LIST_SUCCESS]: (state, { payload }) => {
        return immutable(state, {
          list: {
            data: { $set: payload },
            status: { $set: STATUS.READY },
          }
        })
      },
      [ActionTypes.GET_MISSION_LIST_FAILURE]: (state, { payload }) =>
        immutable(state, {
          list: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR }
          }
        }),
    },
    missionState
  )
}
