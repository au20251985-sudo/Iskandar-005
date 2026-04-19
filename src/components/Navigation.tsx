import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Najot Ta'lim</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Kurslar</Link>
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Biz haqimizda</Link>
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Blog</Link>
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Kontakt</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Kirish
              </Link>
            </Button>
            <Button asChild>
              <Link to="/login">Ro'yxatdan o'tish</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Kurslar</Link>
              <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Biz haqimizda</Link>
              <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Kontakt</Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login" onClick={() => setIsOpen(false)}>Kirish</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/login" onClick={() => setIsOpen(false)}>Ro'yxatdan o'tish</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
