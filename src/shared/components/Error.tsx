import { Box, Button, Typography } from '@mui/material';

interface ErrorStateProps {
  onRetry: () => void;
}

export default function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <Box
      height="60vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={2}
    >
      <Typography variant="h6" mb={1}>
        Algo deu errado
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        Não foi possível carregar os produtos, tente novamente.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={onRetry}
      >
        Tentar novamente
      </Button>
    </Box>
  );
}
