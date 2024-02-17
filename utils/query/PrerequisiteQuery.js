import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchPrerequisiteInfo = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/courses/prerequisite/complete-python-bootcamp`
    );
    console.log('Fetch Prerequisite Info Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Prerequisite Info:', error);
    throw new Error('Error fetching Prerequisite Info');
  }
};

export function usePrerequisite() {
  return useQuery(['prerequisite'], () => fetchPrerequisiteInfo());
}
