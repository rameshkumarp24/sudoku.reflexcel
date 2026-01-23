import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a6ed8',
    },
    secondary: {
      main: '#8e2de2',
    },
    background: {
      default: '#f7f8fa',
      paper: '#fff',
    },
    text: {
      primary: '#1a237e',
      secondary: '#333',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontWeightBold: 900,
    h1: {
      fontWeight: 900,
      fontSize: '2.8em',
      color: '#1a6ed8',
      letterSpacing: 1,
    },
    h5: {
      fontWeight: 800,
      color: '#1a6ed8',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
          color: '#1a6ed8',
          borderBottom: '2px solid #e0e0e0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
