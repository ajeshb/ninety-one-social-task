import keyMirror from 'fbjs/lib/keyMirror'

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  
  USER_LOGIN: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,

  USER_LOGOUT: undefined,

  CATEGORY_GET_LIST: undefined,

  GET_COMPANY_INFO: undefined,
  GET_COMPANY_INFO_SUCCESS: undefined,
  GET_COMPANY_INFO_FAILURE: undefined,

})

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error'
}

const API_BASE_URL = 'https://api.spacexdata.com/v3'
const LOGIN_API_BASE_URL = 'https://run.mocky.io/v3'

export const APIEndpoints = {
  LOGIN: (userKey) =>`${LOGIN_API_BASE_URL}/${userKey}`,
  GET_COMPANY_INFO: `${API_BASE_URL}/info`,
  CATEGORY_GET_LIST: `${API_BASE_URL}/list`
}
