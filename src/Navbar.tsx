import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface NavbarProps {
  onNav: (page: string) => void;
  currentPage: string;
}

import logo from './assets/logo.png';

const Navbar: React.FC<NavbarProps> = ({ onNav, currentPage }) => (
  <AppBar position="static">
    <Toolbar>
      <img src={logo} alt="Reflexcel Logo" style={{ height: 40, marginRight: 16 }} />
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
        Sudoku Reflexcel
      </Typography>
      <Button color="inherit" onClick={() => onNav('home')} disabled={currentPage === 'home'}>
        Home
      </Button>
      <Button color="inherit" onClick={() => onNav('generate')} disabled={currentPage === 'generate'}>
        Generate
      </Button>
      <Button color="inherit" onClick={() => onNav('solve')} disabled={currentPage === 'solve'}>
        Solve
      </Button>
      <Button color="inherit" onClick={() => onNav('about')} disabled={currentPage === 'about'}>
        About
      </Button>
      <Button color="inherit" onClick={() => onNav('help')} disabled={currentPage === 'help'}>
        Help
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
