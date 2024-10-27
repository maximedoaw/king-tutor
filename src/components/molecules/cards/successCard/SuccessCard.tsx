interface Props {
   image: string;
   title: string;
   text: string;
}
export default function SuccessCard({ image, title, text }: Props) {
   return (
      <div className="w-[85%] md:w-[20%] bg-white  flex flex-col justify-center items-center p-3">
         <img
            src={image}
            alt=""
            className="w-[3rem] h-[3rem] mb-2 object-contain"
         />
         <h1 className="font-bold text-sm text-center mb-3">{title}</h1>
         <p className="text-center text-xs">{text}</p>
      </div>
   );
}
