import React from 'react';
import { Modal, Box } from '@mui/material';
import keychain from '../../public/keychain.png';
import Image from 'next/image';

const ResetPasswordModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="email-verification-modal"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          maxWidth: '90%',
          bgcolor: '#131619',
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
          borderRadius: '12px',
        }}
      >
        <Image
          src={keychain}
          alt="Loading..."
          style={{
            maxWidth: '100%',
            maxHeight: '200px',
            margin: '20px auto',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
        />
        <h2 className=" text-xl font-semibold mb-1">
          Reset you password
        </h2>
        <p className="text-[#F7F7F7] text-sm font-normal leading-[1.375rem] pb-5">
          We have sent a password recover instructions to your email. Please
          check your inbox.
        </p>
      </Box>
    </Modal>
  );
};

export default ResetPasswordModal;
