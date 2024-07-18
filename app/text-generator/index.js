// index.js
"use client";

import React from "react";
import Context from "@/context/Context";

import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import BackToTop from "../backToTop";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import RightAiPannel from "@/components/Header/RightAiPannel";
// import LeftAiPannel from "@/components/Header/LeftAiPannel";
import Modal from "@/components/Common/Modal";
// import TextGenerator from "@/components/TextGenerator/TextGenerator";
// import StaticbarDashboard from "@/components/Common/StaticBarDashboard";
import PdfViewer from "@/components/PDF/PdfViewer"; // Import the PdfViewer component
// import CopyButton from "@/components/TextGenerator/VisualAiInputs/CopyPaste"; 
// import VisualInputs from "@/components/TextGenerator/VisualAiInputs/VisualInputs";
import VisualInputs from "@/components/VisualSummery/VisualAiInputs/VisualInputs";
import LeftSidebar from "@/components/Header/LeftDashboardSidebar";
import Auth from "@/components/Auth/Auth";

const TextGeneratorPage = () => {
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <div className="rbt-panel-wrapper">
          <Context>
            <LeftSidebar/>
            <HeaderDashboard display="" />
            <RightAiPannel />
            <Modal />
            <PopupMobileMenu />

            <div className="rbt-main-content pdf">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    
                    <PdfViewer url={""} />
                      {/* <TextGenerator /> */}
                      {/* <StaticbarDashboard /> */}
                      <VisualInputs/>
                      
                  </div>
                </div>
              </div>
            </div>

            <BackToTop />
          </Context>
        </div>
      </main>
    </>
  );
};

export default Auth(TextGeneratorPage);
