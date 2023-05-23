import React, { useEffect, useState } from "react";
import axios from "axios";
const styles =
  "absolute w-32 rounded-full cursor-pointer h-32 right-12 bottom-12 bg-gray-600";
import { FaRobot } from "react-icons/fa";

function Chatbot({ setActive }) {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const addMessage = async () => {
    if (message === "") return;
    try {
      setLoading(true);
      setMessages((prev) => [...prev, { role: "user", content: message }]);

      const response = await axios.post("/api/chatbot", {
        message: messages,
      });

      const newA = [
        ...messages,
        { role: "user", content: message },
        { role: "assistant", content: response.data.chatbotResponse.content },
      ];

      setMessages(newA);
      setLoading(false);
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className=" h-[550px] w-[19rem] bg-white absolute bottom-12 right-12 shadow-xl rounded-xl">
      <div className="flex items-center justify-evenly">
        <div></div>
        <h1 className="text-gray-400 font-semibold text-base text-center py-2 font-semiobold">
          Chatbot
        </h1>
        <div
          onClick={() => setActive(false)}
          className="text-xs font-bold text-gray-400 cursor-pointer"
        >
          close
        </div>
      </div>
      <div className="h-[75%] bg-white mx-4 text-xs flex flex-col overflow-y-scroll scroll-smooth">
        <div className="p-3 bg-gray-400 max-w-[85%] rounded-2xl m-2 shadow-lg">
          <p className="flex items-center gap-2">
            <FaRobot size={23} /> Hey what can I help you with today?
          </p>
        </div>

        {messages
          ?.filter((c) => c.role != "system")
          .map((m, i) => (
            <div key={i} className={`text-xs mx-2 my-1 `}>
              <p
                className={`text-xs shadow-lg p-3 rounded-2xl max-w-[85%] flex items-center gap-2 ${
                  m.role === "user"
                    ? "float-right bg-blue-500 text-white"
                    : "float-left bg-gray-400"
                }`}
              >
                {m.role === "assistant" && <FaRobot size={24} />} {m.content}
              </p>
            </div>
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage();
        }}
      >
        <input
          placeholder="Chat with the chatbot!!"
          className="chatbot outline outline-1 outline-blue-500 shadow-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 outline outline-1 outline-blue-500"
          type="submit"
        >
          {loading ? "loading..." : "send"}
        </button>
      </form>
    </main>
  );
}

export default Chatbot;
