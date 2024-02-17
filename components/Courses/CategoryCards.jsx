'use client';
import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryCards = ({ courses }) => {
  const cardContainerRef = useRef(null);
  const touchStartRef = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (touchStartRef.current && cardContainerRef.current) {
      const touchEnd = event.touches[0].clientX;
      const touchDelta = touchEnd - touchStartRef.current;
      cardContainerRef.current.scrollLeft -= touchDelta;
      touchStartRef.current = touchEnd;
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  const handleMouseEnter = () => {
    setShowScrollbar(true);
  };

  const handleMouseLeave = () => {
    setShowScrollbar(false);
  };

  useEffect(() => {
    AOS.init();

    const handleScroll = (event) => {
      event.preventDefault();
      if (cardContainerRef.current) {
        cardContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    if (cardContainerRef.current) {
      cardContainerRef.current.addEventListener('wheel', handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (cardContainerRef.current) {
        cardContainerRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div className="p-5">
      <div
        ref={cardContainerRef}
        className={`flex overflow-y-auto space-x-4 p-6 scroll-smooth justify-items-center gap-10 ${
          showScrollbar ? 'hide-scrollbar' : ''
        }`}
        style={{
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          overflowX: 'hidden',
          scrollbarWidth: 'none', // Hide scrollbar in Firefox
          WebkitOverflowScrolling: 'touch', // Enable momentum scrolling in Webkit
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {courses?.map((item, index) => (
          <Tilt key={index} scale={1.05}>
            <div
              data-aos="flip-left"
              className="w-96 border  overflow-hidden rounded-lg shadow"
            >
              <figure className="w-full h-40 object-cover overflow-hidden">
                <img
                  className="w-full"
                  src={item.imagesrc}
                  alt={item.imagealt}
                />
              </figure>
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-bold text-2xl">{item.name}</h2>
                  <p className="text-sm bg-violet-500 rounded-md px-1">
                    {item.category}
                  </p>
                </div>
                <p className="opacity-75 text-sm">{item.caption}</p>
                <div className="flex w-full justify-between py-1 pr-1">
                  <p className="text-2xl  font-semibold">$10</p>
                  <button className="bg-red-500 text-gray-100 rounded-md px-1">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
