import './TodoBuilder.css'

function TodoBuilder(props) {
    const toggled = props.toggle;
    const onSubmit = (e) => {
        e.preventDefault();
        // Check for empty input
        if (e.target[0].value === '') {
            return;
        }
        console.log(e.target[0].value)
        let details = {
            'text': e.target[0].value
        }
        props.addTodo(details);
    }
    if (toggled) {
        return (
            <div className="todo-builder-div">
                <form id="todo-form" onSubmit={onSubmit} className="todo-builder-form">
                    <input className="todo-builder-form__input" type="text" />
                </form>
                <button type="submit" form="todo-form" className="todo-builder__add-btn">+</button>
            </div>
        )
    }
    else {
        return null;
    }
}

export default TodoBuilder;