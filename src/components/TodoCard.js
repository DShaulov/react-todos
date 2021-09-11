import './TodoCard.css'

function TodoCard(props) {
    const completeTodo = () => {
        let audio = document.getElementsByClassName('audio')[0];
        let promise = audio.play();
        if (promise !== null) {
            promise.then();
        }
    }
    const text = props.details['text'];
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
                <button className="todo-card-del-btn">-</button>
            </div>
        </div>
    )
}
export default TodoCard;