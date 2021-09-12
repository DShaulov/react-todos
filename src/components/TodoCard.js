import './TodoCard.css'
import { useState } from 'react';

function TodoCard(props) {
    const id = props.id;
    const [completed, setCompleted] = useState(false);
    const completeTodo = () => {
        setCompleted(!completed);
    }
    const removeTodo = (id) => {
        props.removeTodo(id);
    }
    const text = props.text;
    return (
        <div className="todo-card-div">
            <div className="todo-card-checkbox-div">
                <audio src="/react-todo/public/dingSound.mp3" className="audio"></audio>
                <input onClick={completeTodo} type="checkbox" className="todo-card-checkbox"/>
            </div>
            <div className="todo-card-text-div">
                <p className="todo-card-text">{text}</p>
            </div>
            <div className="todo-card-del-div">
                <button className="todo-card-del-btn" onClick={() => removeTodo(id)}>-</button>
            </div>
        </div>
    )
}
export default TodoCard;