export interface Produto {
    id: number;
    nome: string;
    tipo: string;
    status: 'ativo' | 'inativo';
    descricao: string;
    taxaJuros?: number;
    dataCriacao: string;
  }
  