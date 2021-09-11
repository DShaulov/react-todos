import './CardContainer.css'

function CardContainer(props) {
    const todoArray = [];
    for (var key of Object.keys(props.todos)) {
        todoArray.push(props.todos[key]);
    }
    return(
        <div className="card-container">
          {todoArray} 
        </div>
    )
}
export default CardContainer;