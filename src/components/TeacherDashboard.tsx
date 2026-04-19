import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, FileText, CheckSquare, Plus, MoreVertical, Search, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

const attendanceData = [
  { name: '10-Apr', attendance: 95 },
  { name: '11-Apr', attendance: 88 },
  { name: '12-Apr', attendance: 92 },
  { name: '13-Apr', attendance: 98 },
  { name: '14-Apr', attendance: 85 },
  { name: '15-Apr', attendance: 90 },
];

export default function TeacherDashboard() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">O'qituvchi Kabineti</h1>
          <p className="text-slate-500">Guruhlaringiz va o'quvchilaringizni boshqarish.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Yangi Kurs Qo'shish
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Jami O'quvchilar</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124 ta</div>
            <p className="text-xs text-green-600">+12% o'tgan oydan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Barcha Guruhlar</CardTitle>
            <FileText className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 ta</div>
            <p className="text-xs text-slate-500">4 ta Frontend, 4 ta Backend</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Tekshirilmagan Vazifalar</CardTitle>
            <CheckSquare className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 ta</div>
            <p className="text-xs text-orange-600">Shoshiling!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Haftalik Davomat</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-green-600">Yaxshi ko'rsatkich</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Davomat Statistikasi</CardTitle>
                <CardDescription>Oxirgi 6 kunlik dars qatnashuvi</CardDescription>
              </div>
              <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} />
                  <Bar dataKey="attendance" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Eng Faol O'quvchilar</CardTitle>
            <CardDescription>Reyting bo'yicha top 5</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { name: 'Azizov Shokir', score: 98, role: 'Frontend' },
              { name: 'Karimov Maqsud', score: 95, role: 'Backend' },
              { name: 'Olimov Behzod', score: 92, role: 'Frontend' },
              { name: 'Norova Gulnoza', score: 91, role: 'Design' },
            ].map((student, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/100?u=student${idx}`} />
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold">{student.name}</p>
                    <p className="text-xs text-slate-500">{student.role}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700">{student.score} ball</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>O'quvchilar Ro'yxati</CardTitle>
              <CardDescription>F10 Guruh - React Advanced</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Qidirish..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>F.I.SH</TableHead>
                <TableHead>Guruh</TableHead>
                <TableHead>Vazifalar</TableHead>
                <TableHead>Ball</TableHead>
                <TableHead>Holat</TableHead>
                <TableHead className="text-right">Amallar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'Boborov Jasur', group: 'F10', tasks: '12/15', score: 85, status: 'O\'qimoqda' },
                { name: 'Sobirova Dilnoza', group: 'F10', tasks: '15/15', score: 98, status: 'Bitirgan' },
                { name: 'Xolmatov Sanjar', group: 'F10', tasks: '10/15', score: 72, status: 'O\'qimoqda' },
              ].map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.group}</TableCell>
                  <TableCell>{row.tasks}</TableCell>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === 'Bitirgan' ? 'secondary' : 'default'}>{row.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon"><MessageCircle className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
