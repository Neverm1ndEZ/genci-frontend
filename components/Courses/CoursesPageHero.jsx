import Image from 'next/image';
import hero1 from '../../assets/img/courses/hero1.svg';
import hero2 from '../../assets/img/courses/hero2.svg';
import hero3 from '../../assets/img/courses/hero3.svg';
import hero4 from '../../assets/img/courses/hero4.svg';

export default function CoursesPageHero() {
  return (
    <div className="flex justify-between font-semibold">
      <div className="flex gap-4 bg-darkBackgroundSecondary py-4 pl-3 rounded-lg w-[270px]">
        <Image src={hero1} alt="hero1" />
        <div className="flex flex-col">
          <p className="text-lg">Graphic Design</p>
          <span className="text-[#FFC39B]">Explore →</span>
        </div>
      </div>
      <div className="flex gap-4 bg-darkBackgroundSecondary py-4 pl-3 rounded-lg w-[270px]">
        <Image src={hero2} alt="hero2" />
        <div className="flex flex-col">
          <p className="text-lg">Graphic Design</p>
          <span className="text-[#FFC39B]">Explore →</span>
        </div>
      </div>
      <div className="flex gap-4 bg-darkBackgroundSecondary py-4 pl-3 rounded-lg w-[270px]">
        <Image src={hero3} alt="hero3" />
        <div className="flex flex-col">
          <p className="text-lg">Graphic Design</p>
          <span className="text-[#FFC39B]">Explore →</span>
        </div>
      </div>
      <div className="flex gap-4 bg-darkBackgroundSecondary py-4 pl-3 rounded-lg w-[270px]">
        <Image src={hero4} alt="hero4" />
        <div className="flex flex-col">
          <p className="text-lg">Graphic Design</p>
          <span className="text-[#FFC39B]">Explore →</span>
        </div>
      </div>
    </div>
  );
}
