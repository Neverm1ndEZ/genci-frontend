import Link from 'next/link';
import React from 'react';

const ProfileSidebarTab = ({ active }) => {
  const data = [
    {
      label: 'Accounts Overview',
      value: 'accounts-overview',
    },
    {
      label: 'KYS',
      value: 'kys',
    },
    {
      label: 'Achievements and Certifications',
      value: 'achievements-and-certifications',
    },
    {
      label: 'Billing and Payments',
      value: 'billing-and-payments',
    },
    {
      label: 'Notifications',
      value: 'notifications',
    },
    {
      label: 'Privacy Settings',
      value: 'privacy-settings',
    },
    {
      label: 'Terms and policies',
      value: 'terms-and-policies',
    },
    {
      label: 'Contact Us',
      value: 'contact-us',
    },
    {
      label: 'Logout',
      value: 'logout',
    },
  ];

  return (
    <div className="">
      <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
        {data.map((item) => (
          <Link href={`?tab=${item.value}`} className="" key={item.value}>
            <h1
              className={`cursor-pointer py-4 px-2  rounded-xl font-medium  ${
                active == item.value
                  ? 'bg-gradientPrimary'
                  : ''
              } `}
            >
              {item.label}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebarTab;
