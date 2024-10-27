interface Props {
   message: string;
   time: string;
}

export default function RecievedMessage({ message, time }: Props) {
   return (
      <div className="flex gap-5 self-start">
         <div className="flex flex-col gap-1">
            <div className="bg-[#002060] py-2 px-5 rounded-e-3xl rounded-tl-3xl max-w-xl justify-self-end">
               <p className="text-white">{message}</p>
            </div>

            <div className="flex flex-1 items-center justify-between">
               <p className="text-[#0E3673CC] mx-2">Assistant</p>

               <p className="text-[#0D082C66] text-sm mx-2">{time}</p>
            </div>
         </div>
      </div>
   );
}
