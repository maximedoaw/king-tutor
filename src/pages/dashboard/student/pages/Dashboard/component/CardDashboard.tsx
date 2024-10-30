import { CardInterface } from '../../../../../../types/types';
import { arrow } from '../../../../../../components/organisms/home.organisms/topTutorSection/pics';
import { BadgeCheck, GraduationCapIcon, Star, X } from 'lucide-react';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';
import tutor from '../../../../../../assets/images/tutor.png';
import flag from '../../../../../../assets/images/flag.png';
import pic1 from '../../../../../../assets/images/pic1.jpg';
import avatar5 from '../../../../../../assets/images/Avatar5.png';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import Modal2 from './Modal2';
import Calendar from 'react-calendar';
import { DaySchedule, scheduleData } from '../../../../../../constants/card';

const Time = (
   { 
    time, 
    isChecked 
   } : 
   {
      time : string, 
      isChecked : boolean
  }
) =>{

   const [selectTime, setSelectTime] = useState(isChecked)

   return (
      <p
         className={`rounded-lg p-2 py-1 text-sm text-blue-40 select-none ${selectTime ? 
            'bg-blue-500 text-white' : 'hover:bg-gray-200 duration-300'}`}
         onClick={() => setSelectTime((prev) => !prev)}
      >
         {time}
      </p>
   );
}

