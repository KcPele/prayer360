import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";
import Gurujis from "./Gurujis";
import Content from "../common/Content";

const SubscriberContents = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const userContext = useContext(UserContext);
  const { contents, getSubscribedContent } = userContext;

  useEffect(() => {
    if (user !== null && user.guruji !== null) {
      getSubscribedContent(user.guruji.reference);
    }
    // eslint-disable-next-line
  }, [user]);

  if (user !== null) {
    return (
      <div style={{ position: "relative" }}>
        {user.guruji_subscribed_to === null ? (
          <Gurujis />
        ) : (
          <>
            <Header />
            <main>
              <div className="row h-screen justify-content-center">
                <SideNav />
                <div className="col-md-9 pt-32">
                  <div className="">
                    <div className="">
                      <div className="row align-items-center mb-4">
                        <div className="col-md-6">
                          <div className="row mx-2 align-items-center">
                            <div className="col-md-8">
                              <div
                                className="row align-items-center p-1 ml-0 mb-3"
                                style={{
                                  background: "#2a1e59",
                                  borderRadius: "50px",
                                }}
                              >
                                <div className="col-6 col-md-6 text-white">
                                  Library
                                </div>
                                <div
                                  className="col-6 col-md-6 py-2 text-center"
                                  style={{
                                    background: "#fff",
                                    borderRadius: "50px",
                                  }}
                                >
                                  {user.guruji !== null &&
                                  user.guruji.calendly_link !== null ? (
                                    <a
                                      href={`${user.guruji.calendly_link}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="d-inline-block text-dark text-decoration-none"
                                    >
                                      Schedule Meeting
                                    </a>
                                  ) : (
                                    <a
                                      href="#!"
                                      className="d-inline-block text-dark text-decoration-none"
                                    >
                                      Not Available for Meetings
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-3 mb-3"
                              style={{ color: "#2a1e59", textAlign: "center" }}
                            >
                              <span>
                                <img
                                  src="img/live.png"
                                  alt=""
                                  className="mr-1"
                                />
                              </span>
                              <strong>Live</strong>
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-md-6"
                          style={{ textAlign: "center" }}
                        >
                          <h6>
                            Assigned Guruji:{" "}
                            {user.guruji !== null ? (
                              <Link to={`/guruji/${user.guruji.reference}`}>
                                <strong>{user.guruji.name}</strong>
                              </Link>
                            ) : (
                              "None"
                            )}
                          </h6>
                        </div>
                      </div>

                      <div className="earning none">
                        {user.role === "USER" ? (
                          <h6>
                            <b>
                              {user.plan.charAt(0).toUpperCase() +
                                user.plan.slice(1)}{" "}
                              Plan
                            </b>
                          </h6>
                        ) : (
                          <h6>
                            Total Earning <b>${user.earning}</b>
                          </h6>
                        )}
                      </div>
                      {/* <div className="form-group mt-3 mx-5 none sort_width">
                                                <select className="form-control">
                                                    <option>Amount Made</option>
                                                    <option>Guruji</option>
                                                </select>
                                            </div>
                                            <div className="mr-5 display_none" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                <div className="form-group w-10 mt-3" style={{ flex: "0.3" }}>
                                                    <select className="form-control">
                                                        <option>Date</option>
                                                    </select>
                                                </div>
                                            </div> */}

                      <div className="row mr-3 pl-4">
                        {user.role === "USER" &&
                          contents !== null &&
                          contents.length > 0 &&
                          contents.map((content) => (
                            <Content
                              key={content.id}
                              currentContent={content}
                              user={user}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    );
  }
};

export default SubscriberContents;
