// app/page.js
"use client";

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center py-12 px-6 bg-slate-950 text-white font-sans" style={{ direction: 'rtl' }}>
      
      {/* پشکا سەرەکی */}
      <div className="flex flex-col items-center text-center max-w-xl my-auto w-full animate-fade-in" style={{ gap: '2rem' }}>
        
        {/* باجێ سەرەکی */}
        <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-semibold">
          ✨ پلاتفۆرمی دروستکردنی بایۆلینک بە ئاسانی
        </div>
        
        {/* مانشێتێ سەرەکی */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-snug">
          هەمی ئەکاونت و بەرهەمێن خۆ <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ب جوانترین شێواز
          </span> نیشان بدە
        </h1>
        
        {/* تێکستێ ڕوونکردنەوەیێ */}
        <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">
          ئەکاونتێن سۆشیاڵ میدیا دگەل جوانترین بەکڕاوند و دیزاین ل سەر لۆکەیشنەکێ تایبەت چێکە و ب ڕێکا ژمارەیەکێ ئەکاونتێ خۆ کۆنترۆڵ بکە.
        </p>

        {/* دوگمەیێن سەرەکی - ب شێوازەکێ مسۆگەر یێ جودا بۆ موبایلێ */}
        <div className="w-full max-w-xs flex flex-col gap-4 pt-4">
          <Link 
            href="/zaniyar"
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-center text-sm md:text-base transition duration-300 shadow-lg shadow-indigo-600/20 block"
          >
            بینینی لاپەڕەی زانیار (نموونە)
          </Link>
          
          <Link 
            href="/register"
            className="w-full py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-bold text-center text-sm md:text-base transition duration-300 block"
          >
            تۆماربوونا ئەکاونتەکێ نوو
          </Link>
        </div>
      </div>

      {/* بنپەڕ (Footer) */}
      <footer className="text-xs text-slate-600 pt-8 border-t border-slate-900 w-full text-center">
        © {new Date().getFullYear()} My Biolink. هەمی ماف د پارێزراون.
      </footer>
    </div>
  );
}
