import { Rating } from '@mui/material';
import Image from 'next/image';
import InstructorPhoto from '../../public/instructor-photo.svg';
import Star from '../../public/star.svg';
import YellowStar from '../../public/yellowstar.svg';
import Person from '../../public/person.svg';
import Play from '../../public/play.svg';

const Testimonials = () => {
  const RatingData = [
    {
      id: 5,
      progress: '#14958F',
      rating: 5123,
      percentage: 45,
    },
    {
      id: 4,
      progress: '#14958F',
      rating: 1524,
      percentage: 32,
    },
    {
      id: 3,
      progress: '#14958F',
      rating: 772,
      percentage: 22,
    },
    {
      id: 2,
      progress: '#b39907',
      rating: 306,
      percentage: 16,
    },
    {
      id: 1,
      progress: '#FF6569',
      rating: 714,
      percentage: 22,
    },
  ];

  const reviewData = [
    {
      id: 0,
      profileicon: 'EC',
      name: 'Emily Cooer',
      days: '3 Days Ago',
      rating: 3,
      review:
        'This course is a very applicable. Professor Ng explains each agorithm and even tries to give an intuition for mathametical and statistic concepts behind each algorithm. Thank you',
    },
    {
      id: 1,
      profileicon: 'AS',
      name: 'Ally Sam',
      days: '3 Days Ago',
      rating: 3,
      review:
        'This course is a very applicable. Professor Ng explains each agorithm and even tries to give an intuition for mathametical and statistic concepts behind each algorithm. Thank you',
    },
    {
      id: 2,
      profileicon: 'EC',
      name: 'Emily Cooer',
      days: '3 Days Ago',
      rating: 3,
      review:
        'This course is a very applicable. Professor Ng explains each agorithm and even tries to give an intuition for mathametical and statistic concepts behind each algorithm. Thank you',
    },
    {
      id: 3,
      profileicon: 'MY',
      name: 'Minie Yan',
      days: '3 Days Ago',
      rating: 3,
      review:
        'This course is a very applicable. Professor Ng explains each agorithm and even tries to give an intuition for mathametical and statistic concepts behind each algorithm. Thank you',
    },
  ];

  return (
    <div className="text-white">
      {/* Instructor */}
      <div className="ml-3">
        <h1 className="mb-4 mt-7 text-xl font-bold">Instructor</h1>
        <div className="flex">
          <div className="flex">
            <Image src={InstructorPhoto} alt="instructor-image" className="" />
          </div>
          <div className="my-4 lg:my-0 ml-6">
            <h2 className="text-xl font-bold lg:my-4">Emily Cooer</h2>
            <p className="text-base lg:mb-2">President of Sales</p>
            <span className="flex items-center lg:mb-2">
              <Rating value={4} /> <span>(152)</span>
            </span>
          </div>
        </div>
        <div className="lg:mt-5 my-3 lg:mb-3 flex gap-3">
          <div className="flex items-center">
            <Image src={Star} alt="Star" />
            <p className="ml-1 text-xs lg:text-base font-medium lg:mr-3">
              2,563 Reviews
            </p>
          </div>
          <div className="flex items-center">
            <Image src={Person} alt="Star" />
            <p className="ml-1 text-xs lg:text-base font-medium lg:mr-3">
              Students
            </p>
          </div>
          <div className="flex items-center">
            <Image src={Play} alt="Star" />
            <p className="ml-1 text-xs lg:text-base font-medium lg:mr-3">
              15 Course
            </p>
          </div>
        </div>
        <p className="text-base font-normal mb-7 lg:mr-[25rem]">
          Vivamus quis quam. Vivamus bibendum, nulla in tempus dictum, quam
          lectus rutrum lorem, a faucibus justo turpis id sem. Aenean sapien
          nunc, accumsan eget, tristique quis, porta id, libero. In malesuada
          placerat libero. Integer nunc, ipsum consequat rutrum, non egestas
          arcu neque sit amet nunc. In gravida ullamcorper nisi.
        </p>
      </div>

      {/* Student Feedback */}
      <div className="ml-3">
        <h1 className="mb-4 mt-7 text-xl font-bold">Student Feedback</h1>
        {/* Card */}
        <div className="lg:flex gap-5">
          <div className="bg-darkBackgroundPrimary rounded-2xl lg:w-1/5 py-7 text-center space-y-2">
            <h2 className="text-[3rem] leading-[2.5rem] font-semibold mx-auto ">
              4.8
            </h2>
            <Rating value={5} readOnly />
            <p className="text-base mx-4">Course Rating</p>
          </div>
          {/* Rating + Progress bar */}
          <div className="w-full flex flex-col gap-1 justify-center mt-3 lg:mt-0">
            {RatingData.map((data) => (
              <div className="flex gap-2 items-center" key={data.id}>
                <p className="w-4 grid place-content-center">{data.id}</p>
                <Image src={YellowStar} className="mr-1" />
                <div className="w-2/3 lg:w-[50%] rounded-full h-2.5">
                  <div
                    className={`h-1.5`}
                    style={{
                      width: `${data.percentage}%`,
                      background: `${data.progress}`,
                    }}
                  />
                </div>
                <p className="ml-3 text-start">{data.rating}</p>
              </div>
            ))}
          </div>
        </div>
        {/* reviews */}
        {reviewData.slice(0, 3).map((data) => (
          <>
            <div className="flex mt-8" key={data.id}>
              <div className="flex w-1/7 h-1/2 p-3 lg:p-4 bg-[#202429] border-2 border-[#35373E] rounded-full text-center text-sm">
                {data.profileicon}
              </div>
              <div className="ml-2 lg:ml-6">
                <div className="flex gap-3">
                  <h2 className="text-base font-bold">{data.name}</h2>
                  <p className="text-base mb-2">{data.days}</p>
                </div>
                <span className="flex items-center mb-2">
                  <Rating value={data.rating} readOnly />
                </span>
                <p className="text-sm font-normal text-left mb-7 lg:mr-[25rem]">
                  {data.review}
                </p>
              </div>
            </div>
            <hr className="bg-[#797A7E] lg:mr-[25rem]" />
          </>
        ))}
        {/* for the last data */}
        {reviewData.slice(3, 4).map((data) => (
          <>
            <div className="flex mt-8" key={data.id}>
              <div className="flex w-1/7 h-1/2 p-3 lg:p-4 bg-[#202429] border-2 border-[#35373E] rounded-full text-center text-sm">
                {data.profileicon}
              </div>
              <div className="ml-2 lg:ml-6">
                <div className="flex gap-3">
                  <h2 className="text-base font-bold">{data.name}</h2>
                  <p className="text-base mb-2">{data.days}</p>
                </div>
                <span className="flex items-center mb-2">
                  <Rating value={data.rating} readOnly />
                </span>
                <p className="text-sm font-normal text-left mb-7 lg:mr-[25rem]">
                  {data.review}
                </p>
              </div>
            </div>
          </>
        ))}
        <p className="text-[#FF894F] underline text-center mx-5 lg:mx-0 lg:ml-[19.5rem] lg:mr-[40rem]">
          View all reviews
        </p>
      </div>

      {/* Write a Review */}
      <div className="ml-3">
        <h1 className="mb-4 mt-7 text-xl font-bold">Write a Review</h1>
        <p className="mb-4">What is like to course?</p>
        <Rating value={3} readOnly />
        <form className="mt-3 lg:mt-6 lg:mr-[25rem]">
          <input
            type="text"
            variant="outlined"
            className="bg-[#35373E] w-full h-[3.5rem] font-montserrat text-[#F7F7F7] border border-solid border-[#35373E] rounded-[0.625rem] mb-4 p-4"
            placeholder="Title"
            // value={newTask}
            size="small"
            // onChange={(e) => setNewTask(e.target.value)}
          />
          <textarea
            name="message"
            className="bg-[#35373E] w-full font-montserrat text-[#F7F7F7] border border-solid border-[#35373E] rounded-[0.625rem] mb-4 p-4"
            rows="7"
            placeholder="Short Description"
            required
          />
          <button
            type="submit"
            className="lg:w-[25%] px-4 h-[3.3125rem] text-[0.8125rem] leading-[1.88706rem] tracking-[0.11794rem] lg:h-[2.93rem] lg:leading-[2.00763rem] lg:text-[0.8365rem] lg:tracking-[0.1255rem] uppercase flex-shrink-0 bg-gradientPrimary rounded-xl hover:bg-transparent transition-all duration-200 hover:scale-y-105 font-semibold not-italic"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
