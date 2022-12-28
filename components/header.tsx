import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
  },
});
export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className='logo' component="div" sx={{ flexGrow: 1 }}>
           <Link href={'/'}> MEDGN</Link>
          </Typography>
          <Button color="inherit"><Link href="/find-doctors">Trouver un medécin</Link></Button>
          <Button color="inherit"><Link href="#">S'inscrire</Link></Button>
          <Button color="inherit" className='btn'><Link href="#">Se connecter</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
