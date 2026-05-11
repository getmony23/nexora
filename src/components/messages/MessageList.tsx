"use client";

import React from "react";
import { Search, UserCircle, CheckCheck } from "lucide-react";

export default function MessageList() {
  const conversations = [
    {
      id: 1,
      user: "Alex Johnson",
      lastMessage: "Is the documentation included in the ZIP file?",
      time: "10:45 AM",
      unread: 2,
      online: true
    },
    {
      id: 2,
      user: "Sarah Smith",
      lastMessage: "Thank you for the quick support!",
      time: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: 3,
      user: "Mike Ross",
      lastMessage: "I'm interested in a custom license for my agency.",
      time: "2 days ago",
      unread: 0,
      online: true
    },
  ];

  return (
    <div className="flex flex-col h-full glass border-r border-white/5 overflow-hidden">
      <div className="p-6 border-b border-white/5 space-y-4">
        <h2 className="text-xl font-bold font-outfit">Messages</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input 
            type="text" 
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-brand-indigo"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((chat) => (
          <div 
            key={chat.id}
            className={`p-4 border-b border-white/5 flex gap-4 cursor-pointer hover:bg-white/5 transition-all relative ${
              chat.unread > 0 ? 'bg-brand-indigo/5' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-white/20" />
              </div>
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-neon rounded-full border-2 border-background"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-sm truncate">{chat.user}</h4>
                <span className="text-[10px] text-white/20 font-bold">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-xs truncate ${chat.unread > 0 ? 'text-white font-medium' : 'text-white/40'}`}>
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 ? (
                  <span className="w-5 h-5 rounded-full bg-brand-indigo text-[10px] font-bold flex items-center justify-center">
                    {chat.unread}
                  </span>
                ) : (
                  <CheckCheck className="w-3 h-3 text-brand-indigo opacity-40" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
