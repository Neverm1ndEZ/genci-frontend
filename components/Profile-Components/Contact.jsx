import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Dropdown from '../Select-Dropdown/Dropdown';

export default function Contact() {
  const Icon = ({ id, open }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? 'rotate-180' : ''
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  };

  const nationalityOptions = [
    {
      id: 0,
      label: 'India',
      value: 'india',
    },
    {
      id: 1,
      label: 'United States',
      value: 'united-states',
    },
    {
      id: 2,
      label: 'Canada',
      value: 'canada',
    },
    {
      id: 3,
      label: 'Australia',
      value: 'australia',
    },
    {
      id: 4,
      label: 'Other',
      value: 'other',
    },
  ];

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full bg-darkBackgroundSecondary rounded-xl text-white mb-10">
      {/* heading */}
      <div className="flex items-center py-7 border-b-2 border-[#A5A6A9] mx-5">
        <div className="w-2 h-6 bg-gradient-to-r from-[#FFC39B] to-[#FF894F] rounded-lg mx-3"></div>
        <h1 className="text-base lg:text-xl font-semibold">Contact Us</h1>
      </div>
      {/* accordion */}
      <div className="mx-8">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="border-b-2 border-[#797A7E]"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-base font-normal"
          >
            General Help
          </AccordionHeader>
          <AccordionBody className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio reiciendis blanditiis?
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="border-b-2 border-[#797A7E]"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-base font-normal"
          >
            Contact Genci Support
          </AccordionHeader>
          <AccordionBody className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio reiciendis blanditiis?
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="border-b-2 border-[#797A7E]"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-base font-normal"
          >
            Help With a compromised account
          </AccordionHeader>
          <AccordionBody className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio reiciendis blanditiis?
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className="border-b-2 border-[#797A7E]"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="text-base font-normal"
          >
            Terms and Policy
          </AccordionHeader>
          <AccordionBody className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio reiciendis blanditiis?
          </AccordionBody>
        </Accordion>
      </div>
      {/* Support */}
      <div className="pt-5 mx-6">
        <p className="text-base lg:text-xl font-semibold pb-3">Support</p>
        <form>
          <div className="w-2/5">
            {/* select */}
            <div className="mb-3">
              <Dropdown
                data={nationalityOptions}
                label="Select your nationality"
                size="sm"
              />
            </div>
            {/* email */}
            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-darkAccent1 border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full  p-2.5"
                required
              />
            </div>
            {/* textarea */}
            <textarea
              name="message"
              className="bg-darkAccent1 w-full font-montserrat text-[#F7F7F7] placeholder-[#F7F7F7] border border-solid border-[#35373E] text-sm rounded-lg mb-4 p-2.5"
              rows="7"
              placeholder="Write Message"
              required
            />
            <div className="flex justify-end">
              <button className="mb-10 py-2 px-12 rounded-lg text-base font-semibold bg-gradientPrimary">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
