import React from 'react';
import Image from 'next/image';
import person from '../../public/person.svg';
import email from '../../public/email.svg';
import pass from '../../public/passworddots.svg';
import popdot from '../../public/popover-dots.svg';
import visa from '../../public/visa.png';
import CourseCard from '../Cards/CourseCard';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from '@material-tailwind/react';

export default function BillingPayments() {
  const userDetails = [
    {
      id: 0,
      icon: person,
      name: 'Emily Cooper',
      link: 'Modify billing information',
    },
    {
      id: 1,
      icon: email,
      name: 'emilycooper@gmail.com',
      link: 'Billing History',
    },
  ];

  return (
    <div className="w-full bg-darkBackgroundSecondary rounded-xl text-white pb-6">
      {/* heading */}
      <div className="flex items-center py-7 border-b-2 border-[#A5A6A9] mx-5">
        <div className="w-2 h-6 bg-gradient-to-r from-[#FFC39B] to-[#FF894F] rounded-lg mx-3"></div>
        <h1 className="text-base lg:text-xl font-semibold">
          Billing and Payments
        </h1>
      </div>
      {/* card */}
      <div className="mx-5 mb-5">
        <h1 className="text-base lg:text-2xl font-semibold pt-5 pb-3">
          Recent Purchases
        </h1>
        <div style={{ marginLeft: '-0.5rem', marginBottom: '0.75rem' }}>
          <CourseCard />
        </div>
      </div>
      {/* Details Card */}
      <div className="mx-5 bg-darkBackgroundPrimary rounded-xl">
        {userDetails.map((data) => (
          <div className="flex justify-between p-5" key={data.id}>
            <div className="flex">
              <Image src={data.icon} alt="Star" />
              <p className="lg:ml-2 text-sm lg:text-base font-medium lg:mr-3 mx-1">
                {data.name}
              </p>
            </div>
            <p className="font-medium text-base text-transparent bg-gradient-to-l from-[#FFC39B] to-[#FF894F] bg-clip-text">
              {data.link}
            </p>
          </div>
        ))}
      </div>
      {/* Payment Method */}
      <div className="mx-5">
        <div className="flex justify-between items-center py-5">
          <h2 className="text-base lg:text-2xl font-medium">Payment Method</h2>
          <p className="font-medium text-base text-transparent bg-gradient-to-l from-[#FFC39B] to-[#FF894F] bg-clip-text">
            + Add New Payment Mode
          </p>
        </div>
        <div className="flex">
          <div className="flex bg-darkBackgroundPrimary rounded-xl w-1/3">
            <div className="flex px-8 py-4">
              <Image src={visa} alt="card-image" width={75} height={75} />
            </div>
            <div className="pt-3">
              <Image src={pass} alt="password" className="pt-4 pb-2" />
              <p className="text-sm font-medium">Emily Cooper</p>
              <p className="text-sm">Expires on Dec 2025</p>
            </div>
          </div>
          <div className="">
            <Popover>
              <PopoverHandler>
                <Button className="m-1.5 p-1.5 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="14"
                    viewBox="0 0 3 14"
                    fill="none"
                  >
                    <path
                      d="M2.16667 1.45833C2.16667 1.84954 1.84954 2.16667 1.45833 2.16667C1.06713 2.16667 0.75 1.84954 0.75 1.45833C0.75 1.06713 1.06713 0.75 1.45833 0.75C1.84954 0.75 2.16667 1.06713 2.16667 1.45833ZM2.16667 6.70833C2.16667 7.09954 1.84954 7.41667 1.45833 7.41667C1.06713 7.41667 0.75 7.09954 0.75 6.70833C0.75 6.31713 1.06713 6 1.45833 6C1.84953 6 2.16667 6.31713 2.16667 6.70833Z"
                      fill="#CDCECF"
                      stroke="#CDCECF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.16667 11.9583C2.16667 12.3495 1.84953 12.6667 1.45833 12.6667C1.06713 12.6667 0.75 12.3495 0.75 11.9583C0.75 11.5671 1.06713 11.25 1.45833 11.25C1.84953 11.25 2.16667 11.5671 2.16667 11.9583Z"
                      fill="#CDCECF"
                      stroke="#CDCECF"
                      stroke-width="1.5"
                    />
                  </svg>
                </Button>
              </PopoverHandler>
              <PopoverContent className="z-[999] w-[8rem] bg-darkAccent1 overflow-hidden p-0">
                <div className="p-2">
                  <Typography color="blue-gray" className="font-medium">
                    <div className="mx-3">
                      <div className="pb-1 flex justify-around items-center border-b-2 border-[#797A7E]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M3.33301 18.333H16.6663"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M12.191 2.43484L11.5731 3.05276L5.89222 8.73359C5.50745 9.11837 5.31506 9.31075 5.14961 9.52288C4.95443 9.77311 4.7871 10.0439 4.65057 10.3303C4.53483 10.5732 4.44879 10.8313 4.27671 11.3475L3.54755 13.535L3.36931 14.0698C3.28463 14.3238 3.35074 14.6039 3.5401 14.7932C3.72945 14.9826 4.00953 15.0487 4.26357 14.964L4.79829 14.7858L6.98579 14.0566L6.98583 14.0566C7.50203 13.8845 7.76014 13.7985 8.00299 13.6828C8.28947 13.5462 8.56022 13.3789 8.81045 13.1837C9.02258 13.0183 9.21496 12.8259 9.59973 12.4411L9.59974 12.4411L15.2806 6.76028L15.8985 6.14236C16.9223 5.11856 16.9223 3.45865 15.8985 2.43484C14.8747 1.41104 13.2148 1.41104 12.191 2.43484Z"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.5734 3.05273C11.5734 3.05273 11.6506 4.36581 12.8092 5.52441C13.9678 6.68301 15.2809 6.76025 15.2809 6.76025M4.79859 14.7858L3.54785 13.535"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                          />
                        </svg>
                        <p className="">Edit</p>
                      </div>
                      <div className="py-2 flex justify-around items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.64062 3.33366C7.98382 2.36267 8.90985 1.66699 9.99837 1.66699C11.0869 1.66699 12.0129 2.36267 12.3561 3.33366"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M17.0847 5H2.91797"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M15.6936 7.08301L15.3103 12.8323C15.1628 15.0447 15.089 16.1509 14.3682 16.8253C13.6474 17.4997 12.5387 17.4997 10.3214 17.4997H9.6769C7.45956 17.4997 6.35089 17.4997 5.63005 16.8253C4.90921 16.1509 4.83547 15.0447 4.68797 12.8323L4.30469 7.08301"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M7.91797 9.16699L8.33464 13.3337"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M12.0846 9.16699L11.668 13.3337"
                            stroke="#DFDFDF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                        <p className="">Delete</p>
                      </div>
                    </div>
                  </Typography>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
