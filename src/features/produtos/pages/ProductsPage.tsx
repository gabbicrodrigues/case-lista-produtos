import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { searchProducts } from '../hooks/searchProducts';

import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductDrawer from '../components/ProductDrawer';
import Loading from '../../../shared/components/Loading';
import Error from '../../../shared/components/Error';

export default function ProductsPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { products, loading, error, retry, toggleStatus } = searchProducts();

    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const selectedProduct = products.find(
        product => product.id === selectedProductId
    ) || null;
    const [statusFilter, setStatusFilter] =
        useState<'todos' | 'ativo' | 'inativo'>('todos');
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesStatus =
        statusFilter === 'todos' || product.status === statusFilter;

        const matchesSearch =
        product.nome.toLowerCase().includes(search.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error onRetry={retry} />;
    }

    return (
        <Box
            px={isMobile ? 2 : 4}
            py={isMobile ? 2 : 3}
            maxWidth={900}
            mx="auto"
        >
        <Typography variant="h5" mb={2}>
            Produtos Financeiros
        </Typography>

        <ProductFilter
            status={statusFilter}
            search={search}
            onStatusChange={setStatusFilter}
            onSearchChange={setSearch}
        />

        <ProductList
            products={filteredProducts}
            onSelect={(product) => setSelectedProductId(product.id)}
        />

        <ProductDrawer
            product={selectedProduct}
            onClose={() => setSelectedProductId(null)}
            onToggleStatus={toggleStatus}
        />
        </Box>
    );
}