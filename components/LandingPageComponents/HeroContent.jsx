import { LandingButtonContainer } from '../ButtonContainer/LandingButtonContainer';

export const HeroContent = () => {
  return (
    <>
      <div className="px-4 py-2  flex flex-col gap-3  w-[95%] lg:w-2/5 pb-10  sm:items-center sm:text-center lg:text-left lg:items-start mt-5">

          <p className="font-medium text-base uppercase text-transparent bg-gradient-to-br from-pink-500 to-indigo-800 text-[#D41275] bg-clip-text">
            World’s First De-Ed Platform
          </p>
          <h2 className="text-[2.5rem] leading-[3rem] lg:text-[3.35rem] lg:leading-[3.83rem] text-[#F7F7F7] font-bold mb-4">
            Discover your path to success at <br />
            Genci University
          </h2>
          <p className="text-[1rem] leading-[1.375rem] font-normal text-[#F7F7F7] lg:text-[0.875rem] lg:font-medium not-italic lg:leading-[1.25rem] mb-[1.25rem]">
            Ask why, learn how. Education for all, affordably. Join the
            movement!
          </p>
          <LandingButtonContainer />

      </div>
    </>
  );
};
