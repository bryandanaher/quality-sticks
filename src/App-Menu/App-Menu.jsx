import "./App-Menu.scss";
import BurgerMenu from "./Burger-Menu/Burger-Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function AppMenu() {
    return (
        <div className="menubar">
            <BurgerMenu />
            <div className="title">Quality Sticks</div>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}
export default AppMenu;
