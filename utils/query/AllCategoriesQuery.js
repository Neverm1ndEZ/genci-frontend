import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchAllCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/courses/allcategories`);
    console.log('Fetch Categories Info Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Categories Info:', error);
    throw new Error('Error fetching Categories Info');
  }
};

export function useAllCategories() {
  return useQuery(['allCcategories'], () => fetchAllCategories());
}
