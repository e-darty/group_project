
import React from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Info from "./Info";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function Home(props) {
  return (

    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >

      <h2 className="title">Welcome to edarty</h2>

      <Box
        sx={{
          // bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            left="center"
            color="text.primary"
            gutterBottom
          >
            E-Darty
          </Typography>
          <Typography
            variant="h5"
            position="absolute"
            left="290px"
            align="center"
            color="text.secondary"
            paragraph
          >
            Our commitment is to make your life easier.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>


      <Box
        sx={{
          // bgcolor: 'background.paper',
          pt: 6,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h5"
            position="absolute"
            left="50px"
            color="text.secondary"
            paragraph
          >
            Edarty is a service provider that assists all citizens in obtaining
            their personal <br />
            documents without wasting time in the administrative process. We
            will be able
            <br />
            to retrieve any type of certificate that you require including:
            <br />
            - Your CIN <br />
            - Your Grey Card <br />
            - Your Driving Licence 
            
            <br />
            
            
            <br />
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>
     
    </div>
  );
}
export default Home;
