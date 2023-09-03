import React, { useContext, useEffect } from "react";

import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";
import Gurujis from "./Gurujis";

import TourCard from "../tour/TourCard";

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
              <div className=" min-h-screen flex">
                <SideNav />
                <div className=" pt-6  w-full">
                  <div className=" grid all__churches-card-section gap-3 md:gap-6 px-3">
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
                    <TourCard
                      title="Trimbakeshwar Temple"
                      discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas at explicabo non labore animi hic corporis quo quas laboriosam."
                      img="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                      url="/church/trimbakeshwar"
                    />
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
