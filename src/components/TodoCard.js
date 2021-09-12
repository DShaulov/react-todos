import './TodoCard.css'

function TodoCard(props) {
    return (
        <div className="todo-card-div">
            <div className="todo-card-checkbox-div">
                <audio src="/react-todo/public/dingSound.mp3" className="audio"></audio>
                <input onClick={() => {props.completeTodo(props.id)}} type="checkbox" checked={props.completed} className="todo-card-checkbox"/>
            </div>
            <div className="todo-card-text-div">
                <p className="todo-card-text">{props.text}</p>
            </div>
            <div className="todo-card-del-div">
                <button className="todo-card-del-btn" onClick={() => props.removeTodo(props.id)}>-</button>
            </div>
        </div>
    )
}
export default TodoCard;