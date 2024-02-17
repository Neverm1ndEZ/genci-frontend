import React from 'react';

const CustomButton = ({ name, handleOnclick }) => {
  return (
    <button
      onClick={handleOnclick}
      className="px-6 text-sm py-[13px] my-1 font-semibold rounded-[10px] bg-gradientPrimary"
    >
      {name}
    </button>
  );
};

export default CustomButton;
