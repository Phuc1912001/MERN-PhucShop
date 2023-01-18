import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title="SignUp" />
      <BreadCrumb title="SignUp" />
      <Container class1="login-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">SignUp</h3>
              <form action="" className="d-flex flex-column gap-15 ">
                <CustomInput type="text" placeholder="Name" name="name" />
                <CustomInput type="email" placeholder="email" name="email" />
                <CustomInput
                  type="tel"
                  placeholder="Mibile Number"
                  name="mobile"
                />
                <CustomInput type="password" name="password" />

                <div className=" mt-3 d-flex gap-15 justify-content-center align-items-center">
                  <button className="button border-0">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
