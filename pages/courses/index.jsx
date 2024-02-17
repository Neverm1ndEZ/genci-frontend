import Courses from '@/components/Courses/Courses';
import ModalSingleCourse from '@/page-components/Courses/ModalSingleCourse';
import { useRouter } from 'next/router';

export default function courses() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Courses />
      {slug ? <ModalSingleCourse slug={slug} prevUrl="/courses" /> : null}
    </>
  );
}
