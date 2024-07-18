"use client";

import React, { useState } from "react";

import { useAppContext } from "@/context/Context";
import VisualOutputs from "@/components/VisualSummery/VisualAiOutputs/VisualOutputs";

const RightDashboardSidebar = () => {
  const { shouldCollapseRightbar } = useAppContext();
  const [sectionStates, setSectionStates] = useState({
    previous: true,
    yesterday: true,
    older: true,
  });

  const toggleSection = (section) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <>
      <div
        className={`rbt-right-side-panel rbt-right-side-panel-cus popup-dashboardright-section ${
          shouldCollapseRightbar ? "collapsed" : ""
        }`}
      >
        
        <div className="right-side-bottom">
        <VisualOutputs/>
        </div>
        
      </div>
    </>
  );
};

export default RightDashboardSidebar;
