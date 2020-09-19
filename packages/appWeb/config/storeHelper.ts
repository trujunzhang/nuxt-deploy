// Store Initialization
// ------------------------------------
import { applyMiddleware, createStore as _createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from '@src/redux/rootReducer'

export const mockedStore = _createStore(reducer, applyMiddleware(thunk))
