import React, { useState } from "react";
import "./Message.css";

const Message = ({ message }) => {
  const [likes, setLikes] = useState(message.likes);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="Message">
      <div className="MessageContent">
        <div className="MessageInfo">
          <strong>{message.user}</strong>{" "}
          <span className="MessageTime">
            {getFormattedTime(message.timestamp)}
          </span>
        </div>
        <p>
          {message.content} <button onClick={handleLike}>👍</button> : {likes}
        </p>
      </div>
    </div>
  );
};

export default Message;

function getFormattedTime(timestamp) {
  const time = new Date(timestamp);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
