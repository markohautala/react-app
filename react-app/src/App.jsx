import { useState } from "react"
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState([])  // This is a React hook

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
          ...currentTodos,
          { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
  })
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo}/>
      <h1 className="header">To Do List:</h1>
      <TodoList todos={todos}/>
    </>
  )
}