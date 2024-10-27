import options from '../../../../../../../assets/icons/options.png';
import flag from '../../../../../../../assets/icons/flag.png';
import check from '../../../../../../../assets/icons/check.png';

interface Props {
   img: string;
   name: string;
   subject: string;
   banned?: boolean;
   bannedBy?: string;
   restricted?: boolean;
   restrictedBy?: boolean;
   description: string;
   verified: boolean;
   report?: boolean;
   onClick?: () => void;
   completeReport?: boolean;
}
function TutorCard({
   img,
   name,
   subject,
   banned,
   bannedBy,
   restricted,
   description,
   restrictedBy,
   verified,
   report = false,
   completeReport,
   onClick,
}: Props) {
   return (
      <div className="flex md:flex-row flex-col w-full py-2 gap-2 justify-between items-center">
         <div className="flex pt-4">
            <img className="w-16 h-16 object-contain mr-4" src={img} alt="" />
            <div className="flex flex-col">
               <div className="flex gap-4">
                  <div className="text-[#6E7485] flex">
                     <h2 className="font-bold">{name}</h2>{' '}
                     <span className="font-regular">&nbsp;{subject}</span>
                  </div>
                  <div className="flex justify-between">
                     {!report && (
                        <div className="flex">
                           {' '}
                           {banned && (
                              <div className="flex">
                                 <h2>-</h2>
                                 <h5 className="text-[#6E7485] text-sm">
                                    <span className="text-[#AC1A1A] text-sm">
                                       Banned
                                    </span>{' '}
                                    by {bannedBy}
                                 </h5>
                              </div>
                           )}
                           {restricted && !banned && (
                              <div className="flex">
                                 <h2>-</h2>
                                 <h5>
                                    <span className="text-[#AC1A1A]">
                                       Restricted for 10day
                                    </span>{' '}
                                    by{restrictedBy}
                                 </h5>
                              </div>
                           )}
                        </div>
                     )}

                     <div className="flex gap-2">
                        &nbsp;
                        <img className="object-contain w-3" src={flag} alt="" />
                        {verified && (
                           <img
                              className="object-contain w-3"
                              src={check}
                              alt=""
                           />
                        )}
                     </div>
                     {report && (
                        <p className="px-4 text-[#E52323] font-bold">
                           1 student reports
                        </p>
                     )}
                  </div>
               </div>
               <p className="text-[#666666]">{description}</p>
            </div>
         </div>
         <div
            className={
               'flex flex-row-reverse md:flex-row  items-center gap-2 pl-2 justify-between '
            }
         >
            <button
               onClick={onClick}
               className={`${
                  report ? 'bg-[#E52323]' : 'bg-[#2B7CF8]'
               }  p-2 px-4 font-regular rounded-md text-xs text-white`}
            >
               {report && !completeReport
                  ? ' Visit profile'
                  : completeReport
                    ? '+2 Reports'
                    : 'View Reports'}
            </button>
            <img className="object-contain w-4" src={options} alt="" />
         </div>
      </div>
   );
}

export default TutorCard;
