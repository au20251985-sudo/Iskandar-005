import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_COURSES } from '@/types';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, Users, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <Badge variant="outline" className="w-fit py-1.5 px-4 text-sm font-semibold border-primary/20 bg-primary/5 text-primary">
                ✨ Zamonaviy IT maktabi
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Karyerangizni <span className="text-primary italic">Biz Bilan</span> Boshlang
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Najot Ta'lim - bu nafaqat bilim, balki kelajakdagi professional hayotingizga poydevor. Eng zamonaviy texnologiyalarni mutaxassislardan o'rganing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 h-12 text-md" asChild>
                  <Link to="/login">Kursni Tanlash <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-md">
                  Biz haqimizda
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="h-10 w-10 rounded-full border-2 border-background" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-slate-500 font-medium">10,000+ muvaffaqiyatli bitiruvchilar</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <img src="https://picsum.photos/seed/najot2/1200/1000" alt="Students learning" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Muvaffaqiyat</p>
                  <p className="font-bold">98% Bandlik</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <p className="font-bold text-lg">Amaliy tajriba</p>
                <p className="text-sm text-slate-500">Real loyihalar ustida ishlash imkoniyati</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="uppercase tracking-widest text-xs py-1 px-4">Bizning yo'nalishlar</Badge>
          <h2 className="text-4xl font-bold tracking-tight">Ommabop Kurslarimiz</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Najot Ta'limda siz xohlagan yo'nalishda bilim olishingiz mumkin. Bizning kurslarimiz doimiy yangilanib boradi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-none bg-slate-50">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-slate-900 border-none hover:bg-white">{course.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <img src={`https://i.pravatar.cc/100?u=author${idx}`} className="h-8 w-8 rounded-full" referrerPolicy="no-referrer" />
                      <span className="text-xs font-medium text-slate-700">{course.instructor}</span>
                    </div>
                    <span className="text-xs font-bold text-primary">{course.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900 text-white py-24 rounded-[3rem] mx-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="h-14 w-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Chuqurlashtirilgan bilim</h3>
              <p className="text-slate-400 leading-relaxed">Biz nafaqat kodlashni, balki injenerlik fikrlashni va fundamental bilimlarni o'rgatamiz.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-14 w-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Mentorlik tizimi</h3>
              <p className="text-slate-400 leading-relaxed">Har bir o'quvchi bilan tajribali mentorlar individual ishlaydi va savollariga javob beradi.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-14 w-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Karyera markazi</h3>
              <p className="text-slate-400 leading-relaxed">Bitiruvchilarimizga ish topishda, CV tayyorlashda va intervyulardan o'tishda ko'maklashamiz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
