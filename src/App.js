import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    let id = 1
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {
      id: id,
      text: text,
      completed: false
    }
    let newTodo = [todo, ...todos]
    setTodos(newTodo)
  }

  const removeTodo = (id) => {
    let updatedTodo = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodo)
  }

  const completedTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodo)
  }

  return (
    <div className="App">
      <div className='wrrapper'>
        <h1>To Do List</h1>
        <div className='line'></div>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} completedTodo={completedTodo} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
