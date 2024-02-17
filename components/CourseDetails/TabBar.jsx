'use client';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import React from 'react';
import Assignments from './Assignments';
import BriefCourseAccordion from './BriefAccordionDetails';
import PassingCriteria from './PassingCriteria';
import Prerequisites from './Prerequisites';
import Testimonials from './Testimonials';
import PracticalLearning from './PracticalLearning';

export function TabBar() {
  const [activeTab, setActiveTab] = React.useState('course-content');
  const data = [
    {
      label: 'Course Content',
      value: 'course-content',
      desc: <BriefCourseAccordion />,
    },
    {
      label: 'Prerequisites',
      value: 'prerequisites',
      desc: <Prerequisites />,
    },
    {
      label: 'Assignments',
      value: 'assignments',
      desc: <Assignments />,
    },
    {
      label: 'Passing Criteria',
      value: 'passing-criteria',
      desc: <PassingCriteria />,
    },
    {
      label: 'Testimonials',
      value: 'testimonials',
      desc: <Testimonials />,
    },
    {
      label: 'Practical Learning',
      value: 'practical-learning',
      desc: <PracticalLearning />,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="ml-4 lg:m-0 rounded-none border-b-2 border-[#797A7E] bg-transparent p-0"
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-[#797A7E] shadow-none rounded-none',
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? 'border-b-4 border-[#FF894F]' : ''}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
