import React, { useState } from "react";
import "./App-Landing.scss";
import AppSlide from "./App-Slide/App-Slide";
import AppMarquee from "./App-Marquee/App-Marquee";

function AppLanding() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [index, setIndex] = useState(0);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setWindowHeight(window.innerHeight);
    };

    const increment = () => {
        setIndex(index >= 2 ? 0 : index + 1);
    }
    const decrement = () => {
        setIndex(index <= 0 ? 2 : index - 1);
    }

    return (
        <div>
            <div className="landing" style={{ height: windowHeight - 170 + 'px' }}>
                <div id="sliderContainer">
                    <div className="slider"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                        <div id="landingCard1" className="slideWindow">
                            <AppSlide titleText="Best Sticks of 2023"
                                subText="Try sticks today. Cancel anytime."
                                increment={increment}
                                decrement={decrement} />
                        </div>
                        <div id="landingCard2" className="slideWindow">
                            <AppSlide titleText="Act Now!"
                                subText="Our warehouse is full of sticks. Sticks everywhere."
                                increment={increment}
                                decrement={decrement} />
                        </div>
                        <div id="landingCard3" className="slideWindow">
                            <AppSlide titleText="The Beach Has Sticks Too"
                                subText="Beach sticks are highly prized by artists."
                                increment={increment}
                                decrement={decrement} />
                        </div>
                    </div>

                    <div className="sliderDots">
                        <div key="0"
                            className={`sliderDot${index === 0 ? " active" : ""}`}
                            onClick={() => {
                                setIndex(0);
                            }}
                        ></div>
                        <div key="1"
                            className={`sliderDot${index === 1 ? " active" : ""}`}
                            onClick={() => {
                                setIndex(1);
                            }}
                        ></div>
                        <div key="2"
                            className={`sliderDot${index === 2 ? " active" : ""}`}
                            onClick={() => {
                                setIndex(2);
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <AppMarquee />
        </div>
    )
}
export default AppLanding;

/* <div>{`Window height = ${windowHeight}`}</div> */