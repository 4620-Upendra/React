import "./card.css"
// functional Component returns value
function card(props){

return(
    <div className="stdcard">
        <h3>Name:{props.name}</h3>
        <h3>Age:{props.age}</h3>
        <h3>city:{props.city}</h3>
    </div>
)

}

export default card
