import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464.96996391008344!2d105.8305526!3d21.2017024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313503d36e9d3fd3%3A0xd20274819c91415d!2zUXXhuqd5IFRodeG7kWMgTmd1eeG7hW4gVsSDbiBU4bqlbg!5e0!3m2!1svi!2s!4v1672124327365!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5 ">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15 ">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
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
                  <div>
                    <button className="button border-0 ">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4 ">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center ">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Thái Phù - Mai Đình - Sóc Sơn - Hà Nội
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center ">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+84 329609726">+84 329609726</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center ">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:phucphuc1912001@gmail.com">
                        phucphuc1912001@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center ">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">
                        Admid vẫn còn độc thân ai muốn tìm hiểu hãy liên hệ sdt
                        trên nhé haha !
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
