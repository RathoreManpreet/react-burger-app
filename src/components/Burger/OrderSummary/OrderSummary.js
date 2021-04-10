import Aux from "../../../hoc/Aux"
import Button from "../../UI/Button/Button";


const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(key => {
        return <li key={key}> <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}</li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button class="Danger" >Cancel</Button>
            <Button class="Success">Continue</Button>
        </Aux>
    )
}

export default OrderSummary
