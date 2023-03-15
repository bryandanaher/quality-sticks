import "./Image-Card.scss";
import Modal from "../../Modal/Modal";
import useModal from "../../Modal/useModal";

function ImageCard() {
    const { isShowing, toggleModal } = useModal();

    return (
        <div className="imageCardContainer">
            <div className="sticker">New!</div>
            <div className="cardCallToAction">
                <h1>Try Yellow Sticks</h1>
                <p>Sticks have never been yellow before...until now!</p>
                <button onClick={toggleModal}>GET STARTED</button>
                <Modal isShowing={isShowing} hide={toggleModal}
                    title="Feature not implemented yet!"
                    text="We may have exaggerated the availability of yellow sticks." />
            </div>
        </div>
    );
}
export default ImageCard;