const CardDashbaord = ({
   image,
   playIcon,
   starIcon,
   subject,
   tutorName,
   numOfStar,
   numlesson,
   lessonLabel,
   lessonPrice,
   href,
}: CardInterface) => {
     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
     const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
     const [calendarData, setCalendarData] = useState(scheduleData)
     const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with today's date
     const [dateChecked, setDateChecked] = useState<DaySchedule[]>([]);
     const [originDate, setOriginDate] = useState<number[]>([])
     const [count, setCount] = useState(0)
     // Helper function to get the start and end dates of the current week
     const getWeekRange = (date : any) => {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay()); // Sunday as the start
        const weekDates = Array.from({ length: 7 }, (_, i) => {
           const d = new Date(startOfWeek);
           d.setDate(startOfWeek.getDate() + i);
           return d;
        });
       // console.log(weekDates)
        return weekDates;
     };

     const weekDates = getWeekRange(currentDate);

     const handlePrevWeek = () => {
        const prevWeekDate = new Date(currentDate);
        prevWeekDate.setDate(currentDate.getDate() - 7);
        setCurrentDate(prevWeekDate);
        setCount((prev) => prev - 1)

     };

     const handleNextWeek = () => {
        const nextWeekDate = new Date(currentDate);
        nextWeekDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(nextWeekDate);
        setCount((prev) => prev + 1);

     };

      useEffect(() =>{
        //let originDate = Array.from({})
        if (currentDate) {
           setDateChecked((prev: any) => [...prev, calendarData]);
           setOriginDate((prev) => Array.from({ length : count}).map((_ , i) => i ))

           console.log(originDate);
        }
      },[count])
      
   return (
      <>
         <div className=" flex-[1_1_100px] relative my-8 mt-0">
            {/* top card */}

            {image && (
               <img
                  src={image}
                  className="w-[100%] max-w-[100%] object-contain rounded-t-xl "
                  alt=""
               />
            )}
            <div
               className="imgWrapper flex py-0 px-[20] justify-between items-center"
               style={{ position: 'relative', marginTop: '-3em' }}
            >
               <span
                  className="image2 mt-[-50px] pl-3"
                  style={{ position: 'absolute', top: '2em' }}
                  onClick={() => setIsModalOpen(true)}
               >
                  {playIcon && (
                     <img
                        src={playIcon}
                        className="playIcon w-10"
                        onClick={() => setIsModalOpen(true)}
                        alt=""
                     />
                  )}
               </span>

               <div
                  className="lessonWrapper flex flex-row-reverse"
                  style={{ position: 'absolute', right: '0' }}
               >
                  <p className="subject2 text-[18px] text-blue-400 font-bold flex items-center bg-[#ffffffb3] px-4 pr-8 gap-x-1 mb-7">
                     {playIcon && (
                        // <img src={starIcon} className="lessonIcon pr-3 w-7" />
                        <Star
                           className="text-blue-400"
                           fill="blue"
                           fillOpacity={0.4}
                           width="1em"
                        ></Star>
                     )}
                     {numOfStar}
                  </p>
               </div>
            </div>
            <p
               className="subject3text-lg text-blue-400  my-4 mt-2 flex justify-end px-2 font-bold bg-[#ffffffb3]"
               style={{ position: 'absolute', right: '0' }}
            >
               {numlesson}
            </p>

            {/*          buttom card        */}

            <div className="cardButton bg-white  py-3 pb-4 px-5 rounded-b-xl shadow-2xl mt-12">
               <div className="tutorSect flex justify-between ">
                  <div className="flex gap-x-4 items-center">
                     <div className="tutorPictur w-8">
                        <img
                           src={tutor}
                           alt=""
                           className="w-full rounded-2xl border-2 border-green-500"
                        />
                     </div>
                     <div className="tutorNameSec">
                        <p className="tutorName text-xl font-bold flex items-center gap-x-2">
                           <span>{tutorName}</span>{' '}
                           <span>
                              {' '}
                              <img src={flag} alt="" />
                           </span>{' '}
                           <span>
                              <BadgeCheck
                                 fill="green"
                                 fillOpacity={0.6}
                              ></BadgeCheck>{' '}
                           </span>
                        </p>
                        <p className="label text-xs pt-0 flex gap-x-1">
                           <GraduationCapIcon></GraduationCapIcon>
                           <span>{subject}</span>
                        </p>
                     </div>
                  </div>

                  {playIcon && (
                     // <img
                     //    src={arrow}
                     //    className="tutorIcon w-[7%] max-w-[7%] aspect-[16/12]"
                     // />
                     <CaretRightIcon className="w-6 h-6"></CaretRightIcon>
                  )}
               </div>
               <div className="mt-2">
                  Speaks: English{' '}
                  <span className="bg-green-200 p-2 text-xs">Native</span>{' '}
                  Spanish
                  <span className="bg-green-200 p-2 text-xs">Native</span>
               </div>
               <div className="my-4">
                  <p className="bg-gray-100 text-sm font-bold p-2 rounded-md">
                     {' '}
                     Professional tutor with 5 years of...
                  </p>
               </div>
               <div className="flex items-center justify-between my-2">
                  <p className="lesLabel text-xs text-gray-500">
                     {lessonLabel}
                  </p>
                  <p className="lesPrice text-base font-bold ">{lessonPrice}</p>
               </div>
               <div className="">
                  <button
                     className="rounded-md bg-[#4b8cec] p-4 py-2 text-white font-bold w-full"
                     onClick={() => setIsModalOpen2(true)}
                  >
                     Book a lesson
                  </button>
               </div>
            </div>
            {/* <VideoModal isOpen={isModalOpen}></VideoModal> */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
               <div className="w-full h-full">
                  <img
                     src={pic1}
                     alt=""
                     className="w-full  rounded-none h-full"
                  />
                  <span
                     style={{ position: 'absolute', right: '1em', top: '1em' }}
                     onClick={() => setIsModalOpen(false)}
                  >
                     <X color="white"></X>{' '}
                  </span>
                  <span
                     className="image2 mt-[-50px] pl-3"
                     style={{
                        position: 'absolute',
                        bottom: '2em',
                        left: '1em',
                     }}
                  >
                     {playIcon && (
                        <img src={playIcon} className="playIcon w-10" alt="" />
                     )}
                  </span>
               </div>
            </Modal>
            <Modal2
               isOpen={isModalOpen2}
               onClose={() => setIsModalOpen2(false)}
            >
               <div>
                  <div className="py-6 px-8">
                     <div className="flex w-full justify-between items-center pb-3">
                        <div className="flex items-center gap-x-3">
                           <img src={avatar5} alt="" />
                           <div>
                              <p>Book a trial lesson</p>
                              <p className="text-xs">
                                 Javascript with Grace Kayode
                              </p>
                           </div>
                        </div>
                        <X onClick={() => setIsModalOpen2(false)}></X>
                     </div>
                     <hr></hr>
                     <div style={{ overflowY: 'scroll' }}>
                        <div className="flex w-full justify-center">
                           <div className="rounded-xl bg-gray-200 flex gap-x-1 my-6 justify-center px-2 py-2">
                              <span className="rounded-xl px-12 py-2 bg-white">
                                 30 mins
                              </span>
                              <span className="rounded-xl bg-[#d9feef] px-12 py-2">
                                 60 mins
                              </span>
                           </div>
                        </div>
                        <div className="flex w-full justify-center gap-x-6 items-center text-lg">
                           <span className="bg-blue-100">
                              <CaretLeftIcon
                                 className=" "
                                 width="2em"
                                 height="2em"
                                 color="gray"
                                 onClick={handlePrevWeek}
                              ></CaretLeftIcon>
                           </span>
                           <p className="font-semibold select-none text-gray-500">
                              {`${weekDates[0].toLocaleDateString()} - ${weekDates[6].toLocaleDateString()}`}
                           </p>
                           <span className="bg-blue-100">
                              <CaretRightIcon
                                 className=" "
                                 width="2em"
                                 height="2em"
                                 color="gray"
                                 onClick={handleNextWeek}
                              ></CaretRightIcon>
                           </span>
                        </div>
                        <div className="flex w-full justify-center my-4 cursor-pointer">
                           <div className="flex gap-x-1">
                              {calendarData.map((data, index) => (
                                 <div>
                                    <p className="border-t-2 border-blue-400 pt-1 px-1 select-none">
                                       {data.day} - {weekDates[index].getDate()}
                                    </p>
                                    <div className="flex flex-col gap-y-1">
                                       {data.times.map((time, idx) => (
                                          <Time 
                                            time={time.hour} 
                                            key={idx}
                                            isChecked = {time.isChecked}
                                            
                                          />
                                       ))}
                                    </div>
                                 </div>
                              ))}
                           </div>

                           {/* <Calendar></Calendar> */}
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-100 p-4 px-6 pb-6 w-full">
                     <div>
                        <p className="text-sm">
                           The calendar is in your time zone
                        </p>
                        <p className="text-sm">Africa/Lagos 14:56</p>
                     </div>
                     <a href="/book-lesson">
                        <button className="rounded-xl bg-blue-500 text-white p-3 px-6">
                           Confirm time
                        </button>
                     </a>
                  </div>
               </div>
            </Modal2>
         </div>
      </>
   );
};

export default CardDashbaord;
