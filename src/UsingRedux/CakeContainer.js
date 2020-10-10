import React from  'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux/Cake/CakeAction'

function CakeContainer(props){
return(
    <div>
 <h2>Number of Cakes- {props.noOfCakes}</h2>
        <button onClick={()=>{props.buyCake()}}>Buy Cake</button>
    </div>
)
}

const mapStateToProps=state=>{
return{
    noOfCakes:state.cake.noOfCakes
}
}

const mapDispatchToProps=dispatch=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default  connect(mapStateToProps,mapDispatchToProps) (CakeContainer)