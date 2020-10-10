import React from  'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux/Cake/CakeAction'

function HooksCakeContainer(){
  const noOfCakes=useSelector(state=>state.noOfCakes)
  const dispatch=useDispatch()
    return(
        <div>
 <h2>Number of Cakes-{noOfCakes} </h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
    )
}

export default HooksCakeContainer