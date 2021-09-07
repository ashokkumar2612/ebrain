import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './icecream/iceCreamReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store