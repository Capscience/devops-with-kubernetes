// <TodoList todos={todos} todoDone={todoDone} />
const TodoList = ({ todos, todoDone }) => {
  return (
    <>
      <h2>Todo</h2>
      <ul>
        {todos.filter(todo => !todo.done).map(todo => <li key={todo.id}>{todo.content}<button type="button" onClick={() => todoDone(todo)}>Mark as done</button></li>)}
      </ul>
      <h2>Done</h2>
      <ul>
        {todos.filter(todo => todo.done).map(todo => <li key={todo.id}>{todo.content}</li>)}
      </ul>
    </>
  )
}

export default TodoList
