export interface Produto {
    id: string;
    nome: string;
    tipo: string;
    status: 'ativo' | 'inativo';
    descricao: string;
    taxaJuros?: number;
    dataCriacao: string;
  }
  