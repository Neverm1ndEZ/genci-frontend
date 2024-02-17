import React, { useState, useEffect, useRef } from 'react';
import {
  Profile,
  MessageNotif,
  Setting2,
  InfoCircle,
  Book,
} from 'iconsax-react';
import Image from 'next/image';
import Bell from '../../assets/img/Bell.svg';

const ProfileNotificationIcon = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileDropdownRef = useRef(null);
  const notificationsDropdownRef = useRef(null);

  const handleProfileDropdownClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleOutsideClick = (event) => {
    if (
      (profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)) ||
      (notificationsDropdownRef.current &&
        !notificationsDropdownRef.current.contains(event.target))
    ) {
      setShowProfileDropdown(false);
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    if (showProfileDropdown || showNotifications) {
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
  }, [showProfileDropdown, showNotifications]);

  return (
    <div className="lg:mr-10">
      <nav>
        <div className="max-w-screen-xl flex md:gap-2  items-center justify-between">
          <Image
            src={Bell}
            alt="icon"
            onClick={handleNotificationsClick}
            className="bg-[#202429] p-1 h-8 w-10 rounded-md"
          />
          <div className="w-full block md:w-auto" id="navbar-dropdown">
            <ul className="">
              <li>
                <button
                  className="flex items-center  font-semibold rounded-full py-2 md:px-4"
                  onClick={handleProfileDropdownClick}
                >
                  <span className="hidden lg:block">Jane Doe</span>
                </button>
                {showProfileDropdown && (
                  <div
                    ref={profileDropdownRef}
                    id="dropdownProfile"
                    className="z-50 h-[260px] w-[210px] fixed lg:right-[8%] bg-darkBackgroundSecondary overflow-hidden rounded-2xl top-[10%] shadow py-1 font-medium"
                  >
                    <ul
                      className="flex flex-col h-full justify-around text-[13px] text-gray-700 dark:text-gray-200 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li className="flex gap-2 pl-5 py-3 hover:bg-darkAccent1">
                        <Profile size="22" color="#ffffff" />
                        <a
                          href="/profile?tab=accounts-overview"
                          className="block"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="flex gap-2 pl-5 py-3 hover:bg-darkAccent1">
                        <Profile size="22" color="#ffffff" />
                        <a href="#" className="block">
                          Know your Student
                        </a>
                      </li>
                      <li className="flex gap-2 pl-5 py-3 hover:bg-darkAccent1">
                        <MessageNotif size="22" color="#ffffff" />
                        <a href="#" className="block">
                          My Messages
                        </a>
                      </li>
                      <li className="flex gap-2 pl-5 py-3 hover:bg-darkAccent1">
                        <Setting2 size="22" color="#ffffff" />
                        <a href="#" className="block">
                          Settings
                        </a>
                      </li>
                      <li className="flex gap-2 pl-5 py-3 hover:bg-darkAccent1">
                        <InfoCircle
                          size="22"
                          color="#ffffff"
                          className="rotate-180"
                        />
                        <a href="#" className="block">
                          Info
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
                {showNotifications && (
                  <div
                    ref={notificationsDropdownRef}
                    id="dropdownNotifications"
                    className="z-50 border  border-gray-800 min-h-[450px] max-h-[550px] w-[350px] fixed lg:right-[22%] bg-darkBackgroundSecondary overflow-hidden rounded-2xl top-[10%] shadow py-1 font-medium"
                  >
                    <div className="flex font-semibold justify-between px-5 py-4 border-gray-500  border-b items-center">
                      <p>Notifications</p>
                      <span className="bg-orangeDark text-xs  h-5 w-5 grid place-content-center rounded-md text-white ">
                        4
                      </span>
                    </div>
                    <ul
                      className="flex flex-col h-full justify-around text-[13px] text-gray-700 dark:text-gray-200 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li className="flex border-b border-gray-500 gap-2 pl-5 py-3 hover:bg-darkAccent1 text-sm">
                        <Book
                          size="22"
                          color="#ffffff"
                          className="w-1/5 mt-1"
                        />
                        <div>
                          <p className="block">
                            Don't miss out! The "Introduction to Python
                            Programming" course starts in 2 days. Secure your
                            spot now!
                          </p>
                          <span className="text-xs">2 mins ago</span>
                        </div>
                      </li>
                      <li className="flex border-b border-gray-500 gap-2 pl-5 py-3 hover:bg-darkAccent1 text-sm">
                        <Book
                          size="22"
                          color="#ffffff"
                          className="w-1/5 mt-1"
                        />
                        <div>
                          <p className="block">
                            Don't miss out! The "Introduction to Python
                            Programming" course starts in 2 days. Secure your
                            spot now!
                          </p>
                          <span className="text-xs">2 mins ago</span>
                        </div>
                      </li>
                      <li className="flex border-b border-gray-500 gap-2 pl-5 py-3 hover:bg-darkAccent1 text-sm">
                        <Book
                          size="22"
                          color="#ffffff"
                          className="w-1/5 mt-1"
                        />
                        <div>
                          <p className="block">
                            Don't miss out! The "Introduction to Python
                            Programming" course starts in 2 days. Secure your
                            spot now!
                          </p>
                          <span className="text-xs">2 mins ago</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProfileNotificationIcon;
