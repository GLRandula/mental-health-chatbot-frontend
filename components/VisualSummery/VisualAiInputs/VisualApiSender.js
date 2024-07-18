import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from "@/app/store/Slices/graphAndSummarySlice";
import CopyPaste from "./CopyPaste";
import API_CONFIG from "@/components/API";
import "./VisualAiInputs.css";
import WaitingForResponse from "../../WaitingForResponse/WaitingForResponse";
import Popup from "../../PopUp/Popup";

const VisualApiSender = () => {
  const textareaRef = useRef(null);
  const [endPoint, setEndPoint] = useState("");
  const [text, setText] = useState("");
  const characterLimit = 1000;
  const [detail, setDetail] = useState(1);
  const user = useSelector((state) => state.user.loggedUser);
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const dispatch = useDispatch();

  const handleApiSelection = (api) => {
    setEndPoint(api);
  };

  const sendTextHandler = () => {
    if(user[0]){
      sendTextToApi();
    }else{
      setPopup({
        message: "You need to login to use this feature.",
        type: 3,
        size: 'Large',
        position: 'top-center',
        duration: 10000,
      });
    }
  };

  const sendTextToApi = async () => {
    if (!endPoint) {
      setPopup({
        message: "Please select Summerize Type",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });
      return;
    }

    if (text === "") {
      setPopup({
        message: "Textarea is empty. Please copy some text first.",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });
      return;
    }
    setIsLoading(true);

    const END_POINT =
      process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG[endPoint];

    try {
      const response = await fetch(END_POINT, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user[0].id,
          username: user[0].email,
          message: text,
          difficulty: detail,
        }),
      });

      const data = await response.json();

      const new_graph = {
        type: endPoint,
        user_id: data.user_id,
        response: data.response,
        date_created: data.date_created,
      };

      if (new_graph) {
        dispatch(add(new_graph));
        setIsLoading(false);
        setPopup({
          message: "Answer Recieved",
          type: 1,
          size: 'medium',
          position: 'top-center',
          duration: 3000,
        });
        setText("");  
        if (textareaRef.current) {
          textareaRef.current.value = "";
        }
      }
    } catch (error) {
      setIsLoading(false);
      setPopup({
        message: "Error sending text",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });
    }
  };

  const clearText = () => {
    setText("");
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => {
        setText(textarea.value);
      };

      textarea.addEventListener("input", handleInput);
      return () => {
        textarea.removeEventListener("input", handleInput);
      };
    }
  }, []);

  return (
    <div className="vai-input-container">
      <div>
        <CopyPaste textareaRef={textareaRef} setText={setText} />
      </div>

      <textarea
        className="scroll-custom"
        ref={textareaRef}
        rows="12"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div
        className={`character-counter ${
          text.length > characterLimit ? "exceed" : ""
        }`}
      >
        {text.length}/{characterLimit}
        <button className="btn-clear" onClick={clearText}>
          Clear
        </button>
      </div>

      <div className="api-buttons">
        <button
          className={`btn-choose ${endPoint === "graph" ? 'selected' : ''}`}
          onClick={() => handleApiSelection("graph")}
        >
          Visual
        </button>
        <button
          className={`btn-choose ${endPoint === "summary" ? 'selected' : ''}`}
          onClick={() => handleApiSelection("summary")}
        >
          Summary
        </button>
        <button
          className={`btn-choose ${endPoint === "graphAndSummary" ? 'selected' : ''}`}
          onClick={() => handleApiSelection("graphAndSummary")}
        >
          Both
        </button>
      </div>

      <div className="detail-level">
        Detail Level
        <input
          type="range"
          min="1"
          max="3"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="slider"
        />
        <div className="detail-labels">
          <div className={`detail-option ${detail === 1 ? "selected" : ""}`}>
            Simple
          </div>
          <div className={`detail-option ${detail === 2 ? "selected" : ""}`}>
            Balanced
          </div>
          <div className={`detail-option ${detail === 3 ? "selected" : ""}`}>
            High
          </div>
        </div>
      </div>

      <button
        className={`btn-send ${
          endPoint && text.length <= characterLimit && text.length >= 5 && !isLoading
            ? "enabled"
            : ""
        }`}
        onClick={sendTextHandler}
        disabled={!endPoint || text.length > characterLimit || text.length < 5 || isLoading}
      >
        {isLoading ? <WaitingForResponse showText={false} /> : "Generate"}
      </button>

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
  );
};

export default VisualApiSender;
