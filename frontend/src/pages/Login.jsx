import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Login</h3>
              <form action="" className="d-flex flex-column gap-15 ">
                <div>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="form-control"
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <div className=" mt-3 d-flex gap-15 justify-content-center align-items-center">
                  <button className="button border-0" type="submit">
                    Login
                  </button>
                  <Link to="/signup" className="button signup ">
                    Signup
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
