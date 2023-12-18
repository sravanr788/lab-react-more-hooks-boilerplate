import React, { useReducer, useRef } from 'react'
import TodoItem from './TodoItem'

const todoreducer = (state,action) => {
    if(action.type == "ADD_ITEM"){
        return [
            ...state , {
                data : action.payload , 
                isHidden : false
            }
        ]
    }
    if(action.type == "CHANGE_ISHIDDEN"){
        return state.map((e,i)=>{
            return i == action.payload ? {...e,isHidden : !e.isHidden} : e
        })
    }
    return state
}

const initialState = [
    {
        data : "First Item.." ,
        isHidden : false
    }
]

const TodoApp = () => {

    const [todo,dispatch] = useReducer(todoreducer,initialState)
    console.log(todo)

    const input = useRef(null)
  return (
    <div>
        <input ref={input} type="text" style={{width : "40vw"}}
        onKeyDown={(e)=>{
            if(e.key=="Enter"){
                dispatch({type : "ADD_ITEM",payload : e.target.value})
                e.target.value = ""
            }
        }}/>
        {/* loop through the todo state using map  */}
        {todo.map((e,i)=>{
            return <TodoItem item={e} index={i} dispatch={dispatch}/>
        })}
        <button onClick={()=>{
            window.scrollTo({top:0,behavior:"smooth"})
            input.current.focus()
        }}>GO BACK TO TOP </button>  
    </div>
  )
}

export default TodoApp