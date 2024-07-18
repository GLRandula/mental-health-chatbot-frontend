"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

import avatar from "../../public/images/team/amr_safey.png";

import SmallNavItem from "../../data/header.json";
import { useAppContext } from "@/context/Context";

const LeftSidebar = () => {
  const pathname = usePathname();
  const { shouldCollapseLeftbar } = useAppContext();

  const user = useSelector((state) => state.user.loggedUser);

  const isActive = (href) => pathname.startsWith(href);
  return (
    <>
      <div
        className={`rbt-left-panel popup-dashboardleft-section ${
          shouldCollapseLeftbar ? "collapsed" : ""
        }`}
      >
        <div className="rbt-default-sidebar">
          <div className="inner">
            <div className="content-item-content">
              <div className="rbt-default-sidebar-wrapper">
                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    {SmallNavItem &&
                      SmallNavItem.smallNavItem
                        .slice(0, 7)
                        .map((data, index) => (
                          <li key={index}>
                            <Link
                              className={
                                isActive(data.link)
                                  ? "active"
                                  : "" || data.isDisable
                                  ? "disabled"
                                  : ""
                              }
                              href={data.link}
                            >
                              <Image
                                src={data.img}
                                width={35}
                                height={35}
                                alt="AI Generator"
                              />
                              <span>{data.text}</span>
                              {data.badge !== "" ? (
                                <div className="rainbow-badge-card badge-sm ml--10">
                                  {data.badge}
                                </div>
                              ) : (
                                ""
                              )}
                            </Link>
                          </li>
                        ))}
                  </ul>
                  <div className="rbt-sm-separator"></div>
                  <div className="mainmenu-nav">
                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                      <li className="has-submenu">
                        <a
                          className="collapse-btn collapsed"
                          data-bs-toggle="collapse"
                          href="/profile-details"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExampleMenu"
                        >
                          <i className="feather-plus-circle"></i>
                          <span>Setting</span>
                        </a>
                        <div className="collapse" id="collapseExampleMenu">
                          <ul className="submenu rbt-default-sidebar-list">
                            {SmallNavItem &&
                              SmallNavItem.smallNavItem
                                .slice(7, 14)
                                .map((data, index) => (
                                  <li key={index}>
                                    <Link
                                      href={data.link}
                                      className={
                                        isActive(data.link) ? "active" : ""
                                      }
                                    >
                                      <i className={`feather-${data.icon}`}></i>
                                      <span>{data.text}</span>
                                    </Link>
                                  </li>
                                ))}
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link
                          href="/contactus"
                          className={isActive("/help") ? "active" : ""}
                        >
                          <i className="feather-award"></i>
                          <span>Help & FAQ</span>
                        </Link>
                      </li>
                    </ul>

                    <div className="rbt-sm-separator"></div>
                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                      <li>
                        <Link
                          href="/release-notes"
                          className={isActive("/release-notes") ? "active" : ""}
                        >
                          <i className="feather-bell"></i>
                          <span>Release notes</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/utilize"
                          className={isActive("/terms-policy") ? "active" : ""}
                        >
                          <i className="feather-briefcase"></i>
                          <span>Terms & Policy</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="subscription-box">
            <div className="inner">
              <Link href="/profile-details" className="autor-info">
                <div className="author-img active">
                  <Image
                    className="w-100"
                    width={49}
                    height={48}
                    src={avatar}
                    alt="Author"
                  />
                </div>
                <div className="inner d-flex">
                  <div className="content">
                    <span className="title ">
                      {localStorage.getItem("user") && user[0]?.name}
                    </span>
                  </div>
                </div>
                <div className="author-badge">Free</div>
              </Link>
              <div className="btn-part">
                <Link href="/home" className="btn-default btn-border">
                  Upgrade To Pro
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center subscription-copyright copyright-text b3 small-text">
            Intellihack - Team Vertex
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
