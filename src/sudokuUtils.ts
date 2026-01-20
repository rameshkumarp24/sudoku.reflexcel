// sudokuUtils.ts
// Utility functions for generating and solving Sudoku puzzles with difficulty levels

export type SudokuBoard = number[][];

// Helper to create an empty board
export function createEmptyBoard(): SudokuBoard {
  return Array(9).fill(0).map(() => Array(9).fill(0));
}

// Check if placing num at (row, col) is valid
function isValid(board: SudokuBoard, row: number, col: number, num: number): boolean {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;
  }
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
}

// Backtracking solver (modifies board in place)
export function solveSudokuInPlace(board: SudokuBoard): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudokuInPlace(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Generate a full valid board
export function generateFullBoard(): SudokuBoard {
  const board = createEmptyBoard();
  fillBoard(board);
  return board;
}

function fillBoard(board: SudokuBoard): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const nums = shuffle([1,2,3,4,5,6,7,8,9]);
        for (const num of nums) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (fillBoard(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function shuffle(arr: number[]): number[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Remove cells to create a puzzle with a given difficulty
export function generateSudokuWithDifficulty(difficulty: string): SudokuBoard {
  // Difficulty: number of clues (more clues = easier)
  // Standard: Very Easy (40+), Easy (36-39), Medium (32-35), Hard (28-31), Very Hard (22-27)
  const cluesMap: Record<string, number> = {
    'very-easy': 42,
    'easy': 38,
    'medium': 34,
    'hard': 29,
    'very-hard': 24,
  };
  const clues = cluesMap[difficulty] || 34;
  const board = generateFullBoard();
  let cellsToRemove = 81 - clues;
  const positions = shuffle(Array.from({length: 81}, (_, i) => i));
  for (const pos of positions) {
    if (cellsToRemove === 0) break;
    const row = Math.floor(pos / 9);
    const col = pos % 9;
    board[row][col] = 0;
    // Optionally: check for unique solution here (not implemented for speed)
    cellsToRemove--;
  }
  return board;
}
