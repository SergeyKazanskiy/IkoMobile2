import * as React from "react";
import { ChatHistoryProps } from "./types";

const ChatHistory = ({ messages, deleteMessage }: ChatHistoryProps) => {
  return (
    <div className="chat-history">
      {messages.map((message) => (
        <div
          onClick={() => deleteMessage(message.timestamp)}
          className="message-item"
          key={message.timestamp}
        >
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
