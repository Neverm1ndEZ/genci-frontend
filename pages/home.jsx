import React from 'react';
import { DashboardIndex } from '@/components/Dashboard-Components/DashboardIndex';
import { useRouter } from 'next/router';
import ModalSingleCourse from '@/page-components/Courses/ModalSingleCourse';

export default function dashboard() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <DashboardIndex />
      {slug && <ModalSingleCourse prevUrl="/home" slug={slug} />}
    </>
  );
}
