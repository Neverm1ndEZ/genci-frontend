import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';
import CustomSnackbar from '@/components/snackbar/snackbar';
import { resetPasswordQuery } from 'utils/query/usersQuery';
import Logo from '../public/login-logo.png';
import Nav from '@/components/Layout/Nav';
import Link from 'next/link';
import AuthLeftComponent from '@/components/AuthPageComponents/AuthLeftComponent';
import { Lock } from 'iconsax-react';

const resetPassword = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [showPassword, setShowPassword] = useState(false);
  const [setConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState();

  const router = useRouter();
  const { token } = router.query;

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confPassword || password != confPassword) {
      setSnackbarOpen(true);
      setSnackbarMessage("New password and confirm password don't match");
      return;
    } else if (token) {
      try {
        let result = await resetPasswordQuery(token, { password: password });
        if (result?.data?.Message === 'Password Reset Successfully') {
          setSnackbarOpen(true);
          setSnackbarMessage('Password Reset Successfully');
          setSnackbarSeverity('success');
          router.push('/login');
          return;
        } else {
          setSnackbarOpen(true);
          setSnackbarMessage('Something Went Wrong');
          setSnackbarSeverity('error');
          return;
        }
      } catch (err) {
        setSnackbarOpen(true);
        setSnackbarMessage('Something Went Wrong');
        setSnackbarSeverity('error');
        return;
      }
    } else {
      setSnackbarOpen(true);
      setSnackbarMessage('Invalid Link');
      return;
    }
  };
  const handleSnackbarClose = () => {
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
            <div className="bg-[#131619] lg:bg-transparent pt-[13rem] lg:pt-28 rounded-[1.25rem] ">
              <div className="lg:mx-[6rem]">
                <div className="hidden lg:block lg:pl-5 lg:mb-4">
                  <Image src={Logo} alt="Logo" />
                </div>
                <h2 className="text-[#F7F7F7] text-2xl font-bold leading-[1.375rem] px-8 mb-4">
                  Reset your password
                </h2>
                <h3 className="text-[#F7F7F7] text-sm font-normal leading-[1.375rem] px-8 mb-4">
                  Your new password must be different from previous used
                  passwords.
                </h3>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4 lg:mx-[7rem] ">
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                      <Lock size={20} />
                    </div>
                    <div className="px-4">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#35373E] border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-3"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-5 px-4 py-3 focus:outline-none"
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
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                      <Lock size={20} />
                    </div>
                    <div className="px-4">
                      <input
                        type={setConfirmPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Confirm Password"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                        className="bg-[#35373E] border border-[#35373E] text-[#F7F7F7] placeholder-[#F7F7F7] text-sm rounded-lg block w-full pl-12 p-3"
                        required
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute inset-y-0 right-5 px-4 py-3 focus:outline-none"
                      >
                        <i
                          className={
                            setConfirmPassword
                              ? 'fas fa-eye text-white'
                              : 'fas fa-eye-slash text-white'
                          }
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div className="px-4 mb-6">
                    <button
                      type="submit"
                      className="w-full px-4 h-[2.75rem] text-[0.8125rem] leading-[1.88706rem] tracking-[0.11794rem] lg:h-[2.93rem] lg:leading-[2.00763rem] lg:text-[0.8365rem] lg:tracking-[0.1255rem] uppercase flex-shrink-0 bg-gradientPrimary rounded-xl hover:bg-transparent transition-all duration-200 hover:scale-y-105 font-semibold not-italic"
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <p className="text-center pb-[11rem] lg:pb-[8rem]">
                  Back to{' '}
                  <Link href="/login">
                    <span className="text-transparent bg-gradientPrimary text-[#D41275] bg-clip-text">
                      Login
                    </span>
                  </Link>
                </p>
                <p className="text-center pb-3">
                  Don’t have an account?{' '}
                  <Link href="/enrollment">
                    <span className="text-transparent bg-gradientPrimary text-[#D41275] bg-clip-text">
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
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default resetPassword;
