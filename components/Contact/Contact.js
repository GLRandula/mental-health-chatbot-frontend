import React from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gapTop-big">
          <div className="container">
            <div className="row mt--40 row--15">
              <div className="col-lg-8">
                <div className="contact-details-box">
                  <h3 className="title">Get Started with a free quotation</h3>

                  <div className="profile-details-tab">
                    {/* <div className="advance-tab-button">
                      <ul
                        className="nav nav-tabs tab-button-style-2 justify-content-start"
                        id="settinsTab-4"
                        role="tablist"
                      >
                        <li role="presentation">
                          <a
                            href="#"
                            className="tab-button active"
                            id="image-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#image-genarator"
                            role="tab"
                            aria-controls="image-genarator"
                            aria-selected="true"
                          >
                            <span className="title">AI ChatBot</span>
                            <span className="title"></span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#"
                            className="tab-button"
                            id="photo-editor-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#photo-editor"
                            role="tab"
                            aria-controls="photo-editor"
                            aria-selected="true"
                          >
                            <span className="title">Doctor Suggestion</span>
                            <span className="title"></span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#"
                            className="tab-button"
                            id="email-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#email-genarator"
                            role="tab"
                            aria-controls="email-genarator"
                            aria-selected="true"
                          >
                            <span className="title">Research Pal</span>
                            <span className="title"></span>
                          </a>
                        </li>
                      </ul>
                    </div> */}

                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="image-genarator"
                        role="tabpanel"
                        aria-labelledby="image-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="photo-editor"
                        role="tabpanel"
                        aria-labelledby="photo-editor-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="email-genarator"
                        role="tabpanel"
                        aria-labelledby="email-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="code-genarator"
                        role="tabpanel"
                        aria-labelledby="code-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt_md--30 mt_sm--30">
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p className="b2">
                    Group 11, <br />2nd Tear Group Project, <br />Bachelor of Computer Science, <br />Faculty of Computing and Technology, <br />University of Kelaniya.
                    </p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-headphones"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Number</h4>
                    <p className="b2">
                      <Link href="#">+94 XX XXX XXXX</Link>
                    </p>
                    <p className="b2">
                      <Link href="#">+94 XX XXX XXXX</Link>
                    </p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p className="b2">
                      <Link href="#">XXXX@gmail.com</Link>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
