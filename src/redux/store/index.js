import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from '../sagas/index'
import rootReducer from '../reducers/index'

import middleware, { sagaMiddleware } from './middleware'

const persistedReducer = persistReducer(
  {
    key: 'rrsb', // key is required
    storage, // storage is now required
    whitelist: ['auth']
  },
  combineReducers({ ...rootReducer })
)

const appReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    storage.removeItem('persist:rrsb')
    state = undefined
  }
  return persistedReducer(state, action)
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const store = createStore(appReducer, initialState, composeEnhancer(applyMiddleware(...middleware)))

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../../redux/reducers', () => {
      store.replaceReducer(require('../../redux/reducers/index').default)
    })
  }

  return {
    persistor: persistStore(store),
    store
  }
}

const { store, persistor } = configStore()

global.store = store

export { store, persistor }
