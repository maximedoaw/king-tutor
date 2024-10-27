/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styles from './input.module.css';

interface Props {
   placeholder: string;
   type?: 'input' | 'dropdown';
   type2?: string;
   options?: string[];
   selectedOption?: string;
   setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const InputComp = ({
   placeholder,
   type,
   type2,
   options,
   selectedOption,
   setSelectedOption,
}: Props) => {
   const [showOptions, setShowOptions] = useState(true);
   const [inputValue, setInputValue] = useState('');
   const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

   const handleOptionSelect = (opt: string) => {
      setInputValue(opt); // Set the input value to the selected option
      setFilteredOptions([]); // Close filtered options
      setSelectedOption(inputValue);
   };

   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    const value = e.target.value;
   //    setInputValue(value);

   //    // Filter options based on the input value
   //    const filtered = options
   //       ? options.filter((option) =>
   //            option.toLowerCase().includes(value.toLowerCase()),
   //         )
   //       : [];
   //    setFilteredOptions(filtered);
   // };

   if (type === 'dropdown' && options && options.length > 0) {
      return (
         <label
            className={`${styles.custom_field} ${styles.one} flex flex-col mt-4 mb-4`}
         >
            {/* <input
               type="text"
               value={selectedOption}
               onClick={() => setShowOptions(!showOptions)}
               className="placeholder:text-sm"
               required
            /> */}

            <span className={styles.placeholder} style={{ top: '-.5em' }}>
               {placeholder}
            </span>
            {showOptions && (
               <select
                  className="w-full p-4 py-2 border-2 my-2 rounded-md"
                  required
               >
                  {options.map((option, index) => (
                     <option value={option} key={index} className="">
                        {option}
                     </option>
                  ))}
               </select>
            )}
            {/* <span className={styles.placeholder}>{placeholder}</span> */}
            {/* <ul
               className={`${
                  filteredOptions.length == 0 ? '' : 'border'
               } w-full rounded-lg flex flex-col items-center overflow-hidden`}
            >
               {filteredOptions.map((opt, index) => (
                  <li
                     key={index}
                     className="border border-b-[1px] w-full flex justify-center pt-[4px] pb-[4px]"
                     onClick={() => handleOptionSelect(opt)}
                  >
                     {opt}
                  </li>
               ))}
            </ul> */}
         </label>
      );
   }

   return (
      <label className={`${styles.custom_field} ${styles.one} mt-4 mb-4`}>
         <input
            type={
               type2 === 'password'
                  ? 'password'
                  : type2 === 'email'
                    ? 'email'
                    : 'text'
            }
            className=""
            required
            value={selectedOption}
            onChange={(e) => {
               setSelectedOption(e.target.value);
            }}
         />
         <span className={styles.placeholder}>{placeholder}</span>
      </label>
   );
};
export default InputComp;
