import { Box, Card, CardContent, Skeleton } from '@mui/material';

const ITEMS_COUNT = 5;

export default function Loading() {
  return (
    <Box p={3}>
      {Array.from({ length: ITEMS_COUNT }).map((_, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{ mb: 1.5 }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box width="70%">
                <Skeleton variant="text" width="60%" height={24} />
                <Skeleton variant="text" width="40%" height={20} />
              </Box>

              <Skeleton variant="rounded" width={60} height={24} />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
