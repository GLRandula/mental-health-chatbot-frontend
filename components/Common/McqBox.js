"use client";

import React, { useEffect, useState } from "react";
import Form from "./Form";
import Loading from "@/app/loading";
import LoadingAnimation from "@/app/loadingAnimation";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import API_CONFIG from "../API";
import { updateUser, addFileHistory, clearUserFileList, clearTrainedFileList, updateTrained } from "@/app/store/Slices/userSlice";
import Popup from "../PopUp/Popup";
import { fileFetchUtil } from "../../components/API/fileFetchUtil";
// import { Fa1 } from "react-icons/fa6";

const McqBox = ({ handleUserInput, setLoadingState, setLoadingMessage }) => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  // const [isLoading,  setLoadingState] = useState(false);
  // const [loadingState, setLoadingState] = useState("");
  const [error, setError] = useState('');
  const [popup, setPopup] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);

  

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const triggerUploadFile = () => {
    if (user[0]) {
      if(validateFile(file)){
        handleUploadFile();
      }
  
    } else {
      setPopup({
        message: "Please login to upload the file",
        type: 3,
        size: 'large',
        position: 'top-center',
        duration: 3000,
      });
    }
  };

  const validateFile = (file) => {
    // Clear previous errors
    setError('');

    // Validate file type
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed.');
      setPopup({
        message: "Only PDF files are allowed",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });
      return false;
    }

    // Validate file size (10MB = 10 * 1024 * 1024 bytes)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size cannot exceed 10MB.');
      setPopup({
        message: "File size cannot exceed 10MB.",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });
      return false;
    }

    // If validation passes, set the file state
    //setFile(file);
    return true;
  };

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (validateFile(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const handleUploadFile = async () => {
    try {
      if (!file || !user[0].email) {
        setPopup({
          message: "You need to login to use this feature.",
          type: 3,
          size: 'large',
          position: 'top-center',
          duration: 10000,
        });
        return;
      }


      const END_POINT_1 =
        process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.requestSignedUrl;


      setLoadingMessage("Uploading file");
      setLoadingState(true);

      // request the signed url from the server
      const response = await fetch(END_POINT_1, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user[0].id,
          username: user[0].email,
          filename: file.name,
        }),
      });

      const data = await response.json();

      // upload the file to the cloud storage
      const uploadResponse = await fetch(data.response, {
        method: "PUT",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: file,
      });

      if (uploadResponse.ok) {
        setLoadingMessage("Setting up vector store");
        setPopup({
          message: "File uploaded successfully.",
          type: 1,
          size: 'medium',
          position: 'top-center',
          duration: 2000,
        });
        const fileData = await fileFetchUtil(user[0]);
          if (fileData.success) {
            const fileHistory = fileData.filenames;
            dispatch(clearUserFileList());
            fileHistory.forEach((filename) => {
              dispatch(addFileHistory(filename));
            }); 
          } else {
            setPopup({
              message: "Error Refreshing Files List",
              type: 1,
              size: 'medium',
              position: 'bottom-right',
              duration: 2000,
            });
          }

        const END_POINT_2 = process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.setupVectorStoreWithPdf;

        // setup the vector store in cloud
        const setupVectorStore = await fetch(END_POINT_2, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
            vectorstore: user[0].vectorstore,
            filenames: [file.name],
          }),
        });

        const updated_user = await setupVectorStore.json();

        if (setupVectorStore.ok) {
          dispatch(clearTrainedFileList());
          dispatch(updateTrained(file.name));
          
          setPopup({
            message: "Vector store setup successfully",
            type: 1,
            size: 'large',
            position: 'top-center',
            duration: 2000,
          });

          const new_user = {
            id: updated_user.id,
            vectorstore: updated_user.vectorstore,
          };

          dispatch(updateUser(new_user));
        }

        setLoadingMessage("Finishing up");
        await delay(3000);
        setFile(null);
        setLoadingState(false);
        setLoadingMessage("");
      } else {
        setFile(null);
        setLoadingState(false);
        setPopup({
          message: "Failed to upload the file",
          type: 2,
          size: 'medium',
          position: 'top-center',
          duration: 3000,
        });
      }
    } catch (error){
      setIsLoading(false);
      setPopup({
        message: "Failed to upload the file",
        type: 2,
        size: 'medium',
        position: 'top-center',
        duration: 3000,
      });
    }
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
      <div className="rbt-static-bar3">
        <Tooltip id="my-tooltip" className="custom-tooltip tooltip-inner" />
        <form className="new-chat-form border-gradient" onSubmit={preventF}>
          <textarea
            rows="1"
            readOnly
            onChange={(e) => setInput(e.target.value)}
            placeholder="Upload your document here."
          ></textarea>
          <div className="left-icons">
            <div title="nextjs-app" className="form-icon icon-gpt">
              <i className="fa-sharp fa-regular fa-aperture"></i>
            </div>
          </div>
          <div className="right-icons">
            {file === null ? (
              <div
                className="form-icon icon-plus"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Choose File"
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="input-file"
                  name="myfile"
                  multiple
                />
                <i className="fa-sharp fa-regular fa-plus"></i>
              </div>
            ) : (
              <button
                className="btn-default btn-small btn-border"
                onClick={triggerUploadFile}
              >
                {" "}
                Upload{" "}
              </button>
            )}
            {user[0]?.vectorstore && (
              <>
              </>
            )}
          </div>
        </form>
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

export default McqBox;