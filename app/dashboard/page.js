// app/dashboard/page.js
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getDB, saveDB } from '../utils/db';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [newLink, setNewLink] = useState({ title: '', url: '', icon: '🌐' });
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("currentUser");
    if (!username) {
      router.push('/login');
      return;
    }
    const db = getDB();
    setUser(db.users[username]);
  }, [router]);

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    const db = getDB();
    db.users[updatedUser.username] = updatedUser;
    saveDB(db);
  };

  const addLink = () => {
    if (!newLink.title || !newLink.url) return;
    const updatedLinks = [...user.links, newLink];
    handleUpdate({ ...user, links: updatedLinks });
    setNewLink({ title: '', url: '', icon: '🌐' });
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    const updatedProducts = [...user.products, newProduct];
    handleUpdate({ ...user, products: updatedProducts });
    setNewProduct({ name: '', price: '', image: '' });
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    router.push('/login');
  };

  if (!user) return <p className="text-center py-20 text-white">کەرەمکە چاوەڕێبە...</p>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* سەرپەڕ */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <h1 className="text-xl md:text-3xl font-extrabold">داشبۆردی کۆنترۆڵکرنێ 🎛️</h1>
          <button onClick={logout} className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl text-sm font-semibold transition">چوونەدەر ل ئەکاونتی</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* بەشی دەستکاریکردنی زانیاریان */}
          <div className="space-y-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-indigo-400">زانیاریێن گشتی</h2>
            
            <div className="space-y-3">
              <label className="text-xs text-slate-400">ناڤێ ل سەر سایتێ</label>
              <input 
                type="text" 
                value={user.name} 
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl"
                onChange={(e) => handleUpdate({ ...user, name: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs text-slate-400">بایۆ</label>
              <textarea 
                value={user.bio} 
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl h-20"
                onChange={(e) => handleUpdate({ ...user, bio: e.target.value })}
              />
            </div>

            {/* گۆڕینی ڕەنگ و بەکڕاوند */}
            <div className="space-y-3">
              <label className="text-xs text-slate-400">ڕەنگ و تێما لاپەڕەی</label>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => handleUpdate({ ...user, theme: 'from-blue-600 via-indigo-700 to-purple-800' })} className="h-10 bg-gradient-to-r from-blue-600 to-purple-800 rounded-xl text-xs">شین و وەنەوشەی</button>
                <button onClick={() => handleUpdate({ ...user, theme: 'from-emerald-500 to-teal-700' })} className="h-10 bg-gradient-to-r from-emerald-500 to-teal-700 rounded-xl text-xs">سەوز</button>
                <button onClick={() => handleUpdate({ ...user, theme: 'from-gray-900 to-black' })} className="h-10 bg-gradient-to-r from-gray-900 to-black rounded-xl text-xs">تاری کلاسیک</button>
              </div>
            </div>
          </div>

          {/* بەشی زێدەکردنی لینک و بەرهەمان */}
          <div className="space-y-6">
            
            {/* زێدەکردنی لینک */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h2 className="text-lg font-bold text-indigo-400">زێدەکرنا سۆشیاڵ میدیا یێ 🔗</h2>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="ئایکۆن (👻, 📸)" 
                  className="w-16 p-3 bg-slate-850 border border-slate-700 rounded-xl text-center"
                  value={newLink.icon}
                  onChange={(e) => setNewLink({ ...newLink, icon: e.target.value })}
                />
                <input 
                  type="text" 
                  placeholder="ناڤ نیشان (Snapchat)" 
                  className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl"
                  value={newLink.title}
                  onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                />
              </div>
              <input 
                type="text" 
                placeholder="لینکا ئەکاونتی (https://...)" 
                className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl text-left"
                value={newLink.url}
                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              />
              <button onClick={addLink} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition">زێدەکرن</button>
            </div>

            {/* زێدەکردنی بەرهەمان */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h2 className="text-lg font-bold text-indigo-400">زێدەکرنا بەرهەمان 🛒</h2>
              <input 
                type="text" 
                placeholder="ناڤێ بەرهەمی" 
                className="w-full p-3 bg-slate-850 border border-slate-700 rounded-xl"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="نرخ (بۆ نموونە 10$)" 
                  className="w-1/3 p-3 bg-slate-850 border border-slate-700 rounded-xl"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input 
                  type="text" 
                  placeholder="لینکا وێنەیی بەرهەمی (URL)" 
                  className="w-2/3 p-3 bg-slate-850 border border-slate-700 rounded-xl text-left"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
              </div>
              <button onClick={addProduct} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition">زێدەکرنا بەرهەمی</button>
            </div>

          </div>
        </div>

        {/* دوگمەی بینینی پرۆفایلی خۆت */}
        <div className="text-center pt-4">
          <a 
            href={`/${user.username}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-extrabold text-lg transition shadow-lg shadow-emerald-600/20"
          >
            بینینی لاپەڕەیا تە یا تایبەت 🚀
          </a>
        </div>

      </div>
    </div>
  );
}
