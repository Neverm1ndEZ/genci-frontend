import dynamic from 'next/dynamic';
import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { useGetCourseBySlug } from 'utils/query/GetCourseBySlugQuery';

const CourseModalVideoPlayer = () => {
  const courseId = 'complete-python-bootcamp';
  // const { data: courseData, isLoading, isError } = useGetCourseBySlug(courseId);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError || !courseData?.course?.length) {
  //   return <div>Error loading Course Data</div>;
  // }

  // const Data = courseData.course[0].lessonModules[0];

  return (
    <div className={`flex items-center justify-center py-3`}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=KvorFo2pivI&ab_channel=DisneyPlusHotstar`}
        controls={true}
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          outline: '3px solid white',
        }}
        width={919}
        height={488}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(CourseModalVideoPlayer), {
  ssr: false,
});
