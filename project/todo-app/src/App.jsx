import { useState, useEffect } from 'react'
import todoService from './services/todos'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoService.getAll().then(todos => {
      setTodos(todos)
    })
  }, [])

  const addTodo = async newTodo => {
    try {
      const addedTodo = await todoService.createNew(newTodo)
      setTodos(todos.concat(addedTodo))
    } catch (exception) {
      console.error(exception)
    }
  }

  return (
    <>
      <div>
        <h1>The Project App</h1>
        <img src="/hourly-image" width="600" height="600" alt="Cool random image" />
        <TodoForm addTodo={addTodo} />
        <ul>
          {todos.map(todo =>
            <li>{todo.content}</li>
          )}
        </ul>
      </div>
      <div>
        DevOps with Kubernetes / Capscience
      </div>
    </>
  )
}

export default App
