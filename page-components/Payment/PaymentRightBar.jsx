import React from 'react';
import InputApplyCode from './InputApplyCode';

const PaymentRightBar = () => {
  return (
    <>
      <div className="sm:w-2/5 lg:w-1/3 bg-darkBackgroundSecondary rounded-2xl p-4 flex flex-col gap-3">
        <p className='text-lg md:text-xl font-semibold'>Summary</p>
        <div className="border-b  border-grayBorder space-y-2 py-3">
          <div className="flex justify-between  ">
            <p  className="text-sm md:text-base">Original Price</p>
            <span className='font-medium md:text-lg'>$94.99</span>
          </div>
          <div className="flex justify-between">
            <p className="text-sm md:text-base" >Tax</p>
            <span className='font-medium md:text-lg'>0.600</span>
          </div>
        </div>

          <InputApplyCode/>

          <div className="border-b  border-grayBorder space-y-2 py-3">
          <div className="flex justify-between ">
            <p className="text-sm md:text-base">Discounts</p>
            <span className="text-sm md:text-base font-medium">-80.00</span>
          </div>
          <div className="flex justify-between">
            <p className="text-sm md:text-base">Total</p>
            <span className="text-lg md:text-2xl font-semibold">$14.99</span>
          </div>
        </div>
        <p className='text-sm  md:text-base font-normal py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore provident, ipsa est hic blanditiis similique! </p>
        <button className='text-sm md:text-base text-white font-medium py-3 sm:py-4 bg-gradientPrimary'>
          Complete Checkout
        </button>
      </div>
    </>
  );
};

export default PaymentRightBar;
