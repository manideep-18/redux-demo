import { BUY_CAKE } from "./CakeTypes"

const initialState={
    noOfCakes:10
}

export const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes:state.noOfCakes-1
            }
        default:
            return state
    }
}