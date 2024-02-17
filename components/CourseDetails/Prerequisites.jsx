import React from 'react';
import Image from 'next/image';
import Code from '../../public/code.svg';
import Database from '../../public/database.svg';

export default function Prerequisites() {
  const prerequisitesData = [
    {
      id: 0,
      iconL: Code,
      heading: 'HTML, CSS, and Web Development',
      desc_1: 'Asynchronous functions, Promises and Callbacks',
      desc_2: 'Understanding about .map(), reduce(), & .filter()',
    },
    {
      id: 1,
      iconL: Database,
      heading: 'No SQL Databases',
      desc_1: 'Mongoose and MongoDB',
      desc_2:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde corporis, natus commodi quis mollitia similique?',
    },
    {
      id: 2,
      iconL: Database,
      heading: 'Database Knowledge (for database-driven apps):',
      desc_1: 'Database Knowledge (for database-driven apps):',
      desc_2:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde corporis, natus commodi quis mollitia similique?',
    },
  ];
  return (
    <div className="mb-5">
      <div className="bg-darkBackgroundPrimary rounded-2xl p-8">
        <div className="min-h-[300px] flex">
          <div className="flex flex-col">
            {prerequisitesData.map((data) => (
              <div className="flex mb-8" key={data.id}>
                <Image src={data.iconL} alt="icon" />
                <div className="ml-4 flex flex-col justify-start">
                  <h2 className="text-[#fff] text-sm lg:text-xl font-bold p-1">
                    {data.heading}
                  </h2>
                  <p className="text-[#797A7E] lg:text-[#F7F7F7] text-sm lg:text-base font-normal p-1">
                    {data.desc_1}
                  </p>
                  <p className="text-[#797A7E] lg:text-[#F7F7F7] text-sm lg:text-base font-normal p-1">
                    {data.desc_2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
