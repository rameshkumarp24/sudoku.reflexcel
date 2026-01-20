import React, { useState } from 'react';
import { Box, Button, Typography, MenuItem, Select, Grid, Paper } from '@mui/material';

const DIFFICULTIES = [
  { label: 'Very Easy', value: 'very-easy' },
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' },
  { label: 'Very Hard', value: 'very-hard' },
];

import { generateSudokuWithDifficulty } from './sudokuUtils';

const SudokuGenerator: React.FC = () => {
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0].value);
  const [puzzle, setPuzzle] = useState<number[][] | null>(null);

  const handleGenerate = () => {
    setPuzzle(generateSudokuWithDifficulty(difficulty));
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Generate Sudoku Puzzle
      </Typography>
      <Box mb={2}>
        <Select
          value={difficulty}
          onChange={e => setDifficulty(e.target.value as string)}
        >
          {DIFFICULTIES.map(d => (
            <MenuItem key={d.value} value={d.value}>{d.label}</MenuItem>
          ))}
        </Select>
        <Button variant="contained" sx={{ ml: 2 }} onClick={handleGenerate}>
          Generate
        </Button>
      </Box>
      {puzzle && (
        <Paper sx={{ p: 2, display: 'inline-block' }}>
          <Grid container spacing={0.5}>
            {puzzle.map((row, i) =>
              row.map((cell, j) => (
                <Grid item key={`${i}-${j}`} xs={1}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      border: '1px solid #ccc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: 18,
                      background: cell === 0 ? '#f5f5f5' : '#fff',
                    }}
                  >
                    {cell !== 0 ? cell : ''}
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default SudokuGenerator;
