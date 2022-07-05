import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* This is a Home Page.! */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 10, background:'maroon' }}
          variant="contained"
        >
          <Typography variant="h3">View all products.!</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
