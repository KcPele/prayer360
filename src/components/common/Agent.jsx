import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Agent = (props) => {
    const { currentAgent } = props;
    const { name, email, created_at, reference } = currentAgent;
    return (
        <div className="py-3 px-5 p rounded" style={{ width: "100%", background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="overflow">
                <p><b>{name}</b></p>
            </div>
            <div className="overflow">
                <p>{email}</p>
            </div>
            <p className="display_none">{moment(created_at).format('DD-MM-YYYY')}</p>
            <p className="display_none">$1,209</p>
            <Link to={`/agent/${reference}`} className="text-decoration-none text-dark view_details">View Details</Link>
        </div>
    )
}

export default Agent;