import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const SideNav = () => {
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  if (user !== null) {
    const role = user.role;
    return (
      <div className="col-3 side_bar_container">
        <div className="side_bar">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {role === "ADMIN" && (
              <a
                href="#!"
                data-target="#create_user"
                data-toggle="modal"
                className="pl-5 pr-4 d-flex justify-content-between text-dark dark text-decoration-none"
              >
                <b>CREATE USER </b>
                <p
                  style={{ border: "none", backgroundColor: "#211552" }}
                  className="rounded"
                >
                  <img src="img/plus.png" alt="" />
                </p>
              </a>
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {role === "ADMIN" && (
                <>
                  <Link
                    to="/subscribers"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    Subscribers
                  </Link>

                  <Link
                    to="/gurujis"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    Guruji
                  </Link>

                  <Link
                    to="/agents"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    Agents
                  </Link>
                </>
              )}

              {role === "GURUJI" && (
                <>
                  <Link
                    to="/guruji-contents"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    Contents
                  </Link>

                  <Link
                    to="/subscribers"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    Subscribers
                  </Link>

                  <Link
                    to="/store"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    Store
                  </Link>
                </>
              )}

              {role === "USER" && (
                <>
                  <Link
                    to="/all-churches"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    View All Churches
                  </Link>

                  <Link
                    to="/subscribed-churches"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    My Subscriped Church
                  </Link>

                  <Link
                    //to be changed back to subscription
                    to="/subscriber-contents"
                    className="side_bar_link pl-5 py-3 text-decoration-none"
                  >
                    Subscription
                  </Link>
                </>
              )}

              {role === "AGENT" && (
                <Link
                  to="/referrals"
                  className="side_bar_link pl-5 py-3 text-decoration-none"
                >
                  Referrals
                </Link>
              )}

              <Link
                to="/notifications"
                className="side_bar_link pl-5 py-3 text-decoration-none"
              >
                Notifications
              </Link>
            </div>
          </div>
          <div
            style={{
              backgroundColor: " #211552",
              padding: "2rem",
              margin: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
            className="rounded background"
          >
            <img src="img/logout.png" alt="" className="display_none" />
            <a href="#!" onClick={onLogout}>
              <img src="img/btnContact.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default SideNav;
