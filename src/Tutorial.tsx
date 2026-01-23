import React from 'react';
import { Box, Typography } from '@mui/material';

const Tutorial: React.FC = () => (
  <Box mt={6} sx={{ px: 4 }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, color: '#1a6ed8' }}>Sudoku Tutorial</Typography>
    <Typography paragraph sx={{ fontSize: '1.15em', color: '#333' }}>
      <b>Learn to master Sudoku!</b> Whether you are a beginner or an expert, these tips and strategies will help you solve puzzles faster and smarter.
    </Typography>
    <Typography paragraph sx={{ fontSize: '1.1em', color: '#333' }}>
      <b>Basic Rules:</b>
      <ul style={{ marginLeft: 24, fontSize: '1em' }}>
        <li>Each row, column, and 3x3 box must contain the numbers 1-9 exactly once.</li>
        <li>Start with easy puzzles to learn techniques, then try harder ones for a challenge.</li>
      </ul>
    </Typography>
    <Typography paragraph sx={{ fontSize: '1.1em', color: '#333' }}>
      <b>Solving Strategies:</b>
      <ul style={{ marginLeft: 24, fontSize: '1em' }}>
        <li><b>Scanning:</b> Look for rows, columns, or boxes where only one number is missing.</li>
        <li><b>Cross-hatching:</b> Use elimination by checking intersecting rows and columns.</li>
        <li><b>Pencil marks:</b> Note possible candidates in empty cells.</li>
        <li><b>Advanced:</b> Try techniques like Naked Pairs, Hidden Singles, X-Wing, Swordfish, and more.</li>
      </ul>
    </Typography>
    <Typography paragraph sx={{ fontSize: '1.1em', color: '#333' }}>
      <b>Practice daily and track your progress!</b> Join our daily challenges and leaderboards to compete with players worldwide.
    </Typography>
  </Box>
);

export default Tutorial;
