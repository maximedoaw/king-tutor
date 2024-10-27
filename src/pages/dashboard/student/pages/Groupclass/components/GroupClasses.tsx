import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { BsThreeDots } from 'react-icons/bs';
import MichaelBoole from '../../../../../../assets/images/MichaelBoole.png';
import course from '../../../../../../assets/images/course.png';
import flag from '../../../../../../assets/images/flag.png';
import verified from '../../../../../../assets/images/verified.png';
const GroupClasses = ({
   setPage,
}: {
   setPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
   const [menu, setMenu] = useState(false);
   return (
      <div className="flex my-8 gap-x-2 w-full px-5">
         <div className="img w-[34%] h-64 px-4 pr-2">
            <img src={course} alt="" className="w-full object-contain h-full" />
         </div>
         <div className="details w-[63%] px-4 pl-2">
            <small className="text-gray-500 text-sm">
               Class Date: <span> Jan 21, 2020. </span> 2 Lessons: 120min.
            </small>
            <h4 className="font-bold my-1 text-lg">
               Learn JavaScript from Zero to Hero
            </h4>
            <span className="text-gray-500 text-sm">
               3 in 1 Course: Learn to design websites with Figma, build with
               Webflow, and make a living freelancing .
            </span>
            <div className="flex my-2 items-center justify-between w-full">
               <div className="flex items-center gap-x-3">
                  <div className="img w-12 rounded-full">
                     <img src={MichaelBoole} alt="" className="w-full" />
                  </div>

                  <div>
                     <p className="text-gray-500">Group lesson by:</p>
                     <div className="flex">
                        <p className="font-semibold">Jace Kayode</p>
                        <div className=" mx-2 w-5 ">
                           <img src={flag} alt="" className=" w-full" />
                        </div>
                        <div className=" w-5 ">
                           <img src={verified} alt="" className=" w-full" />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <p className="flex items-center gap-x-2">
                     <span className="flex gap-x-1">
                        {' '}
                        <Star
                           className="text-blue-600"
                           fill="#2563eb"
                           fillOpacity={0.4}
                           width="1em"
                        ></Star>
                        <Star
                           className="text-blue-600"
                           fill="#2563eb"
                           fillOpacity={0.4}
                           width="1em"
                        ></Star>
                        <Star
                           className="text-blue-600"
                           fill="#2563eb"
                           fillOpacity={0.4}
                           width="1em"
                        ></Star>
                        <Star
                           className="text-blue-600"
                           fill="#2563eb"
                           fillOpacity={0.4}
                           width="1em"
                        ></Star>
                        <Star
                           className="text-blue-600"
                           fill="#2563eb"
                           fillOpacity={0.4}
                           width="1em"
                        ></Star>
                     </span>{' '}
                     4.8 rating(444)
                  </p>
               </div>
            </div>
            <div className="flex my-2">
               <div className="w-full">
                  <hr className="my-5 w-full" />
                  <div className="flex w-full justify-between items-center">
                     <div className="w-1/2 flex items-center">
                        <div className="justify-start border-r border-gray-300 pr-5">
                           <p className="font-medium">$13.99</p>

                           <p className="text-gray-500 text-sm">Class Price</p>
                        </div>
                        <div className="justify-end  border-gray-500 pl-5">
                           <p className="font-medium">10 day left to join</p>

                           <p className="text-gray-500 text-sm">
                              10 spots left
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-x-2 relative">
                        <button className="bg-[#2B7CF8] active:bg-[#1e3d6d] px-7 py-3 text-white">
                           Join Class
                        </button>
                        <button
                           className="p-3 py-4 bg-[#F5F7FA] text-[#414852]"
                           onClick={() => setMenu(!menu)}
                        >
                           <BsThreeDots />
                        </button>
                        {/* Menu */}
                        {menu && (
                           <div className="bg-white shadow-lg border text-sm absolute bottom-3 right-9">
                              <ul className="space-y-1">
                                 <li className="px-2 py-1 hover:bg-gray-200">
                                    <a href="#">Visit tutor profile</a>
                                 </li>
                                 <li className="px-2 py-1 hover:bg-gray-200">
                                    <a href="#">Book lesson</a>
                                 </li>
                                 <li className="px-2 py-1 hover:bg-gray-200">
                                    <span onClick={() => setPage('messages')}>
                                       Send a message
                                    </span>
                                 </li>
                              </ul>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GroupClasses;
