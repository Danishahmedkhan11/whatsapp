import React from "react";
import "./SideBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { IconButton } from "@mui/material";
import Chat from "./Chat.jsx";
import GroupsIcon from "@mui/icons-material/Groups";
function SideBar() {
  return (
    <div className="side">
      <header className="header">
        <div className="avatar-icons">
          <IconButton>
            <Avatar className="icons" />
          </IconButton>
        </div>
        <div className="icon">
          <IconButton>
            <GroupsIcon className="icons" />
          </IconButton>
          <IconButton>
            <DonutLargeIcon className="icons" />
          </IconButton>

          <IconButton>
            <ChatIcon className="icons" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icons" />
          </IconButton>
        </div>
      </header>
      <div className="input-search">
        <IconButton>
          <SearchIcon className="icons" />
        </IconButton>
        <input type="text" placeholder="Search" />
      </div>
      <div className="body-sidebar">
        <Chat
          name="Faiz"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&mouthType=Eating&skinColor=Light"
          message="Bhai Sahab,Plesae buy one special biryani for me"
        />

        <Chat
          name="Papa"
          src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription02&hatColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          message="Walekum Slam Beta, Kab Ratlam aauoge?"
        />

        <Chat
          name="Mom"
          message="Beta, aapki mummy yaad aa rah h nahi kya?"
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        />

        <Chat
          name="Goku"
          src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Blue03&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Yellow'
          message="Bhai Let's us combine into one called Vegito"
        />

        <Chat
          name="Naruto"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Prescription02&hatColor=Black&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          message="Bhai you are right Goku is more powerful than others like me"
        />

        <Chat
          name="Gojo"
          src="https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Pink&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Yellow"
          message="Bhai I already defeated Sukuna"
        />

        <Chat
          name="Sohel"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Yellow"
          message="Bhai Let's us play cricket"
        />

        <Chat
          name="Hannan-Mannan"
          src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          message="Bhai faiz already had four times ducks including 0 run and 1 ball"
          style={{ backgroundColor: "blue" }}
        />
      </div>
    </div>
  );
}

export default SideBar;
