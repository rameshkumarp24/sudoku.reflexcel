import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a6ed8', // blue from logo
    },
    secondary: {
      main: '#8e2de2', // purple from logo
    },
    background: {
      default: '#f7f8fa',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontWeightBold: 700,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #1a6ed8 0%, #8e2de2 100%)',
        },
      },
    },
  },
});

export default theme;
