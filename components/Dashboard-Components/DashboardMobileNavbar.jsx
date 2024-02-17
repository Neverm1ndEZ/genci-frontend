import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import Logo from '../../assets/img/genci-wbg-fulllogo.svg';
import { MenuIcons, LowerMenuIcons } from './MenuIcons';

const DashboardMobileNavbar = ({ isNavbarOpen, setIsNavbarOpen }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const navbarRef = useRef(null);
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
      spantag: 'genci arena',
    },
  ];

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (isNavbarOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      document.addEventListener('touchmove', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('touchmove', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('touchmove', handleOutsideClick);
    };
  }, [isNavbarOpen, setIsNavbarOpen]);

  return (
    <div
      className={`fixed z-40 right-0 lg:hidden w-48 h-screen transition-transform ease-in-out duration-300 ${
        isNavbarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      ref={navbarRef}
    >
      {isNavbarOpen && (
        <nav className="bg-white text-darkText dark:bg-darkBackgroundSecondary dark:text-white top-0 shadow bg-color flex-col items-center justify-between py-2 h-full">
          <ul className="flex flex-col gap-5 items-center w-full py-3">
            {MenuData.map((menuData) => (
              <Link key={menuData.id} href={menuData.href} className="w-full px-4">
                <button
                  color="inherit"
                  className={`w-full p-2 rounded-lg text-[14px] capitalize transition-all duration-200 ${
                    selectedButton === menuData.id
                      ? 'bg-gradientPrimary'
                      : 'hover:bg-gradient-to-bl from-pink-600 to-indigo-800'
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
          <ul className="flex flex-col gap-5 items-center w-full text-[14px] mt-60">
            <Link href="/settings" className="flex w-full px-4">
              <button className="flex p-2 w-full gap-2 rounded-lg hover:bg-gradient-to-br from-pink-500 to-indigo-800">
                {LowerMenuIcons[0]}
                <span>Settings</span>
              </button>
            </Link>
            <div className="flex w-full px-4">
              <button className="flex p-2 rounded-lg w-full gap-2 hover:bg-gradient-to-br from-pink-500 to-indigo-800">
                {LowerMenuIcons[1]}
                <span>Log Out</span>
              </button>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default DashboardMobileNavbar;
