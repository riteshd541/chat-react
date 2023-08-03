import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import "./ChatBox.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null); // Ref to the chat box container

  const handleSendMessage = (message) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      user: randomUser,
      content: message,
      likes: 0,
      timestamp: new Date(), // Add the timestamp to the message
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Scroll to the last message when the component mounts
  useEffect(() => {
    scrollToBottom();
  }, []);

  // Scroll to the last message whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  return (
    <div className="ChatBox" ref={chatBoxRef}>
      <div className="Messages">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="MessageInput">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatBox;
