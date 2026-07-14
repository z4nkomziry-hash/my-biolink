// app/register/page.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getDB, saveDB } from '../utils/db';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    const db = getDB();
    const usernameLower = formData.username.toLowerCase();

    if (db.users[usernameLower]) {
      setError('ئەڤ ناڤێ بەکارهێنەرە یێ هەی، ئێکێ دی تاقی بکە!');
      return;
    }

    // زانیاریێن نوو یێن بەکارهێنەری ب تەمامی خەزن دکەین
    db.users[usernameLower] = {
      username: usernameLower,
      email: formData.email,
      phone: formData.phone,
      password: formData.password, // لۆکاڵ ستۆرێج
      name: formData.username,
      bio: "بایۆیا من لێرە بنووسە ✍️",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
      theme: "from-slate-900 to-slate-950",
      links: [],
      products: []
    };

    saveDB(db);
    localStorage.setItem("currentUser", usernameLower);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
      <form onSubmit={handleRegister} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-indigo-400">تۆماربوونا ئەکاونتەکێ نوو</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        
        <input 
          type="text" 
          placeholder="ناڤێ بەکارهێنەری (ب ئینگلیزی)" 
          required 
          className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-left" 
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input 
          type="email" 
          placeholder="ئیمێل" 
          required 
          className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-left" 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="ژمارەیا مۆبایلێ" 
          required 
          className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-left" 
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input 
          type="password" 
          placeholder="پەیڤا نهێنی (پاسۆرد)" 
          required 
          className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-left" 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        
        <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition">دروستکرنا ئەکاونتی</button>
        <p className="text-center text-sm text-slate-400">ئەکاونتێ تە یێ هەی؟ <Link href="/login" className="text-indigo-400 hover:underline">بچۆ ژوورەوە</Link></p>
      </form>
    </div>
  );
}
