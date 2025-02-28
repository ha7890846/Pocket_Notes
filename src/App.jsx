import "./App.css";
import Groups from "./Components/Groups";
import Home from "./Components/Home";
import GroupChat from "./Components/GroupChat";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [activeChat, setActiveChat] = useState(null); 
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const groupList = JSON.parse(localStorage.getItem("GroupList") || "[]");

  return (
    <div className="main-container">
      {/* Left Sidebar */}
      <section className="left-section">
        <h1 className="title">Pocket Notes</h1>
        <Groups group={groupList} setActiveChat={setActiveChat} />
        <button className="add-btn" onClick={toggleModal}>+</button>    
        {isOpen && <Modal onClose={toggleModal} />}
      </section>

      {/* Right Chat Section */}
      <section className="right-section">
        <div className="rightbox">
          {activeChat ? (
            <GroupChat activeChat={activeChat} />
          ) : (
            <Home />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
