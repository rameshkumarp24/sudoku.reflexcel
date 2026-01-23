import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Alert } from '@mui/material';

interface ProfileData {
  name: string;
  streak: number;
  lastCompleted: string;
}

function getProfile(): ProfileData {
  const data = localStorage.getItem('sudoku_profile');
  if (!data) return { name: '', streak: 0, lastCompleted: '' };
  try {
    return JSON.parse(data);
  } catch {
    return { name: '', streak: 0, lastCompleted: '' };
  }
}

function saveProfile(profile: ProfileData) {
  localStorage.setItem('sudoku_profile', JSON.stringify(profile));
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>(getProfile());
  const [name, setName] = useState(profile.name);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setProfile(getProfile());
    setName(getProfile().name);
  }, []);

  const handleSave = () => {
    if (!name.trim()) {
      setMessage('Name cannot be empty.');
      return;
    }
    const updated = { ...profile, name };
    setProfile(updated);
    saveProfile(updated);
    setMessage('Profile updated!');
  };

  return (
    <Box mt={6} sx={{ px: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, color: '#1a6ed8' }}>Your Profile</Typography>
      <Paper sx={{ p: 3, maxWidth: 400, margin: 'auto', mb: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSave} sx={{ fontWeight: 700 }}>Save</Button>
        {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
      </Paper>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <b>Daily Challenge Streak:</b> {profile.streak}<br />
        <b>Last Completed:</b> {profile.lastCompleted || 'Never'}
      </Typography>
    </Box>
  );
};

export default Profile;
