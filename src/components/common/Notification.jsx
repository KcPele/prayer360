import React from 'react';
import moment from 'moment';

const Notification = ({notification}) => {
  return (
    <div className="py-3 px-5 rounded p" style={{ width: "100%", background: "#fff", display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src="img/inbox.png" alt="" />

        <div style={{ flex: "1" }} className="overflow">
            <p style={{ flex: "2" }}>{notification.message}</p>
        </div>

        {notification.amount !== null &&
            <p style={{ flex: "1" }} className="display_none">{notification.amount}</p>
        }

        {notification.wallet_address !== null &&
            <p style={{ flex: "1" }} className="display_none">{notification.wallet_address}</p>
        }

        <p>
            {moment(notification.created_at).format('MMMM DD, YYYY')} <br /> 
            <b>{moment(notification.created_at).format('h:mm A')}</b>
        </p>
    </div>
  )
}

export default Notification;