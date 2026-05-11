"use client";

import React, { useState } from "react";
import { 
  Send, 
  Paperclip, 
  MoreVertical, 
  UserCircle,
  Image as ImageIcon,
  Smile,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function ChatBox() {
  const [message, setMessage] = useState("");

  const messages = [
    { id: 1, text: "Hello! I'm interested in the Nexora Dashboard kit.", sender: "other", time: "10:30 AM" },
    { id: 2, text: "Hi Alex! I'm happy to help. What would you like to know?", sender: "me", time: "10:32 AM" },
    { id: 3, text: "Is the documentation included in the ZIP file? I want to make sure I can integrate it with my current project.", sender: "other", time: "10:45 AM" },
  ];

  return (
    <div className="flex flex-col h-full bg-white/[0.01]">
      {/* Chat Header */}
      <div className="p-4 glass border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-indigo/10 flex items-center justify-center">
            <UserCircle className="w-7 h-7 text-white/20" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Alex Johnson</h4>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-brand-neon rounded-full"></div>
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-white/5 transition-all text-white/40 hover:text-white">
            <ShieldCheck className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-xl hover:bg-white/5 transition-all text-white/40 hover:text-white">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="text-center py-4">
          <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/20 font-bold uppercase tracking-widest">
            Today
          </span>
        </div>

        {messages.map((msg) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[70%] space-y-1`}>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "me" 
                ? "bg-brand-indigo text-white rounded-br-none" 
                : "glass border-white/5 text-white/80 rounded-bl-none"
              }`}>
                {msg.text}
              </div>
              <p className={`text-[10px] text-white/20 font-bold ${msg.sender === "me" ? "text-right" : "text-left"}`}>
                {msg.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-6">
        <div className="glass p-2 rounded-3xl border-white/5 flex items-end gap-2 shadow-2xl">
          <div className="flex gap-1 pb-1">
            <button className="p-2 rounded-xl hover:bg-white/5 transition-all text-white/20 hover:text-white">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-xl hover:bg-white/5 transition-all text-white/20 hover:text-white">
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
          
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder-white/20 resize-none py-2 px-4 h-11 leading-tight"
            rows={1}
          />

          <div className="flex gap-1 pb-1">
            <button className="p-2 rounded-xl hover:bg-white/5 transition-all text-white/20 hover:text-white">
              <Smile className="w-5 h-5" />
            </button>
            <button 
              disabled={!message.trim()}
              className="p-3 rounded-2xl bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
