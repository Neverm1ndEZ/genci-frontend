import { useQuery } from 'react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const getCoursesbyCategory = async (category) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/courses/category`,
      {
        category: category,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('access_token')}`,
        },
      }
    );
    console.log('Fetch Course Data Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Course Data:', error);
    throw new Error('Error fetching Course Data');
  }
};


export function useCoursesbyCategory(category) {
  return useQuery(['coursesbycat', category], () => getCoursesbyCategory(category));
}
