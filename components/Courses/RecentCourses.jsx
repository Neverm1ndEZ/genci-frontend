import React, { useState } from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import CourseCard from '../Cards/CourseCard';
import tooltipicon from '../../assets/img/tooltip.svg';
import Image from 'next/image';
import { useRecentCourses } from 'utils/query/RecentCourseQuery';

const RecentCourses = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverOpen = () => {
    setIsPopoverVisible(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverVisible(false);
  };
  const { data: recentcourses } = useRecentCourses();

  return (
    <div className="rounded-xl bg-darkBackgroundSecondary px-3.5 py-4 MT-4">
      <div className="text-xl font-bold flex justify-between">
        <span className="pb-2 text-white">Your Recent Courses</span>
        <div
          className="relative"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Image src={tooltipicon} alt="tooltip" className="cursor-pointer" />
          {isPopoverVisible && (
            <div className="absolute bg-gray-700 p-2 z-50 w-32 right-1/2 rounded shadow-lg text-xs font-medium text-center">
              <p>Recent Courses</p>
            </div>
          )}
        </div>
      </div>
      <Glider draggable hasDots slidesToShow={3} slidesToScroll={1}>
        {recentcourses?.allCoursesDetails[0] ? (
          recentcourses?.allCoursesDetails?.map((item, index) => (
            <CourseCard key={index} {...item} />
          ))
        ) : (
          <>NotFound</>
        )}
      </Glider>
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

export default RecentCourses;
