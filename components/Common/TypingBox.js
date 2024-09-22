"use client";

import React, { useState, useEffect } from "react";
import Popup from "../PopUp/Popup";
import LoadingAnimation from "@/app/loadingAnimation";
import RecordingPopup from "../PopUp/RecordingPopup";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const TypingBox = ({ handleUserInput }) => {
  const [input, setInput] = useState(""); 
  const [isListening, setIsListening] = useState(false); 
  const [note, setNote] = useState(null); 
  const [popup, setPopup] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [loadingState, setLoadingState] = useState(""); 
  
  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }

    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript); 
      setInput(transcript); 
    };

    mic.onerror = (event) => {
      console.error("Mic error:", event.error);
      setPopup({
        message: "Mic Error: " + event.error,
        type: "error",
        size: "small",
        duration: 3000,
        position: "center",
      });
    };
  };

  const handleRecordClick = () => {
    setIsListening((prevState) => !prevState); 
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    handleUserInput(input);
    setInput(""); 
  };

  return (
    <>
      {isLoading && <LoadingAnimation text={loadingState || "Setting things up"} />}

      <div className="rbt-static-bar">
        <form className="new-chat-form border-gradient" onSubmit={(e) => e.preventDefault()}>
          <textarea
            rows="1"
            placeholder="Send a message..."
            value={input || note || ""}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>

          <div className="right-icons">
            <>
              <a
                className={`form-icon icon-mic ${isListening ? "active" : ""}`}
                onClick={handleRecordClick}
              >
                {isListening ? <i className="fa-regular fa-microphone"></i> : <i className="fa-solid fa-microphone-slash"></i>}
              </a>
              <a className="form-icon icon-send" onClick={handleSendClick}>
                <i className="fa-sharp fa-solid fa-paper-plane-top"></i>
              </a>
            </>
          </div>
        </form>

        <p className="b3 small-text">
          Consider checking important information.
        </p>
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

      {/* Show RecordingPopup when recording is in progress */}
      <RecordingPopup
        isRecording={isListening}
        stopRecording={() => setIsListening(false)}
      />
    </>
  );
};

export default TypingBox;
