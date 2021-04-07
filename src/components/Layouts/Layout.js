import Aux from "../../hoc/Aux"
import './Layout.css';

const Layout = (props) => {
    return (
        <Aux>
            <header>Header</header>
            <main className='Content'>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout
