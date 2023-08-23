import React from 'react';
import moment from 'moment';

const Referral = (props) => {
    const { currentReferral } = props;
  return (
    <div className="py-3 px-5 p rounded" style={{ width: "100%", background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="overflow">
            <p><b>{currentReferral.name}</b></p>
        </div>
        <div className="overflow">
            <p>{moment(currentReferral.created_at).format('MMMM DD, YYYY')}</p>
        </div>
        <p className="display_none">{moment(currentReferral.created_at).format('h:mm:ss a')}</p>
        <p className="display_none">{currentReferral.plan}</p>
        <p className="display_none">{currentReferral.subscription_amount}</p>
        <p className="display_none">{currentReferral.subscription_amount * (5/100)}</p>
    </div>
  )
}

export default Referral;