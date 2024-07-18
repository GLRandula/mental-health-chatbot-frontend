"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/logo.png";
import userImg from "../../public/images/team/amr_safey.png";
import google from "../../public/images/sign-up/google.png";
import Loading from "../loading";
import LoadingAnimation from "../loadingAnimation";
import facebook from "../../public/images/sign-up/facebook.png";
import API_CONFIG from "@/components/API";
import Popup from "../../components/PopUp/Popup";

const SignupPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [popup, setPopup] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setPopup({
        message: "Please fill all the fields",
        type: 2,
        size: 'medium',
        position: 'up',
        duration: 3000,
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPopup({
        message: "Passwords do not match",
        type: 2,
        size: 'medium',
        position: 'up',
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);

    const END_POINT = process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.signup;

    try {
      const response = await fetch( END_POINT,        
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            vectorstore: false,
          }),
        }
      );

      const data = await response.json();

      setPopup({
        message: "Signup successful",
        type: 1,
        size: 'medium',
        position: 'up',
        duration: 2000,
      });
      if (pathname === "/signup") {
        router.push("/signin");
      }
      await delay(2000);
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      setPopup({
        message: "Signup failed:",
        type: 2,
        size: 'medium',
        position: 'up',
        duration: 2000,
      });
    }
  };

  return (
    <>
      {isLoading && <LoadingAnimation text={"Setting up"} />}
      <main className="page-wrapper">
        <div className="signup-area">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-6 bg-color-blackest left-wrapper">
                <div className="sign-up-box">
                  <div className="signup-box-top">
                    <Image
                      src={logo}
                      width={193}
                      height={50}
                      alt="sign-up logo"
                    />
                  </div>
                  <div className="signup-box-bottom">
                    <div className="signup-box-content">
                      <div className="social-btn-grp">
                        <a className="btn-default btn-border" href="#">
                          <span className="icon-left">
                            <Image
                              src={google}
                              width={18}
                              height={18}
                              alt="Google Icon"
                            />
                          </span>
                          Login with Google
                        </a>
                        <a className="btn-default btn-border" href="#">
                          <span className="icon-left">
                            <Image
                              src={facebook}
                              width={18}
                              height={18}
                              alt="Facebook Icon"
                            />
                          </span>
                          Login with Facebook
                        </a>
                      </div>
                      <div className="text-social-area">
                        <hr />
                        <span>Or continue with</span>
                        <hr />
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="input-section">
                          <div className="icon">
                            <i className="feather-user"></i>
                          </div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input-section mail-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-envelope"></i>
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input-section password-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-lock"></i>
                          </div>
                          <input
                            type="password"
                            name="password"
                            placeholder="Create Password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input-section password-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-lock"></i>
                          </div>
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="forget-text">
                          <a className="btn-read-more" href="#">
                            <span>Forgot password</span>
                          </a>
                        </div>
                        <button type="submit" className="btn-default">
                          Sign Up
                        </button>
                      </form>
                    </div>
                    <div className="signup-box-footer">
                      <div className="bottom-text">
                        Do you have an account?
                        <a className="btn-read-more ml--5" href="/signin">
                          <span>Sign In</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 right-wrapper">
                <div className="client-feedback-area">
                  <div className="single-feedback">
                    <div className="inner">
                      <div className="meta-img-section">
                        <a className="image" href="#">
                          <Image
                            src={userImg}
                            width={93}
                            height={93}
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <h4 className="title-text mb--0">Tharindu Damruwan</h4>
                            <p className="desc mb--20">Computer Science Undergraduate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="close-button" href="/">
            <i className="fa-sharp fa-regular fa-x"></i>
          </Link>
        </div>
        {popup && (
        <Popup
          message={popup.message}
          type={popup.type}
          size={popup.size}
          position={popup.position}
          duration={popup.duration}
          onClose={() => setPopup(null)}
        />
      )}
      </main>
    </>
  );
};

export default SignupPage;
