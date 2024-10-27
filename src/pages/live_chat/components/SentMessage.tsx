interface Props {
   message: string;
   time: string;
}

export default function SentMessage({ message, time }: Props) {
   return (
      <div className="flex gap-5 self-end">
         <div className="flex flex-col gap-1">
            <div className="bg-white py-2 px-5 rounded-s-3xl rounded-tr-3xl max-w-xl justify-self-end">
               <p className="">{message}</p>
            </div>

            <p className="text-[#0D082C66] text-sm mx-2">{time}</p>
         </div>
      </div>
   );
}
