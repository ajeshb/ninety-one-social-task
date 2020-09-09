import { handleActions } from 'redux-actions'
import immutable from 'immutability-helper'
import { parseError } from '../../services/client'

import { ActionTypes, STATUS } from '../constants/index'

export const awardState = {
  new: {
    message: '',
    data: [],
    status: STATUS.IDLE
  },
  details: {
    message: '',
    data: {},
    status: STATUS.IDLE
  },
  approve: {
    message: '',
    data: {},
    status: STATUS.IDLE
  }
  
}

export default {
  awards: handleActions(
    {
      [ActionTypes.AWARD_NEW_REGISTRATION_GET_LIST]: (state, { payload }) =>
        immutable(state, {
          new: {
            status: { $set: STATUS.RUNNING },
          }
        }),
      [ActionTypes.AWARD_NEW_REGISTRATION_GET_LIST_SUCCESS]: (state, { payload }) => {
        
        return immutable(state, {
          new: {
            data: { $set: payload },
            status: { $set: STATUS.READY },
          }
        })
      },
      [ActionTypes.AWARD_NEW_REGISTRATION_GET_LIST_FAILURE]: (state, { payload }) =>
        immutable(state, {
          new: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR }
          }
        }),

      [ActionTypes.AWARD_REGISTRATION_GET_DETAILS]: (state, { payload }) =>
        immutable(state, {
          details: {
            status: { $set: STATUS.RUNNING },
          }
        }),
      [ActionTypes.AWARD_REGISTRATION_GET_DETAILS_SUCCESS]: (state, { payload }) => {
        
        return immutable(state, {
          details: {
            data: { $set: payload },
            status: { $set: STATUS.READY },
          }
        })
      },
      [ActionTypes.AWARD_REGISTRATION_GET_DETAILS_FAILURE]: (state, { payload }) =>
        immutable(state, {
          details: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR }
          }
        }),

      [ActionTypes.APPROVE_REGISTRATION]: (state, { payload }) =>
        immutable(state, {
          approve: {
            status: { $set: STATUS.RUNNING },
          }
        }),
      [ActionTypes.APPROVE_REGISTRATION_SUCCESS]: (state, { payload }) => {
        const { data } = { ...state.details }
        data.isApproved = true
        return immutable(state, {
          details: {
            data: { $set: data}
          },
          approve: {
            data: { $set: payload },
            status: { $set: STATUS.READY },
          }
        })
      },
      [ActionTypes.APPROVE_REGISTRATION_FAILURE]: (state, { payload }) =>
        immutable(state, {
          detapproveails: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR }
          }
        }),


    },
    awardState
  )
}
