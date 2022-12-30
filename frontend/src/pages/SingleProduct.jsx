import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [copy, setCopied] = useState(false);
  const props = {
    width: 560,
    height: 500,
    zoomWidth: 500,

    img: "https://salt.tikicdn.com/ts/tmp/f9/76/72/5efb0d991e058cf4ceadb72e2430c0b5.jpg",
  };
  const copyToClipboard = (text, e) => {
    e.preventDefault();
    console.log(text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <Meta title="Privaci Policy" />
      <BreadCrumb title="Privaci Policy" />
      <div className="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="orther-product-images d-flex flex-wrap gap-15 ">
                <div>
                  <img
                    src="https://salt.tikicdn.com/ts/tmp/f9/76/72/5efb0d991e058cf4ceadb72e2430c0b5.jpg"
                    alt=""
                    className="img-fluid "
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://salt.tikicdn.com/ts/tmp/f9/76/72/5efb0d991e058cf4ceadb72e2430c0b5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://salt.tikicdn.com/ts/tmp/f9/76/72/5efb0d991e058cf4ceadb72e2430c0b5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>{" "}
                <div>
                  <img
                    src="https://salt.tikicdn.com/ts/tmp/f9/76/72/5efb0d991e058cf4ceadb72e2430c0b5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored for student
                  </h3>
                </div>
                <div className="border-bottom py-3 ">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10 ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review ">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3 ">
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Type :</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Brand :</h3>{" "}
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Category :</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Tags :</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Availablity :</h3>{" "}
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Size :</h3>{" "}
                    <div className="d-flex flex-wrap gap-15 ">
                      <span className="badge border border-1 bg-white text-dark border-secondary  ">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary  ">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary  ">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary  ">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Color :</h3> <Color />
                  </div>{" "}
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3  ">
                    <h3 className="product-heading">Quantity :</h3>{" "}
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "50px" }}
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className=" d-flex gap-30 ms-5   align-items-center">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup ">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 ">
                    <div>
                      <a href="a">
                        {" "}
                        <TbGitCompare className="fs-5 me-2" /> Add to compare
                      </a>
                    </div>
                    <div>
                      <a href="a">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3 ">
                    <h3 className="product-heading">Shipping & Return :</h3>{" "}
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      we ship all Us domestic orders within{" "}
                      <b>5-10 business days</b>{" "}
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3 ">
                    <h3 className="product-heading">Product Link :</h3>{" "}
                    <a
                      href="javascript"
                      onClick={(e) => {
                        copyToClipboard(
                          "https://salt.tikicdn.com/ts/tmp/f9/76/72/5efb0d991e058cf4ceadb72e2430c0b5.jpg",
                          e
                        );
                      }}
                      className="d-flex align-items-center justify-content-between gap-15 "
                    >
                      <p className="mb-0">Copy Product Link </p>
                      {copy && <b className="mb-0 text-success">Đã copy </b>}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate suscipit voluptatem impedit laboriosam? Iusto
                  expedita possimus beatae inventore laudantium similique,
                  vitae, magni est, voluptatum fugiat laboriosam architecto
                  consequuntur magnam. Laudantium!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-wrapper  home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 id="review">Review</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end  ">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10 ">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark  text-decoration-underline "
                        href="a"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write form Review</h4>
                  <form action="" className="d-flex flex-column gap-15 ">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control "
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end ">
                      <button className="button border-0 ">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4 ">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center ">
                      <h6 className="mb-0">Phuc</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Magnam, voluptatum laborum cum repellat illum iste?
                      Quisquam incidunt expedita molestias earum porro. Autem
                      ipsam accusamus fuga dolorum voluptatem soluta dolore
                      cumque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="popular-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
