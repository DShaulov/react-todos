import './AddTodoButton.css'

function AddTodoButton(props) {
    return (
        <button onClick={props.clickHandler} className="add-todo-button">+</button>
    )
}
export default AddTodoButton;