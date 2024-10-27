import Header from './Header';
import Card from './Card';
import Button from './Button';

import { pic1, pic2, pic3, pic4, pic5, pic6, arrow, play, star } from './pics';

const TopTutorSection = () => {
   return (
      <div className="topTutorSection grid place-items-center min-h-[150vh] p-[22px] leading-6 text-xl font-[22] bg-[#ebf0f7] m-7 text-black rounded-sm">
         <Header text="Pick from over 200+ subjects" />
         <section className="grid sm:grid-cols-3 items-start gap-12">
            <Card
               subject="French"
               image={pic1}
               playIcon={play}
               starIcon={star}
               tutorName="Jagwa"
               lessonLabel="Lesson start from"
               lessonPrice="USD 30.0"
               numlesson="100 Lesson"
               numOfStar="3.0"
               href="/tutor/classroom"
            />
            <Card
               subject="French"
               image={pic2}
               playIcon={play}
               starIcon={star}
               tutorName="Maduka"
               lessonLabel="Lesson start from"
               lessonPrice="USD 30.0"
               numlesson="100 Lesson"
               numOfStar="5.0"
               href="/tutor/classroom"
            />
            <Card
               subject="French"
               image={pic3}
               playIcon={play}
               starIcon={star}
               tutorName="Verna"
               lessonLabel="Lesson start from"
               lessonPrice="USD 30.0"
               numlesson="100 Lesson"
               numOfStar="4.5"
               href="/tutor/classroom"
            />
            <Card
               subject="French"
               image={pic4}
               playIcon={play}
               starIcon={star}
               tutorName="Rashidat"
               lessonLabel="Lesson start from"
               lessonPrice="USD 30.0"
               numlesson="100 Lesson"
               numOfStar="5.0"
               href="/tutor/classroom"
            />
            <Card
               subject="French"
               image={pic5}
               playIcon={play}
               starIcon={star}
               tutorName="Anna"
               lessonLabel="Lesson start from"
               lessonPrice="USD 30.0"
               numlesson="100 Lesson"
               numOfStar="2.5"
               href="/tutor/classroom"
            />
            <Card
               subject="French"
               image={pic6}
               playIcon={play}
               starIcon={star}
               tutorName="Ahnmed"
               lessonLabel="Lesson start from"
               lessonPrice="USD 30.0"
               numlesson="100 Lesson"
               numOfStar="4.0"
               href="/tutor/classroom"
            />
         </section>

         <Button
            text="Find More Teachers"
            href="/tutor/dashboard"
            buttonIcon={arrow}
         />
      </div>
   );
};

export default TopTutorSection;
