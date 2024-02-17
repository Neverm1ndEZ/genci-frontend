import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchGetCourseBySlug = async (courseId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/courses/${courseId}`,
      {
        courseId: courseId,
      }
    );
    console.log('Fetch Course Data Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Course Data:', error);
    throw new Error('Error fetching Course Data');
  }
};

export function useGetCourseBySlug(courseId) {
  return useQuery(['courses', courseId], () => fetchGetCourseBySlug(courseId));
}
