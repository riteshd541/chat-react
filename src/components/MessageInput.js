import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="MessageInput">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress} // Add the onKeyPress event
        placeholder="Type your message..."
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default MessageInput;
