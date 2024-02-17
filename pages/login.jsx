import React, { useState, useEffect } from 'react';
import CustomSnackbar from '@/components/snackbar/snackbar';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  setAccessTokenCookie,
  setRefreshTokenCookie,
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
} from '../utils/cookie';
import Logo from '../public/login-logo.png';
import Nav from '@/components/Layout/Nav';
import Image from 'next/image';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import AuthLeftComponent from '@/components/AuthPageComponents/AuthLeftComponent';

const Login = () => {
  // const Url = 'https://apis.genci.university/api/user/login';
  const Url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/login`;
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCloseUserNotFoundDialog = () => {
    setUserNotFound(false);
  };

  useEffect(() => {
    const accessToken = getAccessTokenFromCookie();
    const refreshToken = getRefreshTokenFromCookie();
    if (accessToken && refreshToken) {
      router.push('/home');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      if (getAccessTokenFromCookie() && getRefreshTokenFromCookie()) {
        router.push('/home');
        return;
      }
      const response = await axios.post(`${Url}`, formData);

      const { accessToken, refreshToken } = response.data;

      setAccessTokenCookie(accessToken);
      setRefreshTokenCookie(refreshToken);

      setFormData({
        email: '',
        password: '',
      });

      router.push('/home');
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        const errorMessage =
          error.response.data?.Message || 'An error occurred.';
        setUserNotFound(true);
        setSnackbarMessage(errorMessage);
        setSnackbarSeverity('error');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="">
      <div className="lg:flex">
        <div className="hidden lg:block lg:flex-1">
          <AuthLeftComponent />
        </div>

        <div className="lg:flex-1">
          <div className="lg:hidden w-full">
            <Nav />
          </div>
          <div className="px-6 pt-[7rem] lg:pt-12 lg:pb-0 pb-6 max-w-2xl mx-auto">
            <div className="bg-[#131619] lg:bg-transparent pt-12 rounded-[1.25rem] ">
              <div className="px-[6rem]">
                <div className="hidden lg:block lg:pl-5 lg:mb-8">
                  <Image src={Logo} alt="Logo" />
                </div>
                <h2 className="text-[#F7F7F7] text-2xl font-bold leading-[1.375rem] px-8 mb-4">
                  Welcome Back
                </h2>
                <h3 className="text-[#F7F7F7] text-sm font-normal leading-[1.375rem] px-8 mb-4">
                  Welcome back! Please enter your details.
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 px-[6rem] ">
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Outline / Messages, Conversation  /  Letter">
                          <path
                            id="Vector"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z"
                            fill="#F7F7F7"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="px-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Email"
                        className="bg-[#35373E] border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-3"
                        required
                      />
                    </div>
                  </div>
                  <div className="relative mb-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55229 15 9 15.4477 9 16Z"
                          fill="#F7F7F7"
                        />
                        <path
                          d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                          fill="#F7F7F7"
                        />
                        <path
                          d="M16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z"
                          fill="#F7F7F7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.25 8V9.30277C5.02317 9.31872 4.80938 9.33948 4.60825 9.36652C3.70814 9.48754 2.95027 9.74643 2.34835 10.3483C1.74643 10.9503 1.48754 11.7081 1.36652 12.6082C1.24996 13.4752 1.24998 14.5775 1.25 15.9451V16.0549C1.24998 17.4225 1.24996 18.5248 1.36652 19.3918C1.48754 20.2919 1.74643 21.0497 2.34835 21.6516C2.95027 22.2536 3.70814 22.5125 4.60825 22.6335C5.47522 22.75 6.57754 22.75 7.94513 22.75H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6516C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V15.9451C22.75 14.5775 22.75 13.4752 22.6335 12.6082C22.5125 11.7081 22.2536 10.9503 21.6517 10.3483C21.0497 9.74643 20.2919 9.48754 19.3918 9.36652C19.1906 9.33948 18.9768 9.31872 18.75 9.30277V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8ZM12 2.75C9.10051 2.75 6.75 5.10051 6.75 8V9.25344C7.12349 9.24999 7.52152 9.24999 7.94499 9.25H16.0549C16.4783 9.24999 16.8765 9.24999 17.25 9.25344V8C17.25 5.10051 14.8995 2.75 12 2.75ZM4.80812 10.8531C4.07435 10.9518 3.68577 11.1322 3.40901 11.409C3.13225 11.6858 2.9518 12.0743 2.85315 12.8081C2.75159 13.5635 2.75 14.5646 2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16C21.25 14.5646 21.2484 13.5635 21.1469 12.8081C21.0482 12.0743 20.8678 11.6858 20.591 11.409C20.3142 11.1322 19.9257 10.9518 19.1919 10.8531C18.4365 10.7516 17.4354 10.75 16 10.75H8C6.56459 10.75 5.56347 10.7516 4.80812 10.8531Z"
                          fill="#F7F7F7"
                        />
                      </svg>
                    </div>
                    <div className="px-4">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="bg-[#35373E] border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-3"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-5 px-4 py-3 focus:outline-none "
                      >
                        <i
                          className={
                            showPassword
                              ? 'fas fa-eye text-white'
                              : 'fas fa-eye-slash text-white'
                          }
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm font-normal text-[#A5A6A9] pr-4 mb-6">
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="px-4 mb-6">
                    <button
                      type="submit"
                      className="w-full px-4 h-[2.75rem] text-[0.8125rem] leading-[1.88706rem] tracking-[0.11794rem] lg:h-[2.93rem] lg:leading-[2.00763rem] lg:text-[0.8365rem] lg:tracking-[0.1255rem] uppercase flex-shrink-0 bg-gradient-to-br from-pink-500 to-indigo-800 rounded-xl hover:bg-transparent transition-all duration-200 hover:scale-y-105 font-semibold not-italic"
                    >
                      {submitting ? (
                        <CircularProgress size={18} sx={{ color: 'blue' }} />
                      ) : (
                        'Login'
                      )}
                    </button>
                  </div>
                  <div className="relative flex items-center px-4 mb-6">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-center text-sm font-normal text-[#A5A6A9]">
                      Or login with
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                </div>
                <div className="px-8 lg:px-6 grid grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-4 pb-14 lg:pb-8">
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <GoogleIcon />
                  </button>
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <FacebookIcon />
                  </button>
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <TwitterIcon />
                  </button>
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <AppleIcon />
                  </button>
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <GitHubIcon />
                  </button>
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <MicrosoftIcon />
                  </button>
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <LinkedInIcon />
                  </button>
                  <button className="bg-[#202429] w-[3.1rem] h-[3.1rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-xl">
                    <RedditIcon />
                  </button>
                </div>
                <p className="hidden lg:block text-center">
                  Don’t have an account?{' '}
                  <Link href="/enrollment">
                    <span className="text-transparent bg-gradient-to-br from-pink-500 to-indigo-800 text-[#D41275] bg-clip-text">
                      Sign up
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CustomSnackbar
        open={userNotFound}
        onClose={() => setUserNotFound(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default Login;
