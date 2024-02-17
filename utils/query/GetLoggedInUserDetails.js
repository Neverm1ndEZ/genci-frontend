import { useQuery } from 'react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const GetLoggedInUserDetails = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/user/`, {
      headers: {
        Authorization: Cookies.get('access_token'),
      },
    });
    console.log('Fetch user Details:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    // throw new Error('Error fetching user');
  }
};

export function useGetLoggedInUser() {
  return useQuery('user', GetLoggedInUserDetails);
}

export const updateUserDataQuery = async (body) => {
  console.log('clicked');
  try {
    const response = await axios.put(`${API_BASE_URL}/api/user`, body, {
      headers: { Authorization: Cookies.get('access_token') },
    });
    return response.data;
  } catch (error) {
    console.log('Error on Updating user', error);
    return error;
  }
};
// export function useUpdateUserData(body) {
//   return useQuery(['updateRes', body], () => updateUserDataQuery(body));
// }
