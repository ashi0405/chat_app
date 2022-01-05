import React from "react";
import SideBar from './SideBar'
import Chat from "./Chat";
import "./Message.css"

function Message() {
  return(<div className="message">
    <SideBar/>
    <Chat/>
  </div>);
}

export default Message;
