import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6200',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2E2E2E',
      secondary: '#6E6E6E',
    },
  },

  typography: {
    fontFamily:
      'Roboto, Helvetica, Arial, sans-serif',

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },

    body2: {
      fontSize: '0.9rem',
    },
  },

  shape: {
    borderRadius: 10,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: '#FF6200',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#FF6200',
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
        },
      },
    },
  },
});

export default theme;
