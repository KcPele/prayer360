import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Navbar from "../Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  if (user !== null) {
    return (
      <>
        <Navbar />
        <header>
          <nav className="">
            <a href="#!" className="pl-5 ">
              <img src="img/Prayer.png" alt="" />
            </a>

            <div className="sm:flex items-center">
              <div className="earning ">
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
              <div className="d-flex align-items-center ">
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
          </nav>
        </header>
      </>
    );
  }
};

export default Header;
