"use client";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import { FaBullseye } from "react-icons/fa";
import { chatAPI } from "@/utils/api";

const Chat = ({ artist }) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();
    if (!message) return;

    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);
    setMessage("");

    try {
      const message = await chatAPI({ chats });
      msgs.push(message);
      setChats(msgs);
      setIsTyping(false);
      setErrorMessage(false);
    } catch (e) {
      setIsTyping(false);
      setChats([]);
      setErrorMessage(true);
      console.error(e);
    }
  };

  return (
    <div>
      <p className="text-xl pb-2">{`Ask our assistant about ${artist.name}`}</p>
      <div
        className={
          chats && chats.length
            ? "rounded-sm text-black bg-gray-100 p-2 my-2 mr-4 overflow-auto max-h-64"
            : ""
        }
      >
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p
                key={index}
                className={
                  chat.role === "user"
                    ? "text-right p-1 flex flex-row-reverse"
                    : "flex p-1"
                }
              >
                <span className="pt-0.5">
                  {chat.role === "user" ? (
                    <FaRegCircleUser />
                  ) : (
                    <RiRobot2Line />
                  )}
                </span>
                <span>&nbsp;</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </div>
      <div
        className={
          errorMessage
            ? "rounded-sm text-black bg-gray-100 p-2 my-2 mr-4 text-center"
            : "hidden"
        }
      >
        <p>
          {"Sorry, we're having an issue right now, please try again later."}
        </p>
      </div>
      <div className={isTyping ? "text-center p-1 pb-2" : "hidden"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
      <form
        onSubmit={(e) => chat(e, message)}
        className={
          (chats && chats.length) || errorMessage
            ? "flex justify-center mr-4 mt-3"
            : ""
        }
      >
        <input
          type="text"
          name="message"
          value={message}
          placeholder={
            chats.length || errorMessage
              ? "Type your question here"
              : `Try "What is ${artist.name}'s real name?`
          }
          onChange={(e) => setMessage(e.target.value)}
          className="text-black p-1 rounded-sm w-[80%] bg-white mb-2"
        />
        <button className="rounded-sm mx-2 text-black bg-gray-300 hover:bg-gray-400 active:bg-gray-500 pb-[1px] pt-[3px] px-2 h-[34px]">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
