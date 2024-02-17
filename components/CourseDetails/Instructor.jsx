import React from 'react';
import { useInstructor } from 'utils/query/AboutInstructorQuery';
import { Rating } from '@mui/material';
const Instructor = () => {
  const courseId = '64d0ef3e912e564e8671c11e';
  const { data: instructorData, isLoading, isError } = useInstructor(courseId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !instructorData?.educator?.length) {
    return <div>Error loading instructor information</div>;
  }

  const educator = instructorData.educator[0];

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-2">About the Instructor</h2>
      <div className="testimonial-card h-[300px] bg-gray-900 border border-gray-100 rounded-lg dark:border-gray-700 p-3 lg:p-5">
        <div className="flex items-center lg:items-start gap-5 flex-col lg:flex-row">
          <figure className="rounded-full overflow-hidden w-20 aspect-square">
            <img
              src={educator.imageUrl} // Use the instructor's image URL
              className="w-full aspect-square object-cover"
              alt={educator.name} // Use the instructor's name as alt text
            />
          </figure>
          <div className="flex flex-col justify-center items-center lg:items-start w-4/5">
            <p className="m-0 text-2xl font-semibold">{educator.name}</p>
            <p className="my-1 font-semibold text-gray-300">
              {educator.designation}
            </p>
          <Rating
            name="half-rating-read"
            value={4}
            readOnly
            className="mt-1 mb-2"
          />
            {/* Add other instructor information here */}
            <div className="flex my-1 items-center">
              {/* Add star ratings or other relevant data */}
            </div>
            <p className=" my-2 text-[14px] text-gray-200">
              {educator.aboutEducator}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
