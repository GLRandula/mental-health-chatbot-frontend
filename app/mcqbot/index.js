"use client";

import React, { useState } from "react";
import Context from "@/context/Context";

import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import BackToTop from "../backToTop";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import ChatBotHeaderDashboard from "@/components/Header/ChatBotHeaderDashboard";
import Modal from "@/components/Common/Modal";
import Header from "@/components/Header/Header";
import Mcq from "@/components/Mcq_ui/Mcq";
import RightFilePannel from "@/components/Header/RightFilePannel";
import LoadingAnimation from "../loadingAnimation";
import Auth from "@/components/Auth/Auth";

const McqbotPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");

  const setLoadingState = (loading) => {
    setIsLoading(loading);
  };

  const setLoadingMessage = (msg) => {
    setLoadingMsg(msg);
  };

  return (
    <>
      <main className="page-wrapper">
        {/* <div className="rbt-panel-wrapper"> */}
          {/* {isLoading && (
            <LoadingAnimation text={loadingMsg || "Setting things up"} />
          )} */}
          <Context>
            {/* <LeftDashboardSidebar /> */}
            {/* <ChatBotHeaderDashboard display="" />
            <Modal /> */}
            <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
            <PopupMobileMenu />
            <RightFilePannel />
            <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    <div className="">
                      <Mcq setLoadingState={setLoadingState} setLoadingMessage={setLoadingMessage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BackToTop />
          </Context>
        {/* </div> */}
      </main>
    </>
  );
};

export default Auth(McqbotPage);
