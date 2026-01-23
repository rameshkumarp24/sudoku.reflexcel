import React from 'react';
import { Box, Typography } from '@mui/material';


const About: React.FC = () => (
  <Box mt={6} sx={{ px: 4 }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, color: '#1a6ed8' }}>About Sudoku Reflexcel</Typography>
    <Typography paragraph sx={{ fontSize: '1.15em', color: '#333' }}>
      <b>Sudoku Reflexcel</b> is a world-class, open-source Sudoku web app designed for millions of players worldwide. Enjoy instant puzzle generation, advanced solving, daily challenges, leaderboards, and a beautiful, modern interface. Built with React, TypeScript, and Material-UI for speed, accessibility, and engagement.
    </Typography>
    <Typography paragraph sx={{ fontSize: '1.1em', color: '#333' }}>
      <b>Features:</b>
      <ul style={{ marginLeft: 24, fontSize: '1em' }}>
        <li>Instant puzzle generation and solving</li>
        <li>Difficulty levels: Very Easy to Very Hard</li>
        <li>Daily challenges and global leaderboards</li>
        <li>Input validation, error highlighting, and hints</li>
        <li>Responsive, accessible, and fast design</li>
        <li>Rich tutorials and help for all skill levels</li>
        <li>Privacy-first user profiles and stats (local)</li>
        <li>Deployable as a static site (GitHub Pages)</li>
      </ul>
    </Typography>
    <Typography paragraph sx={{ fontSize: '1.1em', color: '#333' }}>
      <b>Why Sudoku Reflexcel?</b><br />
      Our mission is to deliver the best Sudoku experience on the web—better than sudoku.com. Join millions of players, challenge yourself, and master Sudoku with the most advanced, beautiful, and engaging site available.
    </Typography>
  </Box>
);

export default About;
