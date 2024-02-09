import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

const Signup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            bgColor: "white",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main", m: 2 }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" component="h1">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                {/* first name and last name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  margin="normal"
                  type="text"
                  name="firstName"
                  fullWidth
                  autoFocus
                />
              </Grid>
              {/*  */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  margin="normal"
                  type="text"
                  name="lastName"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  margin="normal"
                  type="email"
                  name="email"
                  fullWidth
                />
              </Grid> 

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  margin="normal"
                  type="password"
                  name="password"
                  fullWidth
                />
              </Grid>

            <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth sx={{mt :3,mb :2}}>
                    Submit
                </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>

                <Link to="/">Sign In </Link>
                </Grid>
                
                <Grid>

                </Grid>
            </Grid>
            </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
