import React, { useReducer, useState } from 'react'

const reducer = (state,action) =>{
    let {type} = action
    if(type=="Increase") {
        return state + 1
    }
    if(type == "Decrease"){
        return state - 1
    }
    return state }
const UseReducer = () => {
    // const [count,setCount] = useState(0)

   const [count,dispatch] = useReducer(reducer,0)

  return (
    <div>
        <h1>U S E R E D U C E</h1>
        <h3>Count : {count}</h3>
        <button onClick={()=>{dispatch({type : "Increase"})}}>+</button>
        <button onClick={()=>{dispatch({type : "Decrease"})}}>-</button>
    </div>
  )
}

export default UseReducer