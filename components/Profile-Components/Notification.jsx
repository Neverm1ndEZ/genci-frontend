import React from 'react';
import Image from 'next/image';
import ibtn from '../../public/i-btn.svg';

export default function Notification() {
  const checkBoxData = [
    {
      id: 0,
      point: 'Notify me when a new courses are update',
    },
    {
      id: 1,
      point:
        'Choose to receive announcements via email, in-app notifications, or both.',
    },
    {
      id: 2,
      point:
        'Stay informed about important announcements from course instructors',
    },
    {
      id: 3,
      point: 'Opt to receive weekly or monthly recommendations.',
    },
    {
      id: 4,
      point: 'Get notified of any unusual account activity or login attempts..',
    },
    {
      id: 5,
      point: 'Stay connected with the learning community.',
    },
  ];

  return (
    <div className="w-full bg-darkBackgroundSecondary rounded-xl text-white pb-6">
      {/* heading */}
      <div className="flex items-center py-7 border-b-2 border-[#A5A6A9] mx-5">
        <div className="w-2 h-6 bg-gradient-to-r from-[#FFC39B] to-[#FF894F] rounded-lg mx-3"></div>
        <h1 className="text-base lg:text-xl font-semibold">Notifications</h1>
      </div>
      {/* radio btns */}
      <div>
        <div className="pt-7 pb-2 border-b-2 border-[#A5A6A9] mx-5">
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-base lg:text-base font-semibold">
                Notify me about
              </p>
            </div>
            <div className="flex">
              <h2>Allow notifications</h2>
              <div className="ml-4">
                <Image src={ibtn} alt="i-btn" />
              </div>
            </div>
          </div>
          <div className="pt-3 mb-6">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="flexRadioDefault"
                id="radioDefault01"
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="radioDefault01"
              >
                All new messages
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="flexRadioDefault"
                id="radioDefault02"
                checked
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="radioDefault02"
              >
                Direct messages, mentions & keywords
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="flexRadioDefault"
                id="radioDefault03"
                checked
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="radioDefault03"
              >
                Nothing
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* checkboxes 4 points*/}
      <div className="py-5 border-b-2 border-[#A5A6A9] mx-5">
        {checkBoxData.slice(0, 4).map((data) => (
          <div className="mb-3 flex items-center" key={data.id}>
            <input
              id={`default-checkbox-${data.id}`}
              type="checkbox"
              value={data.id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={`default-checkbox-${data.id}`}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {data.point}
            </label>
          </div>
        ))}
      </div>

      {/* checkboxes 2 points */}
      <div className="py-5 mx-5 mb-10">
        {checkBoxData.slice(4, 7).map((data) => (
          <div className="mb-3 flex items-center" key={data.id}>
            <input
              id={`default-checkbox-${data.id}`}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={`default-checkbox-${data.id}`}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {data.point}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
