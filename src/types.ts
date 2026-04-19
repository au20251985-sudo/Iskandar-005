/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Mobile' | 'Marketing';
  image: string;
}

export interface User {
  id: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
}

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Frontend BootCamp',
    description: 'Zamonaviy React, Next.js va Tailwind CSS yordamida professional web-ilovalar yaratishni o\'rganing.',
    instructor: 'Saidamirхоn Saidov',
    duration: '6 oy',
    category: 'Frontend',
    image: 'https://picsum.photos/seed/frontend/800/600'
  },
  {
    id: '2',
    title: 'Python Backend',
    description: 'Django va FastAPI yordamida kuchli va xavfsiz backend tizimlarini qurish.',
    instructor: 'Anvar Narzullaev',
    duration: '7 oy',
    category: 'Backend',
    image: 'https://picsum.photos/seed/python/800/600'
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Figma yordamida chiroyli va qulay interfeyslar yaratish san\'ati.',
    instructor: 'Sardor Sobirov',
    duration: '4 oy',
    category: 'Design',
    image: 'https://picsum.photos/seed/design/800/600'
  },
  {
    id: '4',
    title: 'iOS Development',
    description: 'Swift va SwiftUI yordamida iPhone va iPad uchun ilovalar yaratish.',
    instructor: 'Azamat Abdullaev',
    duration: '6 oy',
    category: 'Mobile',
    image: 'https://picsum.photos/seed/ios/800/600'
  }
];
