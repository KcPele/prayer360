import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Subscriber = (props) => {
    const {currentSubscriber} = props;

    const {name, email, address, created_at, reference, plan} = currentSubscriber;

    return (
        <div className="py-3 px-5 p rounded" style={{ width: "100%", background: "#fff", display: "flex", justifyContent: "space-between" }}>
            <div className="overflow">
                <p><b>{name}</b></p>
            </div>
            <div className="overflow">
                <p>{email}</p>
            </div>
            <p className="display_none">{address}</p>
            <p className="display_none">{moment(created_at).format('MMMM DD, YYYY')}</p>
            <p className="display_none">{moment(created_at).add(3, 'M').format('MMMM DD, YYYY')}</p>
            <p className="display_none">{plan}</p>
            <div className="dropdown pl-3">
                <a href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    <img src="img/option.png" alt="" width="20" />
                </a>

                <div className="dropdown-menu">
                    <Link className="dropdown-item" to={`/subscriber/${reference}`}><span><img src="img/view.png" className="mr-3" alt="" width="15" /></span>
                        View User Information
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Subscriber;