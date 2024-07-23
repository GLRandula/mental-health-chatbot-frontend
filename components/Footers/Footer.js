import Image from "next/image";
import Link from "next/link";
import React from "react";

import FooterData from "../../data/footer.json";

import logo from "../../public/images/logo/logo.png";
import FooterProps from "./FooterProps";

const Footer = () => {
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logo}
                        width={150}
                        height={35}
                        alt="ChatBot Logo"
                      />
                    </Link>
                  </div>
                  <p className="b1 desc-text">
                    Transforming mental health with AI and <br /> personalized doctor connections.{" "}
                  </p>
                  <h6 className="subtitle">Join a Newsletter</h6>
                  <form className="newsletter-form" action="#">
                    <div className="form-group">
                      <input type="email" placeholder="Enter Your Email Here" />
                      <button
                        className="btn-default bg-solid-primary"
                        type="submit"
                      >
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                {FooterData &&
                  FooterData.footer.map((data, index) => (
                    <div className="rainbow-footer-widget" key={index}>
                      <FooterProps list={data.links} />
                    </div>
                  ))}
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                {FooterData &&
                  FooterData.footer.map((data, index) => (
                    <div className="rainbow-footer-widget" key={index}>
                      <FooterProps list={data.services} />
                    </div>
                  ))}
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                {FooterData &&
                  FooterData.footer.map((data, index) => (
                    <div className="rainbow-footer-widget" key={index}>
                      <div className="widget-menu-top">
                        <h4 className="title">Contact</h4>
                        {data.contact.map((inner, i) => (
                          <div className="inner" key={i}>
                            <ul className="footer-link contact-link">
                              <li>
                                <i className="contact-icon fa-regular fa-location-dot"></i>
                                <Link href="#">{inner.location}</Link>
                              </li>
                              <li>
                                <i className="contact-icon fa-sharp fa-regular fa-envelope"></i>
                                <Link href="#">{inner.mail}</Link>
                              </li>
                              <li>
                                <i className="contact-icon fa-regular fa-phone"></i>
                                <Link href="#">+{inner.number}</Link>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
