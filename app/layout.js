// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My Biolink - پلاتفۆرمی دروستکردنی بایۆلینک',
  description: 'هەمی ئەکاونت و بەرهەمێن خۆ ب جوانترین شێواز ل سەر ئێک لاپەڕە کۆم بکە',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ku" dir="rtl">
      <body className="antialiased min-h-screen bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
