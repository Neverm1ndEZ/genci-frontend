import dynamic from 'next/dynamic';
import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPlayer = () => {
  return (
    <div className={`flex items-center justify-center py-3`}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
        controls={true}
        width={728}
        height={451.23}
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          transform: 'scale(0.95)',
        }}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(VideoPlayer), { ssr: false });
