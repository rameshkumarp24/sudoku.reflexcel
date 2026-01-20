import React from 'react';
import { Box, Grid, TextField } from '@mui/material';

export interface SudokuGridProps {
  board: string[][];
  errors?: boolean[][];
  onChange?: (row: number, col: number, value: string) => void;
  readOnly?: boolean;
}



const cellSize = 48;
const SudokuGrid: React.FC<SudokuGridProps> = ({ board, errors, onChange, readOnly }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '60vh',
    }}
  >
    <Box
      sx={{
        border: '4px solid #1a6ed8',
        borderRadius: 3,
        background: '#fff',
        boxShadow: 3,
        p: 2,
        width: cellSize * 9 + 16,
        maxWidth: '98vw',
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(9, ${cellSize}px)`,
          gridTemplateRows: `repeat(9, ${cellSize}px)`,
          gap: 0,
        }}
      >
        {board.map((row, i) =>
          row.map((cell, j) => {
            // Thicker borders for 3x3 boxes
            const style = {
              borderTop: i % 3 === 0 ? '3px solid #8e2de2' : '1px solid #bdbdbd',
              borderLeft: j % 3 === 0 ? '3px solid #8e2de2' : '1px solid #bdbdbd',
              borderRight: j === 8 ? '3px solid #8e2de2' : undefined,
              borderBottom: i === 8 ? '3px solid #8e2de2' : undefined,
              background: errors && errors[i] && errors[i][j] ? '#ffeaea' : '#fff',
              color: errors && errors[i] && errors[i][j] ? '#d32f2f' : '#1a237e',
              fontWeight: 'bold',
              fontSize: 28,
              textAlign: 'center' as const,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              boxSizing: 'border-box' as const,
              borderRadius: 0,
              outline: 'none',
              transition: 'background 0.2s',
              cursor: readOnly ? 'default' : 'pointer',
            };
            return (
              <TextField
                key={`${i}-${j}`}
                value={cell}
                onChange={e => onChange && onChange(i, j, e.target.value.replace(/[^1-9]/, ''))}
                inputProps={{
                  maxLength: 1,
                  style,
                  readOnly: readOnly,
                }}
                sx={{
                  width: cellSize,
                  height: cellSize,
                  m: 0,
                  p: 0,
                  '& .MuiInputBase-input': style,
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  '& .MuiOutlinedInput-root': { p: 0 },
                }}
                error={!!(errors && errors[i] && errors[i][j])}
                variant="outlined"
              />
            );
          })
        )}
      </Box>
    </Box>
  </Box>
);

export default SudokuGrid;
