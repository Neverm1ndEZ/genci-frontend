import React from 'react';
export default function ProgressBar() {
  return (
    <>
      <div className="w-4/5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-gradient-to-r to-[#FFC39B] from-[#FF894F] h-2.5 rounded-full"
          style={{ width: '45%' }}
        ></div>
      </div>
    </>
  );
}
