  'use client';
  import { useTheme } from 'next-themes';
  import {HambergerMenu} from "iconsax-react"
  import { useState, useEffect } from 'react';
  import ProfileNotificationIcon from '../ProfileNotificationIcon/ProfileNotificationIcon';
  import ExpandableSearchBar from '../Searchbar/ExpandableSearchBar';
  import Image from 'next/image';
  import Logo from '../../assets/img/genci-wbg-fulllogo.svg';
  const Topbar = ({handleMenuToggle}) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const renderThemeChanger = () => {
      if (!mounted) return null;

      const currentTheme = theme === 'system' ? systemTheme : theme;

      return (
        <label className="hidden lg:flex items-center">
          <span className="text-gray-400 dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1A85FF"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6  mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </span>
          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-700">
            <input
              type="checkbox"
              className="absolute w-5 h-5 rounded-full bg-white dark:bg-gray-400 focus:outline-none appearance-none cursor-pointer transition-transform duration-300 ease-in-out transform translate-x-0 dark:translate-x-5"
              checked={currentTheme === 'dark'}
              onChange={() => {
                if (currentTheme === 'dark') {
                  setTheme('light');
                } else {
                  setTheme('dark');
                }
              }}
            />
          </div>
          <span className="text-gray-400 dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1A85FF"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </span>
        </label>
      );
    };

    return (
      <div className="px-3 sm:px-6 z-30 flex items-center justify-between lg:justify-evenly mx-auto  fixed w-screen top-0 h-20 lg:pl-40   bg-slate-300 dark:bg-darkBackgroundSecondary">
        <div className='lg:hidden'>
          <Image src={Logo} alt="logo" />
        </div>
        <div className="hidden lg:block w-1/3">
          <div className="relative flex utline h-12 focus-within:shadow-lg bg-[#fff] dark:bg-[#202429] overflow-hidden rounded-full">
            <div className="flex items-center h-full mr-2 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full  outline-none text-sm bg-transparent max-w-[470px] pr-2 placeholder:text-white"
              type="text"
              id="search"
              placeholder="Search Courses, Documents, Activities..."
            />
          </div>
        </div>
        {renderThemeChanger()}
        <div className="flex items-center gap-3">
          <ExpandableSearchBar />
          <ProfileNotificationIcon />
          <HambergerMenu size="32" color="#ffffff"className="lg:hidden" onClick={handleMenuToggle}/>
        </div>
      </div>
    );
  };

  export default Topbar;
