"use client";
import { useState } from "react";
import OpenAI from "openai";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API,
  dangerouslyAllowBrowser: true,
});

const Chat = ({ artist }) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

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
              "You are an assitant to answer questions about various music artists",
          },
          ...chats,
        ],
        model: "gpt-3.5-turbo",
      });
      msgs.push(completion.choices[0].message);
      setChats(msgs);
      setIsTyping(false);
    } catch (e) {
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
      <div className={isTyping ? "text-center p-1 pb-2" : "hidden"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
      <form onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder={
            chats.length
              ? "Type your question here"
              : `Try "What is ${artist.name}'s real name?`
          }
          onChange={(e) => setMessage(e.target.value)}
          className="text-black p-1 rounded-sm w-[85%] bg-white mb-2"
        />
      </form>
    </div>
  );
};

export default Chat;
