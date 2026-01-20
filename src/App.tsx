
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';

import Navbar from './Navbar';
import SudokuGenerator from './SudokuGenerator';
import SudokuSolver from './SudokuSolver';
import About from './About';
import Help from './Help';
import Footer from './Footer';

const Home: React.FC = () => (
  <Box mt={4}>
    <h2>Welcome to Sudoku Reflexcel</h2>
    <p>
      Generate Sudoku puzzles of various difficulties or solve your own puzzles instantly. Enjoy a clean, modern interface and challenge yourself!
    </p>
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
          justifyContent: 'center',
          bgcolor: '#f7f8fa',
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: 700,
            minWidth: 700,
            maxWidth: 700,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 6,
            borderRadius: 4,
            background: '#fff',
            overflow: 'visible',
            p: 0,
          }}
        >
          {page === 'home' && <Home />}
          {page === 'generate' && <SudokuGenerator />}
          {page === 'solve' && <SudokuSolver />}
          {page === 'about' && <About />}
          {page === 'help' && <Help />}
          <Box sx={{ mt: 'auto', width: '100%' }}><Footer /></Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
