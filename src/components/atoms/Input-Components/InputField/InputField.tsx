import React, { useState, ChangeEvent } from 'react';
import chevDown from '../../../../assets/icons/CaretDown.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface Props {
   label: string;
   placeholder: string;
   type?: string;
}

function InputField({ label, placeholder, type }: Props) {
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
   const [inputType, setInputType] = useState('password');
   const [inputValue, setInputValue] = useState<string>('');
   const [charCount, setCharCount] = useState<number>(0);
   const [isOpen, setIsOpen] = useState(false);
   const [selectedValue, setSelectedValue] = useState('+1');
   const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
      setInputType(isPasswordVisible ? 'password' : 'text');
   };
   const handleImageClick = () => {
      setIsOpen(!isOpen);
   };

   const handleOptionClick = (value: string) => {
      setSelectedValue(value);
      setIsOpen(false);
   };

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      const characterCount = Math.min(newValue.length, 50);
      if (charCount <= 50) {
         setInputValue(newValue);
         setCharCount(characterCount);
      }
   };

   const showPasswordIcon = isPasswordVisible ? (
      <FiEyeOff
         onClick={togglePasswordVisibility}
         style={{ cursor: 'pointer' }}
      />
   ) : (
      <FiEye onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
   );

   return (
      <div className="w-full flex flex-col mt-3 ">
         <label className="text-xs text-[#1D2026]" htmlFor="">
            {label}
         </label>
         {type === 'phone' ? (
            <div className="w-full flex items-center border rounded-sm">
               <div className="flex">
                  <div className="relative w-full">
                     <div className="custom-dropdown">
                        <div
                           className={`custom-select flex items-center  ml-2 ${
                              isOpen && 'open'
                           }`}
                           onClick={handleImageClick}
                        >
                           <span className="text-xs">{selectedValue}</span>
                           <img
                              className="object-contain h-3 cursor-pointer"
                              src={chevDown}
                              alt=""
                           />
                        </div>
                        {isOpen && (
                           <ul className="custom-options absolute bg-white flex flex-col items-center p-1 border rounded-md ">
                              <li
                                 className="text-xs"
                                 onClick={() => handleOptionClick('+1')}
                              >
                                 +1
                              </li>
                              <li
                                 className="text-xs"
                                 onClick={() => handleOptionClick('+44')}
                              >
                                 +44
                              </li>
                              {/* Add more options as needed */}
                           </ul>
                        )}
                     </div>
                  </div>
               </div>
               {type === 'phone' && (
                  <input
                     placeholder={placeholder}
                     type="text"
                     className=" h-7 rounded-tr-sm rounded-br-sm pl-3 text-sm outline-none"
                     pattern="[0-9]*" // Restrict input to numbers
                  />
               )}
            </div>
         ) : type == 'wordcount' ? (
            <div className="border rounded-sm flex">
               <input
                  placeholder={placeholder}
                  type="text"
                  onChange={handleInputChange}
                  value={inputValue}
                  maxLength={50}
                  className=" h-7 rounded-tr-sm rounded-br-sm  w-[90%] pl-3 text-sm outline-none"
               />{' '}
               <p>{charCount}/50</p>
            </div>
         ) : type == 'password' ? (
            <div className="border rounded-sm flex items-center">
               <input
                  placeholder={placeholder}
                  type={inputType}
                  className=" h-7 rounded-tr-sm rounded-br-sm  w-[95%] pl-3 text-sm outline-none"
               />{' '}
               {showPasswordIcon}
            </div>
         ) : (
            <input
               type="text"
               className="border h-7 rounded-sm pl-3 text-sm outline-none"
               placeholder={placeholder}
            />
         )}
      </div>
   );
}

export default InputField;
