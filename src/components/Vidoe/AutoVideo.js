import React from 'react';
import v from './v.mp4'

function AutoVideo(props) {
    return (
        <div className={"auto_video mt-3"}>
            <div className='border_video'>
                {/* <video width="640" height="360">
                    <source  src="http://www.youtube.com/watch?v=ye82js0sL32" aria-controls='1' />
                </video> */}
                <img width={"50%"}  src='https://blog.logrocket.com/wp-content/uploads/2021/05/displaying-images-react-native-image-component.png' />
            </div>

        </div>
    );
}

export default AutoVideo;
