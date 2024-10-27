// import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function ImageUpload() {
   const onDrop = (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {};
      reader.readAsDataURL(file);
   };

   const { getRootProps, getInputProps } = useDropzone({
      onDrop,
   });

   return (
      <div className="w-full h-[87%] bg-no-repeat object-contain flex flex-col items ">
         <div className="w-full h-full bg-no-repeat object-contain">
            <div className="flex flex-col items-center w-full justify-end h-full">
               <div
                  {...getRootProps({
                     className:
                        'bg-black w-full flex cursor-pointer items-center flex-col my-2',
                  })}
                  style={{ opacity: '0.5' }}
               >
                  <input {...getInputProps()} />
                  <p className="text-white text-xl">Upload Photo</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ImageUpload;
