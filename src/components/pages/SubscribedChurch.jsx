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
                  <div className="mb-3 grid sm:grid-flow-col justify-between">
                    <div className="rounded-full border-2 border-gray-950 p-1 w-fit">
                      <button
                        className={`${
                          showChurchStore
                            ? "text-black"
                            : "text-white bg-slate-950"
                        } px-3 py-2 rounded-full`}
                        onClick={() => setShowChurchStore(false)}
                      >
                        Subscribed Church
                      </button>
                      <button
                        className={`${
                          showChurchStore
                            ? "text-white bg-slate-950"
                            : "text-black"
                        } px-3 py-2 rounded-full`}
                        onClick={() => setShowChurchStore(true)}
                      >
                        Church Store
                      </button>
                    </div>
                    <div className="mr-32">
                      <p className="font-semibold text-lg">
                        Chuch Name: Vatican Church Holy
                      </p>
                    </div>
                  </div>
                  {showChurchStore ? (
                    <StoreCardSection storeData={storeData} />
                  ) : (
                    <div className=" grid tour__card-section2 gap-3 md:gap-6 px-3">
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
