import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const GroupChat = ({ group }) => {
  const [messages, setMessages] = useState("");
  const [chatData, setChatData] = useState([]);

  // Load messages when the group changes
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("GroupList")) || [];
    const currentGroup = storedGroups.find(g => g.id === group.id);
    setChatData(currentGroup?.messages || []);
  }, [group]);

  const addMessage = () => {
    if (!messages.trim()) return;

    const storedGroups = JSON.parse(localStorage.getItem("GroupList")) || [];

    // Update only the selected group's messages
    const updatedGroups = storedGroups.map(g => {
      if (g.id === group.id) {
        return { ...g, messages: [...(g.messages || []), messages] };
      }
      return g;
    });

    localStorage.setItem("GroupList", JSON.stringify(updatedGroups));

    // Update state to reflect new message
    setChatData([...chatData, messages]);
    setMessages("");
  };

  return (
    <div>
      <div className="headerbox">
        <img src="/src/assets/avtar.jpg" alt="dp" />
        <h1>{group.name}</h1>
      </div>
      <div className="chat-section">
        {chatData.map((msg, index) => (
          <div key={index} className="msg">{msg}</div>
        ))}
      </div>
      <div className="reply-section">
        <textarea
          name="reply"
          id="reply"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          placeholder="Text Here...."
        ></textarea>
        <div className="send-btn">
          <IoMdSend onClick={addMessage} />
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
