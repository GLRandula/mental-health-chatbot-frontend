"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import Popup from "../PopUp/Popup";

import {
  addFileHistory,
  clearUserFileList,
  updateTrained,
} from "../../app/store/Slices/userSlice";
import { fileDelUtil } from "../API/fileDelUtil";
import { fileTrainUtil } from "../API/fileTrainUtil";
import { fileFetchUtil } from "..//API/fileFetchUtil";
import WaitingForResponse from "../WaitingForResponse/WaitingForResponse";

const RightFilePannel = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);
  const fileList = useSelector((state) => state.user.fileList);
  const trainedFile = useSelector((state) => state.user.trainedFile);
  const { shouldCollapseRightbar } = useAppContext();
  const [popup, setPopup] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleRefresh = async (e) => {
    setIsLoading(true);
    const fileData = await fileFetchUtil(user[0]);
    if (fileData.success) {
      const fileHistory = fileData.filenames;
      dispatch(clearUserFileList());
      fileHistory.forEach((filename) => {
        dispatch(addFileHistory(filename));
      });
    } else {
      setPopup({
        message: "Error Refreshing Files",
        type: 2,
        size: "medium",
        position: "bottom-right",
        duration: 3000,
      });
    }
    setIsLoading(false);
  };

  const deleteFile = async (fileName) => {
    setIsLoading(true);
    const fileData = await fileDelUtil(user[0], fileName);
    if (fileData.success) {
      handleRefresh();
      setPopup({
        message: fileData.message,
        type: 1,
        size: "medium",
        position: "bottom-right",
        duration: 2000,
      });
    } else {
      setPopup({
        message: fileData.message,
        type: 2,
        size: "medium",
        position: "bottom-right",
        duration: 3000,
      });
    }
    setIsLoading(false);
  };

  const trainFile = async (fileName) => {
    setIsLoading(true);
    const fileData = await fileTrainUtil(user[0], fileName);

    if (fileData.success) {
      dispatch(updateTrained(fileData.fname));
      setPopup({
        message: fileData.message,
        type: 1,
        size: "medium",
        position: "bottom-right",
        duration: 2000,
      });
    } else {
      setPopup({
        message: fileData.message,
        type: 2,
        size: "medium",
        position: "bottom-right",
        duration: 3000,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <div
        className={`rbt-right-side-panel popup-dashboardright-section ${
          shouldCollapseRightbar ? "collapsed" : ""
        }`}
      >
        <div className="right-side-top">
          <a
            className="btn-default bg-solid-primary"
            data-bs-toggle="modal"
            data-bs-target="#newchatModal"
          >
            <span className="icon">
              <i className="feather-plus-circle"></i>
            </span>
            <span>Your Files</span>
          </a>
        </div>

        <div className="right-side-bottom">
          <div className="chat-history-section">
            <h6 className="title"></h6>
            <ul className="chat-history-list">
              {fileList.length > 0 ? (
                fileList.map((fileName, subIndex) => (
                  <li
                    className={`history-box ${
                      fileName.isActive ||
                      (trainedFile?.length > 0 && trainedFile[0] === fileName)
                        ? "active"
                        : ""
                    }`}
                    key={subIndex}
                  >
                    <div>{fileName}</div>
                    <div className="dropdown history-box-dropdown">
                      {isLoading ? (
                        <WaitingForResponse showText={false} />
                      ) : (
                        <div>
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-ellipsis"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              {trainedFile?.length > 0 &&
                              fileName === trainedFile[0] ? (
                                <div />
                              ) : (
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  onClick={() => trainFile(fileName)}
                                >
                                  <i className="fa-solid fa-toolbox"></i>
                                  Select File
                                </a>
                              )}
                              <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => deleteFile(fileName)}
                              >
                                <i className="fa-solid fa-trash-can"></i>
                                Delete File
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <div>No files available</div>
              )}
            </ul>
          </div>
          <button
            className="react-btn btn-default btn-small btn-border"
            onClick={handleRefresh}
          >
            Refresh
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
    </>
  );
};

export default RightFilePannel;
