import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import './todo.css'

export default function TodoItem({ todo, removeTodo, completedTodo }) {
    return (
        <div className='form-row'>
            <div className={todo.completed ? 'icons completed' : 'icons'}>
                <div className='numeric'>{todo.id}</div>
                {todo.text}
                <div className="icon">
                    <RiCloseCircleLine className='delete' onClick={() => removeTodo(todo.id)} />
                    <AiOutlineCheckCircle className='complet' onClick={() => completedTodo(todo.id)} />
                </div>
            </div>
        </div>
    )
}
