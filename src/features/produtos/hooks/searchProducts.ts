import { useEffect, useState } from 'react';
import type { Produto } from '../../../types/Produto';
import productsData from '../../../data/produtos.json'


export function searchProducts() {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    setError(false);

    setTimeout(() => {
      try {
        setProducts(productsData as Produto[]);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    }, 800);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleStatus = (id: number) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? {
              ...product,
              status: product.status === 'ativo' ? 'inativo' : 'ativo',
            }
          : product
      )
    );
  };


  return {
    products,
    loading,
    error,
    retry: fetchProducts,
    toggleStatus,
  };
}
