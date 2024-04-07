"use client";
import { useChat } from "ai/react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="mt-16">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Header */}
        <AppbarLogin />

        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex flex-col space-y-4 ml-10">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    m.role === "user" ? "bg-purple-500" : "bg-gray-800"
                  } rounded-lg p-4 text-white max-w-sm`}
                >
                  {m.role === "user" ? "User: " : "AI: "}
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="container mx-auto max-w-[700px] p-6"
        >
          <div className="flex rounded-lg border border-gray-700 bg-gray-800 overflow-hidden">
            <input
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
              className="flex-grow px-4 py-2 bg-transparent text-white focus-outline:none"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
