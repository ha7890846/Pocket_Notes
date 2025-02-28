import { useRef, useState } from "react";
import { CirclePicker } from "react-color";

/* eslint-disable react/prop-types */
const Modal = (props) => {
  const [circleColor, setCircleColor] = useState("black");
  const [groupName, setGroupName] = useState("");
  const ModalRef = useRef();

  const addGroup = () => {
    const storedGroups = JSON.parse(localStorage.getItem("GroupList")) || [];
    const newGroup = {
      id: storedGroups.length + 1, 
      name: groupName, 
      color: circleColor,
      messages: [] // Ensure new groups have empty messages
    };

    localStorage.setItem("GroupList", JSON.stringify([...storedGroups, newGroup]));
    props.onClose();
  };

  return (
    <div ref={ModalRef} className="modal">
      <div className="modalbox">
        <button id="close-btn" onClick={props.onClose}>X</button>
        <h1 style={{ color: circleColor, marginTop: "0px" }}>Create New Group</h1>
        <div>
          <label htmlFor="GroupName">Group Name : </label>
          <input 
            type="text" 
            id="GroupName" 
            value={groupName} 
            onChange={(e) => setGroupName(e.target.value)} 
            placeholder="Group Name" 
          />
        </div>
        <div className="color">
          <label htmlFor="color">Choose Colour :</label>
          <CirclePicker 
            color={circleColor} 
            id="color"
            onChangeComplete={(e) => setCircleColor(e.hex)} 
            colors={["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF","#6691FF"]}
          />
        </div>
        <button id="save-btn" onClick={addGroup}>Create</button>
      </div>
    </div>
  );
};

export default Modal;
