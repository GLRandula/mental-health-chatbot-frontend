"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";

import logo from "../../public/images/logo/logo.png";
import avatar from "../../public/images/team/amr_safey.png";

import Nav from "./Nav";
import UserMenu from "./UserMenu";

import { useSelector } from "react-redux";

const ChatBotHeaderDashboard = ({ display }) => {
  const {
    mobile,
    setMobile,
    rightBar,
    setRightBar,
    activeMobileMenu,
    setActiveMobileMenu,
  } = useAppContext();

  const user = useSelector((state) => state.user.loggedUser);

  return (
    <>
      <header className="rbt-dashboard-header rainbow-header header-default header-left-align rbt-fluid-header">
        <div className="container-fluid position-relative">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="header-left d-flex">
                <div className="expand-btn-grp">
                  <button
                    className={`bg-solid-primary popup-dashboardleft-btn ${
                      mobile ? "" : "collapsed"
                    }`}
                    onClick={() => setMobile(!mobile)}
                  >
                    <i className="fa-sharp fa-regular fa-sidebar"></i>
                  </button>
                </div>
                <div className="logo">
                  <Link href="/">
                    <Image
                      className="logo-light"
                      src={logo}
                      width={135}
                      height={35}
                      alt="Corporate Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center col-lg-6 d-none d-lg-block">
              <nav className="text-center mainmenu-nav d-none d-lg-block">
                <Nav />
              </nav>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <div className="header-right">
                <div className="mobile-menu-bar mr--10 ml--10 d-block d-lg-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>

                <div className="rbt-admin-panel account-access rbt-user-wrapper right-align-dropdown">
                  <div className="rbt-admin-card grid-style">
                    <a className="d-flex align-items-center" href="#">
                      <div className="inner d-flex align-items-center">
                        <div className="img-box">
                          <Image src={avatar} alt="Admin" />
                        </div>
                        <div className="content">
                          <span className="title ">{localStorage.getItem("user") && user[0]?.name}</span>
                          <p>{localStorage.getItem("user") && user[0]?.email}</p>
                        </div>
                      </div>
                      <div className="icon">
                        <i className="fa-sharp fa-solid fa-chevron-down"></i>
                      </div>
                    </a>
                  </div>
                  <div className="rbt-user-menu-list-wrapper">
                    <UserMenu />
                  </div>
                </div>

                <div className={`expand-btn-grp ${display}`}>
                  <button
                    className={`bg-solid-primary popup-dashboardright-btn ${
                      rightBar ? "" : "collapsed"
                    }`}
                    onClick={() => setRightBar(!rightBar)}
                  >
                    <i className="fa-sharp fa-regular fa-sidebar-flip"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ChatBotHeaderDashboard;
