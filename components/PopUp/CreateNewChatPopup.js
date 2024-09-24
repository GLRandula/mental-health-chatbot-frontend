// CreateNewChatPopup.js
import React, { useState } from "react";
import Popup from "../PopUp/Popup";

const CreateNewChatPopup = ({ onClose, onCreate }) => {
  const [topic, setTopic] = useState("");

  const handleCreate = () => {
    if (topic.trim()) {
      onCreate(topic); // Pass the topic to the create function
      onClose(); // Close the popup
    }
  };

  return (
    <Popup
      message={
        <div>
          <h4>Enter Chat Topic</h4>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Chat topic"
          />
          <button onClick={handleCreate}>Create</button>
        </div>
      }
      type={1}
      size="small"
      position="center"
      onClose={onClose}
    />
  );
};

export default CreateNewChatPopup;
