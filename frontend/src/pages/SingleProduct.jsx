import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 200,
    img: "https://salt.tikicdn.com/ts/tmp/f9/76/72/5efb0d991e058cf4ceadb72e2430c0b5.jpg",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
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
                  <ReactImageZoom {...props} className="cayqua" />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
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
              <h4>Review</h4>
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