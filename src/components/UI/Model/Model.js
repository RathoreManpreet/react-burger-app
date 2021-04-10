import Aux from "../../../hoc/Aux"
import './Model.css';

const Model = (props) => {
    return (
        <Aux>
            <div className="Modal">
                {props.children}
            </div>
        </Aux>

    )
}

export default Model
