import { getCookie } from './cookie'

/**
 * Client
 * @module Client
 */

export class ServerError extends Error {
  constructor (message) {
    super(message)

    Error.captureStackTrace(this, ServerError)

    this.name = 'ServerError'

    return this
  }
}

export const parseError = (error) => {
  return error || 'Something went wrong'
}

/**
 * Fetch data
 *
 * @param {string} url
 * @param {Object} options
 * @param {string} [options.method] - Request method ( GET, POST, PUT, ... ).
 * @param {string} [options.payload] - Request body.
 * @param {Object} [options.headers]
 *
 * @returns {Promise}
 */
export const request = (url, options = {}) => {
  console.log('inside request')
  const config = {
    method: 'GET',
    ...options
  }
  const errors = []

  if (!url) {
    errors.push('url')
  }

  if (!config.payload && config.method !== 'GET' && config.method !== 'DELETE') {
    errors.push('payload')
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``)
  }

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  const authToken = getCookie('token')

  if (authToken && !config.isFormData && !options.disableAuthorization) {
    headers['x-api-key'] = authToken
  }
  if (config.payload && config.payload.headers) {
    headers = { ...headers, ...config.payload.headers }
  }
  if (config.headers) {
    headers = { ...headers, ...config.headers }
  }
  const params = {
    headers,
    method: config.method
  }
  if (params.method !== 'GET') {
    params.body = config.isFormData ? config.payload : JSON.stringify(config.payload)
  }

  return fetch(url, params).then(async response => {
    const contentType = response.headers.get('content-type')
    if (response.status > 299) {
      // const error = new ServerError(response.statusText)
      // error.status = response.status

      if (contentType && contentType.includes('application/json')) {
        const res = await response.json()
        // error.response = await response.json()
        const error = new Error(res.error)
        throw error
      } else {
        const res = await response.text()
        // error.response = await response.json()
        const error = new Error(res.error)
        throw error
      }
    } else {
      if (contentType && contentType.includes('application/json')) {
        return response.json()
      }

      return response.text()
    }
  })
}
