import { NextResponse } from "next/server";
import OpenAI from "openai";

export const POST = async (request) => {
  const { chats } = await request.json();
  const openai = new OpenAI();
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

  const message = completion.choices[0].message;

  return NextResponse.json({ data: message });
};
