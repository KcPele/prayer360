import { useEffect, useRef } from "react";

const VideoPlayer = ({width, height}) => {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if( cloudinaryRef.current ) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'toxaswift'
        });
    }, []);

    return (
        <video 
            ref={videoRef}
            data-cld-public-id="race_road_car"
            // className="cld-video-player cld-fluid"
            width={width}
            height={height}
            controls
            // muted
        />
    );
}

export default VideoPlayer;
