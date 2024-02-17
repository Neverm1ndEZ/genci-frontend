import Dropdown from '@/components/Select-Dropdown/Dropdown';
import React from 'react';

const InputCountry = () => {
  // Define your nationality options as an array
  const nationalityOptions = [
    {
      id: 0,
      label: 'India',
      value: 'india',
    },
    {
      id: 1,
      label: 'United States',
      value: 'united-states',
    },
    {
      id: 2,
      label: 'Canada',
      value: 'canada',
    },
    {
      id: 3,
      label: 'Australia',
      value: 'australia',
    },
    {
      id: 4,
      label: 'Other',
      value: 'other',
    },
  ];

  return (
    <div className="w-1/2">
      {/* <select
        id="nationality"
        name="nationality"
        defaultValue={''} // Set the default value to an empty string
        className="bg-darkAccent1 border border-grayBorderLight placeholder-[#F7F7F7]  rounded-lg block w-full px-4 h-[40px] md:h-[56px]"
        required
      >
        <option value="" disabled>
          Country
        </option>
        {nationalityOptions.map((option) => (
          <option key={option} value={option} className="bg-[#35373E]">
            {option}
          </option>
        ))}
      </select> */}
      <Dropdown
        options={nationalityOptions}
        label="Country"
        onChange={() => {}}
      />
    </div>
  );
};

export default InputCountry;
