import { CardInterface } from '../../../../types/types';
import { arrow } from './pics';

const Card = ({
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
   return (
      <>
         <div className=" flex-[1_1_300px] relative bg-[#ebf0f7]">
            {/* top card */}

            {image && (
               <img
                  src={image}
                  className="w-[100%] max-w-[100%] aspect-[16/12] rounded-t-xl "
               />
            )}
            <div className="imgWrapper flex py-0 px-[20] justify-between">
               <a href={href} className="image2 mt-[-50px]">
                  {playIcon && <img src={playIcon} className="playIcon w-10" />}
               </a>

               <div className="lessonWrapper flex flex-row-reverse">
                  <p className="subject2 mt-[-60px] text-[18px] text-[#01e0c0] font-bold pr-3 ">
                     {numOfStar}
                  </p>
                  {playIcon && (
                     <img
                        src={starIcon}
                        className="lessonIcon mt-[-100px] pr-3 "
                     />
                  )}
               </div>
            </div>
            <p className="subject3 pl-[70%] mt-[-29px] text-lg text-white font-thin">
               {numlesson}
            </p>

            {/*          buttom card        */}

            <div className="cardButton bg-white  pt-3 px-5 rounded-b-xl shadow-2xl">
               <div className="tutorSect flex justify-between ">
                  <div className="tutorNameSec">
                     <p className="tutorName text-xl font-bold ">{tutorName}</p>
                     <p className="label text-base pt-0">
                        Professional teacher
                     </p>
                  </div>

                  {playIcon && (
                     <img
                        src={arrow}
                        className="tutorIcon w-[7%] max-w-[7%] aspect-[16/12]"
                     />
                  )}
               </div>
               <div className="tutorCourseSec flex justify-between pt-3">
                  <p className="subject4 text-base font-bold">{subject}</p>
                  <p className="subject4 text-base font-bold">{subject}</p>
                  <p className="numOfLesson"></p>
               </div>

               <p className="lesLabel text-base ">{lessonLabel}</p>
               <p className="lesPrice text-base font-bold ">{lessonPrice}</p>
            </div>
         </div>
      </>
   );
};

export default Card;
