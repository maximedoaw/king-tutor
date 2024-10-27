import React from 'react';
import UploadImage from '../../../components/atoms/Input-Components/uploadButton/UploadButton';

export default function TutorProfilePhoto() {
   const handleImageUpload = (file: File) => {
      // Handle the uploaded image file here
      console.log('Uploaded image:', file);
   };
   return (
      <div className="space-y-6 my-4">
         {/* ------------------ PROFILE PHOTO ------------------ */}
         <h4 className="font-bold text-2xl py-3 border-b">Profile Photo</h4>
         <p>
            Try to make a good first impression. Tutors who look friendly and
            professional get the most students
         </p>

         <UploadImage onImageUpload={handleImageUpload} />
      </div>
   );
}
