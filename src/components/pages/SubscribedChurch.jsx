import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";
import Gurujis from "./Gurujis";
import Content from "../common/Content";
import StoreCardSection from "../store/StoreCardSection";

const SubscribedChurch = () => {
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
  const storeData = [
    {
      image: "/assets/images/book-store-photo.jpg",
      title: "These Thoughts Notebook1",
      price: "1,500",
    },
    {
      image: "/assets/images/book-store-photo.jpg",
      title: "These Thoughts Notebook2",
      price: "1,500",
    },
    {
      image: "/assets/images/book-store-photo.jpg",
      title: "These Thoughts Notebook3",
      price: "1,500",
    },
    {
      image: "/assets/images/book-store-photo.jpg",
      title: "These Thoughts Notebook3",
      price: "1,500",
    },
  ];

  if (user !== null) {
    return (
      <div style={{ position: "relative" }}>
        {user.guruji_subscribed_to === null ? (
          <Gurujis />
        ) : (
          <>
            <Header />
            <main>
              <div className="flex min-h-screen ">
                <SideNav />
                <div className="w-full p-4">
                  <StoreCardSection storeData={storeData} />
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    );
  }
};

export default SubscribedChurch;
