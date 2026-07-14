// app/[username]/page.js (یان app/zaniyar/page.js)
"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function UserProfile() {
  const params = useParams();
  const username = params?.username || "zaniyar"; // ئەگەر دینامیکی نەبوو، ناڤێ نموونە دێ بیتە zaniyar

  // لیستەکا نموونە ژ لینکێن سۆشیاڵ میدیایێ کو وەک بی کۆنس دەرکەڤن
  const [links, setLinks] = useState([
    { id: 1, title: "Snapchat Lens Design", url: "https://snapchat.com", emoji: "👻" },
    { id: 2, title: "My eFootball Tactics", url: "https://youtube.com", emoji: "🎮" },
    { id: 3, title: "My Personal Portfolio", url: "https://github.com", emoji: "💻" }
  ]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center py-6 px-4 text-slate-900 relative"
      style={{
        // لێرەدا پاشبنەمایا ماربڵ و نیگارکێشی یا مۆدێرن یا Beacons مان دروستکردووە
        backgroundImage: 'linear-gradient(180deg, #dfd0c0 0%, #e2ebd9 45%, #dce4e8 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* کانتینەرا گشتی یا لاپەڕەیێ - کێشراو و ڕێک وەک شاشەیا مۆبایلێ */}
      <div className="w-full max-w-md flex flex-col items-center relative z-10">
        
        {/* بارا سەرێ (Top Bar) - Subscribe & Share */}
        <div className="w-full flex justify-between items-center px-2 mb-6">
          <button className="flex items-center gap-1.5 px-4 py-1.5 bg-white/70 backdrop-blur-md hover:bg-white border border-white/40 rounded-full text-xs font-bold shadow-sm transition duration-200">
            🔔 Subscribe
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center bg-white/70 backdrop-blur-md hover:bg-white border border-white/40 rounded-full shadow-sm transition duration-200">
            <span className="text-sm">📤</span>
          </button>
        </div>

        {/* وێنەیێ پرۆفایلێ (Profile Picture Placeholder) */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-white/80 shadow-md flex items-center justify-center text-3xl overflow-hidden">
            👤
          </div>
        </div>

        {/* ناڤێ بەکارهێنەری (Username) */}
        <h2 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
          @{username}
        </h2>

        {/* ئایکۆنێن سۆشیاڵ میدیایێ (Social Icons) */}
        <div className="flex items-center gap-5 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm border border-white/40 text-lg transition duration-200">
            📸
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm border border-white/40 text-lg transition duration-200">
            🎵
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm border border-white/40 text-lg transition duration-200">
            👻
          </a>
        </div>

        {/* کارتێن فۆڵۆوەران یان ئۆفەران (Follower Count Placeholder) */}
        <div className="w-full bg-white/90 backdrop-blur-sm border border-white/60 p-5 rounded-3xl shadow-sm mb-4 text-center">
          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full mb-2 inline-block">
            📢 Action needed
          </span>
          <h3 className="font-bold text-slate-800 text-sm mb-1">Follower count block placeholder</h3>
          <p className="text-xs text-slate-500">Connect a social account to remove this temporary placeholder.</p>
        </div>

        {/* کارتێن لینکێن سەرەکی (Links Block) */}
        <div className="w-full flex flex-col gap-3.5 mb-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-slate-50 border border-slate-200/50 p-4 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition duration-200 cursor-pointer"
            >
              <span className="text-lg">{link.emoji}</span>
              <span className="font-bold text-slate-800 text-sm md:text-base flex-1 text-center">
                {link.title}
              </span>
              <span className="text-slate-400 text-xs">🔗</span>
            </a>
          ))}
        </div>

        {/* فۆرمی نامە ناردنێ (Contact Form Block) */}
        <div className="w-full bg-white/85 backdrop-blur-sm border border-white/50 p-5 rounded-3xl shadow-sm mb-8">
          <h3 className="font-bold text-slate-800 text-sm mb-3 text-center">📩 با پێکەوە کار بکەین</h3>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="ئیمەیڵەکەت بنووسە..." 
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 text-right"
              style={{ direction: 'rtl' }}
            />
            <button className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition duration-200">
              ناردن
            </button>
          </div>
        </div>

        {/* واتەرمارکا سەرنجڕاکێش ل ژێرەوە */}
        <div className="mt-auto pt-4 flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm">
          <span>⚡ Powered by</span>
          <span className="font-extrabold text-slate-800">My Biolink</span>
        </div>

      </div>
    </div>
  );
}
