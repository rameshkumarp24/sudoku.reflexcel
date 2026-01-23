
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

interface NavbarProps {
  onNav: (page: string) => void;
  currentPage: string;
}

import logo from './assets/logo.png';

const Navbar: React.FC<NavbarProps> = ({ onNav, currentPage }) => (
  <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', color: '#1a6ed8', borderBottom: '2px solid #e0e0e0' }}>
    <Toolbar sx={{ minHeight: 72, px: { xs: 1, sm: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
        <img src={logo} alt="Sudoku Reflexcel Logo" style={{ height: 48, marginRight: 12 }} />
        <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: 1, color: '#1a6ed8' }}>
          Sudoku Reflexcel
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Button onClick={() => onNav('home')} disabled={currentPage === 'home'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>Home</Button>
      <Button onClick={() => onNav('daily')} disabled={currentPage === 'daily'} sx={{ color: '#8e2de2', fontWeight: 700, mx: 1 }}>Daily Challenge</Button>
      <Button onClick={() => onNav('leaderboard')} disabled={currentPage === 'leaderboard'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>Leaderboard</Button>
      <Button onClick={() => onNav('profile')} disabled={currentPage === 'profile'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>Profile</Button>
      <Button onClick={() => onNav('generate')} disabled={currentPage === 'generate'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>Play</Button>
      <Button onClick={() => onNav('solve')} disabled={currentPage === 'solve'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>Solver</Button>
      <Button onClick={() => onNav('tutorial')} disabled={currentPage === 'tutorial'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>Tutorial</Button>
      <Button onClick={() => onNav('about')} disabled={currentPage === 'about'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>About</Button>
      <Button onClick={() => onNav('help')} disabled={currentPage === 'help'} sx={{ color: '#1a6ed8', fontWeight: 700, mx: 1 }}>Help</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
