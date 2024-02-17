import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchTechNews = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/technews`
    );
    console.log('Fetch TechNews Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching TechNews:', error);
    throw new Error('Error fetching TechNews');
  }
};
export function useTechNews() {
  return useQuery('technews', fetchTechNews);
}
const fetchUpdates = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/updates`
    );
    console.log('Fetch Updates Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Updates:', error);
    throw new Error('Error fetching Updates');
  }
};
export function useUpdates() {
  return useQuery('updates', fetchUpdates);
}
