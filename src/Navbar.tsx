import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

interface NavbarProps {
  onNav: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNav, currentPage }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
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
    </Toolbar>
  </AppBar>
);

export default Navbar;
