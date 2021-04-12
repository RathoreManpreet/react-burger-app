import burgerImage from '../../assets/images/logo.png'
import './Logo.css'
function Logo(props) {
    return (
        <div className="Logo">
            <img src={burgerImage} alt="Burger Logo" />
        </div>
    )
}

export default Logo
