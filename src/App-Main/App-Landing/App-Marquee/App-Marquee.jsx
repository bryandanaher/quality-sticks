import "./App-Marquee.scss";

function AppMarquee() {
    return (
        <div className="marqueeContainer">
            {/* Although the name of this element is marquee, I made the decision to display static text instead, because the marquee tag is not considered a best practice from a UX perspective. */}
            <p>From your own backyard!</p>
            <p>Quality Guaranteed</p>
            <p>Synergy</p>
        </div>
    );
}
export default AppMarquee;