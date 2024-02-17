import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchInstructorInfo = async (courseId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/educator/${courseId}`
    );
    console.log('Fetch InstructorInfo Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching InstructorInfo:', error);
    throw new Error('Error fetching InstructorInfo');
  }
};

export function useInstructor(courseId) {
  return useQuery(['instructor', courseId], () =>
    fetchInstructorInfo(courseId)
  );
}
