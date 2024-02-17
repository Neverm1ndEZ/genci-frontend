import { useQuery } from 'react-query';
import axios from 'axios';
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchRecentCoursesInfo = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/courses/getrecentcourses`,
      {
        headers: {
          Authorization: Cookies.get('access_token'),
        },
      }
    );
    console.log('Fetch Recent Courses Info Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Recent Courses Info:', error);
    throw new Error('Error fetching Recent Courses Info');
  }
};

export function useRecentCourses() {
  return useQuery(['recentcourses'], () => fetchRecentCoursesInfo());
}
