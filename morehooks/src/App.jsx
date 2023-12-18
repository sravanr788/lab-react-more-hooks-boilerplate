import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducer from './concepts/UseReducer'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseReducer /> */}
      <TodoApp />
    </>
  )
}

export default App
