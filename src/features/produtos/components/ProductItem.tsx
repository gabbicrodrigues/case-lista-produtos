import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import type { Produto } from '../../../types/Produto';

interface ProductItemProps {
  product: Produto;
  onSelect: (product: Produto) => void;
}

export default function ProductItem({ product, onSelect }: ProductItemProps) {
  const isActive = product.status === 'ativo';

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 1.5,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.03)',
        },
      }}
      onClick={() => onSelect(product)}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {product.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.tipo}
            </Typography>
          </Box>

          <Chip
            label={isActive ? 'Ativo' : 'Inativo'}
            color={isActive ? 'success' : 'default'}
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
}
