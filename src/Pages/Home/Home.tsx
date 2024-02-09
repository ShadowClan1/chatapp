import React from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const defaultTheme = createTheme();
const Home = () => {
  return <ThemeProvider theme={defaultTheme}>
<Container component='main' maxWidth="xs">
<CssBaseline/>
</Container>
  </ThemeProvider>
};

export default Home;
