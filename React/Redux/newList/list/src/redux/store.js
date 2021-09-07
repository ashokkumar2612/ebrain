import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import cardReducer from './card/cardReducer'

const store = createStore(cardReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
export default store