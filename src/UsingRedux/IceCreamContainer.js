import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../Redux/IceCream/IceCreamActions'

function IceCreamContainer(){
    const noOfIceCreams=useSelector(state=>state.iceCream.noOfIceCreams)
    const dispatch=useDispatch()
    return(
        <div>
            <h1>No of Icecreams-{noOfIceCreams}</h1>
            <button onClick={()=>dispatch(buyIceCream())}>buy icecream</button>
        </div>
    )
}

export default IceCreamContainer