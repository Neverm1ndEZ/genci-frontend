import React from 'react';
import Image from 'next/image';
import img1 from '@/assets/img/coursecompletion.png';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

import ProgressBar from './ProgressBar';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
const CourseCompletion = () => {
  return (
    <div className='overflow-x-scroll'>
      <div className="flex flex-col gap-2 md:gap-4 px-4 md:px-6 py-4 bg-darkBackgroundSecondary  mb-4 rounded-lg text-white min-w-[672px]">
      <p className="text-xl md:text-2xl font-bold">Course Completion Progress</p>
      <div className="flex flex-col gap-2">
        <div className="flex py-5 justify-between items-center border-b border-gray-700">
          <div className="flex gap-3 md:gap-5">
            <Image src={img1} alt="img" />
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-semibold">UI Designer Beginner</p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <LibraryBooksOutlinedIcon className="md:text-xl  text-gray-400" />
                  <span>6 lesson</span>
                </div>
                <div className="flex items-center gap-2">
                  <AccessTimeOutlinedIcon className="md:text-xl  text-gray-400" />
                  <span>2h 56m</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-1/5 items-center">
            <p className="font-semibold ">45%</p>
            <ProgressBar />
          </div>
          <div>
            <button className="text-xs md:text-sm font-semibold border border-pink-600 hover:bg-gradient-to-bl from-pink-500 to-indigo-800 w-24 h-8 md:w-36 md:h-12 rounded-[10px] hover:border-none hover:scale-105 transition-all duration-300">
              View Course
            </button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default CourseCompletion;
