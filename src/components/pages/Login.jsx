import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import ChurchModal from "../church/ChurchModal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const authContext = useContext(AuthContext);

  const history = useHistory();

  const { login, logout, isAuthenticated, error, clearErrors } = authContext;

  const notify = (msg) => toast(msg);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }

    if (error === "Invalid credentials") {
      notify("Invalid Credentials");
      clearErrors();
    }
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      notify("Please fill in all fields");
    } else {
      login({ email, password });
      // logout();
    }
  };

  return (
    <div>
      <Navbar />

      <ToastContainer />
      <div className="container-fluid bg-home bg-cover pt-32 bg-center bg-no-repeat   flex justify-center items-center h-screen">
        <div className="max-w-[580px] bg-slate-200 rounded  p-10 md:p-20  mx-auto w-full">
          <form onSubmit={onSubmit} className="formContainer">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                name="email"
                value={email}
                onChange={onChange}
                type="email"
                className="form-control"
                style={{ height: "55px" }}
                id="exampleInputEmail1"
                placeholder="Enter email"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                value={password}
                onChange={onChange}
                type="password"
                className="form-control"
                style={{ height: "55px" }}
                placeholder="Enter Password"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="submit"
              style={{
                background: "linear-gradient(to right,#6561ba,#16168e)",
                border: "none",
              }}
              className="btn btn-primary btn-block py-2 mt-5"
            >
              Login
            </button>
            <div className="mt-4">
              <p className="cursor-pointer" onClick={() => setIsOpen(true)}>
                Register if you dont have an accoun?
              </p>
            </div>
          </form>
        </div>
      </div>
      <ChurchModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default Login;
