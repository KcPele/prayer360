import React, { useContext, useState } from "react";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import VideoUploadModal from "../modals/VideoUploadModal";
import Content from "../common/Content";

const GurujiContents = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (user !== null) {
    return (
      <div style={{ position: "relative" }}>
        {modal && <VideoUploadModal setModal={setModal} />}

        <Header />
        <main>
          <div className="min-h-screen flex">
            <SideNav />
            <div className="w-full">
              <div className="contents">
                <div className="mt-4">
                  <div className="earning none">
                    <h6>
                      Total Earning <b>${user.earning}</b>
                    </h6>
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
                    {user.role === "GURUJI" &&
                      user.contents.length > 0 &&
                      user.contents.map((content) => (
                        <Content
                          key={content.id}
                          currentContent={content}
                          user={user}
                        />
                      ))}
                  </div>
                  <div className="w-100 text-center">
                    {user.role === "GURUJI" && (
                      <button
                        type="button"
                        onClick={toggleModal}
                        className="btn mb-3"
                        style={{
                          background:
                            "linear-gradient(to right,#6561ba,#16168e)",
                          border: "none",
                          padding: ".8rem 3rem",
                          color: "#fff",
                        }}
                      >
                        <b>UPLOAD VIDEO</b>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
};

export default GurujiContents;
