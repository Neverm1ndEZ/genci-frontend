import { CardMedia, Rating } from '@mui/material';
import { Card } from '@nextui-org/react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Link from 'next/link';

const CourseCard = ({
  name,
  slug,
  duration,
  price,
  thumbnail,
  sDesc,
  rating,
  totalRating,
  educatorName,
  Modules = [],
}) => {
  return (
    <Link href={`?slug=${slug}`}>
      <div className="max-w-[360px] mx-2">
        <Card sx={{ maxWidth: 300 }} className="bg-black rounded-2xl p-3">
          <CardMedia
            component="img"
            height="194"
            image={thumbnail}
            alt={name}
            className=" rounded-3xl h-[194px]"
          />
          <div className="">
            <span className="bg-gradientPrimary uppercase   px-3 py-1 text-xs text-white mr-2 mb-2 rounded-[60px] relative left-[10px] bottom-[180px]">
              Best Seller
            </span>
          </div>
          <div className="flex justify-between text-white pb-3">
            <div className="text-[18px] font-bold">
              {name?.length > 24 ? name.slice(0, 20) + '...' : name}
            </div>
            <div className="text-[18px] font-bold">${price}</div>
          </div>
          <div className="flex flex-col  gap-2 text-white ">
            <div className=" text-base font-bold flex items-center">
              <Rating
                value={rating}
                defaultValue={0}
                precision={0.1}
                readOnly
                className="text-[#FFD51A] flex"
                size="small"
              />
              <span className="ml-1 text-sm font-light">({totalRating})</span>
            </div>
            <div className="mt-1">
              <div className=" flex items-center gap-1 text-[15px] font-medium">
                <PermIdentityIcon className="text-xl  text-gray-400" />{' '}
                <p>{educatorName}</p>
              </div>
            </div>
          </div>
          <div className="pb-3 mt-1 text-[#A5A6A9]">
            <p className=" leading-5 text-sm font-normal">{sDesc}</p>
          </div>
          <div className="grid grid-cols-10 items-center text-white gap-1">
            <div className="col-span-4">
              <div className="flex items-center justify-start font-medium">
                <img src="/Book.png" alt="lesson Icon" className=" h-6" />
                &nbsp;{Modules?.length} lesson
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex items-center justify-start font-medium">
                <AccessTimeOutlinedIcon className="text-2xl" />
                &nbsp;{duration}
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-canter font-medium">
                <ArrowDropDownCircleOutlinedIcon className="text-3xl" />
              </div>
            </div>
          </div>
        </Card>
      </div>
      <style>
        {`
          .MuiRating-iconEmpty{
            color:gray !important;
          }
          `}
      </style>
    </Link>
  );
};

export default CourseCard;
