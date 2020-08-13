import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="whats up"
        timestamp="40 sec ago"
        profilePic="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
      />
      <Chat
        name="John"
        message="whats up"
        timestamp="4 min ago"
        profilePic="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
      />
      <Chat
        name="Sam"
        message="whats up"
        timestamp="39 min ago"
        profilePic="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
      />
      <Chat
        name="Alen"
        message="whats up dude"
        timestamp="1 hour ago"
        profilePic="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
      />
    </div>
  );
}

export default Chats;
