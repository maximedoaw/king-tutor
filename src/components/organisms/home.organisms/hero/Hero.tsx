import people from '../../../../assets/images/people.png';

export default function Hero() {
   return (
      <section className="hero people min-h-[380px] px-6">
         <div className="mx-auto flex flex-col justify-between md:w-full sm:flex-row">
            <div className="space-y-10 max-w-max  text-center sm:text-left pl-9">
               <h1 className="text-white text-4xl pt-6 font-bold max-w-[500px] leading-10">
                  Unlock your potentials with the best online tutors
               </h1>
               <p className="text-white text-xl max-w-[500px]">
                  Get an experienced tutor to shape your career, learn new
                  cultures, skills and achieve your goals with the best online
                  tutors
               </p>
               <div>
                  <a
                     href="#"
                     className="text-white bg-[#01CAAD] px-6 py-4 rounded hover:px-8 hover:py-5 transition-all"
                  >
                     Get Started &#8594;
                  </a>
               </div>
            </div>
            <div className=" justify-end circles pt-1 md:flex hidden">
               <img src={people} className="w-11/12 h-[450px] mb-2 " alt="" />
            </div>
         </div>
      </section>
   );
}
