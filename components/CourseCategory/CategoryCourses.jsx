import React from 'react';
import { ArrowLeft2 } from 'iconsax-react';
import { useRouter } from 'next/router';
import CourseCard from '../Cards/CourseCard';
import { useCoursesbyCategory } from 'utils/query/CoursebyCategoryQuery';

const CategoryCourses = () => {
  const router = useRouter();
  const { data: coursesbycat, loading } = useCoursesbyCategory(
    router.query.category
  );

  return (
    <div>
      <div className="flex gap-1 py-2 font-semibold capitalize">
        <button
        className='hover:scale-105 transition-all duration-300'
          type="button"
          onClick={() => router.push('/courses/allcategories')}
        >
          <ArrowLeft2 size="20" color="#FFFFFF" />
        </button>
        <p>{router.query.category}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {!loading &&
          coursesbycat?.courses?.map((item) => (
            <CourseCard key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryCourses;
