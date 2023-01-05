import React from "react";
import "./Message.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Emotion from "@mui/icons-material/InsertEmoticon";
import VoiceIcon from "@mui/icons-material/KeyboardVoice";

// import Bg_photo from './bg-color.jpg'
const Message = () => {
  return (
    <div className="message">
      <header className="header">
        <div className="avatar-info">
          <Avatar src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&mouthType=Eating&skinColor=Light"
           />
          <div className="message-info">
            <h4>Faiz</h4>
            <p>last seen 2 minute</p>
          </div>
        </div>

        <div className="icon">
          <IconButton>
            <SearchIcon style={{ color: "white" }} />
          </IconButton>

          <IconButton>
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </header>
      <div className="body-message">
        <div className="messages">
          Bhai Sahab,Plesae buy one special biryani for me
          <span className="timespan"> {new Date().toLocaleTimeString()}</span>
        </div>

        <div className="messages right">
          No,First you have to pass JEE exam, then I can give you one special
          <span className="timespan"> {new Date().toLocaleTimeString()}</span>
        </div>

        <div className="messages right">
          No,First you have to pass JEE exam, then I can give you one special
          <span className="timespan"> {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
      <div className="footer">
        <div className="icons-footer">
          <IconButton>
            <Emotion className="icons" />
          </IconButton>
          <IconButton>
            <AttachFileIcon className="icons" />
          </IconButton>
        </div>

        <div className="input-footer">
          <form>
            <input type="text" placeholder="Type a message" />
          </form>
        </div>
        <IconButton>
          <VoiceIcon className="icons" />
        </IconButton>
      </div>
    </div>
  );
};
export default Message;
