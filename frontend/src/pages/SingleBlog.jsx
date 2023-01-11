import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name " />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="signle-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10  ">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
              <img
                src="images/blog-3.webp"
                className="img-fluid w-100 my-4 "
                alt="blog"
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia at corporis corrupti inventore cum expedita, fuga
                dolorem repudiandae dolore doloribus neque eligendi placeat id
                rerum saepe eveniet. Excepturi, ipsa consectetur!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
