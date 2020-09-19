import { applyMiddleware, createStore as _createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function createStore() {
  // const finalCreateStore = applyMiddleware(...middleware)(_createStore)
  // const store = finalCreateStore(reducer)
  const store = _createStore(rootReducer, applyMiddleware(thunk))
  return store
}
