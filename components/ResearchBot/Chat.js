"use client";

import React, { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import sal from "sal.js";

import DocImg from "../../public/images/icons/document-file.png";

import Reaction from "../Common/Reaction";
import ResearchOptions from "../Common/ResearchOptions";
import TopicBox from "../Common/TopicBox";
import WaitingForResponse from "../WaitingForResponse/WaitingForResponse";
import FormattedText from "../FormattedText/FormattedText";
import { addResearch, removeResearch } from "@/app/store/Slices/researchSlice";
import API_CONFIG from "../API";
import Popup from "../PopUp/Popup";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [researchResponse, setResearchResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);
  const research = useSelector((state) => state.research.research);

  const sample = `This is a <b><i>sample response</i></b> about mental health chatbots:\n\n<b>1.</b> Chatbots are an emerging technology that show potential for mental health care apps to enable effective and practical evidence-based therapies. They can play an important role in mental health care by providing support to patients.\nhttps://www.ncbi.nlm.nih.gov/pmc/articles/PMC10242473/\n\n<b>2.</b> AI chatbots may someday play an important role in mental health care, but many currently online are untested and unsafe. It is important to be cautious when using online mental health chatbots.\nhttps://newsroom.uw.edu/blog/beware-online-mental-health-chatbots-specialists-warn\n\n<b>3.</b> Woebot Health offers a scalable enterprise solution for mental health, providing chat-based mental health support to patients and members.\nhttps://woebothealth.com/\n\n<b>4.</b> AI-powered chatbots and apps are proving to be invaluable assets in the field of mental health, removing persistent hurdles to treatment such as cost and access.\nhttps://www.rgare.com/knowledge-center/article/ai-chatbots-break-down-barriers-to-much-needed-mental-health-treatments\n\n<b>5.</b> The U.K.'s National Health Service has begun offering a chatbot called Wysa to help with stress, anxiety, and depression among adults and teens.\nhttps://apnews.com/article/chatbots-mental-health-therapy-counseling-ai-73feb819ff52a51d53fee117c3207219\n\n<b>6.</b> Mental health chatbots powered by artificial intelligence have been developed as a therapy support tool.\nhttps://www.cbsnews.com/news/mental-health-chatbots-powered-by-artificial-intelligence-providing-support-60-minutes-transcript/\n\n<b>7.</b> There are various AI chatbots for mental health support, offering personalized guidance, coping strategies, and 24/7 assistance.\nhttps://getmarlee.com/blog/mental-health-chatbot\n\n<b>8.</b> Woebot is an AI chatbot that provides people with mental health support using concepts from cognitive behavioral therapy.\nhttps://spectrum.ieee.org/woebot\n\nThese resources provide insights into the use of chatbots in mental health care and the benefits they offer.`;

  const handleSend = async (input) => {

    if (!input) return;
    setIsLoading(true);

    // research bot
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.research,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user[0].id,
            username: user[0].email,
            query: input,
          }),
        }
      );

      const data = await response.json();

      setResearchResponse(data.response);

      dispatch(addResearch(data.response));
    } catch (error) {
      setIsLoading(false);
      setPopup({
        message: "Error sending message",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });

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
      <TopicBox handleUserInput={handleUserInput} />
      <ResearchOptions barImg={DocImg} title="Research Bot" wdt={14} htd={18} />
      <div className="pb-0 chat-box-list" id="chatContainer">
        <div className="chat-box author-speech">
          <div className="inner">
            <div className="chat-section">
              <div className="chat-content">
                {/* <p className="ps-5 editable me-4" style={{whiteSpace: 'pre-wrap'}}>{sample}</p> */}
                {/* {isLoading && <WaitingForResponse />} */}
                {isLoading ? <WaitingForResponse /> : (<FormattedText
                  text={research.length > 0 ? research[research.length - 1] : sample}
                  className={`ps-5`}
                  style={{ fontFamily: "Courier, Courier New, monospace" }}
                />)}
                <Reaction />
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Chat;
