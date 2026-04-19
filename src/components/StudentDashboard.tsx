import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, CheckCircle2, Clock, MessageSquare, PlayCircle, Trophy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const statsData = [
  { day: 'Dush', score: 85 },
  { day: 'Sesh', score: 92 },
  { day: 'Chor', score: 78 },
  { day: 'Pay', score: 88 },
  { day: 'Jum', score: 95 },
  { day: 'Shan', score: 90 },
];

export default function StudentDashboard() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Xush kelibsiz, Davronbek!</h1>
          <p className="text-slate-500">Bugungi darslaringiz va o'zlashtirish ko'rsatkichlaringiz.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border">
          <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
            <Trophy className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Reyting</p>
            <p className="font-bold">#12 Top 5%</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progress & Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Barcha Kurslar</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4 ta Kurs</div>
                <p className="text-xs text-muted-foreground">2 tasi tugatilmoqda</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">O'rtacha Ball</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.4%</div>
                <p className="text-xs text-muted-foreground">+2.5% o'tgan haftaga nisbatan</p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <CardTitle>Bilim Ko'rsatkichi</CardTitle>
                <CardDescription>Haftalik o'zlashtirish grafigi</CardDescription>
              </div>
              <Button variant="outline" size="sm">Hisobot</Button>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} dot={{ r: 6, fill: '#2563eb' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="space-y-6">
            <h2 className="text-xl font-bold">Mening Kurslarim</h2>
            <div className="grid gap-4">
              {[
                { title: 'Frontend BootCamp', progress: 75, lastSeen: '2 soat oldin', color: 'bg-blue-500' },
                { title: 'UI/UX Design', progress: 30, lastSeen: 'Kecha', color: 'bg-purple-500' },
              ].map((course, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center p-6 gap-6">
                    <div className={`h-16 w-16 ${course.color} rounded-2xl flex items-center justify-center text-white shrink-0`}>
                      <PlayCircle className="h-8 w-8" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">{course.title}</h3>
                        <Badge variant="secondary">{course.progress}%</Badge>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.lastSeen}</div>
                        <div className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Dushanba, Chorshanba</div>
                      </div>
                    </div>
                    <Button>Davom etish</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Schedule */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bugungi Dars Jadvali</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { time: '14:00', title: 'React Hooks & State Management', type: 'Nazariya' },
                { time: '16:00', title: 'Figma Auto Layout', type: 'Amaliyot' },
              ].map((lesson, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-primary mt-1" />
                    <div className="w-px flex-1 bg-slate-200 my-1 group-last:hidden" />
                  </div>
                  <div className="space-y-1 pb-6">
                    <p className="text-xs font-bold text-primary">{lesson.time}</p>
                    <p className="font-semibold text-sm">{lesson.title}</p>
                    <Badge variant="outline" className="text-[10px] h-5">{lesson.type}</Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">To'liq Jadval</Button>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> Mentor bilan suhbat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">Savolingiz bormi? Mentoringizga yozing va darsda tushunmagan qismlaringizni so'rang.</p>
              <Button variant="secondary" className="w-full">Chatni boshlash</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
