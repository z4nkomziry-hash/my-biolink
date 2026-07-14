// app/login/page.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getDB } from '../utils/db';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({ emailOrUsername: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const db = getDB();
    const input = formData.emailOrUsername.toLowerCase();
    
    // گەڕیان ل بەکارهێنەری ب ڕێکا ئیمێل یان ناوێ بەکارهێنەری
    const user = Object.values(db.users).find(u => u.username === input || u.email.toLowerCase() === input);

    if (user && user.password === formData.password) {
      localStorage.setItem("currentUser", user.username);
      router.push('/dashboard');
    } else {
      setError('زانیاری شاشن! پەیڤا نهێنی یان ئیمێل یێ ڕاست نینە.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
      <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-indigo-400">چوونەژوورەوە</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        
        <input 
          type="text" 
          placeholder="ئیمێل یان ناڤێ بەکارهێنەری" 
          required 
          className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-left" 
          onChange={(e) => setFormData({ ...formData, emailOrUsername: e.target.value })}
        />
        <input 
          type="password" 
          placeholder="پەیڤا نهێنی" 
          required 
          className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-left" 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        
        <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition">چوونەژوورەوە</button>
        <p className="text-center text-sm text-slate-400">ئەکاونتێ تە نینە؟ <Link href="/register" className="text-indigo-400 hover:underline">ئەکاونتەکێ چێکە</Link></p>
      </form>
    </div>
  );
}
