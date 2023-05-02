import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  const style = {
   backgroundImage: 'url(https://t4.ftcdn.net/jpg/04/30/41/55/360_F_430415501_HEdw3E2rdobyQXr7qe1ar8BBqRtPXgwe.jpg)',
   backgroundRepeat : "no-repeat",
   backgroundSize : "100% 100vh",
   position : "absolute",
   height : "100%",
   width : "100%",
  }
  return (
    <div style={style}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;
