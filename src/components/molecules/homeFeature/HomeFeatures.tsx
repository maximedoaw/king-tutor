/* eslint-disable prettier/prettier */
// import cash from '../../assets/icons/cash.png';
interface Props {
   imgSrc: string;
   mediumText: string;
   shortText: string;
}

function HomeFeatures({ mediumText, shortText, imgSrc }: Props) {
   return (
      <div className="flex flex-col w-40 borde h-52 align-middle items-center">
         <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#B0F5EB] border-4 border-white flex items-center justify-center mb-2">
            <img
               src={imgSrc}
               alt="Circle"
               className="w-8 h-8 rounded-full object-contain"
            />
         </div>
         <p className="text-md font-[500] text-center mb-2 text-[#414852]">
            {mediumText}
         </p>
         <p className="text-sm font-[400] text-center text-[#414852]">
            {shortText}
         </p>
      </div>
   );
}

export default HomeFeatures;
