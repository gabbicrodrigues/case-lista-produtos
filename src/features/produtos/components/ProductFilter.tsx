import { Box, Tabs, Tab, TextField } from '@mui/material';

interface ProductFilterProps {
  status: 'todos' | 'ativo' | 'inativo';
  search: string;
  onStatusChange: (status: 'todos' | 'ativo' | 'inativo') => void;
  onSearchChange: (value: string) => void;
}

export default function ProductFilter({
  status,
  search,
  onStatusChange,
  onSearchChange,
}: ProductFilterProps) {
  const handleTabChange = (_: React.SyntheticEvent, value: string) => {
    onStatusChange(value as 'todos' | 'ativo' | 'inativo');
  };

  return (
    <Box mb={2}>
      <TextField
        fullWidth
        size="small"
        label="Buscar produto"
        placeholder="Digite o nome do produto"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Tabs
        value={status}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="Todos" value="todos" />
        <Tab label="Ativos" value="ativo" />
        <Tab label="Inativos" value="inativo" />
      </Tabs>
    </Box>
  );
}
