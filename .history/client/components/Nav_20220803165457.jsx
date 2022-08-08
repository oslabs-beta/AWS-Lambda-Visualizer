/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';
import Login from '../components/Login.jsx';

function Nav() {
  return (
    <Box className="Nav">
      <div>Lumos</div>
      <Login />
    </Box>
  );
}

export default Nav;
