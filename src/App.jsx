import React, { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";
import GradientComponent from "./GradientComponent";

function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        return localValue ? JSON.parse(localValue) : [];
    });

    const [backgroundColor, setBackgroundColor] = useState("#0b3954");

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos((currentTodos) => [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
        ]);
    }

    function toggleTodo(id, completed) {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo
            )
        );
    }

    function deleteTodo(id) {
        setTodos((currentTodos) =>
            currentTodos.filter((todo) => todo.id !== id)
        );
    }

    // Set the background color directly on the body tag
    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);

    return (
        <>
            <GradientComponent onBackgroundColorChange={setBackgroundColor} />
            <div className="app-container">
                <NewTodoForm onSubmit={addTodo} />
                <h1 className="header">Todo List:</h1>
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </div>
        </>
    );
}

export default App;