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
                  <div className="mb-3 grid sm:grid-flow-col justify-between">
                    <div className="flex gap-2  w-fit">
                      <div
                        className="flex items-center p-1"
                        style={{
                          background: "#2a1e59",
                          borderRadius: "50px",
                        }}
                      >
                        <div className="px-8 text-white">Library</div>
                        <div
                          className=" py-2 text-center"
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
                              className="px-3 text-dark text-decoration-none"
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
                      <div className="rounded-full border-2 border-gray-950 p-1 w-fit">
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
            </main>
          </>
        )}
      </div>
    );
  }
};

export default SubscribedChurch;
