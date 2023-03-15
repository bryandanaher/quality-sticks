import "./Product-Card.scss";
import Modal from "../../../Modal/Modal";
import useModal from "../../../Modal/useModal";

function ProductCard({ imgUrlArray, altText, dotColorArray, title, competitorPrice, cost, sticker }) {
    const { isShowing, toggleModal } = useModal();

    return (
        <div className="productCardContainer" onClick={toggleModal}>
            {sticker && <div className="sticker">{sticker}</div>}
            <img src={imgUrlArray[0]} alt={altText}></img>
            <div className="productText">
                <h2>{title}</h2>
                <div className="productCost"><del>{competitorPrice}</del>{cost}</div>
            </div>
            <Modal isShowing={isShowing} hide={toggleModal}
                title="We just sold out of those."
                text="Dang it!" />
        </div>
    );
}
export default ProductCard;
