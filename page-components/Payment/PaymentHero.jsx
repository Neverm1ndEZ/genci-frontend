import Image from "next/image"
import paymentImg from "@/assets/img/payment.jpeg"
import { Rating } from '@mui/material';
import { Book, Clock, Profile } from 'iconsax-react';
import InputCountry from './InputCountry';
const PaymentHero = () => {
  return (

    <div className="min-h-[175px] text-sm p-3 items-center bg-darkBackgroundPrimary rounded-2xl flex flex-wrap lg:flex-nowrap gap-4">
      <Image src={paymentImg} alt="img" className="  sm:w-full lg:h-[140px] lg:w-[190px] rounded-md"/>
      <div className="flex flex-col h-full gap-1.5 flex-wrap">
        <p className='text-lg font-semibold'>Android Development</p>
        <div className='flex gap-1'>
        <Rating name="half-rating" readOnly value={4.5} precision={0.5} size="small"/> <span>(105)</span>
        </div>
        <div className='flex gap-3 sm:items-start text-xs sm:text-sm'>
          <div className="flex gap-2 items-center ">
          <Book size="20" color="#ffffff"/>
          <p>6 lesson</p>
          </div>
          <div className="flex gap-2 items-center ">
          <Clock size="20" color="#ffffff"/>
          <p>2h 56m</p>
          </div>
          <div className="flex gap-2 items-center ">
          <Profile size="20" color="#ffffff"/>
          <p>Emily Cooper</p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur. Unde, quas excepturi. </p>

      </div>
    </div>


  )
}

export default PaymentHero
