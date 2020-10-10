import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import { cakeReducer } from './Cake/CakeReducer'
import rootReducer from './RootReducer'

// const Store=createStore(cakeReducer)
// const Store=createStore(rootReducer)
const Store=createStore(rootReducer,applyMiddleware(logger))

export default Store