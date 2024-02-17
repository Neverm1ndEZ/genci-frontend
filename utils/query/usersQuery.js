import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const resetPasswordQuery = async (token, body) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/user/reset-password/${token}`,
      body
    );
    return response;
  } catch (error) {
    console.error('Error on Password Reset', error);
    return error;
  }
};
