import {createStore} from 'redux'
import { cakeReducer } from './Cake/CakeReducer'
import rootReducer from './RootReducer'

// const Store=createStore(cakeReducer)
const Store=createStore(rootReducer)

export default Store