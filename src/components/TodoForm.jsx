import React, { useState } from 'react'

export default function TodoForm({addTodo}) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(input)
        setInput('')
    }

  return (
    <form onSubmit={handleSubmit} className='form'>
        <input type="text" value={input} required placeholder='Add a new task' onChange={(e) => setInput(e.target.value)} />
        <button type='submit' className='button'>Add todo</button>
    </form>
  )
}
