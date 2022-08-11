/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Button, Drawer, Typography} from '@mui/material';


function Sidebar() {
  
  return (
    <Box className="Sidebar">

        <div className="sidebar.lambda">
          <div className="sidebar.icon sidebar.main">
            Lambda
          </div>
          <div className="sidebar.icon">
            Dashboard
          </div>
          <div className="sidebar.icon">
            Alerts
          </div>
          <div className="sidebar.icon">
            Logs
          </div>
        </div>
        <div className="sidebar.ec2">
          <div className="sidebar.icon sidebar.main">
            EC2
          </div>
          <div className="sidebar.icon">
            Dashboard
          </div>
          <div className="sidebar.icon">
            Alerts
          </div>
          <div className="sidebar.icon">
            Logs
          </div>
        </div>
    </Box>
  );
}

export default Sidebar;

{/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
</g>
</svg> */}