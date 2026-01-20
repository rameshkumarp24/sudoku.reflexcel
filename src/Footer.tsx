import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ mt: 6, py: 2, textAlign: 'center', bgcolor: '#f5f5f5' }}>
    <Typography variant="body2" color="text.secondary">
      © 2026 Sudoku Reflexcel &nbsp;|&nbsp;
      <Link href="https://www.sudoku.reflexcel.com" target="_blank" rel="noopener">GitHub</Link>
    </Typography>
  </Box>
);

export default Footer;
