import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";
import Gurujis from "./Gurujis";
import Content from "../common/Content";

const AllChurch = () => {
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
                  <div className="pr-3 grid grid-cols-3 gap-8">
                    <div className="max-w-[21rem] w-full h-[14rem] bg-white rounded-md"></div>
                    <div className="max-w-[21rem] w-full h-[14rem] bg-white rounded-md"></div>
                    <div className="max-w-[21rem] w-full h-[14rem] bg-white rounded-md"></div>
                    <div className="max-w-[21rem] w-full h-[14rem] bg-white rounded-md"></div>
                    <div className="max-w-[21rem] w-full h-[14rem] bg-white rounded-md"></div>
                    <div className="max-w-[21rem] w-full h-[14rem] bg-white rounded-md"></div>
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

export default AllChurch;
