import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Paper, TextField } from '@mui/material';

import { solveSudokuInPlace } from './sudokuUtils';

function solveSudoku(board: number[][]): number[][] | null {
  const copy = board.map(row => [...row]);
  if (solveSudokuInPlace(copy)) return copy;
  return null;
}

const SudokuSolver: React.FC = () => {
  const [input, setInput] = useState(Array(9).fill('').map(() => Array(9).fill('')));
  const [solution, setSolution] = useState<number[][] | null>(null);
  const [error, setError] = useState('');

  const handleInput = (i: number, j: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const next = input.map(row => [...row]);
      next[i][j] = value;
      setInput(next);
    }
  };

  const handleSolve = () => {
    setError('');
    const board = input.map(row => row.map(cell => parseInt(cell) || 0));
    const solved = solveSudoku(board);
    if (solved) setSolution(solved);
    else setError('No solution found.');
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Solve Your Sudoku
      </Typography>
      <Paper sx={{ p: 2, display: 'inline-block', mb: 2 }}>
        <Grid container spacing={0.5}>
          {input.map((row, i) =>
            row.map((cell, j) => (
              <Grid item key={`${i}-${j}`} xs={1}>
                <TextField
                  value={cell}
                  onChange={e => handleInput(i, j, e.target.value)}
                  inputProps={{ maxLength: 1, style: { textAlign: 'center', width: 32, height: 32, fontSize: 18 } }}
                  sx={{ width: 40 }}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Paper>
      <Box>
        <Button variant="contained" onClick={handleSolve}>Solve</Button>
      </Box>
      {error && <Typography color="error" mt={2}>{error}</Typography>}
      {solution && (
        <Box mt={2}>
          <Typography variant="h6">Solution:</Typography>
          <Paper sx={{ p: 2, display: 'inline-block' }}>
            <Grid container spacing={0.5}>
              {solution.map((row, i) =>
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
                        background: '#fff',
                      }}
                    >
                      {cell}
                    </Box>
                  </Grid>
                ))
              )}
            </Grid>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default SudokuSolver;
