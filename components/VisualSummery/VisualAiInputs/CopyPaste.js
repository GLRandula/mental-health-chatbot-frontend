import React,{useState} from 'react';
import './VisualAiInputs.css';
import Popup from "../../PopUp/Popup";

const CopyPaste = ({ textareaRef, setText, characterLimit }) => {
  const [popup, setPopup] = useState(null);
  const copySelectedText = () => {
    const selectedText = window.getSelection().toString();
    if (!selectedText) {
      setPopup({
        message: "Please select some text to copy",
        type: 2,
        size: 'large',
        position: 'top-center',
        duration: 2000,
      });
      return;
    }
    if (textareaRef.current) {
      const currentText = textareaRef.current.value;
      const newText = (currentText + selectedText).slice(0, characterLimit);
      textareaRef.current.value = newText;  

      // Manually trigger an input event to update the state
      const event = new Event('input', { bubbles: true });
      textareaRef.current.dispatchEvent(event);

      setText(newText);
    }
  };

  return (
    <div>
      <button className="btn-default responseive-m1" onClick={copySelectedText}>
        Copy Selected Text
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

export default CopyPaste;

