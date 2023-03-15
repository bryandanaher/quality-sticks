import "./Burger-Menu.scss";

function BurgerMenu() {

    function toggleOverflow() {
        document.body.style.overflow === "hidden" ? document.body.style.overflow = "" : document.body.style.overflow = "hidden";
    }

    return (
        <div className="burgerContainer">
            <input onClick={toggleOverflow}
                className="checkbox" type="checkbox" />
            <div className="burgerLines">
                <span className="burgerLine line1"></span>
                <span className="burgerLine line2"></span>
                <span className="burgerLine line3"></span>
            </div>
            <div className="menuItems">
                <li><a href="#">Unfortunately</a></li>
                <li><a href="#">None Of</a></li>
                <li><a href="#">These</a></li>
                <li><a href="#">Links</a></li>
                <li><a href="#">Currently</a></li>
                <li><a href="#">Work</a></li>
            </div>
        </div>
    );
}
export default BurgerMenu;
