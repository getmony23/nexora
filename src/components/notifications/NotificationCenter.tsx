"use client";

import React from "react";
import { 
  Bell, 
  ShoppingBag, 
  Star, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function NotificationCenter() {
  const notifications = [
    {
      id: 1,
      type: "sale",
      title: "New Sale Received!",
      message: "You just sold 'Nexora Dashboard' for $59.00",
      time: "2 mins ago",
      icon: ShoppingBag,
      color: "text-brand-indigo",
      isUnread: true
    },
    {
      id: 2,
      type: "review",
      title: "New 5-Star Review",
      message: "Sarah Smith left a review on your product.",
      time: "1 hour ago",
      icon: Star,
      color: "text-yellow-500",
      isUnread: true
    },
    {
      id: 3,
      type: "approval",
      title: "Product Approved",
      message: "Your product 'Minimal UI Kit' is now live.",
      time: "5 hours ago",
      icon: CheckCircle2,
      color: "text-brand-neon",
      isUnread: false
    },
    {
      id: 4,
      type: "payout",
      title: "Payout Successful",
      message: "Your payout of $450.00 has been processed.",
      time: "1 day ago",
      icon: Clock,
      color: "text-brand-purple",
      isUnread: false
    }
  ];

  return (
    <div className="w-full max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-2xl font-bold font-outfit">Notifications</h2>
        <button className="text-xs text-brand-indigo font-bold hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-3">
        {notifications.map((notif) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={notif.id}
            className={`glass p-6 rounded-[30px] border-white/5 flex items-start gap-5 group hover:bg-white/[0.02] transition-all cursor-pointer relative overflow-hidden ${
              notif.isUnread ? 'bg-white/[0.03] border-brand-indigo/20' : ''
            }`}
          >
            {notif.isUnread && (
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-indigo"></div>
            )}
            
            <div className={`p-3 rounded-2xl bg-white/5 ${notif.color} group-hover:scale-110 transition-transform`}>
              <notif.icon className="w-6 h-6" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className={`font-bold text-sm ${notif.isUnread ? 'text-white' : 'text-white/60'}`}>{notif.title}</h4>
                <span className="text-[10px] text-white/20 font-bold uppercase">{notif.time}</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                {notif.message}
              </p>
            </div>

            <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all mt-1" />
          </motion.div>
        ))}
      </div>

      <button className="w-full py-4 rounded-2xl glass hover:bg-white/5 text-white/40 text-xs font-bold uppercase tracking-widest transition-all">
        Load Previous Notifications
      </button>
    </div>
  );
}
