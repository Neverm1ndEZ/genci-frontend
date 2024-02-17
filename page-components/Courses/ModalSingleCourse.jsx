import CustomButton from '@/components/Button/CustomButton';
import BriefCourseAccordion from '@/components/CourseDetails/BriefAccordionDetails';
import CourseModalVideoPlayer from '@/components/CourseDetails/CourseModalVideoPlayer';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Rating } from '@mui/material';
import Link from 'next/link';
import { useGetCourseBySlug } from 'utils/query/GetCourseBySlugQuery';
import {
  Book,
  Clock,
  Cup,
  DocumentText,
  TickSquare,
  Translate,
  CloseCircle,
} from 'iconsax-react';

const ModalSingleCourse = ({ slug, prevUrl = '/home' }) => {
  const { data: courseData, isLoading } = useGetCourseBySlug(slug);

  console.log(courseData);

  if (courseData?.Error) {
    return <div>Error loading Course Data</div>;
  }

  const data = courseData?.course;
  const badge = courseData?.perks;

  return (
    <div className="min-w-screen py-10  overflow-y-auto p-1 md::p-0 animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none  bg-no-repeat bg-center bg-cover">
      <div className="fixed bg-darkBackgroundPrimary  h-full opacity-80 inset-0 z-0"></div>

      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <div className="w-full py-4 max-w-4xl py-15 px-8 relative mx-auto my-auto rounded-xl shadow-lg bg-darkBackgroundSecondary">
          {/* content */}
          <div className=" flex justify-end cursor-pointer">
            <Link href={prevUrl}>
              <CloseCircle />
            </Link>
          </div>
          <div className=" relative z-10 top-11 left-3">
            <span className="bg-gradient-to-tr to-[#D41275] from-[#2F0E80] uppercase bg-red-500  px-3 py-1 text-xs text-white mr-2 mb-2 rounded-[60px] relative">
              Best Seller
            </span>
          </div>
          <div className="w-full">
            <CourseModalVideoPlayer />
          </div>
          <div className="flex justify-between text-white">
            <div className="text-[#fafafb] text-3xl font-semibold leading-[48px]">
              {data?.name}
            </div>
            <div className="text-[#fafafb] text-right text-3xl font-semibold leading-[48px]">
              ${data?.price}
            </div>
          </div>
          <div className="grid grid-cols-12 pb-4">
            <div className="col-span-10 flex flex-col gap-y-6">
              <div className="text-base font-bold flex items-center">
                <Rating
                  value={data?.rating}
                  defaultValue={0}
                  precision={0.1}
                  readOnly
                  className="text-[#FFD51A] flex"
                  size="large"
                />
                <span className="ml-1 text-sm font-light">
                  ({data?.rating})
                </span>
              </div>
              <div className="flex gap-x-8">
                <div className="flex gap-1 text-[15px] font-medium">
                  <PermIdentityIcon className="text-xl  text-gray-400" />{' '}
                  <p>&nbsp;{data?.Modules?.length} lesson</p>
                </div>
                <div className="flex  gap-1 text-[15px] font-medium">
                  <PermIdentityIcon className="text-xl  text-gray-400" />{' '}
                  <p>{data?.educatorName}</p>
                </div>
                <div className="flex justify-start font-medium">
                  <AccessTimeOutlinedIcon className="text-2xl" />
                  &nbsp;{data?.duration}
                </div>
              </div>
            </div>
            <div className=" col-span-2">
              <CustomButton name="Enroll Now" />
            </div>
          </div>
          <div className="text-[#f7f7f7] text-sm">
            <p>{data?.sDesc}</p>
          </div>
          <br />
          <div className="  text-sm">
            <p>{data?.lDesc}</p>
          </div>
          <br />
          <div className="grid grid-cols-2 gap-x-8 border-b  border-opacity-80 border-[#797a7e]">
            {/* Brief Details */}
            <div className="items-center flex justify-between py-4 border-t border-opacity-80 border-[#797a7e] ">
              <div className="">
                <Book size={20} className="inline" />
                &nbsp; Lesson
              </div>
              <div className="text-lg font-medium">20</div>
            </div>
            <div className="items-center flex justify-between py-4 border-t border-opacity-80 border-[#797a7e] ">
              <div className="">
                <DocumentText size={20} className="inline" />
                &nbsp; Assignments
              </div>
              <div className="text-lg font-medium">YES</div>
            </div>
            <div className="items-center flex justify-between py-4 border-t border-opacity-80 border-[#797a7e] ">
              <div className="">
                <Translate size="20" className="inline" />
                &nbsp; Skill level language
              </div>
              <div className="text-lg font-medium">{data?.language}</div>
            </div>
            <div className="items-center flex justify-between py-4 border-t border-opacity-80 border-[#797a7e] ">
              <div className="">
                <Clock size="20" className="inline" />
                &nbsp; Duration
              </div>
              <div className="text-lg font-medium">{data?.duration}</div>
            </div>
            <div className="items-center flex justify-between py-4 border-t border-opacity-80 border-[#797a7e] ">
              <div className="">
                <TickSquare size="20" className="inline" />
                &nbsp; Certificate
              </div>
              <div className="text-lg font-medium">{data?.certificate}</div>
            </div>
            <div className="items-center flex justify-between py-4 border-t border-opacity-80 border-[#797a7e] ">
              <div className="">
                <Cup size="20" className="inline" />
                &nbsp; Perks
              </div>
              <div className="text-lg font-medium">
                <div className="inline-flex items-center gap-8">
                  {badge?.map((item, index) => (
                    <div className=" w-6">
                      <img
                        key={index}
                        src={item?.badgeUrl}
                        className={`lightgray`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-xl font-semibold py-4">Course Content</div>
          <div className="border border-[#797a7e] bg-darkBackgroundSecondary">
            <BriefCourseAccordion module={data?.Modules} slug={data?._id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSingleCourse;
