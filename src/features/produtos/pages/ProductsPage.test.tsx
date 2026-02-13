jest.mock('../../../data/produtos.json', () => {
  return [
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
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductsPage from './ProductsPage';

describe('ProductsPage', () => {
  it('filtra produtos pelo nome digitado', async () => {
    render(<ProductsPage />);
    
    await screen.findByText(/Cartão Platinum/i);
    
    const input = await screen.findByLabelText(/buscar produto/i);

    await userEvent.type(input, 'Platinum');

    expect(screen.getByText(/Cartão Platinum/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Empréstimo Pessoal/i)
    ).not.toBeInTheDocument();
  });

  it('altera status ao clicar no switch', async () => {
    render(<ProductsPage />);

    const card = await screen.findByText(/Cartão Platinum/i);

    await userEvent.click(card);

    const switchElement = await screen.findByLabelText(/produto ativo/i);

    expect(switchElement).toBeChecked();

    await userEvent.click(switchElement);

    expect(switchElement).not.toBeChecked();
  });
});
