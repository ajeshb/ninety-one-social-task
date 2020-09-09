import { all, fork } from 'redux-saga/effects'

import auth from './auth'
import awards from './awards'

/**
 * rootSaga
 */
export default function * root () {
  yield all([
    fork(auth),
    fork(awards),
  ])
}
