import React, { useState } from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import tooltipicon from '../../assets/img/tooltip.svg';
import Image from 'next/image';
import { useCourses } from 'utils/query/PopularCoursesQuery';
import CourseCard from '../Cards/CourseCard';

const PopularCoursesSlides = () => {
  const { data: popularCourseData, isLoading, isError } = useCourses();
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverOpen = () => {
    setIsPopoverVisible(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverVisible(false);
  };

  // const popularCourseData = {
  //   Message: 'Popular Courses Fetched Successfully',
  //   Code: '00295',
  //   popularCourses: [
  //     {
  //       _id: '651da6183f896643beebbfc8',
  //       name: 'html-basic-to-advanced',
  //       slug: 'html5---from-basics-to-advanced-level',
  //       educator: '64d0ef3e912e564e8671c11e',
  //       educatorName: 'Amit',
  //       duration:
  //         "A beginner's guide for HTML5. Learn all concepts of HTML5 (with hands-on assignments and projects.)",
  //       courseType: 'Practical',
  //       category: 'webdevelopment',
  //       price: 399,
  //       rating: 0,
  //       totalRating: 0,
  //       thumbnail:
  //         'https://media.geeksforgeeks.org/wp-content/uploads/20230821163330/HTML-Complete-Guide---A-to-Z-HTML-Concepts-2-copy.webp',
  //       sDesc:
  //         "A beginner's guide for HTML5. Learn all concepts of HTML5 (with hands-on assignments and projects.)",
  //       lDesc:
  //         "Are you a beginner? Do you want to learn web development but do not have any idea where to start?\nIf yes, then this is THE perfect course for you. In the HTML course, you will learn all the concepts of HTML5, starting from its history to its modern structure. We will cover all the tags which are most widely used in the world of web development. Simultaneously, we will show you some of the best practices of code-writing in HTML5.\n\nHTML is short for 'HyperText Markup Language', which means HTML is only used to create a structure of the web page. But without some styling, no assignment or project will look good. Thus, we will cover some portion of the CSS required to create simple web pages.\n\nThis HTML course will be beneficial for all who are looking to start their career in the web development field and aspire to become a Frontend or Full-stack web developer. This HTML course will be the first step towards your goal to become a web developer. To continue this journey, we would recommend you complete the other languages and skills like CSS, JavaScript, ES6, React.\n\nCheck out our profile to find related courses that are designed just like this.",
  //       Modules: [],
  //       view: 18,
  //       language: 'Hindi',
  //       certificate: 'YES',
  //       whatYouWillLearn: [
  //         'Learn to create simple web pages using HTML5',
  //         'To create Tables in HTML,To include multimedia(audio,video, images) in your web page',
  //         '4 projects to test your knowledge,To create customizable forms and add form validation in HTML',
  //       ],
  //       createdAt: '2023-10-04T17:51:20.817Z',
  //       updatedAt: '2023-10-04T21:36:36.337Z',
  //       __v: 0,
  //     },
  //     {
  //       _id: '651e8ee61885323b570f02db',
  //       name: 'HTML5 - From Basics to Advanced level',
  //       slug: 'html-basic-to-advanced',
  //       educator: '64d0ef3e912e564e8671c11e',
  //       educatorName: 'Amit',
  //       duration: '1h',
  //       courseType: 'Practical',
  //       category: 'webdevelopment',
  //       price: 399,
  //       rating: 0,
  //       totalRating: 0,
  //       thumbnail:
  //         'https://media.geeksforgeeks.org/wp-content/uploads/20230821163330/HTML-Complete-Guide---A-to-Z-HTML-Concepts-2-copy.webp',
  //       sDesc:
  //         "A beginner's guide for HTML5. Learn all concepts of HTML5 (with hands-on assignments and projects.)",
  //       lDesc:
  //         "Are you a beginner? Do you want to learn web development but do not have any idea where to start?\nIf yes, then this is THE perfect course for you. In the HTML course, you will learn all the concepts of HTML5, starting from its history to its modern structure. We will cover all the tags which are most widely used in the world of web development. Simultaneously, we will show you some of the best practices of code-writing in HTML5.\n\nHTML is short for 'HyperText Markup Language', which means HTML is only used to create a structure of the web page. But without some styling, no assignment or project will look good. Thus, we will cover some portion of the CSS required to create simple web pages.\n\nThis HTML course will be beneficial for all who are looking to start their career in the web development field and aspire to become a Frontend or Full-stack web developer. This HTML course will be the first step towards your goal to become a web developer. To continue this journey, we would recommend you complete the other languages and skills like CSS, JavaScript, ES6, React.\n\nCheck out our profile to find related courses that are designed just like this.",
  //       Modules: [],
  //       view: 0,
  //       language: 'Hindi',
  //       certificate: 'YES',
  //       whatYouWillLearn: [
  //         'Learn to create simple web pages using HTML5',
  //         'To create Tables in HTML,To include multimedia(audio,video, images) in your web page',
  //         '4 projects to test your knowledge,To create customizable forms and add form validation in HTML',
  //       ],
  //       createdAt: '2023-10-05T10:24:38.209Z',
  //       updatedAt: '2023-10-05T10:24:38.209Z',
  //       __v: 0,
  //     },
  //   ],
  // };

  return (
    <div className="rounded-2xl bg-darkBackgroundSecondary">
      <div className="heading px-4 text-2xl font-bold py-3 flex justify-between">
        <span className="pb-2 text-white">Popular Courses</span>

        {/* Add the popover trigger */}
        <div
          className="relative"
          onMouseEnter={handlePopoverOpen} // Show popover on hover
          onMouseLeave={handlePopoverClose} // Hide popover when not hovering
        >
          <Image src={tooltipicon} alt="tooltip" className="cursor-pointer" />

          {/* Conditionally render the popover */}
          {isPopoverVisible && (
            <div className="absolute bg-gray-700 p-2 z-50 w-32 right-1/2 rounded shadow-lg text-xs font-medium text-center">
              <p>Popular Courses</p>
            </div>
          )}
        </div>
      </div>
      <Glider draggable hasDots slidesToShow={3} slidesToScroll={1}>
        {popularCourseData?.popularCourses?.map((item) => (
          <>
            <CourseCard key={item.slug} {...item} />
          </>
        ))}
      </Glider>
      <style>
        {`
          .glider-dot.active{
            background-image: linear-gradient(to top right, #D41275, #2F0E80);
          }
          .glider-dot {
            size: 10px;
            background-color: white;
            height: 7px;
            width: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default PopularCoursesSlides;
