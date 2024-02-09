import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const defaultTheme = createTheme();

const lo = () => {
  const handleSubmit = () => {};
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondar.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="current-password"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
const Login = () => {
  const handleSubmit = () => {};
  return (
 /*   <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider> */
  <ThemeProvider theme={defaultTheme}>
<Grid  container sx={{height :'100vh'}} component="main">
  <CssBaseline/>
  <Grid bgcolor={'white'} item xs={false} sm={4} md={6} sx={{backgroundImage : "url(https://source.unsplash.com/random?wallpapers)", backgroundRepeat :'no-repeat', backgroundColor : (t) => {
   return ( t.palette.mode === 'light') ? t.palette.grey[50] :t.palette.grey[900]
  }, backgroundSize :"cover", backgroundPosition : "center"}}  /> 
  <Grid xs={12} md={6} bgcolor={'white'} sm={8}
  component={Paper} elevation={6} square
  >
    <Box  
    sx={{my : 8, mx: 4,display:'flex', flexDirection :'column', alignItems : 'center'}}>
<Avatar sx={{ m:1,  bgColor :'secondary.main'}}>
  <LockOutlined/>
</Avatar>
<Typography variant="h5" component='h1'>
  Sign In
</Typography>
<Box component="form" noValidate sx={{mt:1}}>
  <TextField
  margin="normal"
  required 
  fullWidth
  id="email"
  label="email"
  name="email"
  autoComplete="email"
  autoFocus
  />
  <TextField
  margin="normal"
  fullWidth
  required
  id="password"
  label="password"
  type="passowrd"
  name="password"
  autoComplete="current-password"
  />
  <FormControlLabel 
  control={<Checkbox value='remember' color='primary'/>} label="remember me"
  />
  <Button type="submit" fullWidth  variant="contained" sx={{mt:3,mb:2}}>
    Submit
  </Button>
  <Grid container>
  <Grid item xs>
    <Link>
 Forgot passowrd
    </Link>
  </Grid>
  <Grid  item >
    <Link>
Dont have an account? signup
    </Link>
  </Grid>
  </Grid>
</Box>
    </Box>

  </Grid>

</Grid>
</ThemeProvider>
  );
};

export default Login;
