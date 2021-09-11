import './CardContainer.css'

function CardContainer(props) {
    return(
        <div className="card-container">
          {props.todos} 
        </div>
    )
}
export default CardContainer;