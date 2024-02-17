import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import CustomSnackbar from '@/components/snackbar/snackbar';
import Logo from '../public/login-logo.png';
import Nav from '@/components/Layout/Nav';
import Link from 'next/link';
import AuthLeftComponent from '@/components/AuthPageComponents/AuthLeftComponent';
import ResetPasswordModal from '@/page-components/VerifyEmail/ResetPasswordModal';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL; // Replace with your actual API base URL

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/user/send-forgot-password-link`,
        {
          email: email,
        }
      );

      setMessage(response.data.Message);
      setSnackbarMessage(response.data.Message);
      setSnackbarSeverity('success');
      setOpenModal(true);
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        const errorMessage =
          error.response.data?.Message || 'An error occurred.';
        setError(errorMessage);
        setSnackbarMessage(errorMessage);
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <div className="">
      <div className="lg:flex">
        <div className="hidden lg:block lg:flex-1">
          <AuthLeftComponent />
        </div>

        <div className="lg:flex-1">
          <div className="md:hidden w-full">
            <Nav />
          </div>
          <div className="px-6 pt-[6rem] lg:pt-12 lg:pb-0 pb-6">
            <div className="bg-[#131619] lg:bg-transparent pt-[14rem] lg:pt-28 rounded-[1.25rem] ">
              <div className="lg:mx-[6rem]">
                <div className="hidden lg:block lg:pl-5 lg:mb-4">
                  <Image src={Logo} alt="Logo" />
                </div>
                <h2 className="text-[#F7F7F7] text-2xl font-bold leading-[1.375rem] px-8 mb-4">
                  Reset your password
                </h2>
                <h3 className="text-[#F7F7F7] text-sm font-normal leading-[1.375rem] px-8 mb-4">
                  Enter the email address associated with your account and we
                  will send you a link to reset your password.
                </h3>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4 lg:mx-[7rem] ">
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
                    <div className="px-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-[#35373E] border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-3"
                        required
                      />
                    </div>
                  </div>
                  <div className="px-3 mb-6">
                    <button
                      type="submit"
                      className="w-full px-4 h-[2.75rem] text-[0.8125rem] leading-[1.88706rem] tracking-[0.11794rem] lg:h-[2.93rem] lg:leading-[2.00763rem] lg:text-[0.8365rem] lg:tracking-[0.1255rem] uppercase flex-shrink-0 bg-gradient-to-br from-pink-500 to-indigo-800 rounded-xl hover:bg-transparent transition-all duration-200 hover:scale-y-105 font-semibold not-italic"
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <p className="text-center pb-[12rem] lg:pb-[8rem]">
                  Back to{' '}
                  <Link href="/login">
                    <span className="text-transparent bg-gradient-to-br from-pink-500 to-indigo-800 text-[#D41275] bg-clip-text">
                      Login
                    </span>
                  </Link>
                </p>
                <p className="text-center pb-3">
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
      <ResetPasswordModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <CustomSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default ForgotPassword;
