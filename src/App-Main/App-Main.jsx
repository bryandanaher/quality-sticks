import "./App-Main.scss";
import AppFooter from "../App-Footer/App-Footer";
import AppMenu from "../App-Menu/App-Menu";
import AppLanding from "./App-Landing/App-Landing";
import TextInterstitial from "./Text-Interstitial/Text-Interstitial";
import ImageCard from "./Image-Card/Image-Card";
import ProductShowcase from "./Product-Showcase/Product-Showcase";
import VideoCard from "./Video-Card/Video-Card";
import SideBySide from "./Side-By-Side/Side-By-Side";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function AppMain() {
    const { isShowing, toggleModal } = useModal();

    return (
        <div className="container">
            <AppMenu />
            <div className="bodyContainer">
                <AppLanding />
                <div className="paddedArea">
                    <TextInterstitial />
                    <ImageCard />
                    <div className="spacerText">
                        <h1>Everybody needs sticks!</h1>
                        <h1>We've got you covered.</h1>
                        <div className="inline">
                            <p>Explore the world of sticks</p>
                            <button onClick={toggleModal}>Shop Bestsellers 
                            <FontAwesomeIcon icon={faArrowRightLong} /></button>
                            <Modal isShowing={isShowing} hide={toggleModal}
                                title="Feature not implemented yet!"
                                text="In my heart, all our sticks are bestsellers." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bodyDark">
                <ProductShowcase />
            </div>

            <div className="bodyContainer">
                <div className="paddedArea">
                    <VideoCard />
                </div>
            </div>
            <SideBySide />
            <AppFooter />
        </div>
    );
}
export default AppMain;
