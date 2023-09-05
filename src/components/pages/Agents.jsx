import React, { useContext, useEffect } from "react";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import AdminContext from "../../context/admin/adminContext";

import Agent from "../common/Agent";

const Agents = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const adminContext = useContext(AdminContext);
  const { getAgents, agents } = adminContext;

  useEffect(() => {
    getAgents();
  }, []);

  if (user !== null) {
    return (
      <>
        <Header />
        <main>
          <div className="flex">
            <SideNav />
            <div className="w-full">
              <div className="subscribers pr-4">
                <div className="earning none">
                  <h6>
                    Total Earning <b>$34,500</b>
                  </h6>
                </div>

                <div className="form-group mt-3 none sort_width">
                  <select className="form-control">
                    <option>Amount Made</option>
                    <option>Guruji</option>
                  </select>
                </div>

                <div
                  className="py-3 pl-5 p"
                  style={{
                    width: "100%,",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ flex: "1.2" }}>
                    <b>Name</b>
                  </p>
                  <p style={{ flex: "1.7" }}>
                    <b>Email Address</b>
                  </p>
                  <p style={{ flex: "1" }} className="display_none">
                    <b>Date Joined</b>
                  </p>
                  <p style={{ flex: "1" }} className="display_none">
                    <b>Amount Made</b>
                  </p>
                  <div
                    style={{ flex: "1.1" }}
                    className="form-group w-10 mt-3 display_none"
                  >
                    <select className="form-control">
                      <option>Amount Made</option>
                      <option>Guruji</option>
                    </select>
                  </div>
                </div>

                {agents !== null &&
                  agents.length > 0 &&
                  agents.map((agent) => (
                    <Agent key={agent.id} currentAgent={agent} />
                  ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Agents;
