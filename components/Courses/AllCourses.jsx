'use client';
import React, { useState } from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import CourseCard from '../Cards/CourseCard';
import tooltipicon from '../../assets/img/tooltip.svg';
import Image from 'next/image';
import FilterButton from './FilterButton';
import { GetAllCourses } from 'utils/query/GetAllCoursesQuerry';
import Link from 'next/link';

const AllCourses = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const handlePopoverOpen = () => {
    setIsPopoverVisible(true);
  };
  const handlePopoverClose = () => {
    setIsPopoverVisible(false);
  };
  const { data: courses } = GetAllCourses();

  return (
    <div className="rounded-xl bg-darkBackgroundSecondary px-3.5 py-4">
      <div className="text-xl font-bold flex justify-between pb-2 items-center">
        <span className=" text-white">All Courses</span>
        <div className="flex gap-x-4 items-center">
          <div className=" text-sm leading-5 font-semibold">FilterBy</div>
          {['Category', 'Rating', 'Price'].map((item) => (
            <FilterButton key={item} name={item} />
          ))}
          <div
            className="relative"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="/courses/all">
              <Image
                src={tooltipicon}
                alt="tooltip"
                className="cursor-pointer"
              />
              {isPopoverVisible && (
                <div className="absolute bg-gray-700 p-2 z-50 w-32 right-1/2 rounded shadow-lg text-xs font-medium text-center">
                  View All
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {courses?.courses?.map((item, index) => (
          <CourseCard key={index} {...item} />
        ))}
      </div>
      <style>
        {`
          .glider-dot.active{
            background-image: linear-gradient(to top right, #D41275, #2F0E80);
          }
          .glider-dot {
            size: 10px;
            background-color: white;
            height: 7px;
            width: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default AllCourses;
