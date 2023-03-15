import "./Video-Card.scss";

function VideoCard() {
    return (
        <div>
            <div className="videoContainer">
                <video autoPlay muted loop>
                    <source src="/video/puppy-4740.mp4" type="video/mp4" />
                </video>
                <div className="videoCaption">
                    <h1>Sticks.</h1>
                    <p><u>This video unfortunately doesn't feature any sticks.</u> Here's what happened: I spent about 7 minutes looking through stock footage, and in that time I only found one free video where a dog was playing with a stick. But much to my chagrin, the lighting wasn't very good. Then I found this video, and the light is great and this puppy is frankly cuter. So, you know, there's that.</p>
                </div>
            </div>
        </div>
    );
}
export default VideoCard;
