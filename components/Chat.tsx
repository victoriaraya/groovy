"use client";
import { useState } from "react";
import OpenAI from "openai";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import { FaBullseye } from "react-icons/fa";

//OPENAI_API_KEY - may have to name env var like this
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API, //fix env var so api isn't available to frontend, look at fullstack ai app github for how api key is used and stored
  dangerouslyAllowBrowser: true,
});

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
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are an assitant to answer questions about various music artists and only that. If asked about other topics, please politely decline",
          },
          ...chats,
        ],
        model: "gpt-3.5-turbo",
      });
      msgs.push(completion.choices[0].message);
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
          className="text-black p-1 rounded-sm w-[85%] bg-white mb-2"
        />
        {/* <button>send</button> maybe add send button */}
      </form>
    </div>
  );
};

export default Chat;
