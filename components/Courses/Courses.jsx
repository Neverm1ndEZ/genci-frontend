import React from 'react';
import RecentCourses from './RecentCourses';
import CoursesPageHero from './CoursesPageHero';
import AllCourses from './AllCourses';
import Link from 'next/link';

export default function Courses() {
  return (
    <div className="flex flex-col gap-4 pr-4 pb-4">
      <div className="flex justify-between">
        <h1 className="bg-[##F7F7F7] text-xl font-semibold">
          Courses By Category
        </h1>
        <Link
          href="/courses/allcategories"
          className="font-semibold text-sm pr-6"
        >
          View All
        </Link>
      </div>
      <CoursesPageHero />
      <RecentCourses />
      <AllCourses />
      {/* <h2 className="text-3xl">Course By Category</h2> */}
      {/* <CourseByCategory /> */}
    </div>
  );
}
