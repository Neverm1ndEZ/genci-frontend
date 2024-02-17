import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import Logo from '../../assets/img/genci-wbg-fulllogo.svg';
import { MenuIcons, LowerMenuIcons } from './MenuIcons';
import styles from "./DashboardNavbar.module.css"
const DashboardNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);

  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const MenuData = [
    {
      id: 0,
      href: '/home',
      spantag: 'home',
    },
    {
      id: 1,
      href: '/courses',
      spantag: 'courses',
    },
    {
      id: 2,
      href: '/dashboard/analytics',
      spantag: 'community',
    },
    {
      id: 3,
      href: '/dashboard/notifications',
      spantag: 'statistics',
    },
    {
      id: 4,
      href: '/dashboard/community',
      spantag: 'leaderboard',
    },
    {
      id: 5,
      href: '/dashboard/community',
      spantag: 'Genci Arena',
    },
  ];

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };

  return (
    <div className="hidden lg:block font-semibold fixed  z-50 ">
      <nav className="hidden lg:flex w-48 h-screen fixed bg-white text-darkText dark:bg-darkBackgroundSecondary dark:text-white top-0 shadow bg-color flex-col items-center justify-between py-2">
        <ul className="flex flex-col gap-5 items-center w-full py-3">
          <figure className="w-20 mb-5 mr-2">
            <Image src={Logo} className="logo" alt="Logo" />
          </figure>
          {MenuData.map((menuData) => (
            <Link
              key={menuData.id}
              href={menuData.href}
              className=" w-full px-4"
            >
              <button
                color="inherit"
                className={` w-full p-2 rounded-lg text-[14px] capitalize transition-all duration-200 ${
                  selectedButton === menuData.id
                    ? 'bg-gradientPrimary '
                    : `${styles.link}`
                }`}
                onClick={() => handleButtonClick(menuData.id)}
              >
                <div className="flex gap-2">
                  {MenuIcons[menuData.id]}
                  <span>{menuData.spantag}</span>
                </div>
              </button>
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col gap-5 items-center w-full text-[14px]">
          <Link href="/settings" className="flex w-full px-4">
            <button className="flex p-2 w-full gap-2  rounded-lg hover:bg-gradient-to-br from-pink-500 to-indigo-800 ">
              {LowerMenuIcons[0]}
              <span>Settings</span>
            </button>
          </Link>
          <div className="flex w-full  px-4  ">
            <button className="flex p-2 rounded-lg w-full gap-2  hover:bg-gradient-to-br from-pink-500 to-indigo-800 ">
              {LowerMenuIcons[1]}
              <span>Log Out</span>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
