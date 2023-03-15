import "./App-Slide.scss";
import {useState} from "react";
import Modal from "../../../Modal/Modal";
import useModal from "../../../Modal/useModal";

function AppSlide({ titleText, subText, increment, decrement }) {
    //TODO: show/hide logic interferes with the slideshow positioning. Fix later or never.
    const [buttonStyle, setButtonStyle] = useState("flex");
    const {isShowing, toggleModal} = useModal();

    const showHide = () => {
        if(buttonStyle === "none") {
            setButtonStyle("flex");
        } else {
            setButtonStyle("flex");
        }
     };

    return (
        <div className="slideContainer">
            <div className="slideNavContainer"
                onMouseEnter={() => showHide()}
                onMouseLeave={() => showHide()}>
                <button style={{display: buttonStyle}} onClick={() => decrement()}>
                    <div className="leftArrow arrow"></div>
                </button>
            </div>
            <div className="callToActionContainer">
                <div className="callToAction">
                    <div className="cta-title">{titleText}</div>
                    <div className="cta-sub">{subText}</div>
                    <button onClick={toggleModal}>Subscribe Now</button>
                    <Modal isShowing={isShowing} hide={toggleModal} 
                        title="Feature not implemented yet!" text="I wonder what would a stick-themed newsletter look like?"/>
                </div>
            </div>
            <div className="slideNavContainer"
                onMouseEnter={() => showHide()}
                onMouseLeave={() => showHide()}>
                <button style={{display: buttonStyle}} onClick={() => increment()}>                    
                    <div className="rightArrow arrow"></div>
                </button>
            </div>
        </div>
    )
}
export default AppSlide;
