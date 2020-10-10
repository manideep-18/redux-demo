import {createStore} from 'redux'
import { cakeReducer } from './Cake/CakeReducer'

const Store=createStore(cakeReducer)

export default Store