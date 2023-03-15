import "./App-Footer.scss";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faMedal, faBolt, faTrophy, faCrown } from '@fortawesome/free-solid-svg-icons'
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

function AppFooter() {
    const { isShowing, toggleModal } = useModal();
    const [backgroundStyle, setBackgroundStyle] = useState("");

    const toggleBackground = () => {
        setBackgroundStyle(backgroundStyle === "" ? "easterSticks" : "");
    };

    return (
        <footer className={backgroundStyle}>
            <div className="footerRow">
                <div className="footerColumn verticalBar">
                    <div className="inline">
                        <FontAwesomeIcon icon={faAward} />
                        <h1>100% Guarantee</h1>
                    </div>
                    <h2 className="smallText">MEET THE TEAM</h2>
                    <div className="smallText">This webpage was created in a hurry by Bryan Danaher. That's me! I'm the entire team. Hello.</div>
                    <div className="footerRow">
                        <div className="smallText">Why would anybody have four pairs of sunglasses in their pockets at the same time? I say, there's no such thing as too much glare protection.</div>
                    </div>
                </div>
                <div className="footerColumnRight">
                    <div className="footerRow">
                        <div className="footerColumn">
                            <div className="smallText"><b><u>CERTIFICATIONS</u></b></div>
                            <div className="inline">
                                <FontAwesomeIcon icon={faCrown} />
                                <div className="smallText">Quality</div>
                            </div>
                            <div className="inline">
                                <FontAwesomeIcon icon={faMedal} />
                                <div className="smallText">Excellence 2023</div>
                            </div>
                            <div className="inline">
                                <FontAwesomeIcon icon={faBolt} />
                                <div className="smallText">Dynamic</div>
                            </div>
                            <div className="inline">
                                <FontAwesomeIcon icon={faTrophy} />
                                <div className="smallText">3 Years Running</div>
                            </div>
                        </div>
                        <div className="footerColumn">
                            <div className="smallText"><b><u>MORE LINKS</u></b></div>
                            <div onClick={toggleModal} className="smallLink smallText">FAQ</div>
                            <Modal isShowing={isShowing} hide={toggleModal}
                                title="FAQ page not implemented yet!"
                                text='Have you ever looked at an FAQ and thought to yourself, "Nobody really asked these! I bet these are all fake questions!"' />
                            <a href="mailto:sticks.of.quality@gmail.com" className="smallText">sticks.of.quality@gmail.com</a>
                            {/* <div className="smallText">1-111-111-1111</div> */}
                        </div>
                    </div>
                </div>

            </div>
            <div className="footerRow">
                <button className="easterEgg title" onClick={toggleBackground}>
                    Quality Sticks
                </button>
            </div>
        </footer >
    );
}
export default AppFooter;
