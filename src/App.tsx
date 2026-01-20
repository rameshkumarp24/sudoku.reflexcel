
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
      <Container maxWidth="md">
        {page === 'home' && <Home />}
        {page === 'generate' && <SudokuGenerator />}
        {page === 'solve' && <SudokuSolver />}
        {page === 'about' && <About />}
        {page === 'help' && <Help />}
      </Container>
      <Footer />
    </>
  );
}

export default App;
