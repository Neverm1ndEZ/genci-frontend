import CPBottomTabs from '@/components/Courses/CoursePlaying/CPBottomTabs';
import CoursePlayingHero from '@/components/Courses/CoursePlaying/CoursePlayingHero';
import FileDirectory from '@/components/Courses/CoursePlaying/FileDirectory';
import CodeEditorIndex from '@/components/code-editor/CodeEditorIndex';
import React from 'react';

const CoursePlaying = () => {
  return (
    <div className="flex flex-col gap-4">
      <FileDirectory />
      <div className="bg-darkBackgroundSecondary p-4 rounded-lg flex flex-col gap-2">
        <h2 className="text-2xl font-bold ">Android Development</h2>
        <CoursePlayingHero />
        <CodeEditorIndex />
        <CPBottomTabs />
      </div>
    </div>
  );
};

export default CoursePlaying;
