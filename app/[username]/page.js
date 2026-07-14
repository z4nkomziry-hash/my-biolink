// app/[username]/page.js
"use client";
import { useEffect, useState } from 'react';
import { getDB } from '../utils/db';
import { notFound } from 'next/navigation';

export default function BioPage({ params }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // بۆ پاراستن ژ خەتایێن ڕێندەر بوونێ د سێرڤەری دا
    async function fetchUser() {
      const { username } = await params;
      const db = getDB();
      const userData = db.users[username.toLowerCase()];
      setUser(userData || null);
      setLoading(false);
    }
    fetchUser();
  }, [params]);

  if (loading) return <p className="text-center py-20 text-white">کەرەمکە چاوەڕێبە...</p>;
  if (!user) return notFound();

  return (
    <div className={`min-h-screen bg-gradient-to-b ${user.theme} text-white flex flex-col items-center py-12 px-4`}>
      <div className="flex flex-col items-center text-center mb-8">
        <img 
          src={user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"} 
          alt={user.name} 
          className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold">@{user.name}</h1>
        <p className="text-sm text-white/80 mt-2 max-w-sm">{user.bio}</p>
      </div>

      <div className="w-full max-w-md space-y-4 mb-8">
        <h2 className="text-lg font-semibold border-b border-white/10 pb-2">سۆشیاڵ میدیا</h2>
        {user.links && user.links.length > 0 ? (
          user.links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition duration-300 backdrop-blur-md"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.title}</span>
              <span className="text-white/40">➔</span>
            </a>
          ))
        ) : (
          <p className="text-center text-sm text-white/50">چ لینک زێدە نەکرینە.</p>
        )}
      </div>

      {user.products && user.products.length > 0 && (
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold border-b border-white/10 pb-2 mb-4">بەرهەمێن من</h2>
          <div className="grid grid-cols-2 gap-4">
            {user.products.map((product, index) => (
              <div key={index} className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                {product.image && <img src={product.image} alt={product.name} className="w-full h-28 object-cover rounded-lg mb-2" />}
                <h3 className="text-sm font-semibold truncate">{product.name}</h3>
                <p className="text-xs text-yellow-350 font-bold mt-1">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
