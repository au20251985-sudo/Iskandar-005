import { Link } from 'react-router-dom';
import { Facebook, Instagram, Send, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="text-xl font-bold tracking-tight">Najot Ta'lim</span>
            </Link>
            <p className="text-slate-500 max-w-sm">
              Najot Ta'lim - zamonaviy kasblar markazi. Biz bilan siz eng talabgir IT yo'nalishlarini mutaxassislardan o'rganasiz.
            </p>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer">
                <Send className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer">
                <Youtube className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Kurslar</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Dasturlash</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Dizayn</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Marketing</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Logistika</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Aloqa</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>Toshkent sh., Chilonzor tumani, Qatortol ko'chasi, 60-uy</li>
              <li>+998 (71) 200-11-23</li>
              <li>info@najottalim.uz</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Najot Ta'lim. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
