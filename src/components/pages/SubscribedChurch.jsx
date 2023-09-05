import React, { useContext, useEffect } from "react";

import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";
import Gurujis from "./Gurujis";
import Content from "../common/Content";
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
  <div className="">
    <div className="">
    <div className="flex">
  {/* Component 1 */}
  <div className="col-md-6">
    <div className="row align-items-center mb-4">
      <div className="col-md-8">
        <div
          className="row align-items-center p-1 ml-0 mb-3"
          style={{
            background: "#2a1e59",
            borderRadius: "50px",
          }}
        >
          <div className="col-6 col-md-6 text-white">Library</div>
          <div
            className="col-6 col-md-6 py-2 text-center"
            style={{
              background: "#fff",
              borderRadius: "50px",
            }}
          >
            {user.guruji !== null && user.guruji.calendly_link !== null ? (
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
        className="col-md-3 mt-[-1%] flex"
        style={{ color: "#2a1e59", textAlign: "center" }}
      >
        <span>
          <img src="img/live.png" alt="" className="mt-1 mr-1" />
        </span>
        <strong>Live</strong>
      </div>
    </div>
  </div>

  {/* Component 2 */}
  <div className="col-md-6 flex justify-between ">
    <div className="rounded-full border-2 flex border-gray-950 p-1 h-[50px] w-fit mr-4">
      <button
        className={`${
          showChurchStore ? "text-white bg-slate-950" : "text-black"
        } px-20 py-2 rounded-full`}
        onClick={() => setShowChurchStore(true)}
      >
        Church Store
      </button>
    </div>
    <div>
      <p className="font-semibold text-lg">Church Name: Vatican Church Holy</p>
    </div>
  </div>
</div>


      
    
    </div>
    {showChurchStore ? (
      <StoreCardSection storeData={storeData} />
    ) : (
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
    )}
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

export default SubscribedChurch;
