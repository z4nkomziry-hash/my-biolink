// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center py-16 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      
      {/* پشکا سەرەکی (Hero Section) */}
      <div className="flex flex-col items-center text-center max-w-2xl my-auto space-y-6 animate-fade-in">
        <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
          ✨ پلاتفۆرمی دروستکردنی بایۆلینک بە ئاسانی
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          هەمی ئەکاونت و بەرهەمێن خۆ <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ب جوانترین شێواز
          </span> نیشان بدە
        </h1>
        
        <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
          ئەکاونتێن سۆشیاڵ میدیا دگەل جوانترین بەکڕاوند و دیزاین ل سەر لۆکەیشنەکێ تایبەت چێکە و ب ڕێکا ژمارەیەکێ ئەکاونتێ خۆ کۆنترۆڵ بکە.
        </p>

        {/* دوگمەیێن سەرەکی */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
          <Link 
            href="/zaniyar"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition duration-300 transform hover:-translate-y-0.5 text-center"
          >
            بینینی لاپەڕەی زانیار (نموونە)
          </Link>
          <button 
            onClick={() => alert("ئەڤ بەشە د داهاتوودا دگەل داتابەیسێ چالاک دەبێت!")}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-semibold transition duration-300 text-center"
          >
            تۆماربوونا ئەکاونتەکێ نوو
          </button>
        </div>
      </div>

      {/* بنپەڕ (Footer) */}
      <footer className="text-sm text-slate-500 pt-8 border-t border-slate-800/60 w-full text-center">
        © {new Date().getFullYear()} My Biolink. هەمی ماف د پارێزراون.
      </footer>
    </div>
  );
}
