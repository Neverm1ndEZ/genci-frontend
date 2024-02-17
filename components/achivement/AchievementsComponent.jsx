import React from 'react';

const AchievementsComponent = ({ item }) => {
  return (
    <div className="grid grid-cols-11 items-center  py-3 my-5">
      <div className="col-span-3 bg-gradientPrimary rounded-full h-20 w-20">
        <img
          className="h-20 w-20 bg-black max-h-full rounded-full"
          src={item.badgeUrl}
          alt="badge"
        />
      </div>
      <div className="flex col-span-8 font-bold text-lg">
        {item.text}
      </div>
    </div>
  );
};

export default AchievementsComponent;
