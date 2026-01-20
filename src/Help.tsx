import React from 'react';
import { Box, Typography } from '@mui/material';

const Help: React.FC = () => (
  <Box mt={4}>
    <Typography variant="h4" gutterBottom>Help & Instructions</Typography>
    <Typography paragraph>
      <b>How to Play:</b>
      <ul>
        <li>Select <b>Generate</b> to create a new puzzle. Choose your preferred difficulty.</li>
        <li>To solve your own puzzle, go to <b>Solve</b> and enter the numbers. Empty cells can be left blank or set to 0.</li>
        <li>Click <b>Solve</b> to get the solution. Incorrect entries will be highlighted in red.</li>
        <li>Use <b>Reset</b> to clear the board or <b>New Puzzle</b> to start over.</li>
      </ul>
    </Typography>
    <Typography paragraph>
      <b>Tips:</b>
      <ul>
        <li>Each row, column, and 3x3 box must contain the numbers 1-9 exactly once.</li>
        <li>Use the error highlights to correct mistakes before solving.</li>
        <li>Enjoy and challenge yourself!</li>
      </ul>
    </Typography>
  </Box>
);

export default Help;
