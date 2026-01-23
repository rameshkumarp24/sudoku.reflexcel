import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Alert } from '@mui/material';
import { generateSudokuWithDifficulty, solveSudokuInPlace } from './sudokuUtils';
import SudokuGrid from './SudokuGrid';

const getTodaySeed = () => {
  // Use YYYYMMDD as seed for daily puzzle
  const d = new Date();
  return `${d.getFullYear()}${(d.getMonth()+1).toString().padStart(2,'0')}${d.getDate().toString().padStart(2,'0')}`;
};

function seededRandom(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return () => {
    h ^= h << 13; h ^= h >> 17; h ^= h << 5;
    return Math.abs(h) % 100000 / 100000;
  };
}

function generateDailyPuzzle(difficulty: string, seed: string) {
  // Use seed to shuffle positions for reproducible daily puzzle
  const cluesMap: Record<string, number> = {
    'very-easy': 42,
    'easy': 38,
    'medium': 34,
    'hard': 29,
    'very-hard': 24,
  };
  const clues = cluesMap[difficulty] || 34;
  const board = generateSudokuWithDifficulty('medium'); // Use medium for daily
  // Shuffle cells with seeded random
  const rand = seededRandom(seed);
  const positions = Array.from({length: 81}, (_, i) => i);
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }
  let cellsToRemove = 81 - clues;
  for (const pos of positions) {
    if (cellsToRemove === 0) break;
    const row = Math.floor(pos / 9);
    const col = pos % 9;
    board[row][col] = 0;
    cellsToRemove--;
  }
  return board;
}



const DailyChallenge: React.FC = () => {
  const seed = getTodaySeed();
  const initialPuzzle = generateDailyPuzzle('medium', seed);
  const [puzzle] = useState<number[][] | null>(initialPuzzle);
  const [userBoard, setUserBoard] = useState<string[][]>(initialPuzzle.map(row => row.map(cell => (cell === 0 ? '' : cell.toString()))));
  const [errors, setErrors] = useState<boolean[][]>(Array(9).fill(0).map(() => Array(9).fill(false)));
  const [message, setMessage] = useState('');
  const [solved, setSolved] = useState<number[][] | null>(null);
  const [completed, setCompleted] = useState(false);

  const validate = (board: string[][]): boolean[][] => {
    const err = Array(9).fill(0).map(() => Array(9).fill(false));
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const val = board[i][j];
        if (!val) continue;
        for (let k = 0; k < 9; k++) {
          if (k !== j && board[i][k] === val) err[i][j] = true;
        }
        for (let k = 0; k < 9; k++) {
          if (k !== i && board[k][j] === val) err[i][j] = true;
        }
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
    if (puzzle[i][j] !== 0) return;
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
    const allFilled = userBoard.every(row => row.every(cell => cell));
    if (allFilled) {
      if (puzzle) {
        const solution = puzzle.map(row => [...row]);
        solveSudokuInPlace(solution);
        const correct = userBoard.every((row, i) => row.every((cell, j) => parseInt(cell) === solution[i][j]));
        if (correct) {
          setMessage('Congratulations! You solved today\'s challenge!');
          setSolved(solution);
          setCompleted(true);
          // Save completion to localStorage
          localStorage.setItem('sudoku_daily_completed', getTodaySeed());
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
    setCompleted(false);
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Daily Sudoku Challenge
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Solve today\'s puzzle and track your streak!
      </Typography>
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
      {completed && (
        <Alert severity="success" sx={{ mt: 2 }}>
          You completed today\'s challenge! Come back tomorrow for a new puzzle.
        </Alert>
      )}
    </Box>
  );
};

export default DailyChallenge;
