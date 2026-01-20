
import React, { useState } from 'react';
import { Box, Button, Typography, MenuItem, Select, Paper, Alert } from '@mui/material';
import { generateSudokuWithDifficulty, solveSudokuInPlace } from './sudokuUtils';
import SudokuGrid from './SudokuGrid';

const DIFFICULTIES = [
  { label: 'Very Easy', value: 'very-easy' },
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' },
  { label: 'Very Hard', value: 'very-hard' },
];

const emptyBoard = () => Array(9).fill('').map(() => Array(9).fill(''));

const SudokuGenerator: React.FC = () => {
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0].value);
  const [puzzle, setPuzzle] = useState<number[][] | null>(null);
  const [userBoard, setUserBoard] = useState<string[][]>(emptyBoard());
  const [errors, setErrors] = useState<boolean[][]>(Array(9).fill(0).map(() => Array(9).fill(false)));
  const [message, setMessage] = useState('');
  const [solved, setSolved] = useState<number[][] | null>(null);

  const handleGenerate = () => {
    const newPuzzle = generateSudokuWithDifficulty(difficulty);
    setPuzzle(newPuzzle);
    setUserBoard(newPuzzle.map(row => row.map(cell => (cell === 0 ? '' : cell.toString()))));
    setErrors(Array(9).fill(0).map(() => Array(9).fill(false)));
    setMessage('');
    setSolved(null);
  };

  const validate = (board: string[][]): boolean[][] => {
    const err = Array(9).fill(0).map(() => Array(9).fill(false));
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
    if (!puzzle) return;
    if (puzzle[i][j] !== 0) return; // Don't allow editing clues
    if (/^\d?$/.test(value)) {
      const next = userBoard.map(row => [...row]);
      next[i][j] = value;
      setUserBoard(next);
      setErrors(validate(next));
      setMessage('');
    }
  };

  const handleCheck = () => {
    const err = validate(userBoard);
    setErrors(err);
    const hasError = err.some(row => row.some(Boolean));
    if (hasError) {
      setMessage('There are mistakes. Please correct highlighted cells.');
      setSolved(null);
      return;
    }
    // Check if all cells are filled
    const allFilled = userBoard.every(row => row.every(cell => cell));
    if (allFilled) {
      // Check if solution is correct
      if (puzzle) {
        const solution = puzzle.map(row => [...row]);
        solveSudokuInPlace(solution);
        const correct = userBoard.every((row, i) => row.every((cell, j) => parseInt(cell) === solution[i][j]));
        if (correct) {
          setMessage('Congratulations! You solved the puzzle!');
          setSolved(solution);
        } else {
          setMessage('Some values are incorrect.');
          setSolved(null);
        }
      }
    } else {
      setMessage('Keep going! Fill all cells.');
      setSolved(null);
    }
  };

  const handleReset = () => {
    if (puzzle) setUserBoard(puzzle.map(row => row.map(cell => (cell === 0 ? '' : cell.toString()))));
    setErrors(Array(9).fill(0).map(() => Array(9).fill(false)));
    setMessage('');
    setSolved(null);
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Generate & Play Sudoku
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
        <Paper sx={{ p: 2, mb: 2 }}>
          <SudokuGrid board={userBoard} errors={errors} onChange={handleInput} />
        </Paper>
      )}
      {puzzle && (
        <Box mb={2}>
          <Button variant="contained" onClick={handleCheck} sx={{ mr: 2 }}>Check</Button>
          <Button variant="outlined" onClick={handleReset}>Reset</Button>
        </Box>
      )}
      {message && <Alert severity={message.startsWith('Congratulations') ? 'success' : 'info'} sx={{ mb: 2 }}>{message}</Alert>}
      {solved && (
        <Box mt={2}>
          <Typography variant="h6">Solution:</Typography>
          <Paper sx={{ p: 2, display: 'inline-block' }}>
            <SudokuGrid board={solved.map(row => row.map(cell => cell.toString()))} readOnly />
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default SudokuGenerator;
