'use client';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import CPModule from "./CPModule"
import DoubtPanel from './DoubtPanel';

export default function CPHeroTabs() {
  const [activeTab, setActiveTab] = useState('module');
  const data = [
    {
      label: 'Module',
      value: 'module',
      desc: <CPModule />,
    },
    {
      label: 'Doubt Panel',
      value: 'doubt-panel',
      desc: <DoubtPanel />,
    },
  ];
  return (
    <Tabs value={activeTab} className="w-full md:w-[45%] ">
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
            className={activeTab === value ? 'border-b-4 border-[#FF894F] ' : ''}
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
