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
const LOGIN_API_BASE_URL = 'https://run.mocky.io/v3/'

export const APIEndpoints = {
  LOGIN: `${LOGIN_API_BASE_URL}/2442f65f-3ba7-4264-a8de-5bb04188497d`,
  CATEGORY_GET_LIST: `${API_BASE_URL}/list`
}
