import './TodoCard.css'

function TodoCard(props) {
    const id = props.details['id'];
    const text = props.details['text'];
    const completed = props.details['completed'];
    const completeTodo = props.eventHandlers['completeTodo'];
    const removeTodo = props.eventHandlers['removeTodo']

    return (
        <div className="todo-card-div">
            <div className="todo-card-checkbox-div">
                <audio src="/react-todo/public/dingSound.mp3" className="audio"></audio>
                <input onChange={() => {completeTodo(id)}} type="checkbox" checked={completed} className="todo-card-checkbox"/>
            </div>
            <div className="todo-card-text-div">
                <p className="todo-card-text">{text}</p>
            </div>
            <div className="todo-card-del-div">
                <button className="todo-card-del-btn" onClick={() => {removeTodo(id)}}>-</button>
            </div>
        </div>
    )
}
export default TodoCard;