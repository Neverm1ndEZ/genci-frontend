import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchPassingCriteriaInfo = async (courseId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/passing-criteria/${courseId}`
    );
    console.log('Fetch Passing Criteria Info Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Passing Criteria Info:', error);
    throw new Error('Error fetching Passing Criteria Info');
  }
};

export function usePassingCriteria(courseId) {
  return useQuery(['prerequisite', courseId], () =>
    fetchPassingCriteriaInfo(courseId)
  );
}
