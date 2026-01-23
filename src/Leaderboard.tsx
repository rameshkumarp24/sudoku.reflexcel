import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface LeaderboardEntry {
  name: string;
  streak: number;
  date: string;
}

// For demo: use localStorage for leaderboard
function getLeaderboard(): LeaderboardEntry[] {
  const data = localStorage.getItem('sudoku_leaderboard');
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

const Leaderboard: React.FC = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    setEntries(getLeaderboard().sort((a, b) => b.streak - a.streak));
  }, []);

  return (
    <Box mt={6} sx={{ px: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, color: '#1a6ed8' }}>Leaderboard</Typography>
      <Typography paragraph sx={{ fontSize: '1.15em', color: '#333' }}>
        Top Sudoku solvers by daily challenge streak. Complete daily challenges to appear here!
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Streak</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Last Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">No entries yet. Be the first to complete a daily challenge!</TableCell>
              </TableRow>
            ) : (
              entries.map((entry, idx) => (
                <TableRow key={idx}>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.streak}</TableCell>
                  <TableCell>{entry.date}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leaderboard;
