"use client";

import React, { useState } from "react";
import { Star, ThumbsUp, MessageSquare, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewSection() {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const reviews = [
    {
      id: 1,
      user: "Alex Johnson",
      rating: 5,
      date: "May 10, 2026",
      comment: "Absolutely amazing dashboard kit! Saved me weeks of development time. The code is super clean and easy to customize.",
      likes: 12
    },
    {
      id: 2,
      user: "Sarah Smith",
      rating: 4,
      date: "May 08, 2026",
      comment: "Very high quality. One star off only because I'd love more documentation on the Supabase integration, but otherwise perfect.",
      likes: 5
    }
  ];

  return (
    <div className="space-y-12">
      {/* Review Stats Header */}
      <div className="flex flex-col md:flex-row gap-12 items-center bg-white/[0.02] p-8 rounded-[40px] border border-white/5">
        <div className="text-center md:text-left">
          <div className="text-5xl font-bold font-outfit mb-2">4.9</div>
          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-white/40 text-sm font-medium">Based on 24 reviews</p>
        </div>

        <div className="flex-1 space-y-3 w-full">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-4">
              <span className="text-xs text-white/40 font-bold w-4">{rating}</span>
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-indigo rounded-full" 
                  style={{ width: `${rating === 5 ? 90 : rating === 4 ? 8 : 2}%` }}
                ></div>
              </div>
              <span className="text-xs text-white/20 w-8">{rating === 5 ? '90%' : rating === 4 ? '8%' : '2%'}</span>
            </div>
          ))}
        </div>

        <button className="px-8 py-3 rounded-2xl bg-brand-indigo text-white font-bold shadow-lg shadow-brand-indigo/20 hover:opacity-90 transition-all whitespace-nowrap">
          Write a Review
        </button>
      </div>

      {/* Write a Review (Collapsible Form Placeholder) */}
      <div className="glass p-8 rounded-[40px] border-white/5 space-y-6">
        <h3 className="text-xl font-bold font-outfit">Leave your feedback</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/40 mr-2">Your rating:</span>
            {[1, 2, 3, 4, 5].map((s) => (
              <button 
                key={s}
                onMouseEnter={() => setHoverRating(s)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setUserRating(s)}
                className="transition-transform active:scale-90"
              >
                <Star 
                  className={`w-6 h-6 transition-colors ${
                    s <= (hoverRating || userRating) ? 'text-yellow-500 fill-yellow-500' : 'text-white/10'
                  }`} 
                />
              </button>
            ))}
          </div>
          <textarea 
            rows={4}
            placeholder="What did you like or dislike about this product?"
            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all resize-none"
          ></textarea>
          <div className="flex justify-end">
            <button className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 font-bold transition-all">
              Submit Review
            </button>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={review.id} 
            className="p-8 rounded-[30px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-indigo/10 flex items-center justify-center">
                  <UserCircle className="w-8 h-8 text-white/20" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{review.user}</h4>
                  <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star 
                    key={s} 
                    className={`w-3.5 h-3.5 ${s <= review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-white/10'}`} 
                  />
                ))}
              </div>
            </div>
            
            <p className="text-white/60 leading-relaxed mb-6">
              {review.comment}
            </p>

            <div className="flex items-center gap-6 text-xs font-bold">
              <button className="flex items-center gap-2 text-white/20 hover:text-brand-indigo transition-colors group">
                <ThumbsUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Helpful ({review.likes})
              </button>
              <button className="flex items-center gap-2 text-white/20 hover:text-brand-indigo transition-colors">
                <MessageSquare className="w-4 h-4" />
                Reply
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
