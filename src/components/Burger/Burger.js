import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = (props) => {
    //['salad','bacon','cheese','meat']
    const tranformedIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <BurgerIngredient type={key} key={key + i} />
        })
    });
    return (
        <div className="Burger">

            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger
