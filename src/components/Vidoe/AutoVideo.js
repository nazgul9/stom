import React, { useState } from 'react';
import video from "./video.mp4"
import Aidarov from "./Aidarov.png"



function AutoVideo(props) {
    const [check, setCkeck] = useState(false)
    return (<div className={"auto_video mt-3"}
        onClick={() => setCkeck(!check)} >
        <video preload="auto" poster={Aidarov} playsinline="" autoplay="" muted="" loop={true}> <source src={video} type="video/mp4" /> </video>
    </div>
    );
}

export default AutoVideo;