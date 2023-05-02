import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const style = {
    backgroundImage: 'url(https://wallpaperaccess.com/full/4965973.png)',
    backgroundRepeat : "no-repeat",
    backgroundSize : "100% 100vh",
    position : "absolute",
    height : "100%",
    width : "100%",
   }
   return (
     <div style={style}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "#5D3FD3" , borderRadius : '10px'}}
          variant="contained"
        >
          <Typography variant="h4">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
