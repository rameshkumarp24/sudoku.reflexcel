
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';


import Navbar from './Navbar';
import SudokuGenerator from './SudokuGenerator';
import SudokuSolver from './SudokuSolver';
import About from './About';
import Help from './Help';
import Tutorial from './Tutorial';
import DailyChallenge from './DailyChallenge';
import Leaderboard from './Leaderboard';
import Profile from './Profile';
import Footer from './Footer';



import logo from './assets/logo.png';

const Home: React.FC = () => (
  <Box mt={6} sx={{ textAlign: 'center', px: 4 }}>
    <img src={logo} alt="Sudoku Reflexcel Logo" style={{ height: 80, marginBottom: 16 }} />
    <h1 style={{ fontWeight: 800, fontSize: '2.8em', marginBottom: 8, color: '#1a6ed8', letterSpacing: 1 }}>World Class Sudoku</h1>
    <p style={{ fontSize: '1.25em', color: '#333', marginBottom: 24 }}>
      Play, solve, and master Sudoku with the most advanced, beautiful, and engaging Sudoku site on the web.<br />
      Daily challenges, leaderboards, tutorials, and more. Join millions of players worldwide!
    </p>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
      <button style={{ fontSize: '1.1em', padding: '0.8em 2em', background: '#1a6ed8', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px #1a6ed822' }} onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>Play Now</button>
      <button style={{ fontSize: '1.1em', padding: '0.8em 2em', background: '#fff', color: '#1a6ed8', border: '2px solid #1a6ed8', borderRadius: 8, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px #1a6ed822' }} onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>Learn Sudoku</button>
    </Box>
  </Box>
);


function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar onNav={setPage} currentPage={page} />
      <Box
        sx={{
          minHeight: '100vh',
          minWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          bgcolor: '#f7f8fa',
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: '100%',
            maxWidth: 900,
            minWidth: 320,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            boxShadow: 6,
            borderRadius: 4,
            background: '#fff',
            overflow: 'visible',
            p: { xs: 1, sm: 2, md: 4 },
            mt: 4,
          }}
        >
          {page === 'home' && <Home />}
          {page === 'daily' && <DailyChallenge />}
          {page === 'leaderboard' && <Leaderboard />}
          {page === 'profile' && <Profile />}
          {page === 'generate' && <SudokuGenerator />}
          {page === 'solve' && <SudokuSolver />}
          {page === 'about' && <About />}
          {page === 'help' && <Help />}
          {page === 'tutorial' && <Tutorial />}
          <Box sx={{ mt: 8, width: '100%' }}><Footer /></Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
