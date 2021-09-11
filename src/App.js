import './App.css';
import { useState } from 'react';
import TitleCard from './components/TitleCard';
import AddTodoButton from './components/AddTodoButton';
import CardContainer from './components/CardContainer';
import TodoCard from './components/TodoCard';
import TodoBuilder from './components/TodoBuilder';

function App() {
    const [todoID, incrementTodoID] = useState(0);
    const [todos, setTodos] = useState({});
    const [completedTodos, setCompletedTodos] = useState({});
    const [builderToggle, setBuilderToggle] = useState(false);
    const toggleBuilder = () => {
        setBuilderToggle(!builderToggle);
    }
    const addTodo = (details) => {
        let dict = {...todos};
        dict[todoID] = <TodoCard key={todoID} details={details} completeTodo={completeTodo} id={todoID}/>;
        setTodos(dict);
        setBuilderToggle(!builderToggle);
        incrementTodoID(todoID + 1);
    }
    const completeTodo = (id) => {
        console.log(id);
    }
    return (
        <div className="App">
            <TitleCard />
            <AddTodoButton clickHandler={toggleBuilder} />
            <TodoBuilder toggle={builderToggle} addTodo={addTodo} />
            <CardContainer todos={todos} />
            {Object.keys(completedTodos).length !== 0
                ? <div className="completed-div">
                    <h4>Completed:</h4>
                </div>
                : null
            }
        </div>
    );
}

export default App;
