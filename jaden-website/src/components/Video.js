import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import './Video.css';

const YOUTUBE_VIDEOS = ["https://www.youtube.com/embed/82UsnbunJUs", "https://www.youtube.com/embed/huRFB-urWAc", "https://www.youtube.com/embed/7i1w4N29C9I", "https://www.youtube.com/embed/L0blnTRD2qU"];

function Video() {
    const [video, setVideo] = useState(YOUTUBE_VIDEOS[0]);
    let refContainers = useRef(***REMOVED***)

    refContainers.current = [0,0,0,0].map(
        (ref, index) =>   refContainers.current[index] = React.createRef()
    )

    function cycleVideo (video) {
        setVideo(YOUTUBE_VIDEOS[video]);
        console.log(refContainers.current.length)
        for (var i = 0; i < refContainers.current.length; i++) {
            refContainers.current[i].className = "btn btn--cycle btn--circle"
        }
        refContainers.current[video].className = "btn btn--cycle btn--circle btn--select"
    };

    return (
        <div className="video-container">
            <div className="home-wrapper">
                <h1 className="title-release">CTV3 OUT NOW</h1>
                <div className="video-player">
                    <iframe width="560" height="349" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="0"></iframe>  
                </div>
                <Button ref={(Button) => refContainers.current[0] = Button} buttonStyle="btn--cycle" buttonSize="btn--circle" buttonState="btn--select" onClick={() => cycleVideo(0)}></Button>
                <Button ref={(Button) => refContainers.current[1] = Button} buttonStyle="btn--cycle" buttonSize="btn--circle" onClick={() => cycleVideo(1)}></Button>
                <Button ref={(Button) => refContainers.current[2] = Button} buttonStyle="btn--cycle" buttonSize="btn--circle" onClick={() => cycleVideo(2)}></Button>
                <Button ref={(Button) => refContainers.current[3] = Button} buttonStyle="btn--cycle" buttonSize="btn--circle" onClick={() => cycleVideo(3)}></Button>
            </div>
        </div>
    );
}

export default Video;
