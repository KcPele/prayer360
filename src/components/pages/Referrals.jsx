import React, { useContext, useState } from 'react';
import Header from '../layout/Header';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import Referral from '../common/Referral';
import ReferralLinkModal from '../modals/ReferralLinkModal';

const Referrals = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    if(user !== null) {
        return (
            <div style={{ position: "relative" }}>
                {modal && <ReferralLinkModal setModal={setModal} user={user} />}

                <Header />
                <main>
                    <div className="row align-items-center justify-content-center">
                        <SideNav />
                        <div className="col-9">
                            <div className="subscribers pr-4">
                                <div className="earning none">
                                    <h6>Total Earning <b>$34,500</b></h6>
                                </div>
                                <div className="form-group mt-3 none sort_width">
                                    <select className="form-control">
                                        <option>Amount Made</option>
                                        <option>Guruji</option>
                                    </select>
                                </div>
                                <div className="py-3 pl-5 p"
                                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p style={{ flex: "1.7" }}><b>Referrals Name</b></p>
                                    <p style={{ flex: "1.5" }}><b>Date</b></p>
                                    <p style={{ flex: "1.4" }} className="display_none"><b>Time</b></p>
                                    <p style={{ flex: "1.2" }} className="display_none"><b>Subscription</b></p>
                                    <p style={{ flex: "1" }} className="display_none"><b>Amount</b></p>
                                    <div style={{ flex: "1.1" }} className="form-group w-10 mt-3 display_none">
                                        <select className="form-control">
                                            <option>Date</option>
                                            <option>Guruji</option>
                                        </select>
                                    </div>
                                </div>

                                {user.referrals.length > 0 && user.referrals.map((referral) => (
                                    <Referral key={referral.id} currentReferral={referral} />
                                ))}
    
                                <div className="text-center">
                                    <button type="button" onClick={toggleModal} className="btn mt-3 width"
                                        style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: "1.3rem 5rem", color: "#fff" }}>
                                        <b>GET MY REFERRAL LINK</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Referrals