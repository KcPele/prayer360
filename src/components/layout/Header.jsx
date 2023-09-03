import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Navbar from "../Navbar";

const Header = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  if (user !== null) {
    return (
      <>
        <Navbar />
        <header>
          <nav className="header">
            <button className="btn btn_mobile_nav open_btn">
              <img
                src="img/previous.png"
                alt=""
                className="icon_mobile_nav open_icon"
              />
              <img
                src="img/close.png"
                alt=""
                className="icon_mobile_nav close_icon"
              />
            </button>

            <h5 className="heading_mobile">GURUJIS</h5>
            <a href="#!" className="pl-5 display_none">
              <img src="img/Prayer.png" alt="" />
            </a>

            <div className="d-flex align-items-center pr-4 hide">
              <div className="earning display_none">
                {user.role === "USER" ? (
                  <h6>
                    <b>
                      {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)}{" "}
                      Plan
                    </b>
                  </h6>
                ) : (
                  <h6>
                    Total Earning <b>${user.earning}</b>
                  </h6>
                )}
              </div>
              <div className="d-flex align-items-center hide">
                <p className="pl-3 pr-2">
                  Hello{" "}
                  <b>
                    {user.role} {user.name}
                  </b>
                </p>
                <p className="user">
                  <b>A</b>
                </p>
                <div className="dropdown">
                  <a
                    className=""
                    href="#!"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <button style={{ border: "none", background: "none" }}>
                      <i className="ri-arrow-down-s-line down_arrow"></i>
                    </button>
                  </a>

                  <div
                    className="dropdown-menu"
                    style={{ marginRight: "2rem", marginTop: "1.5rem" }}
                  >
                    <Link className="dropdown-item" to="/settings">
                      <span>
                        <img
                          src="img/setting.png"
                          className="mr-3"
                          width="18"
                          alt=""
                        />
                      </span>
                      Account Settings
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn menu_btn">
              <img src="img/menu.png" alt="" className="icon_mobile_nav" />
            </button>
          </nav>
        </header>
      </>
    );
  }
};

export default Header;
