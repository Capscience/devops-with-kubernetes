const baseUrl = '/api/todos'

const getAll = async () => {
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data
}

const createNew = async newTodo => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo)
  }

  const response = await fetch(baseUrl, options)
  if (!response.ok) {
    throw new Error('Failed to create todo')
  }
  return await response.json()
}

const update = async todo => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  }

  const response = await fetch(`${baseUrl}/${todo.id}`, options)
  if (!response.ok) {
    throw new Error('Failed to update todo')
  }
  return await response.json()
}

export default { getAll, createNew, update }
