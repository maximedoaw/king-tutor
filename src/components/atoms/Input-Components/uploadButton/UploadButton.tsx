import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Cloud from '../../../../assets/images/Cloud.png';

interface ImageUploadProps {
   onImageUpload: (file: File) => void;
}

const ImageUploadButton: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
   const [selectedImage, setSelectedImage] = useState<File | null>(null);

   const onDrop = useCallback(
      (acceptedFiles: File[]) => {
         const file = acceptedFiles[0];
         setSelectedImage(file);
         onImageUpload(file);
      },
      [onImageUpload],
   );

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <>
         <div
            className={`image-upload-container text-center cursor-pointer w-full h-full ${
               isDragActive ? 'drag-over' : ''
            }`}
            {...getRootProps()}
         >
            <input {...getInputProps()} />
            {selectedImage ? (
               <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="preview-image w-full md:w-[40%] h-[50%]"
               />
            ) : (
               <div className="wrapper">
                  <div className="flex flex-col md:flex-row justify-between w-full">
                     <button
                        type="button"
                        className="upload-button bg-[#3a6ab3] hover:bg-[#2d599b] text-white py-2 px-4 border-none rounded-[4px] cursor-pointer w-[152px] h-[42px] shadow-xl text-[20px] "
                     >
                        Upload
                     </button>
                     <span className="file-size-text font-[system-ui] text-[13px] text-[#9c9c9c] font-medium leading-7 tracking-wide text-left ml-5 w-[90%] md:w-[45%] h-14 mt-4 md:mt-0">
                        JPG or PNG format Maximum 5Mb
                     </span>
                  </div>

                  <div className="upload-text text-center mt-4 border-dashed border border-slate-900 p-4 w-[100%] h-[50%] rounded-[29px] flex flex-col items-center">
                     <br />
                     <img
                        src={Cloud}
                        className="upload-image pt-[50px] mx-auto"
                     />
                     <br />
                     <span className="drop-zone-text text-center">
                        Drag and drop an image here
                     </span>
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default ImageUploadButton;
