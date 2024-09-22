import React from 'react';
import './RecordingPopup.css'; // Create a custom CSS file for styles

const RecordingPopup = ({ isRecording, stopRecording, cancelRecording }) => {
  return (
    <div className={`recording-popup ${isRecording ? 'show' : ''}`}>
      <div className="popup-content">
        <div className="mic-icon">
          <i className="fa fa-microphone"></i>
        </div>
        <p>Recording in progress...</p>
        <div className="popup-buttons">
          <button onClick={stopRecording} className="stop-button">Stop</button>
          <button onClick={cancelRecording} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RecordingPopup;
