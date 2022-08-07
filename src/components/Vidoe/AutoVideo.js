import React, { useState } from 'react';
import {IoIosPause} from 'react-icons/io'
import {BsFillPlayFill} from 'react-icons/bs'


function AutoVideo(props) {
    const [check, setCkeck] = useState(false)
    return (
        <div className={"auto_video mt-3"}
        onClick={() => setCkeck(!check)} >
            <span className='click'>{ check ?<IoIosPause/>:<BsFillPlayFill/>}</span>
            <video preload="auto" poster="https://dl.dropboxusercontent.com/s/z4dkta071b8459m/C5870F9B-5166-4935-B62F-593251B3A7D2%20%281%29.JPG?dl=0" playsinline="" autoplay="" muted="" loop={true}> <source src="https://dl.dropboxusercontent.com/s/r4r5d2hlag7uqj5/%D0%B2%D0%B8%D0%BD%D0%B8%D1%80%D1%8B%28%D0%B1%D0%B5%D0%B7%20%D0%B7%D0%B2%D1%83%D0%BA%D0%B0%29.mp4?dl=0" type="video/mp4"/> </video>
        </div>
    );
}

export default AutoVideo;
    