import { Logout } from 'iconsax-react';
import React, { useState } from 'react';
import LogoutModal from './LogoutModal';

const LogoutPage = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  return (
    <div className="w-full bg-darkBackgroundSecondary rounded-xl text-white pb-6">
      {/* heading */}
      <div className="flex items-center py-7 border-b-2 border-[#A5A6A9] mx-5">
        <div className="w-2 h-6 bg-gradient-to-r from-[#FFC39B] to-[#FF894F] rounded-lg mx-3"></div>
        <h1 className="text-base lg:text-xl font-semibold">Logout</h1>
      </div>
      <div className="sm:grid grid-cols-12 justify-between py-7 mx-5">
        <div className="text-base col-span-6 md:col-span-5 ">
          Click the "Logout" button to securely log out of your account.
        </div>
        <div
          className="px-6 text-center col-span-3 md:col-span-2 col-start-10 md:col-start-11 text-sm py-[13px] my-1 font-semibold rounded-[10px] bg-gradientPrimary"
          onClick={() => setOpenLogoutModal(true)}
        >
          <Logout size={20} className="inline" /> <span> Logout</span>
        </div>
      </div>
      {openLogoutModal && (
        <LogoutModal setOpenLogoutModal={setOpenLogoutModal} />
      )}
    </div>
  );
};

export default LogoutPage;
