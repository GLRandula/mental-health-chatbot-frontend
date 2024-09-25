// Chat.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import sal from "sal.js";

import DocImg from "../../public/images/icons/document-file.png";
import authorImg from "../../public/images/team/amr_safey.png";
import aiImg from "../../public/images/team/avater.png";

import Reaction from "../Common/Reaction";
import ChatOption from "../Common/ChatOptions";
import TypingBox from "../Common/TypingBox";
import WaitingForResponse from "../WaitingForResponse/WaitingForResponse";
import {
  addMessageToSelectedChat,
} from "@/app/store/Slices/chatSlice";
import Popup from "../PopUp/Popup";
import API_CONFIG from "../API";

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);
  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const selectedChatHistory = useSelector(
    (state) => state.chat.selectedChatHistory
  );
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    sal();
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [selectedChatHistory]);

  const handleSend = async (input) => {
    if (!selectedChat) {
      setPopup({
        message: "Please select or create a chat first.",
        type: 2,
        size: "medium",
        position: "top-center",
        duration: 3000,
      });
      return;
    }
  
    const newUserMessage = {
      message: input,
      response: null, // Initially set response as null
      date_created: new Date().toISOString(),
    };
  
    setUserInput("");
    setIsLoading(true);
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL+API_CONFIG.chat, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user[0].id,
          chat_id: selectedChat.chat_id,
          message: input || "", // Ensure the message is a valid string
          history: "",  // Ensure history is a valid string
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const updatedEntry = {
          message: input,
          response: data.response,  // Bot response from API
          date_created: data.date_created,  // API-created timestamp
        };
  
        dispatch(addMessageToSelectedChat(updatedEntry));
      } else {
        setPopup({
          message: "Error sending message",
          type: 2,
          size: "medium",
          position: "top-center",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleUserInput = (value) => {
    setUserInput(value);
    handleSend(value);
  };

  return (
    <>
      <ChatOption barImg={DocImg} title="Chat with Bot" wdt={14} htd={18} />
      <div className="chat-container" ref={chatContainerRef}>
      {selectedChatHistory && selectedChatHistory.length > 0 ? (
  selectedChatHistory.map((data, index) => (
    <div className="pb-0 chat-box-list" id="chatContainer" key={index}>
      <div className="chat-box author-speech">
        <div className="inner">
          <div className="chat-section">
          <div className="author">
                    <Image
                      className="w-100"
                      width={40}
                      height={40}
                      src={authorImg}
                      alt="Author"
                    />
                  </div>
            <div className="chat-content">
              <h6 className="title">{"User"}</h6>
              <p>{data.message}</p>
            </div>
          </div>
        </div>
      </div>
      {data.response && (
        <div className="chat-box advisor-speech">
          <div className="inner">
            <div className="chat-section">
            <div className="author">
                    <Image
                      className="w-100"
                      width={40}
                      height={40}
                      src={aiImg}
                      alt="Author"
                    />
                  </div>
              <div className="chat-content">
                <h6 className="title">Bot</h6>
                <p>{data.response}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ))
) : (
  <div>Please select or create a chat to start messaging.</div>
)}


      </div>
      <TypingBox handleUserInput={handleUserInput} />
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
    </>
  );
};

export default Chat;
