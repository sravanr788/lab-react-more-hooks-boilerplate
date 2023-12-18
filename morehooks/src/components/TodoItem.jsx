import React from 'react'

const TodoItem = ({item : { data, isHidden } , index,dispatch}) => {
  return (
    <div style={{
        backgroundColor : "purple",
        width : "60vw" , 
        filter : `${isHidden?"blur(1px)" : "blur(0px)"}`
    }}>
        <h3>{isHidden ? "This Content is Hidden" : data}</h3>
        <button onClick={()=>{
            dispatch({type : "CHANGE_ISHIDDEN" , payload : index})
        }}>Toggle</button>
    </div>
  )
}

export default TodoItem
