"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "../PopUp/Popup";
import LoadingAnimation from "@/app/loadingAnimation";
import RecordingPopup from "../PopUp/RecordingPopup"; // Import the Google-like recording popup

const TypingBox = ({ handleUserInput }) => {
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingState, setLoadingState] = useState("");
  const [transcription, setTranscription] = useState("");
  const [popup, setPopup] = useState(null);

  // Function to handle recording start and stop
  const handleRecordClick = async () => {
    if (!recording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        setAudioChunks([]); // Clear any previous audio chunks
  
        recorder.ondataavailable = (e) => {
          console.log("Data available:", e.data.size);
          if (e.data.size > 0) {
            setAudioChunks((prev) => [...prev, e.data]);
          }
        };
  
        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          console.log("Audio Blob size:", audioBlob.size); // Log blob size
          if (audioBlob.size > 0) {
            uploadAudio(audioBlob);
          } else {
            console.error("Audio blob is empty!");
          }
        };
  
        recorder.start();
        setRecording(true);
      } catch (err) {
        console.error("Microphone access error:", err);
      }
    } else {
      mediaRecorder.stop();
      setRecording(false);
    }
  };
  
  

  const uploadAudio = async (audioBlob) => {
    try {
      setIsLoading(true);

      // Step 1: Upload audio to AssemblyAI
      const formData = new FormData();
      formData.append("file", audioBlob);

      const uploadResponse = await axios.post("https://api.assemblyai.com/v2/upload", formData, {
        headers: {
          authorization: process.env.NEXT_PUBLIC_ASSEMBLY_AI_API_KEY,
          "Content-Type": "multipart/form-data",
        },
      });

      const audioUrl = uploadResponse.data.upload_url;

      // Step 2: Request transcription
      const transcriptResponse = await axios.post(
        "https://api.assemblyai.com/v2/transcript",
        { audio_url: audioUrl },
        {
          headers: {
            authorization: process.env.NEXT_PUBLIC_ASSEMBLY_AI_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      const transcriptId = transcriptResponse.data.id;

      // Step 3: Poll AssemblyAI for transcription result
      let transcriptResult;
      while (!transcriptResult || transcriptResult.status !== "completed") {
        const statusResponse = await axios.get(
          `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
          {
            headers: {
              authorization: process.env.NEXT_PUBLIC_ASSEMBLY_AI_API_KEY,
            },
          }
        );
        transcriptResult = statusResponse.data;

        if (transcriptResult.status === "failed") {
          throw new Error("Transcription failed");
        }

        await delay(2000); // Wait for 2 seconds between status checks
      }

      // Show transcription in input field and hide popup
      setInput(transcriptResult.text);
      setPopup(null); // Close the popup after transcription
      setIsLoading(false);
    } catch (err) {
      console.error("Error during transcription:", err);
      setPopup({
        message: "Error processing transcription.",
        type: "error",
        size: "small",
        duration: 3000, // Close after 3 seconds
        position: "center",
      });
      setIsLoading(false);
    }
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleSendClick = (e) => {
    e.preventDefault();
    handleUserInput(input);
    setInput(""); // Clear the input after sending the message
  };

  const preventF = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isLoading && <LoadingAnimation text={loadingState || "Setting things up"} />}

      <div className="rbt-static-bar">
        <form className="new-chat-form border-gradient" onSubmit={preventF}>
          <textarea
            rows="1"
            placeholder="Send a message..."
            value={input || transcription} // Optionally show transcription in the input
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <div className="left-icons">
            <div title="nextjs-app" className="form-icon icon-gpt">
              <i className="fa-sharp fa-regular fa-aperture"></i>
            </div>
          </div>
          <div className="right-icons">
            <>
              <a
                className={`form-icon icon-mic ${recording ? "active" : ""}`}
                onClick={handleRecordClick}
              >
                <i className="fa-regular fa-waveform-lines"></i>
              </a>
              <a
                className="form-icon icon-send"
                onClick={handleSendClick}
              >
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
        isRecording={recording}
        stopRecording={() => mediaRecorder.stop()}
        cancelRecording={() => {
          mediaRecorder.stop();
          setRecording(false); // Reset recording state
        }}
      />
    </>
  );
};

export default TypingBox;

