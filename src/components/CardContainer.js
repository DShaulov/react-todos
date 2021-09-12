import './CardContainer.css'
import TodoCard from './TodoCard';

function CardContainer(props) {
    const buildTodos = (tasks) => {
        let todoArray = [];
        for (var key in Object.keys(tasks)) {
            todoArray.push(<TodoCard key={key} id={key} text={tasks[key]['text']}/>);
        }
        return todoArray;
    }
    return(
        <div className="card-container">
          {buildTodos(props.todos)} 
        </div>
    )
}
export default CardContainer;