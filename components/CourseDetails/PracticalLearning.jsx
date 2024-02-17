import React from 'react';
import Image from 'next/image';
import OpenSource from '../../public/opensource.svg';
import Project from '../../public/practical-project.svg';
import Internship from '../../public/internship.svg';

export default function PracticalLearning() {
  const cardData = [
    {
      id: 0,
      icon: Project,
      heading: 'Real life project',
      desc: 'Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam lectus rutrum lorem',
    },
    {
      id: 1,
      icon: Internship,
      heading: 'Internship',
      desc: 'Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam lectus rutrum lorem',
    },
    {
      id: 2,
      icon: OpenSource,
      heading: 'Open source contributions',
      desc: 'Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam lectus rutrum lorem',
    },
  ];
  return (
    <>
      <div className="flex gap-8 mb-8 text-white justify-center items-center text-center">
        {/* project and internship */}
        {cardData.slice(0, 2).map((data) => (
          <div
            key={data.id}
            className="bg-darkBackgroundPrimary rounded-2xl w-1/3 h-1/2"
          >
            <Image src={data.icon} alt="icon" className="mx-auto mt-8 mb-5" />
            <h2 className="text-xl font-bold mx-4 my-2">{data.heading}</h2>
            <p className="text-base mx-4 mb-20">{data.desc}</p>
          </div>
        ))}
        {/* open source contribution */}
        {cardData.slice(2, 3).map((data) => (
          <div
            key={data.id}
            className="bg-darkBackgroundPrimary rounded-2xl w-1/3 h-1/2"
          >
            <Image src={data.icon} alt="icon" className="mx-auto mt-8 mb-5" />
            <h2 className="text-xl font-bold mx-4 my-2">{data.heading}</h2>
            <p className="text-base mx-4 mb-4">{data.desc}</p>
            {/* input box */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.1625 18.4876L13.4417 19.2085C11.053 21.5972 7.18019 21.5972 4.79151 19.2085C2.40283 16.8198 2.40283 12.947 4.79151 10.5583L5.51236 9.83746"
                    stroke="#F7F7F7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.83594 14.1625L14.161 9.8374"
                    stroke="#F7F7F7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.83594 5.51236L10.5568 4.79151C12.9455 2.40283 16.8183 2.40283 19.207 4.79151C21.5957 7.18019 21.5957 11.053 19.207 13.4417L18.4861 14.1625"
                    stroke="#F7F7F7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="px-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  // value={}
                  // onChange={}
                  placeholder="open source contribution link"
                  className="bg-[#35373E] border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-2"
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-3 ml-3 mb-7 text-white">
        <button className="w-full py-3 rounded-lg bg-gradientPrimary font-bold">
          Apply For Project Submission
        </button>
        <button className="w-full py-3 rounded-lg bg-gradientPrimary font-bold">
          Apply for Internships
        </button>
        <button className="w-full py-3 rounded-lg bg-gradientPrimary font-bold">
          Apply in Open-Source Organisations
        </button>
        <button className="w-full py-3 rounded-lg bg-gradientPrimary font-bold">
          Upload previous internship documents
        </button>
      </div>
    </>
  );
}
