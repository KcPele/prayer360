import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import { BiLogOut, BiSolidChurch } from "react-icons/bi";
import {
  MdNotificationsActive,
  MdSubscriptions,
  MdRoomPreferences,
  MdSupportAgent,
} from "react-icons/md";
import { FcDataConfiguration } from "react-icons/fc";
const SideNav = () => {
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  if (user !== null) {
    const role = user.role;
    return (
      <div className="md:max-w-[300px] lg:w-full mt-2">
        <div className="side_bar hidden lg:flex flex-col justify-between">
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
          <div className="bg-gray-900 p-4 flex flex-col gap-3 items-center">
            <img src="img/logout.png" alt="" className="" />
            <a href="#!" onClick={onLogout}>
              <img src="img/btnContact.png" alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white min-h-screen shadow-sm lg:hidden">
          {role === "ADMIN" && (
            <div className="grid  gap-8">
              <Link to="/subscribers" className="p-4">
                <MdSubscriptions size={24} />
              </Link>
              <Link to="/gurujis" className="p-4">
                <FcDataConfiguration size={24} className="p-4" />
              </Link>
              <Link to="/agents" className="p-4">
                <MdSupportAgent size={24} />
              </Link>
              <Link to="/notifications" className="p-4">
                <MdNotificationsActive size={24} />
              </Link>
            </div>
          )}
          {role === "GURUJI" && (
            <div className="grid  gap-8">
              <Link to="/notifications" className="p-4">
                <MdNotificationsActive size={24} />
              </Link>
            </div>
          )}
          {role === "USER" && (
            <div className="grid  gap-8">
              <Link to="/all-churches" className=" p-4">
                <BiSolidChurch size={24} />
              </Link>
              <Link to="/subscribed-churches" className="p-4">
                <MdSubscriptions size={24} />
              </Link>
              <Link to="/subscribed-churches" className="p-4">
                <MdNotificationsActive size={24} />
              </Link>
            </div>
          )}
          {role === "AGENT" && (
            <div className="grid  gap-8">
              <Link to="/referrals" className="p-4">
                <MdRoomPreferences size={24} />
              </Link>
              <Link to="/notifications" className="p-4">
                <MdNotificationsActive size={24} />
              </Link>
            </div>
          )}

          <div className="p-4 " onClick={onLogout}>
            <BiLogOut size={24} />
          </div>
        </div>
      </div>
    );
  }
};

export default SideNav;
