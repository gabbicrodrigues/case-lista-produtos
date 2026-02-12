import { Box, Typography } from '@mui/material';
import type { Produto } from '../../../types/Produto';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: Produto[];
  onSelect: (product: Produto) => void;
}

export default function ProductList({
  products,
  onSelect,
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Nenhum produto encontrado.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </Box>
  );
}
