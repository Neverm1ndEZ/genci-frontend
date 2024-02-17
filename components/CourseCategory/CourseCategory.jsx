'use client';
import Image from 'next/image';
import hero1 from '../../assets/img/courses/hero1.svg';
import { ArrowLeft2 } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { useAllCategories } from 'utils/query/AllCategoriesQuery';
import Link from 'next/link';

export default function CourseCategory() {
  const { data: allCategories } = useAllCategories();
  const router = useRouter();
  return (
    <>
      <div className="flex gap-1 py-2 font-semibold">
        <button type="button" onClick={() => router.push('/courses')} className='hover:scale-105 transition-all duration-300'>
          <ArrowLeft2 size="20" color="#FFFFFF" />
        </button>
        <p>Course Categories</p>
      </div>

      <div className="grid grid-cols-4  justify-between capitalize font-semibold gap-3">
        {allCategories?.categories?.map((category) => (
          <div
            className="flex gap-4 bg-darkBackgroundSecondary py-4 pl-3 rounded-lg w-[270px]"
            key={category.name}
          >
            <Image src={hero1} alt={category.name} />
            <div className="flex flex-col">
              <p className="text-lg">{category.name}</p>
              <Link href={`${category.name}`} className="text-[#FFC39B]">
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
