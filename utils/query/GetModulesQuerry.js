import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchModulesQuery = async (courseId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/module/${courseId}`);
    console.log('Fetch Course Data Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Course Data:', error);
    throw new Error('Error fetching Course Data');
  }
};

export function useGetModules(courseId) {
  return useQuery(['modules', courseId], () => fetchModulesQuery(courseId));
}
