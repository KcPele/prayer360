import { useEffect, useRef } from "react";
import moment from 'moment';

const Content = ({currentContent, user}) => {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if( cloudinaryRef.current ) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'toxaswift',
            secure: true
        });
    }, []);

    let contentActive = false;

    if(user.role === 'USER' && user.guruji_subscribed_to === null) {
        contentActive = false;
    } else if(user.role === 'USER' && user.plan !== currentContent.plan) {
        contentActive = false;
    } else {
        contentActive = true;
    }

    return (
        <div className="col-md-6 col-lg-3 pb-4" style={ contentActive === false  ? { pointerEvents: "none", opacity: "0.3" } : {}}>
            <div className="card-image" style={{ position: "relative" }}>
                <video 
                    ref={videoRef}
                    data-cld-public-id={currentContent.public_id}
                    className="cld-video-player cld-fluid"
                    controls
                    height="20"
                />
            </div>
            <div className="row">
                <div className="col-8 col-sm-8 col-md-8">
                    <h6 className="card-title mb-0">{currentContent.title}</h6>
                    <p>
                        {moment(currentContent.created_at).fromNow()}
                    </p>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="dropdown">
                        <a href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            <img src="img/option.png" alt="" width="20" />
                        </a>

                        <div className="dropdown-menu" style={{ marginRight: "rem" }}>
                            <a className="dropdown-item" href="#"><span><img src="img/archive.png" className="mr-3" alt="" width="15" /></span>Archive
                            </a>
                            <a className="dropdown-item" href="#"><span><img src="img/share.png" className="mr-3" alt="" width="15" /></span>Share</a>
                            <a className="dropdown-item" href="#"><span><img src="img/trash.png" className="mr-3" alt="" width="15" /></span>Delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;