"use client";

import Image from "next/image";
import Link from "next/link";

import { useDispatch } from "react-redux";

import logo from "../../public/images/logo/logo.png";
import userImg from "../../public/images/team/amr_safey.png";
import google from "../../public/images/sign-up/google.png";
import facebook from "../../public/images/sign-up/facebook.png";
import Loading from "../loading";
import LoadingAnimation from "../loadingAnimation";
import {useState} from "react";
import { useRouter, usePathname } from "next/navigation";
import { addUser, addFileHistory } from "../store/Slices/userSlice";
import API_CONFIG from "@/components/API";
import Popup from "../../components/PopUp/Popup";
import { fileFetchUtil } from "../../components/API/fileFetchUtil";

const SigninPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [popup, setPopup] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (formData.email === "" || formData.password === "") {
      setPopup({
        message: "Please fill all the fields",
        type: 2,
        size: 'medium',
        position: 'up',
        duration: 3000,
      });

      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("username", formData.email);
      params.append("password", formData.password);

      setIsLoading(true);

      const END_POINT = process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.login;

      const response = await fetch(END_POINT,
        {
          method: "POST",
          credentials: 'include',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );
      const data = await response.json();

      if (data.id) {
        const new_user = {
          access_token: data.access_token,
          token_type: data.token_type,
          charts: data.chats,
          id: data.id,
          name: data.name,
          email: data.email,
        };
        dispatch(addUser(new_user));

        // load user file list
        const fileData = await fileFetchUtil(new_user);
        if (fileData.success) {
          const fileHistory = fileData.filenames;
          fileHistory.forEach((filename) => {
            dispatch(addFileHistory(filename));
          }); 

        } else {
          setPopup({
            message: fileData.message,
            type: 3,
            size: "medium",
            position: "top-center",
            duration: 3000,
          });
        }

        localStorage.setItem("user", "logged");
        // id = localStorage.getItem("user_id");
        if (pathname === "/signin") {
          router.push("/home");
        }
        await delay(2000);
        setIsLoading(false);
        
      } else {
        setIsLoading(false);
        setPopup({
          message: "Invalid credentials",
          type: 2,
          size: 'medium',
          position: 'up',
          duration: 3000,
        });
      }
    } catch (error) {
      setIsLoading(false);
      setPopup({
        message: "Something went wrong",
        type: 2,
        size: 'medium',
        position: 'up',
        duration: 3000,
      });
    }
  };

  return (
    <>
      {isLoading && <LoadingAnimation text={"Signing"} />}
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
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="forget-text">
                          <a className="btn-read-more" href="#">
                            <span>Forgot password</span>
                          </a>
                        </div>
                        <button type="submit" className="btn-default">
                          Sign In
                        </button>
                      </form>
                    </div>
                    <div className="signup-box-footer">
                      <div className="bottom-text">
                        Don't have an account?{" "}
                        <a className="btn-read-more ml--5" href="/signup">
                          <span>Sign Up</span>
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

export default SigninPage;
