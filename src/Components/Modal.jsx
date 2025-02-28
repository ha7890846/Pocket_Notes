/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { CirclePicker } from "react-color";
const Modal = (props) => {
  const [circleColor, setCircleColor] = useState("black");
  const [groupName, setGroupName] = useState("");
  const selected = false;
  const [id, setId] = useState(1);
  const addGroup = () => {
    const data = JSON.parse(localStorage.getItem("GroupList"));
    if(data){
      data.push({id:id, name: groupName, color: circleColor, selected});
      localStorage.setItem("GroupList", JSON.stringify(data));
    }
    else{
      localStorage.setItem("GroupList", JSON.stringify([{id: id, name: groupName, color: circleColor, selected}]));
    }
    setId(id+1);
    props.onClose();
  }
  const ModalRef = useRef();
  const closeModal = (e) =>{
    if(ModalRef.current === e.target){
      props.onClose();
    }
  } 
  const handleClose = () => props.onClose();
  return (
    <div ref={ModalRef} onClick={closeModal} className="modal">
      <div className="modalbox">
        <button id="close-btn" onClick={handleClose}>X</button>
        <h1 style={{
          color: circleColor, marginTop:"0px"
        }}>Create New Group</h1>
        <div>
          <label htmlFor="GroupName">Group Name : </label>
          <input type="text" id="GroupName" value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="Group Name" />
        </div>
        <div className="color">
          <label htmlFor="color">Choose Colour :</label>
          <CirclePicker
            color={circleColor}
            onChangeComplete={(e) => setCircleColor(e.hex)}
            colors={["	#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF","#6691FF"]}
            onChange={(e) => setCircleColor(e.hex)}
          />
        </div>
        <button id="save-btn" onClick={addGroup}>Create</button>
      </div>
    </div>
  );
};
export default Modal;
