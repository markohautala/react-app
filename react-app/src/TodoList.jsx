export function TodoList({ todos }) {
    return (
        <ul className="list">
            {todos.length === 0 && <li>No items yet!</li>}
            {todos.map(todo => {
                return (
                <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id}/>
                )
            })}
        </ul>
    )
}