import React from 'react';
import { useRouter } from 'next/router';

export const LandingButtonContainer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-3 ">
      <button
        onClick={() => router.push('/enrollment')}
        className="w-44 py-3 text-sm tracking-[0.11794rem] uppercase bg-gradientPrimary hover:bg-gradient rounded-full transition-all duration-300 font-semibold hover:scale-105"
      >
        Enroll Now
      </button>
      <button
        onClick={() => router.push('/login')}
        className="w-44 py-3 text-sm tracking-[0.11794rem] uppercase border-2 border-grayBorder rounded-full transition-all duration-300 font-semibold hover:scale-105"
      >
        Login
      </button>
    </div>
  );
};
