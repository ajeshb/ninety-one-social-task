import { all, fork } from 'redux-saga/effects'

import auth from './auth'
import dashboard from './dashboard'
import missions from './missions'

/**
 * rootSaga
 */
export default function * root () {
  yield all([
    fork(auth),
    fork(dashboard),
    fork(missions)
  ])
}
