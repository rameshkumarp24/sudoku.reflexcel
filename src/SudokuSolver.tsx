
import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Alert } from '@mui/material';
import { solveSudokuInPlace } from './sudokuUtils';
import SudokuGrid from './SudokuGrid';

function solveSudoku(board: number[][]): number[][] | null {
  const copy = board.map(row => [...row]);
  if (solveSudokuInPlace(copy)) return copy;
  return null;
}


const emptyBoard = () => Array(9).fill('').map(() => Array(9).fill(''));

const SudokuSolver: React.FC = () => {
  const [input, setInput] = useState<string[][]>(emptyBoard());
  const [solution, setSolution] = useState<number[][] | null>(null);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<boolean[][]>(Array(9).fill(0).map(() => Array(9).fill(false)));

  // Validate user input for Sudoku rules
  const validate = (board: string[][]): boolean[][] => {
    const err = Array(9).fill(0).map(() => Array(9).fill(false));
    // Check rows, columns, and boxes
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const val = board[i][j];
        if (!val) continue;
        // Row
        for (let k = 0; k < 9; k++) {
          if (k !== j && board[i][k] === val) err[i][j] = true;
        }
        // Column
        for (let k = 0; k < 9; k++) {
          if (k !== i && board[k][j] === val) err[i][j] = true;
        }
        // Box
        const boxRow = Math.floor(i / 3) * 3;
        const boxCol = Math.floor(j / 3) * 3;
        for (let r = boxRow; r < boxRow + 3; r++) {
          for (let c = boxCol; c < boxCol + 3; c++) {
            if ((r !== i || c !== j) && board[r][c] === val) err[i][j] = true;
          }
        }
      }
    }
    return err;
  };

  const handleInput = (i: number, j: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const next = input.map(row => [...row]);
      next[i][j] = value;
      setInput(next);
      setErrors(validate(next));
    }
  };

  const handleSolve = () => {
    setError('');
    setSolution(null);
    const err = validate(input);
    setErrors(err);
    const hasError = err.some(row => row.some(Boolean));
    if (hasError) {
      setError('There are mistakes in your puzzle. Please correct highlighted cells.');
      return;
    }
    const board = input.map(row => row.map(cell => parseInt(cell) || 0));
    const solved = solveSudoku(board);
    if (solved) setSolution(solved);
    else setError('No solution found.');
  };

  const handleReset = () => {
    setInput(emptyBoard());
    setSolution(null);
    setError('');
    setErrors(Array(9).fill(0).map(() => Array(9).fill(false)));
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Solve Your Sudoku
      </Typography>
      <Paper sx={{ p: 2, display: 'inline-block', mb: 2 }}>
        <SudokuGrid board={input} errors={errors} onChange={handleInput} />
      </Paper>
      <Box mb={2}>
        <Button variant="contained" onClick={handleSolve} sx={{ mr: 2 }}>Solve</Button>
        <Button variant="outlined" onClick={handleReset}>Reset</Button>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {solution && (
        <Box mt={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'visible' }}>
          <Typography variant="h6">Solution:</Typography>
          <Paper sx={{ p: 2, display: 'inline-block', bgcolor: '#f7f8fa', boxShadow: 3, borderRadius: 3, overflow: 'visible' }}>
            <SudokuGrid board={solution.map(row => row.map(cell => cell.toString()))} readOnly />
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default SudokuSolver;
