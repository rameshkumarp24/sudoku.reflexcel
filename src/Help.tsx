import React from 'react';
import { Box, Typography } from '@mui/material';


const Help: React.FC = () => (
  <Box mt={6} sx={{ px: 4 }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, color: '#1a6ed8' }}>Help & Instructions</Typography>
    <Typography paragraph sx={{ fontSize: '1.15em', color: '#333' }}>
      <b>How to Play:</b>
      <ul style={{ marginLeft: 24, fontSize: '1em' }}>
        <li>Click <b>Play</b> to generate a new puzzle. Choose your preferred difficulty.</li>
        <li>To solve your own puzzle, go to <b>Solver</b> and enter the numbers. Leave empty cells blank.</li>
        <li>Click <b>Solve</b> to get the solution. Incorrect entries will be highlighted in red.</li>
        <li>Use <b>Reset</b> to clear the board or <b>Play</b> for a new puzzle.</li>
      </ul>
    </Typography>
    <Typography paragraph sx={{ fontSize: '1.1em', color: '#333' }}>
      <b>Tips & Strategies:</b>
      <ul style={{ marginLeft: 24, fontSize: '1em' }}>
        <li>Each row, column, and 3x3 box must contain the numbers 1-9 exactly once.</li>
        <li>Use error highlights to correct mistakes before solving.</li>
        <li>Start with easy puzzles to learn techniques, then try harder ones for a challenge.</li>
        <li>Check out our tutorials for advanced solving strategies!</li>
        <li>Enjoy and challenge yourself—track your progress and compete on leaderboards!</li>
      </ul>
    </Typography>
    <Typography paragraph sx={{ fontSize: '1.1em', color: '#333' }}>
      <b>Need more help?</b> Visit our tutorials or contact us for support. Happy solving!
    </Typography>
  </Box>
);

export default Help;
