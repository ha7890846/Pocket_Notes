import Msg from "./Msg";
import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";
import {Data} from "../assets/Data";
const GroupChat = () => {
  const [messages, setMessages] = useState("");
  // const [messagesList, setMessagesList] = useState([]);
  const data = JSON.parse(localStorage.getItem("GroupList"));

  useEffect(() => {
    localStorage.setItem("GroupList", JSON.stringify(data));
  }, [data]);

  const addMessage = () => {
    // if (messages === "") {
    //   return;
    // }
    // if(!data.message ){
    //   data.message = [];
    // }
    // else{
    //   data.message.push(messages);
    // }
    // setMessagesList([...messagesList, messages]);

    // Data.push({ message: messages });
    // console.log(Data);
    // setMessages("");
  }
  
  return (
    <div>
      <div className="headerbox">
        <img src="/src/assets/avtar.jpg" alt="dp" />
        <h1>Sign Up</h1>
      </div>
      <div className="chat-section">
        {
          Data.map((item) => (
            <div key={item} className="msg">
              <Msg message={item.message} />
            </div>
          ))
        }
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
          <IoMdSend onClick={addMessage}/>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
