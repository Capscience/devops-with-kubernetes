import { useState } from 'react'

const CONTENT_MAX_LENGTH = 140

const TodoForm = ({ addTodo }) => {
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')

  const handleAddTodo = async (event) => {
    event.preventDefault()
    if (content.length > CONTENT_MAX_LENGTH) {
      setMessage(`Content too long, ${content.length} / ${CONTENT_MAX_LENGTH} (max)`)
      setTimeout(() => setMessage(''), 3500)
    } else {
      addTodo({ content })
      setContent('')
    }
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
        {message && <p>{message}</p>}
        <input
          type='text'
          value={content}
          maxLength='140'
          onChange={({ target }) => setContent(target.value)}
        />
        <button type="submit">New todo</button>
      </form>
    </>
  )
}

export default TodoForm
