import React from 'react';
import UploadVideo from '../../../components/atoms/Input-Components/videoUpload/VideoUpload';

export default function TutorProfileVideo() {
   const handleImageUpload = (file: File) => {
      // Handle the uploaded image file here
      console.log('Uploaded image:', file);
   };
   return (
      <div className="space-y-6 my-4">
         <h4 className="font-bold text-2xl py-3 border-b">Profile Video</h4>
         <p>This is your selling point. Keep it friendly and professional</p>

         <UploadVideo onImageUpload={handleImageUpload} />
      </div>
   );
}
