"use client";

import React from "react";
import Context from "@/context/Context";

import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import BackToTop from "../backToTop";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import ChatBotHeaderDashboard from "@/components/Header/ChatBotHeaderDashboard";
import Modal from "@/components/Common/Modal";
import Chat from "@/components/ChatWithBot/Chat";
import RightFilePannel from "@/components/Header/RightFilePannel";
const ChatbotPage = () => {
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <div className="rbt-panel-wrapper">
          <Context>
            <LeftDashboardSidebar />
            <ChatBotHeaderDashboard display="" />
            <Modal />
            <PopupMobileMenu />
            <RightFilePannel/>
            <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    <div className="chat-box-section">
                      <Chat />
                    </div>
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

export default ChatbotPage;
