import React, { useContext, useEffect } from "react";

import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";
import Gurujis from "./Gurujis";
import TourCard from "../tour/TourCard";

import StoreCardSection from "../store/StoreCardSection";

const SubscribedChurch = () => {
  const authContext = useContext(AuthContext);
  const [showChurchStore, setShowChurchStore] = React.useState(false);
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
                  <div className="mb-3">
                    <button
                      className="rounded-full text-white bg-slate-950 p-3"
                      onClick={() => setShowChurchStore(!showChurchStore)}
                    >
                      {showChurchStore ? "Church Store" : "Subscribed Church"}
                    </button>
                  </div>
                  {showChurchStore ? (
                    <StoreCardSection storeData={storeData} />
                  ) : (
                    <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 px-3">
                      <TourCard
                        title="Trimbakeshwar Temple"
                        discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
                        img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        url="/church/trimbakeshwar"
                      />
                      <TourCard
                        title="Trimbakeshwar Temple"
                        discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
                        img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        url="/church/trimbakeshwar"
                      />
                    </div>
                  )}
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
