import React, { useState } from "react";
import Chatbot from "@/components/Chatbot";
import { FaRobot } from "react-icons/fa";
function index() {
  const [cActive, setActive] = useState(false);
  return (
    <div className="grid place-items-center h-screen">
      <h1 className="text-4xl text-gray-700 font-semibold">My chatbot</h1>
      <div
        onClick={() => setActive(true)}
        className="border absolute bg-white right-12 bottom-12 rounded-full w-fit p-5 shadow-lg cursor-pointer"
      >
        <FaRobot size={70} />
      </div>
      {cActive && <Chatbot setActive={setActive}/>}
    </div>
  );
}

export default index;
