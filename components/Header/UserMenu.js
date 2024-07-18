import Image from "next/image";
import Link from "next/link";

import avatar from "../../public/images/team/team-01sm.jpg";
import UserMenuItems from "./HeaderProps/UserMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, clearUserFileList, clearTrainedFileList } from "@/app/store/Slices/userSlice";
import { use } from "react";
import { clearHistory } from "@/app/store/Slices/chatSlice";
import { clearGraphAndSummaryHistory } from "@/app/store/Slices/graphAndSummarySlice";
import { clearQPaper } from "@/app/store/Slices/questionSlice";
import { removeResearch } from "@/app/store/Slices/researchSlice";

const UserMenu = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);

  const userLoggedout = () => {
    dispatch(removeUser());
    dispatch(clearHistory());
    dispatch(clearGraphAndSummaryHistory());
    dispatch(clearQPaper());
    dispatch(clearUserFileList());
    dispatch(removeResearch());
    dispatch(clearTrainedFileList());
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="inner">
        <div className="rbt-admin-profile">
          <div className="admin-thumbnail">
            {/* <Image src={avatar} width={31} height={31} alt="User Images" /> */}
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="admin-info">
            <span className="name">{localStorage.getItem("user") && user[0]?.name}</span>
            <Link
              className="rbt-btn-link color-primary"
              href="/profile-details"
            >
              View Profile
            </Link>
          </div>
        </div>
        <UserMenuItems parentClass="user-list-wrapper user-nav" />
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper user-nav">
          <li>
            <Link href="/profile-details">
              <i className="fa-sharp fa-solid fa-gears"></i>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper">
          <li>
            <Link href="/signin" onClick={userLoggedout}>
              <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
