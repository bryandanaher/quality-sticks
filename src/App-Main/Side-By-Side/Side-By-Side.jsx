import "./Side-By-Side.scss";
import { useState } from "react";

function SideBySide() {
    const [background, setBackground] = useState("image2");

    function toggleBackground() {
        setBackground(background === "image2" ? "image2 tree" : "image2");
    }

    return (
        <div className="sideBySideContainer">
            <div className="image1">
                <div className="sbs-textContainer">
                    <h1>Sometimes</h1>
                    <p>It's hard to tell if walking sticks are too large or too small.</p>
                </div>
            </div>
            <div className={background}>
                <div className="sbs-textContainer">
                    <h1 onClick={toggleBackground}>Click Here</h1>
                    <p>For a sneak-peek at our stick production facility!</p>
                </div>
            </div>
        </div>
    )
}
export default SideBySide;
