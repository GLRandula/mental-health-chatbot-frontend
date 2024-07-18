//.VisualTopBar.js
import React from "react";

const VisualTopBar = ({ type, time, handleDelete }) => {
  return (
    <div className="topbar-container">
      <div className="topics">
        <div className="topic-type">{type}</div>
        <div className="topic-time">{time}</div>
        
        <div className="dropdown history-box-dropdown">
          <button
            type="button"
            className="more-info-cus1 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-regular fa-ellipsis"></i>
          </button>
          <ul className="dropdown-menu style-one">
            <li>
              <a className="dropdown-item" href="#">
                <i className="fa-solid fa-share-nodes"></i> Share
              </a>
            </li>
            <li>
              <a className="dropdown-item delete-item" href="#" onClick={handleDelete}>
                <i className="fa-solid fa-trash-can"></i> Delete Item
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisualTopBar;
