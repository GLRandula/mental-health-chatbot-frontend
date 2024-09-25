"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HeaderData from "../../data/header.json";

const UserNav = ({ title }) => {
  const pathname = usePathname();
  const isActive = (href) => pathname.startsWith(href);
  return (
    <>
      <div className="banner-area">
        <div className="settings-area">
          <h3 className="title">{title}</h3>

          <ul className="user-nav">
            {HeaderData &&
              HeaderData.navDashboardItem.slice(0, 7).map((data, index) => (
                <li key={index}>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserNav;
