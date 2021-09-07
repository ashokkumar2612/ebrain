const redux = require('redux')
const reduxLogger = require('redux-logger') 

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const BUY_NUT = 'BUY_NUT'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'initial redux action'
    }
}
function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}
function buyNut(){
    return {
        type: BUY_NUT
    }
}

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}
const initialNutState = {
    numOfNuts: 15
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
    default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }
    default: return state
    }
}
const nutReducer = (state = initialNutState, action) => {
    switch(action.type) {
        case BUY_NUT: return {
            ...state,
            numOfNuts: state.numOfNuts -1
        }
        default: return state
    }
}

const rootReducer = combineReducers ({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    nut: nutReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unSubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyNut())
store.dispatch(buyCake())
store.dispatch(buyNut())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyNut())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unSubscribe()