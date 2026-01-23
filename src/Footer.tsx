import React from 'react';
import { Box, Typography, Link } from '@mui/material';


const Footer: React.FC = () => (
  <Box component="footer" sx={{ mt: 6, py: 3, textAlign: 'center', bgcolor: '#f7f8fa', borderTop: '2px solid #e0e0e0' }}>
    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
      © 2026 Sudoku Reflexcel &nbsp;|&nbsp;
      <Link href="https://github.com/rameshkumarp24/sudoku.reflexcel" target="_blank" rel="noopener" sx={{ color: '#1a6ed8', fontWeight: 700 }}>GitHub</Link>
      </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
      Made with ❤️ for Sudoku fans worldwide. Join millions of players!
    </Typography>
  </Box>
);

export default Footer;
