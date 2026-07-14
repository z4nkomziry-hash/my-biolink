// app/[username]/page.js
import { usersData } from '../data';
import { notFound } from 'next/navigation';

export default function BioPage({ params }) {
  const { username } = params;
  const user = usersData[username.toLowerCase()];

  // ئەگەر ناڤێ بەکارهێنەری نەبوو، لاپەڕەیا 404 نیشان بدە
  if (!user) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b ${user.theme} text-white flex flex-col items-center py-12 px-4`}>
      {/* وێنەی پرۆفایل و ناڤ */}
      <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold">@{user.name}</h1>
        <p className="text-sm text-white/80 mt-2 max-w-sm">{user.bio}</p>
      </div>

      {/* بەشێ لینکێن سۆشیاڵ میدیایێ */}
      <div className="w-full max-w-md space-y-4 mb-8">
        <h2 className="text-lg font-semibold border-b border-white/10 pb-2">سۆشیاڵ میدیا</h2>
        {user.links.map((link, index) => (
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
        ))}
      </div>

      {/* بەشێ بەرهەمەکان */}
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold border-b border-white/10 pb-2 mb-4">بەرهەمێن من</h2>
        <div className="grid grid-cols-2 gap-4">
          {user.products.map((product, index) => (
            <div key={index} className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-md">
              <img src={product.image} alt={product.name} className="w-full h-28 object-cover rounded-lg mb-2" />
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-xs text-yellow-350 font-bold mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
