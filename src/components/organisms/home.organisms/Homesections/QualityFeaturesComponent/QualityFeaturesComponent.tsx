/* eslint-disable prettier/prettier */
import { featuresArr } from '../../../../../constants/features';
import globeIcon from '../../../../../assets/icons/globe.png';
import { HomeFeatures } from '../../../../molecules';

function QualityFeaturesComponent() {
   return (
      <div className=" flex flex-col items-center justify-center  bg-[#ebf0f7] pb-32 pt-8 rounded-xl">
         <div className="w-24 h-24 rounded-full bg-gradient-to-b mb-6 from-[#345FA1] to-[#76DDD2] flex items-center justify-center">
            <img
               className="w-16 h-16 rounded-full object-contain"
               src={globeIcon}
               alt="Circle Image"
            />
         </div>
         <h2 className="font-semibold  text-2xl text-[#181A1E] mb-4 w-[80%] text-center">
            Trust us to deliver the best to you
         </h2>
         <p className="text-500 text-lg font-medium text-[#414852] mb-12  w-[80%] text-center">
            Unlock your potentials with professional tutors from all over the
            world
         </p>
         <div className="flex md:gap-12 gap-1 md:flex-row flex-col">
            {featuresArr.map((feature, index) => (
               <HomeFeatures
                  key={index}
                  imgSrc={feature.imgSrc}
                  mediumText={feature.mediumText}
                  shortText={feature.shortText}
               />
            ))}
         </div>
      </div>
   );
}

export default QualityFeaturesComponent;
