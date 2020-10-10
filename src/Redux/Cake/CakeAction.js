import { BUY_CAKE } from "./CakeTypes";

export function buyCake(number=1){
    return {
        type:BUY_CAKE,
        payload:number
    }
}