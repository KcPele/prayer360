import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import SharedContext from "../../context/shared/sharedContext";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";

import Guruji from "../common/Guruji";

const Gurujis = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const sharedContext = useContext(SharedContext);
  const { getGurujis, gurujis } = sharedContext;

  useEffect(() => {
    getGurujis();
    // eslint-disable-next-line
  }, []);

  if (user !== null) {
    return (
      <>
        <Header />
        <main>
          <div className="flex">
            <SideNav />
            <div className="w-full">
              <div className="gurujis">
                <div className="p-4">
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
                                    <div className="mr-4 display_none" style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <div className="form-group w-10 mt-3" style={{ flex: "0.3" }}>
                                            <select className="form-control">
                                                <option>Guruji</option>
                                            </select>
                                        </div>
                                    </div> */}
                  <div className="row mr-3">
                    {gurujis !== null &&
                      gurujis.length > 0 &&
                      gurujis.map((guruji) => (
                        <Guruji key={guruji.id} currentGuruji={guruji} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Gurujis;
