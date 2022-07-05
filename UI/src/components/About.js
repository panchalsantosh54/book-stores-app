import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "serif" }} variant="h2">
          This is a CRUD application and Book Store.!
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Using MERN Stack.!
        </Typography>
        <Typography sx={{ fontFamily: "cursive" }} variant="h4">
          By Santosh
        </Typography>
      </Box>
    </div>
  );
};

export default About;
