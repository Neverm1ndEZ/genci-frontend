'use client';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import React, { useState } from 'react';

import CPContent from './CPContent';
import Assignments from '@/components/CourseDetails/Assignments';

export default function CPBottomTabs() {
  const [activeTab, setActiveTab] = useState('course-content');
  const data = [
    {
      label: 'Course Content',
      value: 'course-content',
      desc: <CPContent />,
    },
    {
      label: 'Assignments',
      value: 'assignment',
      desc: <Assignments />,
    },
  ];
  return (
    <Tabs value={activeTab} className="w-full ">
      <TabsHeader
        className="ml-4 lg:m-0 rounded-none border-b-2  border-[#797A7E] bg-transparent p-0"
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
            className={`md:w-1/5 ${activeTab === value ? 'border-b-4 border-[#FF894F] ' : ''}`}
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
