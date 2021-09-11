import './App.css';
import { useState } from 'react';
import TitleCard from './components/TitleCard';
import AddTodoButton from './components/AddTodoButton';
import CardContainer from './components/CardContainer';
import TodoCard from './components/TodoCard';
import TodoBuilder from './components/TodoBuilder';

function App() {
  const [todos, setTodos] = useState([]);
  const [builderToggle, setBuilderToggle] = useState(false);
  const toggleBuilder = () => {
    setBuilderToggle(!builderToggle);
  }
  const addTodo = (details) => {
    let arr = [...todos];
    arr.push(<TodoCard key={todos.length} details={details}/>)
    setTodos(arr);
    setBuilderToggle(!builderToggle);
  }
  return (
    <div className="App">
      <TitleCard/>
      <AddTodoButton clickHandler={toggleBuilder}/>
      <TodoBuilder toggle={builderToggle} addTodo={addTodo}/>
      <CardContainer todos={todos}/>  
    </div>
  );
}

export default App;
