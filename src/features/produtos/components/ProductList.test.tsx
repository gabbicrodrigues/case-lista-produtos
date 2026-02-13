import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductList from './ProductList';
import type { Produto } from '../../../types/Produto';

const mockProducts: Produto[] = [
  {
    id: 1,
    nome: 'Cartão Platinum',
    tipo: 'Cartão',
    status: 'ativo',
    descricao: 'Cartão com benefícios exclusivos.',
    taxaJuros: 12.5,
    dataCriacao: '2023-01-15',
  },
  {
    id: 2,
    nome: 'Empréstimo Pessoal',
    tipo: 'Crédito',
    status: 'inativo',
    descricao: 'Empréstimo com parcelas fixas.',
    taxaJuros: 3.2,
    dataCriacao: '2022-05-10',
  },
];

describe('ProductList', () => {
  it('renderiza os produtos recebidos', () => {
    render(
      <ProductList
        products={mockProducts}
        onSelect={jest.fn()}
      />
    );

    expect(screen.getByText(/Cartão Platinum/i)).toBeInTheDocument();
    expect(screen.getByText(/Empréstimo Pessoal/i)).toBeInTheDocument();
  });

  it('exibe mensagem quando não há produtos', () => {
    render(
      <ProductList
        products={[]}
        onSelect={jest.fn()}
      />
    );

    expect(
      screen.getByText(/nenhum produto encontrado/i)
    ).toBeInTheDocument();
  });

  it('chama onSelect ao clicar em um item', async () => {
    const mockOnSelect = jest.fn();

    render(
      <ProductList
        products={mockProducts}
        onSelect={mockOnSelect}
      />
    );

    await userEvent.click(screen.getByText(/Cartão Platinum/i));

    expect(mockOnSelect).toHaveBeenCalledWith(mockProducts[0]);
  });
});
