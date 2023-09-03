import React, { useState, useContext, useEffect } from "react";
import AdminContext from "../../context/admin/adminContext";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAgent = () => {
  const adminContext = useContext(AdminContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;
  const { createUser, userCreated } = adminContext;

  const notify = (msg) => toast(msg);

  const [agent, setAgent] = useState({
    name: "",
    email: "",
    password: "",
    role: "AGENT",
    country_id: "",
    state_id: "",
  });

  const onChange = (e) =>
    setAgent({ ...agent, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    createUser(agent);

    setAgent({
      name: "",
      email: "",
      password: "",
      role: "AGENT",
      country_id: "",
      state_id: "",
    });
  };

  useEffect(() => {
    if (userCreated !== null) {
      notify(`${userCreated.role} Created`);
    }
  }, [userCreated]);

  if (user !== null) {
    return (
      <>
        <Header />
        <main>
          <div className="flex">
            <SideNav />
            <ToastContainer />
            <div className="w-full">
              <div className="create_agent">
                <form onSubmit={onSubmit} className="mr-4 my-4">
                  <div className="form-group">
                    <label>
                      <b>Agent Name</b>
                    </label>
                    <input
                      name="name"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                      style={{ height: "4rem" }}
                      required
                      value={agent.name}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>
                        <b>Agent Email</b>
                      </label>
                      <input
                        name="email"
                        onChange={onChange}
                        type="email"
                        className="form-control"
                        style={{ height: "4rem" }}
                        placeholder="Enter Email"
                        required
                        value={agent.email}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        <b>Agent Password</b>
                      </label>
                      <input
                        name="password"
                        onChange={onChange}
                        type="password"
                        className="form-control"
                        style={{ height: "4rem" }}
                        placeholder="Enter Password"
                        required
                        value={agent.password}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>
                        <b>Country</b>
                      </label>
                      <select
                        name="country_id"
                        onChange={onChange}
                        className="form-control"
                        style={{ height: "4rem" }}
                      >
                        <option>Select Country</option>
                        <option value="3">Nigeria</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        <b>State</b>
                      </label>
                      <select
                        name="state_id"
                        onChange={onChange}
                        className="form-control"
                        style={{ height: "4rem" }}
                      >
                        <option>Select State</option>
                        <option value="1">Anambra</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn mt-3 width"
                    style={{
                      background: "linear-gradient(to right,#6561ba,#16168e)",
                      border: "none",
                      padding: "1.3rem 6rem",
                      color: "#fff",
                    }}
                  >
                    <b>CREATE PROFILE</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default CreateAgent;
