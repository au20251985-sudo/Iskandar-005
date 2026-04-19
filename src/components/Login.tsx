import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { User, ShieldCheck } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (role: 'student' | 'teacher') => {
    setLoading(true);
    setTimeout(() => {
      toast.success(`Xush kelibsiz! Siz ${role === 'student' ? 'o\'quvchi' : 'o\'qituvchi'} sifatida kirdingiz.`);
      navigate(`/${role}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold tracking-tight">Xush Kelibsiz</CardTitle>
            <CardDescription>Najot Ta'lim ta'lim platformasiga kirish</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <User className="h-4 w-4" /> O'quvchi
                </TabsTrigger>
                <TabsTrigger value="teacher" className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> O'qituvchi
                </TabsTrigger>
              </TabsList>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@najottalim.uz" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Parol</Label>
                  <Input id="password" type="password" />
                </div>
              </div>

              <TabsContent value="student" className="mt-6">
                <Button className="w-full h-12 text-lg" onClick={() => handleLogin('student')} disabled={loading}>
                  {loading ? 'Kirilmoqda...' : 'O\'quvchi sifatida kirish'}
                </Button>
              </TabsContent>

              <TabsContent value="teacher" className="mt-6">
                <Button className="w-full h-12 text-lg variant-secondary" onClick={() => handleLogin('teacher')} disabled={loading}>
                  {loading ? 'Kirilmoqda...' : 'O\'qituvchi sifatida kirish'}
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 text-center pb-8">
            <p className="text-sm text-slate-500">
              Hisobingiz yo'qmi? <span className="text-primary font-bold cursor-pointer">Ro'yxatdan o'tish</span>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
