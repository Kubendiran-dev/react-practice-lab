import React, { useReducer } from 'react'


const initial = 0

const reducerfn = (state,action)=>{

if(action.type=== "inc"){
    return  state+1
}
if(action.type== "dec"){
    return state-1
}
if (action.type === "reset") {
    return initial
  }
  return state

}
console.log("running");


const Counter = () => {

const [state,dispatch] = useReducer(reducerfn,initial)



  return (
    <>
     <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"inc"})}>inc</button>
    <button onClick={()=>dispatch({type:"dec"})}>dec</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </>
  )
}

export default Counter