import React from "react";

import DoctorBody from "./DoctorBody";
import UserNav from "../Common/UserNav";

const DoctorDetails = () => {
  return (
    <>
      <div className="rbt-main-content mb--0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content">
            <UserNav />
            <div className="content-page pb--50">
              <div className="chat-box-list">
                <DoctorBody />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
