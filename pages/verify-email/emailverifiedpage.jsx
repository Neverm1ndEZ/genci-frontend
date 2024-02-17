import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import {
  setAccessTokenCookie,
  setRefreshTokenCookie,
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
} from 'utils/cookie';

import { CircularProgress } from '@mui/material';

const EmailVerifiedPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [verificationStatus, setVerificationStatus] = useState('loading');
  const [requestInProgress, setRequestInProgress] = useState(true);
  const [showDashboardButton, setShowDashboardButton] = useState(false);

  useEffect(() => {
    if (token) {
      verifyEmail();
    } else {
      setVerificationStatus('not_verified');
    }
  }, [token]);
  console.log(token);

  const verifyEmail = async () => {
    try {
      if (getAccessTokenFromCookie() && getRefreshTokenFromCookie()) {
        router.push('/home');
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/verify-email/${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (!getAccessTokenFromCookie() || !getRefreshTokenFromCookie()) {
          setAccessTokenCookie(data.accessToken);
          setRefreshTokenCookie(data.refreshToken);
        }
        setVerificationStatus('verified');
        setShowDashboardButton(true); // Set the flag to show the dashboard button
      } else {
        setVerificationStatus('not_verified');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setVerificationStatus('error');
    } finally {
      setRequestInProgress(false);
    }
  };

  if (requestInProgress) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <CircularProgress size={100} />
      </div>
    );
  }

  // if (verificationStatus === 'not_verified' || verificationStatus === 'error') {
  //   return (
  //     <h1 className="flex items-center justify-center">404 | Page not found</h1>
  //   );
  // }

  const imageUrl =
    'https://img.freepik.com/premium-vector/opened-envelope-document-with-green-check-mark-line-icon-official-confirmation-message-mail-sent-successfully-email-delivery-verification-email-flat-design-vector_662353-720.jpg?w=360';

  return (
    <div className="h-screen flex items-center justify-center">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          maxWidth: '90%',
          height: '60%',
          bgcolor: '#35373E',
          // boxShadow: 24,
          p: 4,
          textAlign: 'center',
          borderRadius: '12px',
        }}
        className="animate-fade-in"
      >
        <h1 className="text-xl font-bold text-white mb-4">
          Congratulations 🎉
        </h1>
        <img
          src={imageUrl}
          alt="Loading..."
          width={210}
          height={250}
          style={{
            maxWidth: '100%',
            minHeight: '200px',
            margin: '20px auto 35px',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
        />
        <h6 className="text-white mb-4">
          Your Email has been verified. You can now proceed to the Dashboard.
        </h6>
        {showDashboardButton && (
          <button
            onClick={() => router.push('/home')}
            className="text-[#F7F7F7] text-sm font-normal leading-[1.375rem] pb-5"
          >
            Go to Dashboard
          </button>
        )}
      </Box>
    </div>
  );
};

export default EmailVerifiedPage;
