import { CardEdit, CloseCircle, User } from 'iconsax-react';
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { updateUserDataQuery } from 'utils/query/GetLoggedInUserDetails';

const EditModal = ({
  setOpenModal,
  firstname,
  lastnamme,
  email,
  nationality,
  dob,
  bio,
  gender,
  countryCode,
  contactNumber,
}) => {
  const [formData, setFormData] = useState({
    firstname: firstname,
    lastname: lastnamme,
    email: email,
    nationality: nationality,
    dob: dob,
    gender: gender,
    bio: bio,
    contactNumber: contactNumber,
    countryCode: countryCode,
  });

  const handleSubmit = async (e) => {
    const updateRes = await updateUserDataQuery({
      email: formData.email,
      contactNumber: formData.contactNumber,
      bio: formData.bio,
    });
    if (!updateRes?.Error) {
      setOpenModal(true);
    }
    console.log(updateRes);
  };

  return (
    <div>
      <div className="min-w-screen overflow-y-auto  p-1 md::p-0 animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none  bg-no-repeat bg-center bg-cover">
        <div
          className="fixed bg-darkBackgroundPrimary  h-full opacity-80 inset-0 z-0"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="w-full lg:w-auto mx-4 auto p-4 max-w-xl relative  my-auto rounded-xl shadow-lg bg-darkBackgroundSecondary">
          <div className=" flex justify-end cursor-pointer">
            <div onClick={() => setOpenModal(false)}>
              <CloseCircle size="20" />
            </div>
          </div>

          <div className="mb-4">
            {/* first and last name */}
            <div className="lg:flex">
              <div className="relative lg:flex-1 mb-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                  <User size={20} />
                </div>
                <div className="px-4 lg:pl-4 lg:pr-1">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    placeholder="First Name"
                    className="bg-[#35373E] h-14 border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-2"
                    disabled
                  />
                </div>
              </div>
              <div className="relative lg:flex-1 mb-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-8 lg:pl-5 pointer-events-none">
                  <User size={20} />
                </div>
                <div className="px-4 lg:pr-4 lg:pl-1">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="bg-[#35373E] h-14 border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-2"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* email */}
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Outline / Messages, Conversation  /  Letter">
                    <path
                      id="Vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z"
                      fill="#F7F7F7"
                    />
                  </g>
                </svg>
              </div>
              <div className="px-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email"
                  className="bg-[#35373E] h-14 border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-2"
                  required
                />
              </div>
            </div>
            {/* nationality select tag */}
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 22V14M5 14V4M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.9364 14.2659C18.5615 14.1096 19 13.548 19 12.9037V5.53669C19 4.75613 18.2665 4.18339 17.5092 4.3727C15.878 4.78051 14.1597 4.66389 12.5986 4.03943L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 4V2"
                    stroke="#F7F7F7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="px-4">
                <select
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  className="bg-[#35373E] h-14 border-solid border-[#35373e] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-11 p-[0.6975rem]"
                  required
                  disabled
                >
                  <option value="" disabled selected hidden>
                    {formData.nationality}
                  </option>
                </select>
              </div>
            </div>
            {/* age and gender */}
            <div className="lg:flex">
              <div className="relative lg:flex-1 mb-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                  <User size={20} />
                </div>
                <div className="px-4 lg:pr-1 lg:pl-4">
                  <input
                    type="date" // if this is date then placeholder isn't rendering
                    id="age"
                    name="age"
                    value={formData.dob}
                    min={18}
                    max={100}
                    placeholder="Date of Birth"
                    className="bg-[#35373E] h-14 border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-2"
                    required
                    disabled
                  />
                </div>
              </div>

              <div className="relative lg:flex-1 mb-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-8 lg:pl-5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="13.3701"
                      cy="10.3704"
                      r="6.11111"
                      stroke="#F7F7F7"
                      strokeWidth="1.22222"
                    />
                    <path
                      d="M22.7407 1H23.3518C23.3518 0.662493 23.0782 0.388889 22.7407 0.388889V1ZM22.1296 4.76068C22.1296 5.09819 22.4032 5.3718 22.7407 5.3718C23.0782 5.3718 23.3518 5.09819 23.3518 4.76068H22.1296ZM18.98 0.388889C18.6425 0.388889 18.3689 0.662493 18.3689 1C18.3689 1.33751 18.6425 1.61111 18.98 1.61111V0.388889ZM18.2839 6.32101L23.1728 1.43212L22.3086 0.567879L17.4197 5.45677L18.2839 6.32101ZM22.1296 1V4.76068H23.3518V1H22.1296ZM18.98 1.61111H22.7407V0.388889H18.98V1.61111Z"
                      fill="#F7F7F7"
                    />
                    <path
                      d="M5.6665 19.5373C5.329 19.5373 5.05539 19.8109 5.05539 20.1484C5.05539 20.4859 5.329 20.7595 5.6665 20.7595V19.5373ZM9.74058 20.7595C10.0781 20.7595 10.3517 20.4859 10.3517 20.1484C10.3517 19.8109 10.0781 19.5373 9.74058 19.5373V20.7595ZM7.09243 23.0003C7.09245 23.3378 7.36608 23.6114 7.70359 23.6113C8.04109 23.6113 8.31468 23.3377 8.31465 23.0002L7.09243 23.0003ZM7.09222 18.1113V20.1484H8.31444V18.1113H7.09222ZM7.70333 19.5373H5.6665V20.7595H7.70333V19.5373ZM9.74058 19.5373H7.70333V20.7595H9.74058V19.5373ZM7.09222 20.1484L7.09243 23.0003L8.31465 23.0002L8.31444 20.1483L7.09222 20.1484Z"
                      fill="#F7F7F7"
                    />
                    <path
                      d="M13.4074 12.4076C13.4074 15.5576 10.8538 18.1113 7.7037 18.1113C4.55364 18.1113 2 15.5576 2 12.4076C2 9.25749 4.55364 6.70386 7.7037 6.70386C10.8538 6.70386 13.4074 9.25749 13.4074 12.4076Z"
                      stroke="#F7F7F7"
                      strokeWidth="1.22222"
                    />
                  </svg>
                </div>
                <div className="px-4 lg:pr-4 lg:pl-1">
                  <select
                    id="gender"
                    name="gender"
                    className="bg-[#35373E] h-14 border-solid border-[#35373e] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-11 p-[0.6975rem]"
                    disabled
                  >
                    <option value="" disabled selected hidden>
                      {formData.gender}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* phone number */}
            <div className="relative mb-3">
              <div className="px-4">
                <PhoneInput
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Phone Number"
                  className="bg-[#35373E] h-14 border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-5 p-2"
                  value={formData.phoneNumber}
                  onChange={(value) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      contactNumber: value,
                    }))
                  }
                  country={formData.countryCode}
                  onCountryChange={(countryCode) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      countryCode,
                    }))
                  }
                  countrySelectProps={{ unicodeFlags: false }}
                />
              </div>
            </div>
            {/* Bio */}

            <div className="relative mb-3">
              <div className="px-4">
                <div className="pl-1 pb-3">
                  <CardEdit size="20" className="inline" />
                  <span className="pl-3"> Bio</span>
                </div>
                <div className="">
                  <textarea
                    className="p-4 bg-[#35373E] border-[#35373E] border text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full"
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            {/* <div className="relative mb-3">
              <div className="px-4">
                <div className="">Bio</div>
                <Textarea
                  className="  text-sm rounded-lg block w-full pl-12 p-2"
                  required
                />
              </div>
            </div> */}
          </div>
          <div className="flex justify-end">
            <div className="pr-5">
              <button
                className="px-6 text-sm py-[13px] my-1 font-semibold rounded-[10px] "
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
            <button
              onClick={handleSubmit}
              className="px-6 text-sm py-[13px] my-1 font-semibold rounded-[10px] bg-gradientPrimary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
