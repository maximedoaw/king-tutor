
import  pic1  from '../assets/images/pic1.jpg';
import  pic2  from '../assets/images/pic2.png';
import  pic3  from '../assets/images/pic3.png';
import  pic4  from '../assets/images/pic4.png';
import  pic5  from '../assets/images/pic5.png';
import  pic6  from '../assets/images/pic6.png';

interface TimeSlot {
   hour: string;
   isChecked: boolean;
}

 export interface DaySchedule {
   day: string;
   times: TimeSlot[];
}

export const scheduleData: DaySchedule[] = [
   { day: 'Wed', times: [] },
   {
      day: 'Thur',
      times: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'].map(hour => ({
         hour,
         isChecked: false,
      })),
   },
   {
      day: 'Fri',
      times: ['09:00', '10:00', '11:00', '12:00', '13:00'].map(hour => ({
         hour,
         isChecked: false,
      })),
   },
   {
      day: 'Sat',
      times: ['10:00', '11:00', '12:00', '13:00'].map(hour => ({
         hour,
         isChecked: false,
      })),
   },
   {
      day: 'Sun',
      times: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'].map(hour => ({
         hour,
         isChecked: false,
      })),
   },
   {
      day: 'Mon',
      times: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'].map(hour => ({
         hour,
         isChecked: false,
      })),
   },
   {
      day: 'Tue',
      times: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'].map(hour => ({
         hour,
         isChecked: false,
      })),
   },
];


export const cardInfos = [
   {
      mainImage: pic1,
      playIcon: '/src/assets/icons/play.svg',
      rating: 3.0,
      totalLessons: 100,
      tutor: {
         name: 'Jagwa',
         profilePicture: '/src/assets/images/tutor.png',
         countryFlag: '/src/assets/images/flag.png',
         verifiedBadge: true,
         subject: 'Blockchain',
         certification: {
            icon: 'graduation-cap',
            label: 'Javascript',
         },
      },
      languages: [
         { name: 'English', level: 'Native' },
         { name: 'Spanish', level: 'Native' },
      ],
      tutorDescription: 'Professional tutor with 5 years of...',
      trialLesson: {
         price: 'USD 30.0',
         label: 'Trial lesson starts from',
      },
      button: {
         label: 'Book a lesson',
         style: 'rounded-md bg-[#4b8cec] text-white font-bold',
      },
   },
   {
      mainImage: pic2,
      playIcon: '/src/assets/icons/play.svg',
      rating: 3.0,
      subject: '100 Lessons',
      tutor: {
         name: 'Jagwa',
         profilePicture: '/src/assets/mainImages/tutor.png',
         flag: '/src/assets/mainImages/flag.png',
         badge: {
            icon: 'badge-check', // autre icône si besoin
            color: 'green',
         },
         expertise: 'JavaScript',
         languageSkills: [
            { language: 'English', level: 'Native' },
            { language: 'Spanish', level: 'Native' },
         ],
         bio: 'Professional tutor with 5 years of experience...',
      },
      trial: {
         label: 'Trial lesson starts from',
         price: 'USD 30.0',
      },
      button: {
         text: 'Book a lesson',
         bgColor: '#4b8cec',
         textColor: 'white',
      },
   },
   {
      mainImage: pic3,
      playIcon: '/src/assets/icons/play.svg',
      rating: 3.0,
      lessons: 100,
      tutor: {
         name: 'Jagwa',
         countryFlag: '/src/assets/mainImages/flag.png',
         subject: 'Machine learning',
         badgeIcon: 'verified',
         profilePicture: '/src/assets/mainImages/tutor.png',
      },
      languages: [
         { language: 'English', level: 'Native' },
         { language: 'Spanish', level: 'Native' },
      ],
      description: 'Professional tutor with 5 years of...',
      trialPrice: 'USD 30.0',
   },
   {
      mainImage: pic4,
      playIcon: '/src/assets/icons/play.svg',
      rating: 3.0,
      lessons: 100,
      tutor: {
         name: 'Jagwa',
         countryFlag: '/src/assets/mainImages/flag.png',
         subject: 'Javascript',
         badgeIcon: 'verified',
         profilePicture: '/src/assets/mainImages/tutor.png',
      },
      languages: [
         { language: 'English', level: 'Native' },
         { language: 'Spanish', level: 'Native' },
      ],
      description: 'Professional tutor with 5 years of...',
      trialPrice: 'USD 30.0',
   },
   {
      mainImage: pic5,
      rating: 3.0,
      lessons: 100,
      tutor: {
         name: 'Jagwa',
         picture: '/src/assets/mainImages/tutor.png',
         countryFlag: '/src/assets/mainImages/flag.png',
         certificationIcon: 'lucide-badge-check',
         language: [
            { name: 'English', level: 'Native' },
            { name: 'Spanish', level: 'Native' },
         ],
      },
      subject: 'Blockchain',
      description: 'Professional tutor with 5 years of...',
      trialLessonPrice: 'USD 30.0',
      bookButton: 'Book a lesson',
   },
   {
      mainImage: pic6,
      rating: 3.0,
      lessons: 100,
      tutor: {
         name: 'Jagwa',
         picture: '/src/assets/mainImages/tutor.png',
         countryFlag: '/src/assets/mainImages/flag.png',
         certificationIcon: 'lucide-badge-check',
         language: [
            { name: 'English', level: 'Native' },
            { name: 'Spanish', level: 'Native' },
         ],
      },
      subject: 'JavaScript',
      description: 'Professional tutor with 5 years of...',
      trialLessonPrice: 'USD 30.0',
      bookButton: 'Book a lesson',
   },
];