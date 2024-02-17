import CustomButton from '@/components/Button/CustomButton';
import EditModal from '@/components/CourseDetails/EditModal';
import { Email } from '@mui/icons-material';
import { Edit, Edit2, Flag, User } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useGetLoggedInUser } from 'utils/query/GetLoggedInUserDetails';

const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();

  const { data: user, isError, isLoading } = useGetLoggedInUser();
  console.log('data', user);
  console.log('error', isError);
  console.log('isloading', isLoading);

  useEffect(() => {
    setData(user);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="w-full bg-darkBackgroundSecondary rounded-xl text-white mb-6">
          <div className=" flex justify-center p-4">
            <div className="h-40 rounded-full w-40 overflow-hidden mt-20">
              <img
                className="w-full h-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/c48b/8c2e/ef89f01994fbcc16010453752b4087a7?Expires=1697414400&Signature=a3IK1v0FtyI2g2~pu~t0YxZ~kGLlRkxMFBL6LMrFfvkNQLwOfZBJYv6wnO7jv74~dXzFeegKR-oathGbEAl6XQoqpSz8678mvUfddz32gjzFmqh99484QK8TA9HyUDJzQjJTqcQGU29OpnLidZslPM70A07Zo~6vJWKxaPeMps0qPGGa7agRqLX~N4htJxHmd3wHy5yvBsXrJwF6VyRXjD47jNy1jnEmUWSA8DDCRwnK8o37wTCYNYs9sGKEw~MbTNoGuN3e-k1peSVxDkiP8klppmh~ahc26eoKuTOf1T~KGl6uzEXJBvj~nHGLyxXqZNE9SDv8b8HZF1~w9JpHfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="relative top-48 right-10 cursor-pointer">
              <Edit2
                size={40}
                className=" bg-darkBackgroundPrimary rounded-full p-2"
              />
            </div>
          </div>
          <div className="flex justify-between mx-4 border-b-2 py-4 border-[#797A7E]">
            <div className="flex items-center">
              <div className=" w-2 h-6 rounded-xl bg-[#ffc39b] mr-3" />
              <div className="text-2xl font-semibold">Manage Profile</div>
            </div>
            <button
              className="px-6 text-sm py-[13px] my-1 font-semibold rounded-[10px] bg-gradientPrimary"
              onClick={() => setOpenModal(true)}
            >
              <Edit size={20} className="inline" />
              <span className="px-2">Edit</span>
            </button>
          </div>
          <div className="px-4 pt-5 pb-2">
            <div className="flex justify-between border-b-2 border-[#797A7E]">
              <div className="flex gap-2 mb-5">
                <User size="20" color="#d9e3f0" />
                <p>First Name</p>
              </div>
              <p className="mr-3">{data?.user.firstname}</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex justify-between border-b-2 border-[#797A7E]">
              <div className="flex gap-2 mb-5">
                <User size="20" color="#d9e3f0" />
                <p>Last Name</p>
              </div>
              <p className="mr-3">{data?.user.lastname}</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex justify-between border-b-2 border-[#797A7E]">
              <div className="flex gap-2 mb-5">
                <Email size="20" color="#d9e3f0" />
                <p>Email</p>
              </div>
              <p className="mr-3">{data?.user.email}</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex justify-between border-b-2 border-[#797A7E]">
              <div className="flex gap-2 mb-5">
                <Flag size="20" color="#d9e3f0" />
                <p>Nationality</p>
              </div>
              <p className="mr-3">{data?.user.country}</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex justify-between border-b-2 border-[#797A7E]">
              <div className="flex gap-2 mb-5">
                <User size="20" color="#d9e3f0" />
                <p>Date of Berth</p>
              </div>
              <p className="mr-3">{data?.user.dob}</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex justify-between border-b-2 border-[#797A7E]">
              <div className="flex gap-2 mb-5">
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
                <p>Gender</p>
              </div>
              <p className="mr-3">{data?.user.gender}</p>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex justify-between ">
              <div className="flex gap-2 mb-5">
                <User />
                <p>Bio</p>
              </div>
              <p className="mr-3">{data?.user.bio}</p>
            </div>
          </div>
          {openModal && (
            <EditModal setOpenModal={setOpenModal} {...data?.user} />
          )}
        </div>
      )}
    </>
  );
};

export default ProfilePage;
