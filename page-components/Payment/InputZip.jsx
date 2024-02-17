import React from 'react';

const InputZip = () => {

  return (
    <div className="w-1/2">
      <input
        id="nationality"
        name="nationality"
        placeholder="Zip Code"
        className="bg-darkAccent1 border border-grayBorderLight placeholder-[#F7F7F7] rounded-lg block w-full px-4  h-[40px] md:h-[56px]"
        required
      />
    </div>
  );
};

export default InputZip;
