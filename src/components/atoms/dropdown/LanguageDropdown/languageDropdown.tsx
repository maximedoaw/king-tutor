import React, { useState } from 'react';

const LanguageDropdown = () => {
   const [selectedLanguage, setSelectedLanguage] = useState('English');
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const languages = ['English', 'Spanish', 'French', 'German'];

   const handleLanguageChange = (language: string) => {
      setSelectedLanguage(language);
      setIsDropdownOpen(false); // Close the dropdown when an option is selected
   };

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };

   return (
      <div className="relative">
         <div className="relative inline-block text-left">
            <div>
               <button
                  type="button"
                  onClick={toggleDropdown} // Toggle the dropdown when the button is clicked
                  className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2  text-sm font-medium text-gray"
                  id="language-dropdown"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
               >
                  {selectedLanguage}
                  <svg
                     className={`-mr-1 ml-2 h-5 w-5 transition-transform transform ${
                        isDropdownOpen ? 'rotate-180' : ''
                     }`}
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     aria-hidden="true"
                  >
                     <path
                        fillRule="evenodd"
                        d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414 1 1 0 011.414 0L10 10.586z"
                     />
                  </svg>
               </button>
            </div>

            {isDropdownOpen && ( // Only render the dropdown when isDropdownOpen is true
               <div
                  className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="language-dropdown"
                  aria-expanded={isDropdownOpen}
               >
                  <div className="py-1" role="menuitem" aria-selected="true">
                     {languages.map((language, index) => (
                        <div
                           key={index}
                           onClick={() => handleLanguageChange(language)}
                           className={`${
                              selectedLanguage === language
                                 ? ''
                                 : 'hover:bg-gray-100 hover:text-black'
                           } cursor-pointer text-white group flex items-center px-4 py-2 text-sm`}
                        >
                           {language}
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default LanguageDropdown;
