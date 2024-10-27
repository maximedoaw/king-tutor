import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Cloud from '../../../../assets/images/Cloud.png';

interface VideoUploadProps {
   onImageUpload: (file: File) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onImageUpload }) => {
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
                  className="preview-image w-[40%] h-[50%]"
               />
            ) : (
               <div className="wrapper ">
                  <div className="flex justify-between w-[338px]">
                     <button
                        type="button"
                        className="upload-button bg-[#3a6ab3] hover:bg-[#2d599b] text-white py-2 px-4 border-none rounded-[4px] cursor-pointer w-[152px] h-[42px] shadow-xl text-[20px] "
                     >
                        Upload
                     </button>
                  </div>

                  <div className="upload-text text-center mt-4 border-dashed border border-slate-900 p-4 w-[100%] h-[50vh] rounded-[29px] flex flex-col items-center">
                     <br />
                     <img
                        src={Cloud}
                        className="upload-image pt-[50px] mx-auto"
                     />
                     <br />
                     <span className="drop-zone-text text-center">
                        Drag and drop a video here
                     </span>
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default VideoUpload;
