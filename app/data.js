// app/data.js

export const usersData = {
  // ئەکاونتێ تە یێ تایبەت
  "zaniyar": {
    name: "Zaniyar",
    bio: "خوێندکاری زانستی | حەزژێکەری تەکنەلۆژیا و دیزاین 💻",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    theme: "from-blue-600 via-indigo-700 to-purple-800", // ڕەنگێ بەکراوندی (Tailwind Gradient)
    links: [
      { title: "Snapchat", url: "https://snapchat.com", icon: "👻" },
      { title: "Instagram", url: "https://instagram.com", icon: "📸" },
      { title: "My Portfolio", url: "https://myportfolio.com", icon: "🌐" }
    ],
    products: [
      { 
        name: "Premium Snapchat Lens", 
        price: "$4.99", 
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop" 
      },
      { 
        name: "Next.js Boilerplate", 
        price: "Free", 
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop" 
      }
    ]
  },

  // ئەکاونتەکێ دی یێ نموونە بۆ تاقیکردنەوەیێ
  "testuser": {
    name: "Test User",
    bio: "ئەڤە ئەکاونتەکێ تاقیکردنەوەیێ یە ل سەر پلاتفۆرمی 🚀",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80",
    theme: "from-emerald-500 to-teal-700",
    links: [
      { title: "TikTok", url: "https://tiktok.com", icon: "🎵" }
    ],
    products: []
  }
};
