import './CardContainer.css'
import TodoCard from './TodoCard';
import TodoBuilder from './TodoBuilder';
import { useState } from 'react';
import AddTodoButton from './AddTodoButton';

function CardContainer(props) {
    const [todoID, incrementTodoID] = useState(0);
    const [todos, setTodos] = useState({});
    const [completedTodos, setCompletedTodos] = useState({});
    const [builderToggle, setBuilderToggle] = useState(false);
    const toggleBuilder = () => {
        setBuilderToggle(!builderToggle);
    }
    const addTodo = (details) => {
        let newTodos = {...todos};
        newTodos[todoID] = {};
        newTodos[todoID]['text'] = details['text'];
        newTodos[todoID]['completed'] = false;
        incrementTodoID(todoID + 1);
        setTodos(newTodos);
        setBuilderToggle(!builderToggle);
    }
    const completeTodo = (id) => {
        let todo = todos[id];
        if (todo !== undefined) {
            todo['completed'] = true;
            let newTodos = {...todos};
            let newCompletedTodos = {...completedTodos};
            newCompletedTodos[id] = todo;
            delete newTodos[id];
            setTodos(newTodos);
            setCompletedTodos(newCompletedTodos);
        }
        else {
            todo = completedTodos[id];
            todo['completed'] = false;
            let newTodos = {...todos};
            let newCompletedTodos = {...completedTodos};
            newTodos[id] = todo;
            delete newCompletedTodos[id];
            setTodos(newTodos);
            setCompletedTodos(newCompletedTodos);
        }
    }
    const buildTodos = (tasks) => {
        let todoArray = [];
        for (var key in tasks) {
            todoArray.push(<TodoCard key={key} id={key} text={tasks[key]['text']} completeTodo={completeTodo} completed={tasks[key]['completed']}/>);
        }
        return todoArray;
    }
    if (Object.keys(completedTodos).length > 0) {
        return (
            <div className="card-container">
                <AddTodoButton clickHandler={toggleBuilder} />
                <TodoBuilder toggled={builderToggle} addTodo={addTodo} />
                <div className='card-container__todo-div'>
                    {buildTodos(todos)} 
                </div>
                <div className="card-container__completed-todo-div">
                    <h4 className="card-container__completed-todo-div__title">Completed:</h4>
                    {buildTodos(completedTodos)}
                </div>
            </div>    
        )
    }
    else {
        return(
            <div className="card-container">
                <AddTodoButton clickHandler={toggleBuilder} />
                <TodoBuilder toggled={builderToggle} addTodo={addTodo} />
                <div className='card-container__todo-div'>
                    {buildTodos(todos)} 
                </div>
            </div>
        )
    }
    
}
export default CardContainer;