import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../services/UserService";
import { useNavigate, NavLink } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  let [loginData, setLoginData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const doLogin = (e) => {
    e.preventDefault();
    UserService.login(loginData)
      .then((res) => {
        if (res.data.success) {
          swal("You are logged in.");
          navigate('/room');
          localStorage.setItem("token",res.data.success)
        } else {
          swal("Bad login. Please try again.");
        }
      })
      .catch((err) => {
        swal("Bad login. Please try again.");
        console.log(err);
      });
  };

  return (
    <MainLayout>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={doLogin}>
                <div className="mb-3 row">
                  <label htmlFor="email" className="col-4 col-form-label">
                    E-mail
                  </label>
                  <div className="col-8">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="password" className="col-4 col-form-label">
                    Password
                  </label>
                  <div className="col-8">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="offset-sm-4 col-sm-8">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="offset-sm-4 col-sm-8">
                    <NavLink to="/register" className="btn btn-success">
                      Register
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
