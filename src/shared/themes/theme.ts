import { createTheme } from "@mui/material/styles";

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
            'Roboto, Helvetica, sans-serif',
        h6: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '0.95rem',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;
