import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchAssignmentInfo = async (courseId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/assignment/${courseId}`
    );
    console.log('Fetch Assignment Info Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Assignment Info:', error);
    throw new Error('Error fetching Assignment Info');
  }
};

export function useAssignment(courseId) {
  return useQuery(['assignment', courseId], () =>
    fetchAssignmentInfo(courseId)
  );
}
