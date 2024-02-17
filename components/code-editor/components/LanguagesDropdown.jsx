import React from 'react';
import Select from 'react-select';
import { customStyles } from '../constants/customStyles';
import { languageOptions } from '../constants/languageOptions';
import Dropdown from '@/components/Select-Dropdown/Dropdown';

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    // <div className="w-[250px]">
    //   <Dropdown
    //     options={languageOptions}
    //     label={`Filter By Category`}
    //     onChange={(selectedOption) => onSelectChange(selectedOption)}
    //     value={languageOptions[0]}
    //   />
    // </div>
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
