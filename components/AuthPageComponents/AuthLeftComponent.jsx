import React from 'react';
import LeftImage from '../../public/auth-left.png';
import Image from 'next/image';

export default function AuthLeftComponent() {
  return (
    <div className=" max-h-screen bg-[#131619] overflow-hidden">
      <div className="relative h-full flex justify-center">
        <div className="absolute inset-0 rounded-[354.32px/383.06px] rotate-[90.06deg] blur-[300px] [background:linear-gradient(180deg,rgb(212,18,117)_0%,rgb(47,14,128)_100%)] opacity-30" />
        <div className="top-[734px] left-[319px] absolute  h-[766px] rounded-[354.32px/383.06px] rotate-[90.06deg] blur-[300px] [background:linear-gradient(180deg,rgb(212,18,117)_0%,rgb(47,14,128)_100%)] opacity-30" />
        <Image
          src={LeftImage}
          alt="Funky Images"
          className="w-[350px] mx-[9rem] py-[9rem]"
        />
      </div>
    </div>
  );
}
