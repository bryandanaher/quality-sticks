import "./Product-Showcase.scss";
import ProductCard from "./Product-Card/Product-Card";
import Modal from "../../Modal/Modal";
import useModal from "../../Modal/useModal";

function ProductShowcase() {
    const { isShowing, toggleModal } = useModal();

    var pocketStickArray = ["/ai_pocket_sticks.jpg"];
    var stickJarArray = ["/ai_stick_jar.jpg"];
    var wizardStickArray = ["/ai_wizard_sticks.jpg"];
    var pointingStickArray = ["/ai_stick_fun.jpg"];
    var redStickArray = ["/ai_red_sticks.jpg"];
    var beachStickArray = ["/ai_beach_twigs.jpg"];
    var coffeeStickArray = ["/ai_coffee_sticks.jpg"];
    var technologyStickArray = ["/ai_techno_sticks.jpg"];

    return (
        <div className="showcaseContainer">
            <div className="showcaseCardContainer">
                <ProductCard imgUrlArray={pocketStickArray}
                    altText="Pocket Sticks"
                    title="Sticks for Your Pockets"
                    competitorPrice="$11,000"
                    cost="$11.99" />
                <ProductCard imgUrlArray={stickJarArray}
                    altText="Yellow Sticks in a Jar"
                    title="Yellow Sticks in a Jar"
                    competitorPrice="$14"
                    cost="$20" />
                <ProductCard imgUrlArray={wizardStickArray}
                    altText="Wizard Sticks"
                    title="Sticks for Wizards to Use"
                    cost="$100" />
                <ProductCard imgUrlArray={pointingStickArray}
                    altText="Pointing Sticks"
                    title="Sticks for Pointing at Trees"
                    cost="$5" />
                <ProductCard imgUrlArray={redStickArray}
                    altText="Red Sticks"
                    title="Red Sticks"
                    competitorPrice="$8.01"
                    cost="$8" />
                <ProductCard imgUrlArray={beachStickArray}
                    altText="Artistic Beach Sticks"
                    title="Artistic Beach Sticks"
                    competitorPrice="Priceless"
                    cost="$18"
                    sticker="new" />
                <ProductCard imgUrlArray={coffeeStickArray}
                    altText="Sticks and Coffee"
                    title="Sticks and Coffee"
                    cost="$1.50" />
                <ProductCard imgUrlArray={technologyStickArray}
                    altText="Technology Sticks"
                    title="Technology Sticks"
                    competitorPrice="$5.12"
                    cost="$10.24" />
            </div>
            <button onClick={toggleModal}>Shop All</button>.
            <Modal isShowing={isShowing} hide={toggleModal}
                title="Feature not implemented yet!"
                text="Maybe one day." />
        </div>
    );
}
export default ProductShowcase;
