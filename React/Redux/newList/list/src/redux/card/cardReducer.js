import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./cardType"

const initialState = {
    loading: false,
    card: [],
    error: ''
}
const cardReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_REQUEST : return {
            ...state,
            loading: true
        }
    case FETCH_SUCCESS : return {
        ...state,
        loading: false,
        card: [...state.card, ...action.payload],
        error:''
        }
        case FETCH_FAILURE : return {
            ...state,
            loading: false,
            error: action.payload,
            card:[]
        }
        default: return state
    }
}
export default cardReducer