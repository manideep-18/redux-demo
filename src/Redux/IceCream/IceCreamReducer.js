import { BUY_ICECREAM } from "./IceCreamTypes"

const initialState={
    noOfIceCreams:10
}

export const iceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCreams:state.noOfIceCreams-1
            }
        default:
            return state
    }
}