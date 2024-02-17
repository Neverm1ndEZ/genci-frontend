import React from 'react'
import SmallNav from '../../components/SmallNav/SmallNav';
import BackButton from '@/components/Button/BackButton';

import PaymentRightBar from './PaymentRightBar';
import PaymentHero from './PaymentHero';
import InputCountry from './InputCountry';
import InputZip from './InputZip';
import PaymentOptions from './PaymentOptions';
const Payment = () => {
  return (
    <div>

          <BackButton title="Checkout"/>
          <div className="flex gap-6 mx-3 flex-wrap sm:flex-nowrap">
          <div className='bg-darkBackgroundSecondary py-3 px-5 sm:w-3/5 rounded-2xl flex flex-col gap-5'>
             <PaymentHero/>
      <h2 className="text-lg md:text-xl font-semibold">Billing Address</h2>
             <div className='gap-5 flex flex-col'>
      <div className="flex justify-between gap-5 text-sm w-full">
        <InputCountry/>
        <InputZip/>
      </div>
      <p className="text-xs md:text-sm">Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam lectus rutrum lorem, a faucibus justo turpis id sem. Aenean sapien nunc, accumsan eget.</p>

      <h2 className="text-lg md:text-xl mt-4 font-semibold">Payment Method</h2>
      <PaymentOptions/>
    </div>
    </div>
<PaymentRightBar/>
          </div>
    </div>
  )
}

export default Payment
