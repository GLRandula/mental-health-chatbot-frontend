import React from "react";
import Sidebar from "./Sidebar";

import SidebarData from "../../data/sidebar.json";
import UtilizeData from "../../data/utilize.json";

import UtilizeBody from "./UtilizeBody";

const Utilize = () => {
  return (
    <>
      <div className="rbt-utilize-area rainbow-section-gap-big">
        <div className="container">
          <div className="utilize-inner">
            <div className="row g-5">
              <div className="col-lg-3">
                <div className="rbt-default-sidebar sticky-top rbt-shadow-box">
                  <Sidebar sidebar={SidebarData.sidebar} />
                </div>
              </div>
              <div className="col-lg-9 inner-content pl--0">
                <UtilizeBody utilize={UtilizeData.utilize} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utilize;
