import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { searchProducts } from '../hooks/searchProducts';
import { Produto } from '../../../types/Produto';

export default function ProductsPage() {
    const { products, loading, error, retry, toggleStatus } = searchProducts();
    const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
}