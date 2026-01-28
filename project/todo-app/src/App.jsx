import { useState, useEffect } from 'react'
import todoService from './services/todos'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

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

  const todoDone = async todo => {
    todo.done = true
    try {
      await todoService.update(todo)
      const newTodos = await todoService.getAll()
      setTodos(newTodos)
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
        <TodoList todos={todos} todoDone={todoDone} />
      </div>
      <div>
        DevOps with Kubernetes / Capscience
      </div>
    </>
  )
}

export default App
