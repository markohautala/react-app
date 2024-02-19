export function NewTodoForm( { addTodo }) {
    const [newItem, setNewItem] = useState("")  // This is a React hook

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        addTodo(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem}
                    onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}