
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
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: 700,
          height: 900,
          minWidth: 700,
          minHeight: 900,
          maxWidth: 700,
          maxHeight: 900,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          margin: '32px auto 0 auto',
          boxShadow: 6,
          borderRadius: 4,
          background: '#fff',
          overflow: 'hidden',
        }}
      >
        {page === 'home' && <Home />}
        {page === 'generate' && <SudokuGenerator />}
        {page === 'solve' && <SudokuSolver />}
        {page === 'about' && <About />}
        {page === 'help' && <Help />}
        <Box sx={{ mt: 'auto', width: '100%' }}><Footer /></Box>
      </Container>
    </>
  );
}

export default App;
