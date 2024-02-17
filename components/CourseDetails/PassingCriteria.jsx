import Image from 'next/image';
import React from 'react';
import PassIcon from '../../public/passing-criteria.svg';
import GenciLogo from '../../public/genci-logo.svg';
import CodeCard from '../../public/code-card.svg';
import Project from '../../public/project.svg';
import Study from '../../public/study.svg';

const PassingCriteria = () => {
  const cardData = [
    {
      id: 0,
      icon: Project,
      heading: 'Real life project',
      desc: 'Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam lectus rutrum lorem',
    },
    {
      id: 1,
      icon: Study,
      heading: 'Internship',
      desc: 'Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam lectus rutrum lorem',
    },
    {
      id: 2,
      icon: CodeCard,
      heading: 'Open source contributions',
      desc: 'Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam lectus rutrum lorem',
    },
  ];

  return (
    <div className="mb-5">
      <div className="bg-darkBackgroundPrimary rounded-2xl min-h-[15rem] ml-1 mr-2 my-6 p-4 text-[#fff] flex flex-col justify-center items-center">
        <Image src={PassIcon} alt="icon" className="mb-4 lg:mb-0" />
        <div className="text-center">
          <h2 className="lg:text-xl font-bold lg:ml-4 lg:mt-4">
            Course Completion Certificate : Complete all lessons and assignments{' '}
          </h2>
          <p className="lg:text-base lg:mx-20 lg:mt-3 lg:mb-6">
            Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam
            lectus rutrum lorem, a faucibus justo turpis id sem. Aenean sapien
            nunc, accumsan eget.
          </p>
        </div>
      </div>
      <div className="bg-darkBackgroundPrimary rounded-2xl min-h-[15rem] lg:ml-1 lg:mr-2 lg:my-6 p-4 text-[#fff] flex flex-col justify-center items-center">
        <Image src={GenciLogo} alt="icon" className="mb-4 lg:mb-0" />
        <div className="space-y-5">
          <h2 className="text-xl text-center font-bold lg:ml-4 lg:mt-4">
            Certificate of Practical Learning by Genci :
          </h2>
          <p className="text-base text-center font-semibold lg:mx-20 lg:mt-3 lg:mb-6">
            Complete all lessons and assignments and then prove practical
            learning by three ways:
          </p>
          <div className="lg:flex lg:gap-12 mb-8 ml-1 lg:ml-0">
            {cardData.map((data) => (
              <div
                key={data.id}
                className="bg-[#131619] border-solid border-2 border-[#797A7E] rounded-2xl w-[18.25rem] mb-3"
              >
                <Image src={data.icon} alt="icon" className="mx-4 my-4" />
                <h2 className="text-xl font-bold mx-4 my-2">{data.heading}</h2>
                <p className="text-base ml-4 mb-2">{data.desc}</p>
                <p className="text-base ml-4 mb-4 text-[#FF894F]">
                  Read more &gt;{' '}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassingCriteria;
