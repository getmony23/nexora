import React from "react";
import Navbar from "@/components/Navbar";
import MessageList from "@/components/messages/MessageList";
import ChatBox from "@/components/messages/ChatBox";

export default function MessagesPage() {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />

      <main className="flex-1 pt-20 flex overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 flex overflow-hidden">
          <div className="glass rounded-[40px] border-white/5 w-full flex overflow-hidden shadow-2xl">
            {/* Conversations Sidebar */}
            <div className="w-full md:w-80 lg:w-96 flex-shrink-0 border-r border-white/5">
              <MessageList />
            </div>

            {/* Chat Area */}
            <div className="hidden md:flex flex-1 flex-col overflow-hidden">
              <ChatBox />
            </div>

            {/* Empty State for Mobile - or show one or the other */}
          </div>
        </div>
      </main>
    </div>
  );
}
