// import redux,{createStore} from 'redux'
const redux=require('redux')
const createStore=redux.createStore
const combineReducers=redux.combineReducers

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Redux action'
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM,
    }
}

const initialState={
noOfCakes:10,
noOfIceCreams:20
}

const reducer=(state=initialState,action)=>{
switch(action.type){
case BUY_CAKE:
return {
    ...state,
    noOfCakes:state.noOfCakes-1
}
case BUY_ICECREAM:
return {
    ...state,
    noOfIceCreams:state.noOfIceCreams-1
}


default: return state
}}

// const store=createStore(reducer)

// console.log('initial store',store.getState())
// const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unsubscribe()

// Implementing multiple reducers

const initialCakeState={
    noOfInitialCakes:10
}

const initialIceCreamsState={
    noOfInitialIceCreams:10
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
    case BUY_CAKE:
    return {
        ...state,
        noOfInitialCakes:state.noOfInitialCakes-1
    }  
    default: return state
    }}

    const iceCreamsReducer=(state=initialIceCreamsState,action)=>{
        switch(action.type){
        case BUY_ICECREAM:
        return {
          ...state,
          noOfInitialIceCreams:state.noOfInitialIceCreams-1
        }  
        default: return state
        }}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamsReducer
})

const store=createStore(rootReducer)

console.log('initial store',store.getState())
const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
