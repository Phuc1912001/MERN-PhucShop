import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Resetpassword" />
      <BreadCrumb title="Resetpassword" />
      <Container class1="login-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15 ">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomInput
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />

                <div className=" mt-3 d-flex gap-15 justify-content-center align-items-center">
                  <button className="button border-0">Oke</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
