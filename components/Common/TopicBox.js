"use client";

import React, { useEffect, useState } from "react";
import Form from "./Form";
import Loading from "@/app/loading";
import LoadingAnimation from "@/app/loadingAnimation";
import { Tooltip } from "react-tooltip";
import { useSelector } from "react-redux";

const TypingBox = ({ handleUserInput }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingState, setLoadingState] = useState("");
  const [error, setError] = useState('');

  const user = useSelector((state) => state.user.loggedUser);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleSendClick = (e) => {
    e.preventDefault();
    handleUserInput(input);
    // setInput("");
  };

  const preventF = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isLoading && (
        <LoadingAnimation text={loadingState || "Setting things up"} />
      )}
      <div className="rbt-static-bar2">
        <Tooltip id="my-tooltip" className="custom-tooltip tooltip-inner" />
        <form className="new-chat-form border-gradient" onSubmit={preventF}>
          <textarea
            rows="1"
            placeholder="Enter the Researching Area..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <div className="left-icons">
            <div title="nextjs-app" className="form-icon icon-gpt">
              <i className="fa-sharp fa-regular fa-aperture"></i>
            </div>
          </div>
          <div className="right-icons">
            {user.length !== 0 && (
              <>
                <a
                  className="form-icon icon-send"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Send message"
                  onClick={handleSendClick}
                >
                  <i className="fa-sharp fa-solid fa-paper-plane-top"></i>
                </a>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default TypingBox;
