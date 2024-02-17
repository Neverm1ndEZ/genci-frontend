'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { useUpdates } from 'utils/query/TechUpdatesQuery';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export default function Updates() {
  const { data: updates, isLoading } = useUpdates();
  //   console.log("updates", Updates)

  if (isLoading) {
    return null;
  }
  return (
    <>
       <div className="rounded-[20px]">
                <Swiper
                    pagination={true}  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {updates && updates.Updates.map((item ,index) => (
                        <SwiperSlide key={index}>
                            <div className="relative">
                                <img src={item.imageUrl} alt={item.imageUrl} className="h-full object-cover max-h-[240px] bg-blue-400 rounded-[20px] mb-5" />
                                <div className="flex items-center absolute top-0 ml-10 mt-7 ">
                                    <div className="top-0 text-white w-72 ">
                                        <h1 className='text-[26px] mb-[9px] font-bold leading-8'>Welcome to the Future of Education</h1>
                                        <p className='mb-3 text-sm font-normal text-[#A5A6A9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo vitae orci.</p>
                                        <Link href={`/${item.slug}`} target='_blank'>
                                            <button
                                                className='px-6 text-sm py-[13px] my-1 font-semibold rounded-[10px] bg-gradientPrimary'
                                            >Learn More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <style>{
              `
              .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
                bottom: -5px;}
                .swiper-pagination-bullet{
                background:white;
                opacity : 1;

              }
              .swiper-pagination-bullet-active{
                outline:2px solid #D41275 !important;
              }
              `}</style>
    </>
  );
}
