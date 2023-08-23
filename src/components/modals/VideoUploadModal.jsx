import React, { useState, useContext, useEffect, useRef } from 'react';

import GurujiContext from '../../context/guruji/gurujiContext';

const VideoUploadModal = ({setModal}) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();


    const gurujiContext = useContext(GurujiContext);
    const { uploadContent } = gurujiContext;

    const [title, setTitle] = useState("");
    const [plan, setPlan] = useState("");

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;

        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        }, function(error, result) {
            
            if(result.event === 'success'){
                const formData = {
                    title: localStorage.getItem("video_title"),
                    plan: localStorage.getItem("video_plan"),
                    path: result.info.secure_url,
                    public_id: result.info.public_id,
                }

                uploadContent(formData);

                localStorage.removeItem("video_title");
                localStorage.removeItem("video_plan");
                setModal(false);
            }
        })
        // eslint-disable-next-line
    }, []);

    const fileChangeHandler = (e) => {
        if(title === "" || plan === ""){
            alert("Add title and plan");
        } else {
            localStorage.setItem("video_title", title);
            localStorage.setItem("video_plan", plan);
            widgetRef.current.open();
        }
    };

    const titleChnageHandler = (e) => {
        setTitle(e.target.value);
    }

    const planChangeHandler = (e) => {
        setPlan(e.target.value);
    }

    return (
        <div id="upload" data-backdrop="static" data-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" style={{ width: "100%", height: "100vh", margin: "0 auto", position: "absolute", top: "12%", zIndex: "100", overflowY: "scroll" }}>
            <div className="overlay"></div>
            <div className="modal-dialog  modal-xl">
                <div className="modal-content py-2 px-3">
                    <div className="modal-header pb-0  d-flex justify-content-center" style={{ border: "none" }}>
                        <button onClick={() => setModal(false)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <img src="img/cancel.png" alt="" width="30" />
                            </span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ padding: "3rem 5rem" }}>
                        <form className="mr-4 mt">
                            <div className="form-group">
                                <label>(Not more than 30 characters)</label>
                                <input type="text" onChange={titleChnageHandler} className="form-control" style={{ height: "4rem" }} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label><b>Choose Plan</b></label>
                                    <select onChange={planChangeHandler} className="form-control" style={{ height: "4rem" }}>
                                        <option value="basic">Basic Plan</option>
                                        <option value="premium">Premium Plan</option>
                                        <option value="elite">Elite Plan</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <label style={{ cursor: "pointer" }} className="form-group col-md-6 upload" onClick={fileChangeHandler}>
                                    <h4>Upload File</h4>

                                    <img src="img/add-folder.png" alt="" width="40" className="mt-3" />
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoUploadModal;