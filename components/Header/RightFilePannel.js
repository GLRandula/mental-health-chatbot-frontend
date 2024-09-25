// RightFilePannel.js
"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context"; // Ensure to import your context
import {
  setChatHistory,
  selectChat,
  setSelectedChatHistory,
} from "../../app/store/Slices/chatSlice";
import Popup from "../PopUp/Popup";
import CreateNewChatPopup from "../PopUp/CreateNewChatPopup";

const RightFilePannel = () => {
  const user = useSelector((state) => state.user.loggedUser);
  const dispatch = useDispatch();
  const chatHistory = useSelector((state) => state.chat.chatHistory);
  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const { shouldCollapseRightbar } = useAppContext(); 
  const [isCreateChatPopupOpen, setIsCreateChatPopupOpen] = useState(false);
  const [popup, setPopup] = useState(null);
  const [newChatTopic, setNewChatTopic] = useState("");

  useEffect(() => {
    // Fetch chat list on component mount
    handleRefresh();
  }, []);

  // Fetch chat list by user email
  const handleRefresh = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/email/${encodeURIComponent(user[0].email)}`
      );
      const data = await response.json();
      if (response.ok) {
        dispatch(setChatHistory(data.chats));
      } else {
        setPopup({
          message: "Error Refreshing Chat History",
          type: 2,
          size: "medium",
          position: "bottom-right",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  // Select a chat to view its history
  const handleChatSelect = async (chat) => {
    dispatch(selectChat(chat)); // Set selected chat

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/query/history`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: user[0].id,
            chat_id: chat.chat_id,
            limit: 100,
          })
        }
      );
      const data = await response.json();
      if (response.ok) {
        dispatch(setSelectedChatHistory(data.history));
      } else {
      }
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const handleCreateNewChat = async () => {
    if (!newChatTopic.trim()) {
      setPopup({
        message: "Please enter a chat topic",
        type: "warning",
        size: "medium",
        position: "bottom-right",
        duration: 3000,
      });
      return;
    }
    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/chat/create`, 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: user[0].id,
            topic: newChatTopic,  // Use user input as the topic
          }),
        }
      );
      const newChat = await response.json();

      if (response.ok) {
        handleRefresh(); // Refresh chat list after successful chat creation
        setNewChatTopic(""); // Clear the input after chat creation
      } else {
        setPopup({
          message: "Error Creating New Chat",
          type: 2,
          size: "medium",
          position: "bottom-right",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };
  

  return (
      <>
        <div
          className={`rbt-right-side-panel popup-dashboardright-section ${
            shouldCollapseRightbar ? "collapsed" : ""
          }`}
        >
        
          <div className="rbt-right-side-panel">
          <div className="right-side-top">
          {/* Input for new chat topic */}
          <input
            type="text"
            placeholder="Enter chat topic"
            value={newChatTopic}
            onChange={(e) => setNewChatTopic(e.target.value)}
            className="input-text"
          />
          <div className="">&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          </div>
          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          <button className="btn-default" onClick={handleCreateNewChat}>
            Create New Chat
          </button>
        </div>
    
            <div className="right-side-bottom">
              <div className="chat-history-section">
                <h6>Chat Topics</h6>
                <ul className="chat-history-list">
                  {chatHistory.length > 0 ? (
                    chatHistory.map((chat, index) => (
                      <li
                        key={index}
                        className={`history-box ${
                          selectedChat?.chat_id === chat.chat_id ? "active" : ""
                        }`}
                        onClick={() => handleChatSelect(chat)}
                      >
                        {chat.topic}
                      </li>
                    ))
                  ) : (
                    <div>No chats available</div>
                  )}
                </ul>
              </div>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              <button className="btn-default" onClick={handleRefresh}>
                Refresh Chat List
              </button>
            </div>
          </div>
    
          {popup && (
            <Popup
              message={popup.message}
              type={popup.type}
              size={popup.size}
              position={popup.position}
              duration={popup.duration}
              onClose={() => setPopup(null)}
            />
          )}
        </div>
      </>    
  );
};

export default RightFilePannel;
