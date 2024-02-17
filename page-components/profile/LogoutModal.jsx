import { CloseCircle, Logout as LogoutButton } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';

const LogoutModal = ({ setOpenLogoutModal }) => {
  return (
    <div>
      <div className="min-w-screen overflow-y-auto  p-1 md::p-0 animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none  bg-no-repeat bg-center bg-cover">
        <div
          className="fixed bg-darkBackgroundPrimary  h-full opacity-80 inset-0 z-0"
          onClick={() => setOpenLogoutModal(false)}
        ></div>
        <div className="w-full lg:w-auto mx-4 auto p-4 max-w-xl relative  my-auto rounded-xl shadow-lg bg-darkBackgroundSecondary">
          <div className=" flex justify-end cursor-pointer">
            <div onClick={() => setOpenLogoutModal(false)}>
              <CloseCircle size="20" />
            </div>
          </div>
          <div className="px-10 py-5">
            <div className=" flex justify-center">
              <span className=" p-4 rounded-full bg-darkBackgroundPrimary">
                <LogoutButton size={24} className="" />
              </span>
            </div>
            <div className="text-xl font-semibold flex justify-center py-2">
              Logout{' '}
            </div>
            <div className="text-sm font-medium">
              Are You Sure Want To Logout
            </div>
            <div className="pt-8">
              <div className="flex justify-between">
                <button className="px-4 text-sm py-3  font-semibold rounded-[10px] border ">
                  Cancel
                </button>
                <button className="px-8 text-sm py-3 font-semibold rounded-[10px] bg-gradientPrimary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
