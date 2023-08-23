import React from 'react';

const SideNav = () => {
    const role = "ADMIN";
    
  return (
    <div className="col-3 side_bar_container">
        <div className="side_bar">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <a href="#" data-target="#create_user" data-toggle="modal" className="pl-5 pr-4 d-flex justify-content-between text-dark dark text-decoration-none">
                    <b>CREATE USER </b>
                <p style={{ border: "none", backgroundColor: "#211552" }} className="rounded">
                    <img src="img/plus.png" alt="" />
                </p>
                </a>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    { role === "ADMIN" || role === "GURUJI" &&  <a href="/admin/subscribers" className="side_bar_link pl-5 py-3 text-decoration-none">Subscribers</a>}
                    <a href="/admin/gurujis" className="side_bar_link pl-5 py-3 text-decoration-none">Guruji</a>
                    <a href="/admin/agents" className="side_bar_link pl-5 py-3 text-decoration-none">Agents</a>
                    <a href="/admin/notifications" className="side_bar_link pl-5 py-3 text-decoration-none">Notifications</a>
                </div>
            </div>
            <div style={{ backgroundColor:" #211552", padding: "2rem", margin: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
                className="rounded background">
                <img src="img/logout.png" alt="" className="display_none" />
                <a href="#" data-target="#logout" data-toggle="modal">
                <img src="img/btnContact.png" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default SideNav;