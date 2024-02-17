import { HeroContent } from '@/components/LandingPageComponents/HeroContent';
import Spline from '@/components/LandingPageComponents/Spline';

export const Index = () => {
  return (
    <div className="flex flex-wrap items-center  gap-6 pt-24 lg:pt-4 lg:gap-14 min-h-screen justify-center">
     
        <Spline />
      
        <HeroContent />
      
    </div>
  );
};
