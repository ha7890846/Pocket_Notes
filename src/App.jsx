import "./App.css";
import Groups from "./Components/Groups";
import Home from "./Components/Home";
import GroupChat from "./Components/GroupChat";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [activeChat, setActiveChat] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const localStorage = window.localStorage;

  return (
    <div className="main-container">
      <section className="left-section">
        <h1 className="title">Pocket Notes</h1>
        <Groups group={localStorage.getItem("GroupList") || []} setActiveChat={setActiveChat}/>
        <button className="add-btn" onClick={()=>{toggleModal()}}>+</button>    
        {
          isOpen && (
            <Modal onClose={toggleModal} />
          )
        }
      </section>

      {/* Right Chating Section */}
      <section className="right-section">
        <div className="rightbox">
          {
            activeChat ? (
              <GroupChat />
            ) : (
              <Home />
            )
          }
        </div>
      </section>
    </div>
  );
}

export default App;
