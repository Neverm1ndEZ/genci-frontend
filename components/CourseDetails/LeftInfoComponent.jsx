import React from 'react';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';
import { TabBar } from './TabBar';
import { Rating } from '@mui/material';
import TickIcon from '../../public/tickicon.svg';
import Course from '../../public/course.svg';
import person from '../../public/person.svg';
import Clocksvg from '../../public/clock.svg';
import { Book } from 'iconsax-react';
import { DocumentText } from 'iconsax-react';
import { Clock } from 'iconsax-react';
import { Translate } from 'iconsax-react';
import { TickSquare } from 'iconsax-react';
import { Cup } from 'iconsax-react';

const LeftInfoComponent = () => {
  const whatYoullLearnData = [
    {
      id: 0,
      icon: TickIcon,
      text: 'Learn Android App Development from Zero to Hero',
    },
    {
      id: 1,
      icon: TickIcon,
      text: 'Building real apps and publish them to playstore',
    },
    {
      id: 2,
      icon: TickIcon,
      text: 'Become a professional Native app developer',
    },
    {
      id: 3,
      icon: TickIcon,
      text: 'Master from Basic to Advanced topic and programming skills',
    },
    {
      id: 4,
      icon: TickIcon,
      text: 'Learn how to implement code in real examples',
    },
  ];

  const inThisCourseData = [
    {
      id: 0,
      icon: TickIcon,
      text: 'Lessons (Including Docs)',
    },
    {
      id: 1,
      icon: TickIcon,
      text: 'Videos',
    },
    {
      id: 2,
      icon: TickIcon,
      text: 'Watch Hrs',
    },
  ];

  const courseDetailData = [
    {
      id: 0,
      icon: <Book size="20" color="#d9e3f0" />,
      name: 'Lessons',
      count: 20,
    },
    {
      id: 1,
      icon: <DocumentText size="20" color="#d9e3f0" />,
      name: 'Assignments',
      count: 15,
    },
    {
      id: 2,
      icon: <Clock size="20" color="#d9e3f0" />,
      name: 'Duration',
      count: '25 Hours 30 mins',
    },
    {
      id: 3,
      icon: <Translate size="20" color="#d9e3f0" />,
      name: 'Skill level language',
      count: 'English',
    },
    {
      id: 4,
      icon: <TickSquare size="20" color="#d9e3f0" />,
      name: 'Certificate',
      count: '',
    },
    {
      id: 5,
      icon: <Cup size="20" color="#d9e3f0" />,
      name: 'Perks',
      count: '',
    },
  ];

  return (
    <div className="md:flex flex-col">
      {/* top route */}
      <div className="flex mb-5">
        <p className="text-base font-normal text-[#A5A6A9]">
          Programming &gt; {'  '}{' '}
          <span className="text-base font-medium text-[#FFF]">
            Android Development
          </span>
        </p>
      </div>
      {/* the complete card component */}
      <div className="flex flex-col rounded-2xl bg-darkBackgroundSecondary w-full lg:w-fit">
        {/* videoplayer */}
        <div className="lg:flex">
          <VideoPlayer />
          {/* right text */}
          <div className="ml-4 lg:ml-0">
            <h2 className="text-xl lg:text-4xl font-semibold my-2 lg:my-5">
              Android Development
            </h2>
            <span className="flex items-center mb-1 lg:mb-2">
              <Rating value={4} /> <span>(152)</span>
            </span>
            <div className="lg:mt-5 my-3 lg:mb-3 flex gap-3">
              <div className="flex">
                <Image src={Course} alt="Star" />
                <p className="lg:ml-2 text-sm lg:text-base font-medium lg:mr-3 mx-1">
                  6 lesson
                </p>
              </div>
              <div className="flex">
                <Image src={Clocksvg} alt="Star" />
                <p className="lg:ml-2 text-sm lg:text-base font-medium lg:mr-3 mx-1">
                  2h 56m
                </p>
              </div>
              <div className="flex">
                <Image src={person} alt="Star" />
                <p className="lg:ml-2 text-sm lg:text-base font-medium lg:mr-3 mx-1">
                  Emily Cooper
                </p>
              </div>
            </div>
            <p className="mt-5 mr-3 lg:mr-16 mb-8">
              Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam
              lectus rutrum lorem, a faucibus justo turpis id sem. Aenean sapien
              nunc, accumsan eget, tristique quis, porta id, libero. In
              malesuada placerat libero. Aenean sapien nunc, accumsan eget,
              tristique quis, porta id, libero. In malesuada placerat libero.
            </p>
            <h2 className="text-4xl font-bold my-5">300 Tokens</h2>
            <button className="w-[95%] lg:w-[85%] py-3 rounded-lg bg-gradientPrimary font-bold">
              Enroll Course
            </button>
          </div>
        </div>

        {/* what you'll learn card */}
        <div className="lg:flex">
          <div className="bg-darkBackgroundPrimary flex flex-col m-4 lg:w-[54%] rounded-2xl">
            <h2 className="text-xl font-bold pl-5 pt-4">What You’ll Learn</h2>
            <div className="px-4 py-2">
              {whatYoullLearnData.map((data) => (
                <div
                  key={data.id}
                  className="text-[#F7F7F7] text-base font-normal"
                >
                  <div className="flex flex-row">
                    <Image src={data.icon} alt="icon" className="mr-4" />
                    <p className="text-[#F7F7F7] text-base pl-1 py-2">
                      {data.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold pl-5 pt-4">In this Course</h2>
            <div className="px-4 py-2">
              {inThisCourseData.map((data) => (
                <div
                  key={data.id}
                  className="text-[#F7F7F7] text-base font-normal"
                >
                  <div className="flex flex-row">
                    <Image src={data.icon} alt="icon" className="mr-4" />
                    <p className="text-[#F7F7F7] text-base pl-1 py-2">
                      {data.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-darkBackgroundPrimary flex flex-col m-4 lg:m-0 lg:my-4 lg:mr-4 rounded-2xl lg:w-[42%]">
            <div className="px-4 pt-5 pb-2">
              <div className="flex justify-between border-b-2 border-[#797A7E]">
                <div className="flex gap-2 mb-5">
                  <Book size="20" color="#d9e3f0" />
                  <p>Lessons</p>
                </div>
                <p className="mr-3">20</p>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex justify-between border-b-2 border-[#797A7E]">
                <div className="flex gap-2 mb-5">
                  <DocumentText size="20" color="#d9e3f0" />
                  <p>Assignments</p>
                </div>
                <p className="mr-3">15</p>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex justify-between border-b-2 border-[#797A7E]">
                <div className="flex gap-2 mb-5">
                  <Clock size="20" color="#d9e3f0" />
                  <p>Duration</p>
                </div>
                <p className="mr-3">25 Hours 30 mins</p>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex justify-between border-b-2 border-[#797A7E]">
                <div className="flex gap-2 mb-5">
                  <Translate size="20" color="#d9e3f0" />
                  <p>Skill level language</p>
                </div>
                <p className="mr-3">English</p>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex justify-between border-b-2 border-[#797A7E]">
                <div className="flex gap-2 mb-5">
                  <TickSquare size="20" color="#d9e3f0" />
                  <p>Certificate</p>
                </div>
                <p className="mr-3"></p>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex justify-between">
                <div className="flex gap-2 mb-5">
                  <Cup size="20" color="#d9e3f0" />
                  <p>Perks</p>
                </div>
                <p className="mr-3"></p>
              </div>
            </div>
          </div>
        </div>

        {/* tab layout */}
        <TabBar />
      </div>
    </div>
  );
};

export default LeftInfoComponent;
