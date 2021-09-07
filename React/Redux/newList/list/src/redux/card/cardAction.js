import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './cardType'
import axios from 'axios'

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}
export const fetchSuccess = card => {
    console.log(card)
    return {
        type: FETCH_SUCCESS,
        payload: card
    }
}
export const fetchFailure = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

const convertFomat = ({ name, title, age }) => ({
    age: age,
    title: title,
    name: name
})
export const fetchCardPost = (card) => {
    return dispatch => {
        dispatch(fetchRequest())
        axios.post(("https://stageapi.hellomail.io/task/5e7880dd7ea2f09e803e86fa",
        // convertOurTaskToServerFormat(task),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NzksIm5iZiI6MTU4NzMwMzc3OSwianRpIjoiM2JiMTQ2ZDYtN2VlNi00NGFlLWEzMzYtZGVhMWU5MjdkN2YzIiwiaWRlbnRpdHkiOnsibmFtZSI6Im15IGRlYXIiLCJlbWFpbCI6Im15ZGVhcnN1YmlAZ21haWwuY29tIiwidXNlcl9pZCI6IjVlNzg4MGRhN2VhMmYwOWU4MDNlODZmNSIsImljb24iOiIifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.v-92QdDe0oISGfGG6LCS2k5PVtJkJXUURLW4fmsnMdo",
            },
        }
        ), convertFomat(card))
            .then(res => {
                const card = res.data
                console.log(card)
                dispatch(fetchSuccess([card]))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchFailure(errorMsg))
            })
    }
}
export const fetchCardGet = () => {
    return dispatch => {
        dispatch(fetchRequest())
        axios.get(("https://stageapi.hellomail.io/task/5e7880dd7ea2f09e803e86fa",
        // convertOurTaskToServerFormat(task),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NzksIm5iZiI6MTU4NzMwMzc3OSwianRpIjoiM2JiMTQ2ZDYtN2VlNi00NGFlLWEzMzYtZGVhMWU5MjdkN2YzIiwiaWRlbnRpdHkiOnsibmFtZSI6Im15IGRlYXIiLCJlbWFpbCI6Im15ZGVhcnN1YmlAZ21haWwuY29tIiwidXNlcl9pZCI6IjVlNzg4MGRhN2VhMmYwOWU4MDNlODZmNSIsImljb24iOiIifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.v-92QdDe0oISGfGG6LCS2k5PVtJkJXUURLW4fmsnMdo",
            },
        }
        ))
            .then(res => {
                const card = res.data
                dispatch(fetchSuccess(card))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchFailure(errorMsg))
            })
    }
}