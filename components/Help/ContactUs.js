import React from "react";

const ContactUs = () => {
  return (
    <>
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="firstname">Name</label>
            <input id="firstname" type="text" placeholder="Trent" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="lastname">Email</label>
            <input
              id="lastname"
              type="email"
              placeholder="example.adam@gmail.com"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="username">Subject</label>
            <input id="username" type="text" placeholder="Subject" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input id="phonenumber" type="tel" placeholder="+1-202-555-0174" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="bio">Your message</label>
            <textarea
              id="bio"
              cols="20"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="form-group mb--0">
            <a className="btn-default" href="#">
              Send message
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
