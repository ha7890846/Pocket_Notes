/* eslint-disable react/prop-types */
import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";

const GroupChat = ({ activeChat }) => {
  const [messages, setMessages] = useState("");
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    if (activeChat) {
      const groupMessages = JSON.parse(localStorage.getItem(`Messages_${activeChat.id}`)) || [];
      setMessagesList(groupMessages);
    }
  }, [activeChat]);

  const addMessage = () => {
    if (!messages.trim()) return;

    const groupMessages = JSON.parse(localStorage.getItem(`Messages_${activeChat.id}`)) || [];
    groupMessages.push(messages);
    localStorage.setItem(`Messages_${activeChat.id}`, JSON.stringify(groupMessages));

    setMessagesList(groupMessages);
    setMessages("");
  };

  function getInitials(name) {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts.map((part) => part[0]).join("").toUpperCase();
  }

  return (
    <div>
      <div className="headerbox">
        <div 
          className="user-profile-image" 
          style={{ backgroundColor: activeChat?.color, marginRight: "10px",padding: "5px 7px" }}
        >
          {getInitials(activeChat?.name)}
        </div>
        <h1>{activeChat?.name}</h1>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        {messagesList.map((msg, index) => (
          <div key={index} className="msg">
            <p>{msg}</p>
          </div>
        ))}
      </div>

      {/* Reply Section */}
      <div className="reply-section">
        <textarea
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          placeholder="Type a message..."
        ></textarea>
        <div className="send-btn">
          <IoMdSend onClick={addMessage} />
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
