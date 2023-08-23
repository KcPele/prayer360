import React, { useContext, useState, useEffect } from 'react';
import Header from '../layout/Header';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import SharedContext from '../../context/shared/sharedContext';
import AdminContext from '../../context/admin/adminContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const sharedContext = useContext(SharedContext);
    const { requestResponse, updatePassword, sharedError, updateProfileData, clearErrorResponsState } = sharedContext;

    const adminContext = useContext(AdminContext);
    const { updatedStoreLink, setStoreLink } = adminContext;

    const notify = (msg) => toast(msg);

    useEffect(() => {
        if(requestResponse !== null){
            notify(`${requestResponse.message}`);
            clearErrorResponsState();
        } else if(sharedError !== null){
            notify(`${sharedError}`);
            clearErrorResponsState();
        }
    }, [requestResponse, sharedError, clearErrorResponsState]);

    useEffect(() => {
        if(updatedStoreLink !== null) {
            notify(`${"Link updated"}`);
        }
    }, [updatedStoreLink]);

    const [passwordData, setPasswordData] = useState({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
    });

    const [profileData, setProfileData] = useState({
        wallet_address: "",
        calendly_link: ""
    });

    const [storeLink, SetStoreLink] = useState("");

    const onChange = (e) => setPasswordData({ ...passwordData, [e.target.name]: e.target.value });

    const onUpdatePasswordSubmit = (e) => {
        e.preventDefault();
        const {current_password, new_password, new_password_confirmation} = passwordData;

        if(current_password === "" || new_password === "" || new_password_confirmation === ""){
            notify("Please fill all password fields");
        }else if(new_password !== new_password_confirmation) {
            notify("Password mismatch");
        } else {
            updatePassword(user.id, passwordData);
        }
    }

    const onProfileChange = (e) => setProfileData({ ...profileData, [e.target.name]: e.target.value });

    const onUpdateProfileSubmit = (e) => {
        e.preventDefault();

        updateProfileData(user.id, profileData);
    }

    const onStoreLinkChange = (e) => {
        SetStoreLink(e.target.value);
    }

    const onSetStoreLinkSubmit = (e) => {
        e.preventDefault();

        if(storeLink === ""){
            notify("Can't submit empty field");
        } else {
            const formData = {
                store_link: storeLink
            }

            setStoreLink(formData);
        }
    }

    if(user !== null) {
        return (
            <>
                <Header />
                <main>
                    <div className="row align-items-center justify-content-center">
                        <SideNav />
                        <ToastContainer />
                        <div className="col-9">
                            <div className="settings">
                                <form onSubmit={onUpdateProfileSubmit} className="mr-4 mt" style={{ marginTop: "11rem" }}>
                                    <h5 className="mb-5 account_heading"><b>Account Overview</b></h5>
                                    <div className="form-group">
                                        <label><b>Full Name</b></label>
                                        <input type="text" className="form-control" style={{ height: "4rem" }} value={user.name} required disabled />
                                    </div>
                                    <div className="form-group">
                                        <label><b>Email Address</b></label>
                                        <input type="email" className="form-control" style={{ height: "4rem" }} value={user.email} required disabled />
                                    </div>
                                    {user.role !== 'USER' &&
                                        <div className="form-group">
                                            <label><b>Wallet Address</b></label>
                                            <input type="text" name="wallet_address" onChange={onProfileChange} className="form-control" style={{ height: "4rem" }} placeholder={user.wallet_address} required />
                                        </div>
                                    }

                                    {user.role === 'GURUJI' &&
                                        <div className="form-group">
                                            <label><b>Calendly Link</b></label>
                                            <input type="text" name="link" onChange={onProfileChange} className="form-control" style={{ height: "4rem" }} placeholder={user.calendly_link} required />
                                        </div>
                                    }
                                    <button type="submit" className="btn mt-4 width_one btn-md" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: ".6rem 1rem", color: "#fff" }}>
                                        <b>Update</b>
                                    </button>
                                </form>

                                <hr />
                                <hr />

                                {user.role === 'ADMIN' &&
                                    <form onSubmit={onSetStoreLinkSubmit}>
                                        <h5 className="pb-4 pt-3">Set Store Link</h5>
                                        <div className="form-row align-items-center">
                                            <div className="form-group col-md-5">
                                                <label><b>Store Link</b></label>
                                                <input name="store_link" onChange={onStoreLinkChange} type="text" className="form-control" style={{ height: "4rem" }} required />
                                            </div>
                                            <div className="form-group col-sm-12 col-md-2">
                                                <button type="submit" className="btn mt-4 width_one btn-md" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: ".6rem 1rem", color: "#fff" }}>
                                                    <b>SET STORE</b>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                }

                                <hr />
                                <hr />

                                <form onSubmit={onUpdatePasswordSubmit}>
                                    <h5 className="pb-4 pt-3">Change Password</h5>
                                    <div className="form-row align-items-center">
                                        <div className="form-group col-md-5">
                                            <label><b>Current Password</b></label>
                                            <input name="current_password" onChange={onChange} type="password" className="form-control" style={{ height: "4rem" }} required />
                                        </div>
                                        <div className="form-group col-md-5">
    
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label><b>New Password</b></label>
                                            <input name="new_password" onChange={onChange} type="password" className="form-control" style={{ height: "4rem" }} required />
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label><b>Re-enter Password</b></label>
                                            <input name="new_password_confirmation" onChange={onChange} type="password" className="form-control" style={{ height: "4rem" }} required />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-2">
                                            <button type="submit" className="btn mt-4 width_one btn-md" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: ".6rem 1rem", color: "#fff" }}>
                                                <b>CONFIRM</b>
                                            </button>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger width" style={{ marginTop: "5rem" }}>
                                        Close Account
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Settings;