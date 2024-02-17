import React from 'react';
import dynamic from 'next/dynamic';
import GitHubCalendar from 'react-github-calendar';

const Streakboard = () => {
  const explicitTheme = {
    dark: ['#202429', '#FDC5B4', '#F7A499', '#F48576', '#F06451'],
    light: ['#DFDFDF', '#FDC5B4', '#F7A499', '#F48576', '#F06451'],
  };

  return (
    <div className="bg-darkBackgroundSecondary rounded-xl px-2 py-3 sm:p-4">
      <div className="flex flex-col">
        <p className="font-semibold mb-4">
          40 contributions in the last year
        </p>

        <div className="mb-4 mx-auto rounded-xl">
          <GitHubCalendar username="tanpreet" theme={explicitTheme}  />
        </div>

        <hr className="bg-[#35373E] h-[1px] mb-6" />

        <div className="flex flex-col">
          <p className="text-lg font-semibold mb-4">
            Contribution activity
          </p>
          <div className="flex flex-wrap  sm:flex-nowrap gap-2 justify-around">
            <div className="bg-darkBackgroundPrimary rounded-xl w-[45%] sm:w-1/3 flex justify-center">
              <div className="p-5 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold not-italic mb-1">135 Total</h2>
                <p className="text-xs sm:text-sm font-normal mb-1">
                  Sep 14 2023 - Sep 28 2023
                </p>
                <p className="text-xs sm:text-sm text-[#A5A6A9]">Years of contributions</p>
              </div>
            </div>
            <div className="bg-darkBackgroundPrimary rounded-xl w-[45%] sm:w-1/3 flex justify-center">
              <div className="p-5 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold not-italic mb-1">177 Days</h2>
                <p className="text-xs sm:text-sm font-normal mb-1">
                  February 21 2023 - March 16 2023
                </p>
                <p className="text-xs sm:text-sm text-[#A5A6A9]">Longest Streak</p>
              </div>
            </div>
            <div className="bg-darkBackgroundPrimary rounded-xl w-[95%] sm:w-1/3 flex justify-center">
              <div className="p-5 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold not-italic mb-1">0 Days</h2>
                <p className="text-xs sm:text-sm font-normal mb-1">Rock - Hard Place</p>
                <p className="text-xs sm:text-sm text-[#A5A6A9]">Current Streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Streakboard), { ssr: false });
