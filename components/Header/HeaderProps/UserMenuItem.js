"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserMenuItems = ({ parentClass }) => {
  const pathname = usePathname();
  const isActive = (href) => pathname.startsWith(href);
  return (
    <>
      <ul className={parentClass}>
        <li>
          <Link
            className={isActive("/profile-details") ? "active" : ""}
            href="/profile-details"
          >
            <i className="fa-sharp fa-regular fa-user"></i>
            <span>Profile Details</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/appearance") ? "active" : ""}
            href="/home"
          >
            <i className="fa-sharp fa-regular fa-home"></i>
            <span>Apperance</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/plans-billing") ? "active" : ""}
            href="/roadmap"
          >
            <i className="fa-sharp fa-regular fa-briefcase"></i>
            <span>Plans and Billing</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/application") ? "active" : ""}
            href="/utilize"
          >
            <i className="fa-sharp fa-regular fa-list"></i>
            <span>Application</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserMenuItems;
