import React, { useContext, useState, useEffect } from "react";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import SharedContext from "../../context/shared/sharedContext";
import GurujiContext from "../../context/guruji/gurujiContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GurujiStore = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const sharedContext = useContext(SharedContext);
  const { store_link, getStorelink } = sharedContext;

  const gurujiContext = useContext(GurujiContext);
  const { requestResponse, updatePersonalStore } = gurujiContext;

  const [personalStore, setPersonalStore] = useState("");

  const notify = (msg) => toast(msg);

  useEffect(() => {
    if (requestResponse !== null) {
      notify(`${requestResponse.message}`);
    }

    getStorelink();
    // eslint-disable-next-line
  }, [requestResponse]);

  const onSetStoreLinkSubmit = (e) => {
    e.preventDefault();

    const formData = {
      personal_store: personalStore,
    };

    updatePersonalStore(formData);
  };

  const onStoreLinkChange = (e) => {
    setPersonalStore(e.target.value);
  };

  if (user !== null) {
    return (
      <>
        <Header />
        <main>
          <div className="flex">
            <SideNav />
            <ToastContainer />
            <div className="w-full">
              <div className="settings">
                <div className="mt-4">
                  {store_link !== "" ? (
                    <a
                      href={`${store_link.store_link}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn mt-4 width_one btn-md"
                      style={{
                        background: "linear-gradient(to right,#6561ba,#16168e)",
                        border: "none",
                        padding: ".6rem 1rem",
                        color: "#fff",
                      }}
                    >
                      <b>GET A STORE</b>
                    </a>
                  ) : (
                    <h4 className="text-danger">Store not Activated</h4>
                  )}

                  {store_link !== "" && (
                    <form onSubmit={onSetStoreLinkSubmit} className="mr-4 mt-4">
                      <h6 className="pt-3 text-info">
                        Already have a store link?
                      </h6>
                      <div className="form-row align-items-center">
                        <div className="form-group col-md-5">
                          <label>
                            <b>Set Personal Store Link</b>
                          </label>
                          <input
                            name="personal_store"
                            onChange={onStoreLinkChange}
                            type="text"
                            className="form-control"
                            style={{ height: "4rem" }}
                            placeholder={`${user.personal_store}`}
                            required
                          />
                        </div>
                        <div className="form-group col-sm-12 col-md-2">
                          <button
                            type="submit"
                            className="btn mt-4 width_one btn-md"
                            style={{
                              background:
                                "linear-gradient(to right,#6561ba,#16168e)",
                              border: "none",
                              padding: ".6rem 1rem",
                              color: "#fff",
                            }}
                          >
                            {user.persona_store === null ? (
                              <b>SET STORE</b>
                            ) : (
                              <b>UPDATE STORE</b>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default GurujiStore;
