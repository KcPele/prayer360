import React, { useState, useContext } from 'react';
import axios from 'axios';

import AuthContext from '../../context/auth/authContext';
import GurujiContext from '../../context/guruji/gurujiContext';

const ImageUploadModal = ({setModal}) => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const gurujiContext = useContext(GurujiContext);
    const { uploadContent } = gurujiContext;

    const [seletedImage, setSelectedImage] = useState("");
    const [title, setTitle] = useState("");
    const [plan, setPlan] = useState("");

    const uploadImage = (e) => {
        e.preventDefault();

        delete axios.defaults.headers.common["Authorization"];

        const formData = new FormData();
        formData.append("file", seletedImage);
        formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

        axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, formData).then((response) => {

            axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;

            const formData = {
                title: title,
                plan: plan,
                path: response.data.secure_url,
            }

            uploadContent(formData);
            setModal(false);
        });
    };

    const fileChangeHandler = (e) => {
        if(e.target.files[0] !== undefined) {
            setSelectedImage(e.target.files[0]);
        } else {
            setSelectedImage("");
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
                        <form onSubmit={uploadImage} className="mr-4 mt">
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
                                <label htmlFor="file_input" className="form-group col-md-6 upload">
                                    <h4>Upload File</h4>
                                    {seletedImage === "" ? 
                                        <p>Video should not be more than 300mb</p>
                                    : 
                                        <p>{seletedImage.name}</p>
                                    }
                                    
                                    <img src="img/add-folder.png" alt="" width="40" className="mt-3" />
                                </label>
                                <input onChange={fileChangeHandler} type="file" id="file_input" hidden />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn mt-3 mb-3"
                                    style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: "1.3rem 6rem", color: "#fff" }}>
                                        <b>COMPLETE UPLOAD</b>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageUploadModal;