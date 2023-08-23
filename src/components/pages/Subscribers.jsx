import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import SharedContext from '../../context/shared/sharedContext';
import Subscriber from '../common/Subscriber';

const Subscribers = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const sharedContext = useContext(SharedContext);
    const { getSubscribers, subscribers } = sharedContext;

    useEffect(() => {
        getSubscribers();
        // eslint-disable-next-line
    }, []);

    if(user !== null) {
        return (
            <>
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
                                <div className="py-3 pl-5 p" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p style={{ flex: "1" }}><b>Name</b></p>
                                    <p style={{ flex: "1.3" }}><b>Email Address</b></p>
                                    <p style={{ flex: "1" }} className="display_none"><b>Date Joined</b></p>
                                    <p style={{ flex: "1" }} className="display_none"><b>Next Payment</b></p>
                                    <div style={{ flex: "1.1" }} className="form-group w-10 mt-3 display_none">
                                        <select className="form-control">
                                            <option>Amount Made</option>
                                            <option>Guruji</option>
                                        </select>
                                    </div>
                                </div>

                                {
                                    user.role === 'GURUJI' ? 
                                        user.subscribers.length > 0 && user.subscribers.map((subscriber) => (
                                            <Subscriber key={subscriber.id} currentSubscriber={subscriber} />
                                        ))
                                    :
                                        subscribers !== null &&
                                        subscribers.length > 0 && subscribers.map((subscriber) => (
                                            <Subscriber key={subscriber.id} currentSubscriber={subscriber} />
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Subscribers;