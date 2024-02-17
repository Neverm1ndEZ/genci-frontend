import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const Dropdown = ({ options, label, size = 'sm', onChange, value = '' }) => {
  const handleDropdownChange = (e) => {
    onChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Select
      size={size}
      label={label}
      style={{ background: '#35373e', color: 'white' }}
      onChange={handleDropdownChange}
      value={value}
    >
      {options?.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default Dropdown;
