import React from "react";
import "./Chat.scss";
import Avatar from "@mui/material/Avatar";
const Chat = ({ name, src, message }) => {
  return (
    <div className="chat">
     <Avatar src={src}/>
      <div className="info">
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default Chat;
