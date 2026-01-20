import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => (
  <Box mt={4}>
    <Typography variant="h4" gutterBottom>About Sudoku Reflexcel</Typography>
    <Typography paragraph>
      Sudoku Reflexcel is a modern, open-source Sudoku web app. Generate puzzles of varying difficulty, solve your own, and enjoy a clean, interactive experience. Built with React, TypeScript, and Material-UI, it is designed for both casual and advanced players.
    </Typography>
    <Typography paragraph>
      Features include:
      <ul>
        <li>Instant puzzle generation and solving</li>
        <li>Difficulty levels from Very Easy to Very Hard</li>
        <li>Input validation and error highlighting</li>
        <li>Responsive, accessible design</li>
        <li>Deployable as a static site (GitHub Pages)</li>
      </ul>
    </Typography>
  </Box>
);

export default About;
