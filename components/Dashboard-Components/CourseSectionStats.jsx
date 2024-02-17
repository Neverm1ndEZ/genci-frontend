import React from 'react';
import Image from 'next/image';
import Completed from '../../public/178completedlessons.png';

export default function CourseSectionStats() {
  return (
    <div className="sm:flex justify-between gap-2 md:gap-6">
      <div className="mb-2 sm:mb-0 bg-darkBackgroundSecondary items-center rounded-lg flex flex-row-reverse justify-around sm:justify-center gap-3 md:gap-4  sm:w-1/3 lg:flex-row  py-7 border-b-4 border-[#FF894F] lg:border-none px-3">
        
          <Image src={Completed} alt="Logo" className="h-16 aspect-square py-0.5"/>
        
        <div>
          <h2 className="font-bold text-2xl">
            178
          </h2>
          <p className="text-lg font-normal">
            Completed lessons
          </p>
        </div>
      </div>
      <div className="mb-2 sm:mb-0 bg-darkBackgroundSecondary items-center rounded-lg flex flex-row-reverse justify-around sm:justify-center gap-3 md:gap-4  sm:w-1/3 lg:flex-row  py-7 border-b-4 border-[#FF894F] lg:border-none px-3">
        
          <Image src={Completed} alt="Logo" className="h-16 aspect-square py-0.5"/>
        
        <div>
          <h2 className="font-bold text-2xl">
            178
          </h2>
          <p className="text-lg font-normal">
            Completed lessons
          </p>
        </div>
      </div>
      <div className="mb-2 sm:mb-0 bg-darkBackgroundSecondary items-center rounded-lg flex flex-row-reverse justify-around sm:justify-center gap-3 md:gap-4  sm:w-1/3 lg:flex-row  py-7 border-b-4 border-[#FF894F] lg:border-none px-3">
        
          <Image src={Completed} alt="Logo" className="h-16 aspect-square py-0.5"/>
        
        <div>
          <h2 className="font-bold text-2xl">
            178
          </h2>
          <p className="text-lg font-normal">
            Completed lessons
          </p>
        </div>
      </div>
    </div>
  );
}
