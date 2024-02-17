import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchPopularCoursesInfo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/courses/popular-courses`);
    console.log('Fetch Courses Info Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Courses Info:', error);
    throw new Error('Error fetching Courses Info');
  }
};

export function useCourses() {
  return useQuery(['courses'], () => fetchPopularCoursesInfo());
}
