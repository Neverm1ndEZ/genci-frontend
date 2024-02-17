import { Lock1 } from 'iconsax-react';

const Assignments = () => {
  const assignmentData = [
    {
      id: 1,
      heading: 'Collecting Moodboard from Dribble.com',
      para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi quisquam iure aut pariatur minus eos id? Eum?',
    },
    {
      id: 2,
      heading: 'Collecting Moodboard from Dribble.com',
      para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi quisquam iure aut pariatur minus eos id? Eum?',
    },
  ];

  return (
    <div className="flex flex-col">
      {assignmentData.map((data) => (
        <div
          key={data.id}
          className="bg-darkBackgroundPrimary rounded-2xl min-h-[200px] md:ml-3 md:mr-8 mt-3  md:mt-6 mb-3 p-4 text-[#fff]"
        >
          <h1 className="text-sm lg:text-xl font-bold ml-4 mt-4 mb-3">
            {data.id}. {data.heading}
          </h1>
          <p className="text-sm mx-4 lg:text-xl lg:mx-9">{data.para}</p>
          <div className="flex flex-row gap-4 mt-5 mx-4 lg:mx-9 lg:mb-7">
            <button className=" p-3 text-sm whitespace-nowrap lg:px-10 lg:py-3 rounded-lg bg-gradientPrimary font-bold hover:scale-105 transition-all duration-300">
              View Details
            </button>{' '}
            <button className="px-3.5 py-3 text-sm lg:text-xl whitespace-nowrap lg:px-10 lg:py-3 rounded-lg border-solid border-2 border-[#D41275] font-bold inline-flex items-center hover:scale-105 transition-all duration-300">
              <Lock1 size="20" color="#d9e3f0" className="mr-[10px]" />
              Solve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assignments;
