import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Switch,
  FormControlLabel,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import type { Produto } from '../../../types/Produto';

interface ProductDrawerProps {
  product: Produto | null;
  onClose: () => void;
  onToggleStatus: (id: number) => void;
}

export default function ProductDrawer({
  product,
  onClose,
  onToggleStatus,
}: ProductDrawerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const open = Boolean(product);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: isMobile ? '100%' : 400,
          p: 3,
        },
      }}
    >
      {product && (
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">
              Detalhes do Produto
            </Typography>

            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle1" fontWeight={600}>
            {product.nome}
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={2}>
            {product.tipo}
          </Typography>

          <Typography variant="body2" mb={2}>
            {product.descricao}
          </Typography>

          {product.taxaJuros && (
            <Typography variant="body2" mb={1}>
              <strong>Taxa de juros:</strong> {product.taxaJuros}%
            </Typography>
          )}

          <Typography variant="body2" mb={3}>
            <strong>Data de criação:</strong>{' '}
            {new Date(product.dataCriacao).toLocaleDateString('pt-BR')}
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={product.status === 'ativo'}
                onChange={() => onToggleStatus(product.id)}
                color="primary"
              />
            }
            label={
              product.status === 'ativo'
                ? 'Produto Ativo'
                : 'Produto Inativo'
            }
          />
        </Box>
      )}
    </Drawer>
  );
}
