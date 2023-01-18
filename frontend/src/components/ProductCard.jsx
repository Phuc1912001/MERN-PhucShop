import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : (location.pathname = "product/:id" ? "/product/1" : ":id")
          }`}
          className="product-card position-relative "
        >
          <div className="wishlist-icon position-absolute ">
            <button className="border-0 bg-transparent ">
              <img src="images/wish.svg" alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="product " />
            <img
              className="img-fluid"
              src="images/watch-1.webp"
              alt="product "
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              optio nulla sed tenetur deleniti. Aperiam aspernatur ipsa
              voluptatem, beatae ipsum dignissimos optio commodi veniam quasi.
              Veritatis quam iste in labore?
            </p>
            <p className="price">$100</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-15 ">
              <button className="border-0 bg-transparent ">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : (location.pathname = "product/:id" ? "/product/1" : ":id")
          }`}
          className="product-card position-relative "
        >
          <div className="wishlist-icon position-absolute ">
            <button className="border-0 bg-transparent ">
              <img src="images/wish.svg" alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="product " />
            <img
              className="img-fluid"
              src="images/watch-1.webp"
              alt="product "
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              optio nulla sed tenetur deleniti. Aperiam aspernatur ipsa
              voluptatem, beatae ipsum dignissimos optio commodi veniam quasi.
              Veritatis quam iste in labore?
            </p>
            <p className="price">$100</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-15 ">
              <button className="border-0 bg-transparent ">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
