import Updates from './Updates';
import TechNews from './TechNews';
import PopularCoursesSlides from '../Courses/PopularCoursesSlides';
import RightCalendar from '../RightCalendar/RightCalendar';
import LearningActivity from './LearningActivity';
import CourseCompletion from '../CourseCompletion/CourseCompletion';
import CourseSectionStats from './CourseSectionStats';
import TodoList from './Todolist';
import Streakboard from './Streakboard';
export const DashboardIndex = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-full lg:w-3/4 flex flex-col gap-5">
        <TechNews />
        <CourseSectionStats />
        <Streakboard />
        <PopularCoursesSlides />
        <LearningActivity />
        <Updates />
        <CourseCompletion />
      </div>
      <div className="w-[21%] hidden lg:block fixed right-0 top-0 h-full pt-20">
        <div className="h-full pt-1 flex flex-col gap-3 ">
          <RightCalendar />
          <TodoList />
        </div>
      </div>
    </div>
  );
};
