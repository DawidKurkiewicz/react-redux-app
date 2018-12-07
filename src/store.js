import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import add from './state/add'


const reducer = combineReducers({
    add
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const  store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)