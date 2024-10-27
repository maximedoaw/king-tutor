import React from 'react';
import { Avatar, AvatarImage } from '../../../shadcn-components/Avatar';
import { AiFillStar } from 'react-icons/ai';

interface Props {
   comment: string;
   image: string;
   date: string;
   name: string;
}
export default function Review({ comment, image, name, date }: Props) {
   return (
      <div className="space-y-2 border px-2 py-4">
         <div className="flex items-center justify-start gap-4">
            <Avatar>
               <AvatarImage src={image} />
            </Avatar>

            <div className="flex flex-col">
               <span className="text-lg font-bold">{name}</span>
               <span className="text-xs text-[#676767]">{date}</span>
               <span className="flex text-[#FD8E1F]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
               </span>
            </div>
         </div>

         {/* COMMENT */}
         <div>{comment}</div>
      </div>
   );
}
