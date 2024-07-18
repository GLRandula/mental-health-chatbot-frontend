//.VisualTopBar.js
import React from "react";

const VisualManageomBar = ({ clearFullHistory }) => {
  return (
    <div className="managebar-container">
              <a className="topics" href="#">
                <i className="fa-solid fa-tag pad-cus1"></i> Export Chat
              </a>
              <a className="topics delete-item" href="#" onClick={clearFullHistory}>
                <i className="fa-solid fa-trash-can pad-cus1"></i> Clear Chat
              </a>
    </div>
  );
};

export default VisualManageomBar;

