import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CustomSnackbar = ({ open, onClose, message, severity }) => {
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleSnackbarClose}>
      <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;
