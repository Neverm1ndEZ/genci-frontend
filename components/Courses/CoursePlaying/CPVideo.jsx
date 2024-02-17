import dynamic from 'next/dynamic';   
import React from 'react';
import ReactPlayer from 'react-player/lazy';

const CPVideo = () => {
  return (
    <div className={`flex items-center w-full md:w-1/2 py-3 aspect-video`}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
        controls={true}
        className="w-full aspect-video"
        width={"100%"}

        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          height: "fit-content"
        }}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(CPVideo), { ssr: false });
