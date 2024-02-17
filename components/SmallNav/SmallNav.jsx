import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import Logo from '../../assets/img/genci-wbg-fulllogo.svg';
import { MenuIcons } from './MenuIcons';
import {Setting2, LogoutCurve} from "iconsax-react"
const SmallNav = () => {
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
      <nav className="hidden lg:flex w-24 h-screen fixed bg-white text-darkText dark:bg-darkBackgroundSecondary dark:text-white top-0 shadow bg-color flex-col items-center justify-between py-2">
        <ul className="flex flex-col gap-5 items-center w-full py-3">
          <figure className="w-16 mt-2 mb-5 mr-2">
            <Image src={Logo} className="logo" alt="Logo" />
          </figure>
          {MenuData.map((menuData) => (
            <Link
              key={menuData.id}
              href={menuData.href}
              className=" w-full px-6"
            >
              <button
                color="inherit"
                className={`w-full p-2 rounded-lg text-[14px] capitalize transition-all duration-200 ${
                  selectedButton === menuData.id
                    ? 'bg-gradientPrimary'
                    : 'hover:bg-gradient-to-bl from-pink-600 to-indigo-800 '
                }`}
                onClick={() => handleButtonClick(menuData.id)}
              >
                <div className="flex justify-center gap-2">
                  {MenuIcons[menuData.id]}
                  {/* <span>{menuData.spantag}</span> */}
                </div>
              </button>
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col gap-5 items-center w-full text-[14px]">
          <Link href="/settings" className="flex w-full  justify-center px-6">
            <button className="flex p-2 justify-center w-full gap-2  rounded-lg hover:bg-gradient-to-br from-pink-500 to-indigo-800 ">
            <Setting2 size="23" color="#ffffff"/>
            </button>
          </Link>
          <div className="flex w-full  px-6 justify-center  ">
            <button className="flex p-2 mr-1 justify-center rounded-lg w-full gap-2  hover:bg-gradient-to-br from-pink-500 to-indigo-800 ">
            <LogoutCurve size="23" color="#ffffff"/>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SmallNav;
